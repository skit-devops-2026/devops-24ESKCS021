# Campus Connect

## Author

| **Roll No.** | **Name** | **GitHub username** |
| ------------ | -------- | ------------------- |
| 24ESKCS021 | Aditya Raj | Aditya-0Raj |

## About

Campus Connect is a web-based platform that helps students discover campus events and stay informed about activities happening in their college.

## Tech stack

- Frontend: React, HTML, CSS, JavaScript
- Backend: None
- Database: None

## Running locally

```bash
make install
make run
```

## Live URL

https://devops-24eskcs021.onrender.com

## Docker Image

Build the Docker image locally:

```bash
docker build -t campus-connect:1.0 .
```

Run the container:

```bash
docker run -d --name campus-connect -p 8080:80 campus-connect:1.0
```

## Monitoring

Prometheus configuration and dashboard files are stored in the `monitoring/` directory.

Prometheus URL: http://localhost:9090

## Kubernetes Deployment

Kubernetes manifests are available in the `k8s/` directory:

- `deployment.yaml` — application deployment.
- `service.yaml` — application service.

## Project Structure

```text
.
├── index.html
├── events.html
├── clubs.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── tests/
│   └── test_site.sh
├── scripts/
│   └── hygiene.sh
├── monitoring/
│   ├── dashboard.json
│   ├── dashboard.md
│   ├── docker-compose.yml
│   └── prometheus.yml
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
├── docs/
│   ├── deployment.png
│   ├── kubernetes-pods.png
│   └── monitoring.png
├── .github/
│   └── workflows/
│       └── ci.yml
├── Dockerfile
├── docker-compose.yml
├── Jenkinsfile
├── Makefile
├── package.json
├── package-lock.json
├── eslint.config.js
└── vite.config.js
```

## Run with Docker Compose

```bash
docker compose up -d --build
```

Application: http://localhost:8080

Stop the services:

```bash
docker compose down
```

## CI

GitHub Actions runs repository hygiene checks and the project's test and build commands on pushes and pull requests.