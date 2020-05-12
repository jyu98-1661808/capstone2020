# Calls the build script
sh ./build.sh
# push first
docker login
docker push chadohta/491-database

# need to change root IP address to new digital ocean droplet
ssh -oStrictHostKeyChecking=no root@167.172.204.30 'bash -s' < ./upgrade-database.sh