node {
    def nodeHome = tool 'nodejs'
    env.PATH = "${nodeHome}/bin:${env.PATH}"

    stage('Checkout') {
        checkout([$class: 'GitSCM', branches: [[name: '*/master']],
                extensions: [
                    [$class: 'CloneOption', timeout: 60],
                ],
                submoduleCfg: [],
                userRemoteConfigs: [[credentialsId: 'jdlab_bitbucket', url: 'http://gitlab.jongdali.com/jdlab/deepch-design.git']]])
    }
    stage('Deploy') {
        sh '''
        docker-compose build
        docker-compose push
        docker service rm jdlab-deepch-design
        docker service create --replicas 1 --publish 9013:3000 --name jdlab-deepch-design --with-registry-auth jdlab.azurecr.io/deepch-design:dev
        '''
    }
}
