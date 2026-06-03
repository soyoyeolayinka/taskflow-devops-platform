
Production CI/CD Fullstack Application

Project Overview

This project demonstrates a production-style DevOps workflow for deploying a containerized fullstack application to AWS using GitHub Actions CI/CD pipelines.

The application consists of:
TaskFlow DevOps Platform

Production-Ready Fullstack Application with CI/CD, Docker, Prometheus & Grafana

TaskFlow DevOps Platform is a production-style fullstack application built to demonstrate modern DevOps engineering practices including Git workflows, CI/CD automation, containerization, monitoring, observability, and deployment automation.

This project was designed as a portfolio-grade implementation of a real-world software delivery pipeline.

---

Project Overview

The platform consists of:

 (feat: add premium TaskFlow operations dashboard and update project documentation)

- React Frontend
- Flask Backend API
- Docker Containers
- Docker Compose
- GitHub Actions CI/CD
- AWS EC2 Deployment

The goal of this project was to implement a real-world software delivery pipeline that automatically validates code, enforces branch protection rules, and deploys changes to production infrastructure.
- Prometheus Monitoring
- Grafana Dashboards
- Custom Application Metrics
- Branch Protection Rules
- Pull Request Workflow

The goal was to implement a production-ready DevOps workflow that validates code quality, enforces repository governance, automates testing, and provides observability into application performance.
(feat: add premium TaskFlow operations dashboard and update project documentation)

---

Architecture

Developer
    │
    ▼
Feature Branch
    │
    ▼
Pull Request
    │
    ▼
GitHub Actions CI Pipeline
    │
    ├── Frontend Build Validation
    └── Backend Build Validation
    │
    ▼
Branch Protection Rules
GitHub Actions CI
    │
    ├── Frontend Validation
    ├── Backend Validation
    └── Repository Checks
(feat: add premium TaskFlow operations dashboard and update project documentation)
    │
    ▼
Merge to Main
    │
    ▼
GitHub Actions CD Pipeline
    │
    ▼
SSH Connection
    │
    ▼
AWS EC2 Instance
    │
    ▼
Git Pull
    │
    ▼
Docker Compose
    │
    ▼
React Frontend + Flask Backend

Docker Compose
    │
    ├── React Frontend
    ├── Flask Backend
    ├── Prometheus
    ├── Grafana
    └── Node Exporter
    │
    ▼
Observability Dashboard
 (feat: add premium TaskFlow operations dashboard and update project documentation)

---

Technology Stack
Cloud

- AWS EC2

CI/CD

- GitHub Actions

Containers

- Docker
- Docker Compose

Backend

- Python
- Flask

Frontend

- React
- Nginx

Version Control

- Git
- GitHub

Operating System

- Ubuntu Linux

---

Features Implemented

Continuous Integration (CI)

The CI pipeline automatically runs whenever code is pushed or a Pull Request is created.

Checks performed:

- Frontend build validation
- Backend build validation
- Pull request verification

---

Continuous Deployment (CD)

The deployment pipeline automatically executes after successful merges to the main branch.

Deployment steps:

1. GitHub Actions starts deployment workflow
2. Workflow connects to EC2 via SSH
3. Latest code is pulled from GitHub
4. Existing containers are stopped
5. Docker images are rebuilt
6. New containers are launched
7. Application becomes available immediately

---

Security Implementations

Branch Protection

Configured GitHub Branch Protection Rules:

- Require Pull Requests before merging
- Require successful status checks
- Prevent direct pushes to main branch

This ensures that all code changes pass validation before reaching production.

---

Deployment Workflow

git checkout -b feature/new-feature

git add .

git commit -m "New Feature"

git push origin feature/new-feature

Create Pull Request

CI Pipeline Runs

Merge Pull Request

CD Pipeline Runs

Application Deploys Automatically

---

Project Structure

project1-prod-cicd-app/
│
├── backend/
│   ├── app.py
│   ├── Dockerfile
│
├── frontend/
│   ├── src/
│   ├── Dockerfile
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
│
├── docker-compose.yml
│
└── README.md

---

DevOps Skills Demonstrated

- Linux Administration
- Git Workflow Management
- Feature Branch Strategy
- Pull Requests
- Branch Protection Rules
- GitHub Actions
- Continuous Integration
- Continuous Deployment
- Docker
- Docker Compose
- AWS EC2
- SSH Authentication
- Deployment Automation
- Production Troubleshooting
- Infrastructure Management

---

Validation

Backend API Validation

curl localhost:5000

Example Response

{
  "message": "DEPLOYMENT Triggered SUCCESSFULLY"
}

Frontend Validation

curl localhost

Returns React application HTML successfully.

