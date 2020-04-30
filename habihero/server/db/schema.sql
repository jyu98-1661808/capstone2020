-- Student Model
CREATE TABLE IF NOT EXISTS Students (
    StudentID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    Email VARCHAR(255), -- constraint for email (?),
    StudentPassword VARCHAR(16) -- constraint?
);

CREATE TABLE IF NOT EXISTS StudentPersonalDetails (
    SPDetailsID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    StudentID INT,
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID)
);

-- Teachers Model
CREATE TABLE IF NOT EXISTS Teachers (
    TeacherID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR (255),
    LastName VARCHAR(255),
    UserName VARCHAR(255),
    Email VARCHAR(255),
    TeacherPassword VARCHAR(255),
    ProfilePicture VARCHAR(255
);

-- Classrooms Model
CREATE TABLE IF NOT EXISTS Classrooms (
    ClassroomID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- ClassCode (?)
    TeacherID INT,
    TotalProgress INT, --?
    TotalHabiCoins INT, --?
    FOREIGN KEY (TeacherID) REFERENCES Teachers(TeacherID)
);

CREATE TABLE IF NOT EXISTS Enrollment ( 
    EnrollmentID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    StudentID INT,
    ClassroomID INT,
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    FOREIGN KEY (ClassroomID) REFERENCES Classrooms(ClassroomID)
);

CREATE TABLE IF NOT EXISTS StudentClassDetails (
    SCDetailsID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    EnrollmentID INT,
    CourseProgress INT,
    CourseHabiCoins INT,
    FOREIGN KEY (EnrollmentID) REFERENCES Enrollment(EnrollmentID)
);

CREATE TABLE IF NOT EXISTS Lessons ( 
    LessonID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
);

CREATE TABLE IF NOT EXISTS Reports (
    ReportID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
);



