/*1. Query to find second highest salary of Employee:*/
SELECT MAX(salary) From salaries WHERE salary < ( SELECT Max(salary) FROM salaries);

/*2. Query to find Max Salary from each department:*/
SELECT a.dept_no, Max(salary), c.dept_name FROM dept_emp a, salaries b, departments c WHERE a.dept_no=c.dept_no AND a.emp_no=b.emp_no;

/*3. Query to find Avg Salary from each department:*/
SELECT a.dept_no, Avg(salary), c.dept_name FROM dept_emp a, salaries b, departments c WHERE a.dept_no=c.dept_no AND a.emp_no=b.emp_no;

/*4. Query to find all the employee whose salary is more than the avg for his dept:*/
SELECT emp_no, salary FROM salaries WHERE salary > (SELECT Avg(salary) FROM salaries);

/*5. Query to print the name of distinct employee whose DOB is between 01/01/1960 to 31/12/1975:*/
SELECT DISTINCT first_name FROM employees WHERE birth_date BETWEEN "1980-01-01" AND "1990-12-31";

/*6. Query find number of employees according to gender whose DOB is between 01/01/1960 to 31/12/1975:*/
SELECT COUNT(*), gender from employees WHERE birth_date BETWEEN "1992-01-01" AND "1990-01-01" GROUP BY gender;

/*7. Query to find name of employee whose name Start with ‘A’:*/
SELECT * FROM employees WHERE first_name like 'A%';

/*8. Query to find all managers for the dept from the company whose salary is in top 2:*/
SELECT a.first_name, max(salary), c.dept_name FROM employees a, dept_manager b, departments c, salaries d WHERE b.emp_no=d.emp_no AND b.dept_no=c.dept_no;

/*9. Query to find employees hired between 1990 and 1995:*/
SELECT DISTINCT first_name FROM employees WHERE hire_date BETWEEN "1990-01-01" AND "1995-01-01";

/*10. All the employees who had more than three titles and list their current title:*/
SELECT a.first_name, b.title FROM employees a, titles b WHERE (SELECT COUNT(*)>3 FROM titles WHERE b.emp_no=b.emp_no) LIMIT 30;

/*11. Employee details: Name, Title, Department:*/
SELECT a.first_name, b.title, c.dept_name FROM employees a, titles b, departments c WHERE a.emp_no=b.emp_no LIMIT 30;

/*12. Average salaries across departments for last 5 years:*/
SELECT a.dept_no, Avg(salary), c.dept_name, b.from_date FROM dept_emp a, salaries b, departments c WHERE a.dept_no=c.dept_no AND a.emp_no=b.emp_no AND b.from_date BETWEEN "1990-01-01" AND "1995-01-01";