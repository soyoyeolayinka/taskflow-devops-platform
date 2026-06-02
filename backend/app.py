from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/health")
def health():
    return jsonify({
        "status": "healthy",
        "service": "backend-api"
    }), 200

@app.route("/")
def home():
    return jsonify({
        "message": "Production CI/CD Backend API is running"
    }), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
