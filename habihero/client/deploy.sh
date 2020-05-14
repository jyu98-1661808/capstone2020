  
# Calls the build script
sh ./build.sh
# push first
docker login
docker push chadohta/491-client

# need to change root IP address to new digital ocean droplet
ssh -oStrictHostKeyChecking=no root@157.245.238.228 'bash -s' < ./upgrade-client.sh