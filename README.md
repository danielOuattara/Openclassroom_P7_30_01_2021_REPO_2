## Openclassroom_P7_30_01_2021

This is the last project of Openclassrooms training program: Web Developer. <br/>
The goal is to build a full stack application for socializing amongst co-workers
of the Groupomania firm.

Once the project cloned, please head to <b>/backend/package.json</b> or <b>/frontend/package.json</b> 
to get more informations. <br/>

### Database
The Database is MySQL, as a project requirement.
### Backend
The backend uses among others: Node.js, Nodemon, Express.js, Sequelize, sequelize-cli, Multer. <br/>
Sequelize is an ORM, with an API  used by Express.js in this project to interact with MySQL database. <br/>

### Frontend 
The frontend is built with Vue2, VueX, Vue Router.

### How to run ?

- first: <b>clone the project folder</b>
- open the project with your favorite code editor or IDE (like VS Code)


#### <u>Database</u> : to create the database and initialize all the tables

- install MySQL Server if necessary [+ client (optionnal) ]. Community Edition is enough.

-  <b>open a terminal windows and navigate to database/ folder in the project tree. </b>

- connect to MySQL server terminal using your credentiels. In general you can run :  <br/>

        mysql -h localhost -u [your_username] -p

  Visit links below for more help: <br/>
      <a>https://dev.mysql.com/doc/mysql-getting-started/en/</a> <br/> 
      <a>https://dev.mysql.com/doc/refman/8.0/en/connecting-disconnecting.html</a>

- next, confirm you password.

- once connected to MySQL, execute the following SQL command : <br/> 

      SOURCE groupomania_db_dev_daniel_ouattara.sql ; 

to create and initialize all tables.<br/> 

 - note: The filname <b>groupomania_db_dev_daniel_ouattara</b> is for convenience only, you can rename it to fillfull your needs.

- <b>notice</b>: initial admins credentials in <b>users</b> table: <br/> 
  <b> email: admin1@test.com, password: admin1@test.com</b>  <br/> 
  <b> email: admin2@test.com, password: admin2@test.com</b> <br/>
  You can user them to create other <b>Admin</b>
  in the frontend <b>AdminBoard</b>.


- check the database to confirm !

- done.

#### <u>Backend</u> : to configure, initialize and start the Expess.js backend server

- in <b>backend/</b> folder copy <b>env.txt</b> file and save it as <b>.env</b> file

- fill in this .env with your MySQL credentials. Only <b>your_user</b> and <b>your_password</b> need to be changed.

- if you change database file name (groupomania_db_dev_daniel_ouattara) then report it in the .env file.

- open the terminal in the <b>backend/</b> folder.

- run <b> npm install </b> to install all dependencies.
 
- run <b> npm run start</b> or <b>node server.js</b> OR <b>nodemon server.js</b> to start the server.

- you should get : <b> Connected to Groupomania:  localhost 4200 !</b>

- done.

#### <u>Frontend</u> : to initialize and start the Vue.js frontend 

- open the terminal in the <b> frontend/</b> folder

- run <b> npm install </b> to install all the dependencies

- run <b> npm run serve </b> to start vueJS development server.

- follow VueJS instructions on the terminal windows.

- done.

### Admin account creation in Frontend

- use  <b> 1_superRolePassword! </b> as the authorization password



### Any question ? 
