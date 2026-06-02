Production CI/CD Fullstack Application

Project Overview

This project demonstrates a production-style DevOps workflow for deploying a containerized fullstack application to AWS using GitHub Actions CI/CD pipelines.

The application consists of:

- React Frontend
- Flask Backend API
- Docker Containers
- Docker Compose
- GitHub Actions CI/CD
- AWS EC2 Deployment

The goal of this project was to implement a real-world software delivery pipeline that automatically validates code, enforces branch protection rules, and deploys changes to production infrastructure.

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

