Campus Connect


Author

Roll No.| Name| GitHub Username
24ESKCS021| Aditya Raj| Aditya-0Raj

Live URL

https://devops-24eskcs021.onrender.com

Tech Stack

- Frontend: HTML, CSS, JavaScript
- Web Server: NGINX
- Containerization: Docker, Docker Compose
- CI/CD: GitHub Actions
- Deployment: Render
- Monitoring: Prometheus
- Orchestration: Kubernetes (Kind)

Features

- Displays campus-related content and events.
- Responsive frontend built with HTML, CSS, and JavaScript.
- Docker-based application containerization.
- Docker Compose configuration for local deployment.
- Automated checks through GitHub Actions.
- Prometheus monitoring configuration.
- Kubernetes deployment and service manifests.

Project Structure

Campus-Connect/
├── .github/
│   └── workflows/
│       └── ci.yml
├── css/
│   └── style.css
├── docs/
│   ├── deployment.png
│   ├── monitoring.png
│   └── kubernetes-pods.png
├── js/
│   └── script.js
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
├── monitoring/
│   ├── prometheus.yml
│   ├── docker-compose.yml
│   └── dashboard.md
├── tests/
├── Dockerfile
├── docker-compose.yml
├── Makefile
├── index.html
├── events.html
└── README.md

Prerequisites

Install the following tools to run the project locally:

- Git
- Docker Desktop
- A modern web browser
- Make, if you want to use the provided Makefile commands

Run Locally

Clone the repository:

git clone https://github.com/skit-devops-2026/devops-24ESKCS021.git
cd devops-24ESKCS021

Run the project using the Makefile:

make install
make test
make build
make run

If you want to run the website using Docker Compose instead:

docker compose up -d --build

Open the application in your browser:

http://localhost:8080

To stop the Docker Compose application:

docker compose down

Docker

Build the Docker image locally:

docker build -t campus-connect:1.0 .

Run the container:

docker run -d --name campus-connect -p 8080:80 campus-connect:1.0

Open:

http://localhost:8080

To stop and remove the container:

docker stop campus-connect
docker rm campus-connect

Monitoring with Prometheus

The monitoring configuration is available in the "monitoring/" directory.

Start the monitoring services using the provided Compose file:

docker compose -f monitoring/docker-compose.yml up -d

Prometheus local URL:

http://localhost:9090

Example Prometheus queries:

up{job="prometheus"}

count(up)

prometheus_tsdb_head_samples_appended_total

The "monitoring/dashboard.md" file contains additional information about the monitoring queries.

To stop the monitoring services:

docker compose -f monitoring/docker-compose.yml down

Kubernetes Deployment

The Kubernetes manifests are located in the "k8s/" directory.

Create a local Kind cluster if one does not already exist:

kind create cluster --name devops-cluster

Apply the deployment and service manifests:

kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

Check the deployment:

kubectl get deployments
kubectl get pods
kubectl get services

View the application logs:

kubectl logs deployment/campus-connect

The Kubernetes manifests define the application deployment and service.

CI/CD with GitHub Actions

The GitHub Actions workflow is located at:

".github/workflows/ci.yml"

The workflow runs automated project checks, including the configured hygiene checks, tests, and build steps.

Deployment Screenshots

The "docs/" directory contains screenshots related to deployment, monitoring, and Kubernetes.

- "docs/deployment.png"
- "docs/monitoring.png"
- "docs/kubernetes-pods.png"

Docker Image Registry

The Docker image can be built locally using the Docker commands above. A registry image should be added here after its publication has been verified.

Repository

Source code and project configuration:

https://github.com/skit-devops-2026/devops-24ESKCS021

License

This project is intended for academic and educational purposes.