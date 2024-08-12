SELECT user from mysql.user;
// to see the list of user in the mysql.

DROP USER <user_Name>;
// to delete the all the preivelges of the user;

CREATE DATABASE <name>;
// to create a new database

DROP DATABASE <database_name>;
// to delete the database that u created.

SHOW DATABASES;
// to show all the databases available in your system.

USE <database_name>;
// to select a particular database to run the queries.

SHOW TABLES;
// to list out all the tables of particular selected db.

CREATE TABLE <table_name> (
    <column_name_1>[datatype] <constaints>,
    <column_name_2>[datatype],
    ....,
    ....
);
// to create a new table in a particular db.

DESC <table_name>;
// to describle or see what inside the table

INSERT into <table_name> (col1,col2,col3, ...) VALUES (val1,val2,val3, ...);

SELECT <column_name> from <table_name>;
// to get a specific column data from the table;
// use * in the place of name to get all the data from all the cloumns;



WHERE - to filter the data from the table
LIKE caluse - LIKE condition is used to perform pattern matching to find the correct result. deafult escape character is "/"


Symbol	Description
%	Represents zero or more characters
_	Represents a single character
[]	Represents any single character within the brackets *
^	Represents any character not in the brackets *
-	Represents any single character within the specified range *
{}	Represents any escaped character **



SELECT  <column_name_1>, <column_name_2>  FROM <table_name> WHERE <column_name> LIKE "___2";

UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;


(19, "Samantha", 87),
(21, "Julia", 96),
(11, "Britney", 95),
(32, "Kristeen", 100),
(12, "Dyana", 55),
(13, "Jenny", 66),
(14, "Christene", 88),
(15, "Meera", 24),
(16, "Priya", 76),
(17, "Priyanka", 77),
(18, "Paige", 74),
(19, "Jane" ,64),
(21, "Belvet" ,78),
(31, "Scarlet", 80),
(41, "Salma" ,81),
(51, "Amanda", 34),
(61, "Heraldo", 94),
(71, "Stuart" ,99),
(81, "Aamina" ,77),
(76, "Amina" ,89),
(91, "Vivek" ,84),
(17, "Evil" ,79),
(16, "Devil", 76),
(34, "Fanny", 75),
(38, "Danny", 75)
"
INSERT INTO STUDENT  (ROLLNO,NAME,MARK) VALUES (19, Samantha, 87);