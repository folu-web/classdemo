pipeline {
    agent any

    tools {
        nodejs "node"
    }

    stages {
        stage('Gitclone') {
            steps {
                // Get some code from a GitHub repository
                git branch: 'main', credentialsId: 'ssh_git', url: 'https://github.com/Henry-UN/node-re.git'
            }
        }
        stage('NPM Install') {
          steps {
            sh 'npm install'
            //sh '<<Build Command>>'
          }
        }
        
        stage('Docker Build') {
          steps {
            sh 'sudo docker stop node-example'
            sh 'sudo docker rm node-example'
            sh 'sudo docker build -t henryun1/node-example .'
            sh 'sudo docker login -u henryun1 -p dckr_pat_NIbj7eXTdEXqdBy5YpavZVtSijA'
            sh 'sudo docker push henryun1/node-example:latest'
            sh 'sudo docker rmi henryun1/node-example:latest'
            //sh '<<Build Command>>'
          }
        }
        
        stage('Run application') {
          steps {
            sh 'sudo docker run --name node-example -d -p 5500:3200 henryun1/node-example:latest'
          }
        }
    }  
}
