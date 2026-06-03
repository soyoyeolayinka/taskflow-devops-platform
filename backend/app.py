from flask import Flask, jsonify, Response, request
from flask_cors import CORS
from prometheus_client import Counter, Gauge, generate_latest, CONTENT_TYPE_LATEST
import time

app = Flask(__name__)
CORS(app)

start_time = time.time()

tasks = [
    {"id": 1, "title": "Deploy frontend service", "status": "completed"},
    {"id": 2, "title": "Monitor backend API health", "status": "pending"},
    {"id": 3, "title": "Review Grafana dashboard alerts", "status": "pending"},
]

REQUEST_COUNT = Counter("app_requests_total", "Total backend API requests", ["endpoint", "method"])
TASK_CREATED = Counter("tasks_created_total", "Total tasks created")
TASK_DELETED = Counter("tasks_deleted_total", "Total tasks deleted")
TASK_COUNT = Gauge("active_tasks_total", "Current number of active tasks")


@app.before_request
def before_request():
    REQUEST_COUNT.labels(endpoint=request.path, method=request.method).inc()


@app.route("/health")
def health():
    return jsonify({"service": "opspulse-taskflow-api", "status": "healthy"}), 200


@app.route("/")
def home():
    return jsonify({
        "app": "OpsPulse TaskFlow",
        "message": "Production CI/CD fullstack app running successfully"
    }), 200


@app.route("/api/tasks", methods=["GET"])
def get_tasks():
    TASK_COUNT.set(len(tasks))
    return jsonify(tasks), 200


@app.route("/api/tasks", methods=["POST"])
def create_task():
    data = request.get_json() or {}
    title = data.get("title", "").strip()

    if not title:
        return jsonify({"error": "Task title is required"}), 400

    new_task = {
        "id": max([task["id"] for task in tasks], default=0) + 1,
        "title": title,
        "status": "pending"
    }

    tasks.append(new_task)
    TASK_CREATED.inc()
    TASK_COUNT.set(len(tasks))

    return jsonify(new_task), 201


@app.route("/api/tasks/<int:task_id>", methods=["PATCH"])
def update_task(task_id):
    for task in tasks:
        if task["id"] == task_id:
            task["status"] = "completed" if task["status"] == "pending" else "pending"
            return jsonify(task), 200

    return jsonify({"error": "Task not found"}), 404


@app.route("/api/tasks/<int:task_id>", methods=["DELETE"])
def delete_task(task_id):
    global tasks

    original_count = len(tasks)
    tasks = [task for task in tasks if task["id"] != task_id]

    if len(tasks) == original_count:
        return jsonify({"error": "Task not found"}), 404

    TASK_DELETED.inc()
    TASK_COUNT.set(len(tasks))

    return jsonify({"message": "Task deleted successfully"}), 200


@app.route("/metrics")
def metrics():
    TASK_COUNT.set(len(tasks))
    return Response(generate_latest(), mimetype=CONTENT_TYPE_LATEST)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
