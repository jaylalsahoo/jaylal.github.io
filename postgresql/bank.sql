--Build schema for a Bank Management Application


--CREATE DATABASE bank will create a database in the name of bank
CREATE DATABASE bank; 

--the below command is used to create table 
CREATE TABLE customers(customer_id serial,first_name VARCHAR(100),last_name VARCHAR(100),dob DATE,pan VARCHAR(100),phone VARCHAR(10),email VARCHAR(100),address TEXT,CONSTRAINT pk_customer PRIMARY KEY(customer_id));

CREATE TABLE branch(branch_id serial,location VARCHAR(100) NOT NULL,ifsc_code VARCHAR(100) NOT NULL, CONSTRAINT pk_branch PRIMARY KEY(branch_id));

CREATE TABLE account(account_id serial,customer_id VARCHAR(100) REFERENCES customers(customer_id)  ,branch_id VARCHAR(100) REFERENCES branch(branch_id) ,account_type VARCHAR(10) NOT NULL, CONSTRAINT pk_account PRIMARY KEY(account_id));

CREATE TABLE transactions(transaction_id serial,transaction_type VARCHAR(10) NOT NULL,transaction_source VARCHAR(100) NOT NULL,amount INTEGER,transaction_time TIMESTAMP NOT NULL,CONSTRAINT pk_transaction PRIMARY KEY(transaction_id));


/*
Write SQL queries for inserting data in all of the above tables.
*/

INSERT INTO customers(customer_id,first_name,last_name,dob,pan,phone,email,address) VALUES('101','jaylal','sahoo','2019-05-29','JAYLAL123456789','9040492162','jaylalsahoo@gmail.com','SAMBALPUR');
INSERT INTO customers(customer_id,first_name,last_name,dob,pan,phone,email,address) VALUES('102','rahul','agrawal','2019-10-29','RAHUL123456789','9040411162','rahul@gmail.com','BARGARH');

INSERT INTO branch(branch_id,location,ifsc_code) VALUES('10001','SAMBALPUR','SBI1234567890');
INSERT INTO branch(branch_id,location,ifsc_code) VALUES('10002','BARGARH','SBI1234567891');

INSERT INTO account(account_id,customer_id,branch_id,account_type) VALUES('1111','101','10001','SAVING');
INSERT INTO account(account_id,customer_id,branch_id,account_type) VALUES('2222','102','10002','CURRENT');

INSERT INTO transactions(transaction_id,transaction_type,transaction_source,amount,transaction_time) VALUES('111000','','atm','3000','2019-09-15 19:10:25');
/*
Write SQL queries for returning data from all of the above tables.
*/

SELECT * FROM customers;
SELECT * FROM branch;
SELECT * FROM account;
SELECT * FROM transactions;


/*
Write an SQL query for returning all the customers who has an account in the SAMBALPUR branch.
*/

SELECT * FROM customers AS c INNER JOIN account AS a ON c.customer_id=a.customer_id INNER JOIN branch AS b ON a.branch_id=b.branch_id  WHERE b.location='SAMBALPUR';

/*
Write an SQL query that returns customers who have both savings accounts.
*/

SELECT * FROM customers AS c INNER JOIN account AS a ON c.customer_id=a.customer_id INNER JOIN branch AS b ON a.branch_id=b.branch_id WHERE a.account_type='SAVING';

