# Calls the build script
sh ./build.sh
# push first
docker login
docker push chadohta/491-apiserver

# ssh into docker container, run upgrade-server script
ssh -oStrictHostKeyChecking=no root@167.172.204.30 'bash -s' < ./upgrade-server.sh