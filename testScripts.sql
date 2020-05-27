-- CREATE TABLE "Subjects" (
-- 	"idSubject"	INTEGER PRIMARY KEY AUTOINCREMENT,
-- 	"createdAt"	DATETIME NOT NULL,
-- 	"updatedAt"	DATETIME NOT NULL,
-- 	"subjectName"	VARCHAR(255),
-- 	"subjectUrl"	VARCHAR(255)
-- );


-- CREATE TABLE "Tests" (
-- 	"idTest"	INTEGER PRIMARY KEY AUTOINCREMENT,
-- 	"createdAt"	DATETIME NOT NULL,
-- 	"updatedAt"	DATETIME NOT NULL,
-- 	"testName"	VARCHAR(255),
-- 	"idSubject"	INTEGER NOT NULL,
-- 	"testUrl"	VARCHAR(255) NOT NULL,
-- 	FOREIGN KEY("idSubject") REFERENCES "Subjects"("idSubject") ON DELETE CASCADE
-- );

-- CREATE TABLE "Answers" (
-- 	"idAnswer"	INTEGER PRIMARY KEY AUTOINCREMENT,
-- 	"createdAt"	DATETIME NOT NULL,
-- 	"updatedAt"	DATETIME NOT NULL,
-- 	"textAnswer"	VARCHAR(255) NOT NULL,
-- 	"currentAnswer"	INTEGER NOT NULL,
-- 	"idQuestion"	INTEGER,
-- 	FOREIGN KEY("idQuestion") REFERENCES "Questions"("idQuestion") ON DELETE CASCADE
-- );


-- CREATE TABLE "Attempts" (
-- 	"idAttempt"	INTEGER PRIMARY KEY AUTOINCREMENT,
-- 	"createdAt"	DATETIME NOT NULL,
-- 	"updatedAt"	DATETIME NOT NULL,
-- 	"idUser"	INTEGER,
-- 	"idTest"	INTEGER,
-- 	"DateStart"	DATETIME NOT NULL,
-- 	"DateFinish"	DATETIME NOT NULL,
-- 	FOREIGN KEY("idUser") REFERENCES "Users"("idUser"),
-- 	FOREIGN KEY("idTest") REFERENCES "Tests"("idTest") ON DELETE CASCADE
-- );

-- CREATE TABLE "TestUserAnswers" (
-- 	"idTestUserAnswer"	INTEGER PRIMARY KEY AUTOINCREMENT,
-- 	"createdAt"	DATETIME NOT NULL,
-- 	"updatedAt"	DATETIME NOT NULL,
-- 	"idAttempt"	INTEGER,
-- 	"idQuestion"	INTEGER,
-- 	"idAnswer"	INTEGER,
-- 	FOREIGN KEY("idAttempt") REFERENCES "Attempts"("idAttempt") ON DELETE CASCADE,
-- 	FOREIGN KEY("idQuestion") REFERENCES "Questions"("idQuestion") ON DELETE CASCADE,
-- 	FOREIGN KEY("idAnswer") REFERENCES "Answers"("idAnswer") ON DELETE CASCADE
-- );


-- CREATE TABLE "Users" (
-- 	"idUser"	INTEGER PRIMARY KEY AUTOINCREMENT,
-- 	"createdAt"	DATETIME NOT NULL,
-- 	"updatedAt"	DATETIME NOT NULL,
-- 	"login"	VARCHAR(255),
-- 	"password"	VARCHAR(255) NOT NULL,
-- 	"email"	VARCHAR(255) NOT NULL,
-- 	"isAdmin"	INTEGER NOT NULL
-- );