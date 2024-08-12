# Database 

in old time,Before database we are using the file based System (using folder to save the data,excel and word etc). Example like school or university class records

we have problem in file based system:
 - data redundancy (same data store again and again) 
 - data inconsistency (ek file update hua pr duri main ni hua)
 - integration of different data source.
 - security

In order to prevent all these we have DATABASE.

Q. What is the database?
  - it is a collection of related data.(example university data like konsa clg, konsa branch , konsa placment cell)
  - helps to solve the problem of Redundancy or Inconsistency.
  - easy app integration.


### DBMS (database mangement system)
 - it is like a layer btw our stored database and our app.
 - it provides with software to process queries and software to excess data, update data and insert data
 - Example of dbms: mysql, pgsql,sqlite(all arre under Strcuture Query Language)

 There are different type of dbms system like document , table,document and etc

- RDBMS
 - in realtional database mangement system, we store our data in the form of table
 - Table represent the collection of entity.
 - clounms represent the properties of the entity.
 - rows represent the actual data of entity


- DataTypes in Database
 - 


Q. Difference between SQL and mySQL?
 - SQL set of rules standard that define a way how to create a table and data .whereas mysql is a one way to do that and follow those rule


INSERT INTO student (rollno,name,class,section,percentage) VALUES(3,'Gopal Tiwari',11,"C",722222220.6551111);

(3,'Gopal Tiwari',11,"C",722222220.6551111)