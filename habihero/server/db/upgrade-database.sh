# pull updated image
docker pull chadohta/491-database

# remove old instance
docker rm -f user-database

# export DSN="root:%s@tcp(mysql:3306)/db"
export MYSQL_ROOT_PASSWORD=greybox491

# run new instance
docker run -d --name user-database --network=customNet -e MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD -e MYSQL_DATABASE=db chadohta/491-database --default-authentication-plugin=mysql_native_password

# run this locally
# docker run -d -p 3306:3306 --name 441sqldb -e MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD -e MYSQL_DATABASE=Users chadohta/mysql441