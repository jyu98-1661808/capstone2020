
-- -- Users Model
-- CREATE TABLE IF NOT EXISTS Users (
--     UserID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     UserName VARCHAR(255)
-- );

-- -- Messages Model
-- CREATE TABLE IF NOT EXISTS Messages (
--     MessageID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     UserID INT,
--     FOREIGN KEY (UserID) references Users(UserID),
--     MessageBody VARCHAR(128)
-- );