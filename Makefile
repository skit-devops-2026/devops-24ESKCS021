.PHONY: install test build run docker-build docker-up

install:
	@echo "No external dependencies required for this static web project"

test:
	@test -f index.html
	@test -f events.html
	@test -f css/style.css
	@test -f js/script.js
	bash tests/test_site.sh
	@echo "All required project files are present"

build:
	@echo "Static web project build completed successfully"

run:
	@echo "Open index.html in a browser to run the project"

docker-build:
	@echo "Docker build will be configured in the containerization module"

docker-up:
	docker compose up --build