Container Validation

docker ps

Shows:

- project1-frontend
- project1-backend

running successfully.

---

Lessons Learned

During this project, the following production engineering concepts were practiced:

- CI/CD pipeline design
- Secure SSH authentication
- GitHub Secrets management
- Branch protection enforcement
- Automated deployments
- Container orchestration with Docker Compose
- Linux server administration
- Cloud deployment troubleshooting
- Git workflow best practices

---

Future Improvements

- Terraform Infrastructure as Code
- Nginx Reverse Proxy
- SSL/TLS Certificates
- Monitoring with Prometheus
- Grafana Dashboards
- Alertmanager Notifications
- Kubernetes Deployment
- Blue-Green Deployments

---

Author

Soyoye Olayinka

GitHub:
https://github.com/Soyoyeolayinka

LinkedIn:
https://linkedin.com/in/olayinkasoyoye

Project Type:
Production-Style DevOps Portfolio Project
Frontend

- React
- Vite
- CSS3

Backend

- Flask
- Python

Containerization

- Docker
- Docker Compose

CI/CD

- GitHub Actions

Monitoring & Observability

- Prometheus
- Grafana
- Node Exporter

Version Control

- Git
- GitHub
(feat: add premium TaskFlow operations dashboard and update project documentation)

---

Features

Application Features

- Create Tasks
- Update Tasks
- Delete Tasks
- View Tasks
- Backend Health Check
- Metrics Endpoint
- Live Dashboard

DevOps Features

- Git Branching Strategy
- Pull Request Workflow
- Branch Protection Rules
- Automated CI Pipeline
- Dockerized Services
- Infrastructure Monitoring
- Application Monitoring
- Custom Metrics Collection

---

Custom Metrics

The backend exposes Prometheus metrics through:

/metrics

Custom metrics include:

tasks_created_total
tasks_deleted_total
active_tasks_total
app_requests_total

These metrics are visualized in Grafana dashboards.

---

Monitoring Stack

Prometheus

Prometheus scrapes metrics from:

Flask Backend
Node Exporter
Prometheus Server

Grafana

Grafana dashboards visualize:

- Active Tasks
- Tasks Created
- API Activity
- System Metrics
- Node Metrics
- Application Health

Node Exporter

Node Exporter provides:

- CPU Usage
- Memory Usage
- Filesystem Metrics
- System Health Data

---

Repository Workflow

The repository follows a professional Git workflow.

main
│
├── feature/laptop-cd-test
├── feature/frontend-enhancement
├── feature/backend-improvements
└── future-feature-branches

Workflow:

Create Branch
    │
    ▼
Make Changes
    │
    ▼
Commit
    │
    ▼
Push
    │
    ▼
Create Pull Request
    │
    ▼
CI Validation
    │
    ▼
Merge to Main

---

Running Locally

Clone the repository:

git clone <repository-url>

Navigate into project:

cd taskflow-devops-platform

Start containers:

docker compose up -d

Access services:

Frontend

http://localhost

Backend

http://localhost:5000

Prometheus

http://localhost:9090

Grafana

http://localhost:3000

Metrics Endpoint

http://localhost:5000/metrics

Health Endpoint

http://localhost:5000/health

---

CI/CD Pipeline

GitHub Actions performs:

- Repository Validation
- Frontend Validation
- Backend Validation
- Automated Checks
- Pull Request Verification

This ensures only validated code reaches the main branch.

---

Key DevOps Skills Demonstrated

- Git Workflow Management
- Branch Protection
- Pull Requests
- CI/CD Automation
- Docker Containerization
- Docker Compose Orchestration
- Monitoring & Observability
- Prometheus Metrics Collection
- Grafana Dashboarding
- Application Health Monitoring
- Production-Style Deployment Practices

---

Future Enhancements

- Kubernetes Deployment
- ArgoCD GitOps Integration
- Helm Charts
- Terraform Infrastructure
- Loki Log Aggregation
- Promtail Log Shipping
- Alertmanager Notifications
- AWS Deployment
- EKS Integration

---

Learning Outcomes

Through this project the following DevOps concepts were implemented:

- End-to-End CI/CD
- Containerized Applications
- Infrastructure Monitoring
- Application Observability
- Automated Validation Pipelines
- Repository Governance
- Production-Ready Development Workflow

---

Author

Olayinka Soyoye

DevOps Engineer

GitHub:
https://github.com/soyoyeolayinka

LinkedIn:
https://www.linkedin.com/in/olayinkasoyoye

---

Project Status

✅ Completed

Production-ready DevOps portfolio project demonstrating CI/CD, Docker, Prometheus, Grafana, custom metrics, and modern software delivery practices.
