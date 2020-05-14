docker pull chadohta/491-client
docker rm -f 491-client

export TLSCERT=/etc/letsencrypt/live/habihero.com/fullchain.pem
export TLSKEY=/etc/letsencrypt/live/habihero.com/privkey.pem

docker run --name 491-client -d -p 80:80 -p 443:443 -v ~/etc/letsencrypt:/etc/letsencrypt:ro -e TLSCERT=$TLSCERT -e TLSKEY=$TLSKEY chadohta/491-client