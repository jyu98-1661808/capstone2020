docker pull chadohta/491-apiserver

docker rm -f 491-gateway

export TLSCERT=/etc/letsencrypt/live/api.habihero.com/fullchain.pem
export TLSKEY=/etc/letsencrypt/live/api.habihero.com/privkey.pem
export MYSQL_ROOT_PASSWORD=greybox491
export DSN="root:greybox491@tcp(167.172.204.30:3306)/db"

docker run --network customNet -d --name 491-gateway -p 443:443 -v /etc/letsencrypt:/etc/letsencrypt:ro -e TLSCERT=$TLSCERT -e TLSKEY=$TLSKEY -e MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD chadohta/491-apiserver
