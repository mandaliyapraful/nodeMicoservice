what we will  se
[1] create a base docker image
[2] build a simple micro-service
[3] RUn our micro-service inside a container
[4] create a docker image from an existing container
[5] publish our image in docker hub

Steps 
[1] install docker
[2] docker run -i -t ubuntu ./bin/bash
[3] cat >installNode.sh
        apt-get update
        apt-get install --yes nodejs
        apt-get install --yes nodejs-legacy
        apt-get install npm
[4]