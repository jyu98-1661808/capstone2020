# # pull updated image
# docker pull magdanat/finaldatabase

# # remove old instance
# docker rm -f 441finaldb

# # export DSN="root:%s@tcp(mysql:3306)/db"
# export MYSQL_ROOT_PASSWORD=password

# # run new instance
# docker run -d --name 441finaldb --network=customNet -e MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD -e MYSQL_DATABASE=db magdanat/finaldatabase --default-authentication-plugin=mysql_native_password