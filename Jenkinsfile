node {
	stage('Clonning client - Git Hub'){
		git branch: 'main', url: 'https://github.com/AngelManuel1995/blog-node-microservices.git'
	}

	stage('hello-world-pipeline'){
		sh "echo hello-world > testing-jenkins.txt"
		sh "echo 'Este es mi primer pipeline - ' >> testing-jenkins.txt"  
	}
}