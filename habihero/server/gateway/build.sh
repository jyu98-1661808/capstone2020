# build the go executable for linux
GOOS=linux go build

# build docker container
docker build -t chadohta/491-apiserver .

go clean