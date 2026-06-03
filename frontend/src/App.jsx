import { useEffect, useState } from "react";
import "./App.css";

const API_BASE = "http://localhost:5000";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [health, setHealth] = useState("checking");
  const [metrics, setMetrics] = useState({});
  const [notice, setNotice] = useState("");

  const fetchTasks = async () => {
    const res = await fetch(`${API_BASE}/api/tasks`);
    const data = await res.json();
    setTasks(data);
  };

  const checkHealth = async () => {
    try {
      const res = await fetch(`${API_BASE}/health`);
      const data = await res.json();
      setHealth(data.status);
    } catch {
      setHealth("offline");
    }
  };

  const fetchMetrics = async () => {
    try {
      const res = await fetch(`${API_BASE}/metrics`);
      const text = await res.text();

      const extract = (name) => {
        const line = text.split("\n").find((l) => l.startsWith(name + " "));
        return line ? Number(line.split(" ")[1]).toFixed(0) : "0";
      };

      setMetrics({
        requests: extract("app_requests_created"),
        created: extract("tasks_created_total"),
        deleted: extract("tasks_deleted_total"),
        active: extract("active_tasks_total"),
      });
    } catch {
      setMetrics({});
    }
  };

  const refreshAll = async () => {
    await checkHealth();
    await fetchTasks();
    await fetchMetrics();
  };

  useEffect(() => {
    refreshAll();
  }, []);

  const createTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return setNotice("Enter a task before submitting.");

    const res = await fetch(`${API_BASE}/api/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    if (res.ok) {
      setTitle("");
      setNotice("Task created successfully.");
      refreshAll();
    } else {
      setNotice("Task creation failed.");
    }
  };

  const toggleTask = async (id) => {
    await fetch(`${API_BASE}/api/tasks/${id}`, { method: "PATCH" });
    setNotice("Task status updated.");
    refreshAll();
  };

  const deleteTask = async (id) => {
    await fetch(`${API_BASE}/api/tasks/${id}`, { method: "DELETE" });
    setNotice("Task deleted successfully.");
    refreshAll();
  };

  const completed = tasks.filter((t) => t.status === "completed").length;
  const pending = tasks.length - completed;

  return (
    <main className="app">
      <section className="hero">
        <nav className="nav">
          <div className="brand">
            <div className="logo">TF</div>
            <div>
              <h1>TaskFlow Operations Center</h1>
              <p>DevOps-ready task platform with live API observability</p>
            </div>
          </div>

          <button className="health-btn" onClick={refreshAll}>
            Backend: {health}
          </button>
        </nav>

        <div className="hero-grid">
          <div>
            <span className="tag">Production DevOps Platform</span>
            <h2>Run tasks, track API activity, and monitor service health.</h2>
            <p>
              TaskFlow is a full-stack application connected to a Flask backend,
              instrumented with Prometheus metrics and visualized with Grafana.
            </p>

            <div className="actions">
              <button onClick={refreshAll}>Refresh Live Data</button>
              <a href={`${API_BASE}/metrics`} target="_blank" rel="noreferrer">
                Open Metrics
              </a>
              <a href="http://localhost:9090/targets" target="_blank" rel="noreferrer">
                Prometheus Targets
              </a>
            </div>
          </div>

          <div className="live-card">
            <p>Live Active Tasks</p>
            <h3>{tasks.length}</h3>
            <span>{completed} completed · {pending} pending</span>
          </div>
        </div>
      </section>

      <section className="metrics">
        <div><p>Total Tasks</p><h3>{tasks.length}</h3></div>
        <div><p>Pending</p><h3>{pending}</h3></div>
        <div><p>Completed</p><h3>{completed}</h3></div>
        <div><p>Tasks Created Metric</p><h3>{metrics.created || "0"} </h3></div>
        <div><p>Tasks Deleted Metric</p><h3>{metrics.deleted || "0"} </h3></div>
        <div><p>Active Tasks Metric</p><h3>{metrics.active || tasks.length}</h3></div>
      </section>

      <section className="workspace">
        <div className="panel">
          <h2>Create Operational Task</h2>
          <p>Every task created updates backend metrics for Prometheus and Grafana.</p>

          <form onSubmit={createTask}>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a production task"
            />
            <button>Create Task</button>
          </form>

          {notice && <div className="notice">{notice}</div>}

          <div className="quick-links">
            <a href="http://localhost:3000" target="_blank" rel="noreferrer">Grafana</a>
            <a href="http://localhost:9090" target="_blank" rel="noreferrer">Prometheus</a>
            <a href={`${API_BASE}/health`} target="_blank" rel="noreferrer">Health API</a>
          </div>
        </div>

        <div className="panel board">
          <div className="board-head">
            <div>
              <h2>Task Operations Board</h2>
              <p>All actions are connected to the backend API.</p>
            </div>
            <button onClick={refreshAll}>Refresh</button>
          </div>

          <div className="tasks">
            {tasks.map((task) => (
              <div className="task" key={task.id}>
                <div>
                  <h3>{task.title}</h3>
                  <span className={task.status === "completed" ? "done" : "pending"}>
                    {task.status}
                  </span>
                </div>
                <div className="task-actions">
                  <button onClick={() => toggleTask(task.id)}>
                    {task.status === "completed" ? "Reopen" : "Complete"}
                  </button>
                  <button className="delete" onClick={() => deleteTask(task.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;


