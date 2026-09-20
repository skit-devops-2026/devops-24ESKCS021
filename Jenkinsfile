pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'echo Static web project build completed successfully'
            }
        }

        stage('Test') {
            steps {
                bat 'if not exist index.html exit /b 1'
                bat 'if not exist events.html exit /b 1'
                bat 'if not exist css\\style.css exit /b 1'
                bat 'if not exist js\\script.js exit /b 1'
                bat 'echo All required project files are present'
            }
        }
    }
}
