
Campus Connect

Author

Roll No.| Name| GitHub username
24ESKCS021| Aditya Raj| Aditya-0Raj

About

Campus Connect is a web-based platform that helps students discover campus events and stay informed about activities happening in their college.

Tech stack

- Frontend: HTML, CSS, JavaScript
- Web server: NGINX
- Containerization: Docker, Docker Compose
- CI: GitHub Actions
- Monitoring: Prometheus
- Deployment: Render
- Kubernetes: Kind

Running locally

make install
make run

Live URL

https://devops-24eskcs021.onrender.com

Docker

Build the Docker image:

docker build -t campus-connect:1.0 .

Run the application:

docker run -d --name campus-connect -p 8080:80 campus-connect:1.0

Open http://localhost:8080.

Monitoring

Prometheus configuration is available in the "monitoring/" directory.

Prometheus local URL: http://localhost:9090

Example queries:

up{job="prometheus"}

count(up)

Kubernetes Deployment

Kubernetes manifests are available in the "k8s/" directory:

- "deployment.yaml" — application deployment.
- "service.yaml" — application service.

Apply the manifests:

kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

Check pod status:

kubectl get pods

Project Structure

.
├── .github/
│   └── workflows/
│       └── ci.yml
├── css/
│   └── style.css
├── js/
├── tests/
├── scripts/
├── monitoring/
│   ├── prometheus.yml
│   ├── docker-compose.yml
│   └── dashboard.md
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
├── docs/
├── Dockerfile
├── docker-compose.yml
├── Makefile
├── index.html
├── events.html
└── README.md

CI

GitHub Actions workflow:

".github/workflows/ci.yml"

The workflow runs the project's configured hygiene checks, tests, and build commands.