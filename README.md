## Openclassroom_P7_30_01_2021

This is the last project from Openclassrooms training program: Web Developer. <br/>
The goal here is to built a full stack application for socializing amongst co-workers
of the Groupomania firm.

### Database 
The Database is MySQL, as a project requirement
### Backend
The backend uses among others: Node.js, Nodemon, Express.js, Sequelize, sequelize-cli, Multer. <br/>
Sequelize is an ORM, an API used here by Express.js to interact with MySQL database.  <br/> 
Nodemon is used to simplify the Express.js server multiple restart during the development.
Sequelize-cli could be needed.

### Frontend 
The frontend is built with Vue2, VueX, Vue Router.

### How to run ?

- first: <b>clone the project folder.</b>
#### Database
- install MySQL Server if necessary [+ client (optionnal) ]. Community Edition is enough.

- connect to MySQL server terminal using your credentiels.

  Generally you can run <b> mysql -h localhost -u [your_username] -p </b> <br/>

  Visit: <br/>
      <a>https://dev.mysql.com/doc/mysql-getting-started/en/</a>  OR <br/> 
      <a>https://dev.mysql.com/doc/refman/8.0/en/connecting-disconnecting.html</a> for more help.

 - next, confirm you password.

 - once connected, execute the following SQL command : <br/> 

          SOURCE \[path_to...]\groupomania_db_dev_daniel_ouattara.sql ; 

      to create and initialize all tables <br/> 

      note: <b>[path_to...]</b> is the path to <b>groupomania_db_dev_daniel_ouattara.sql</b> file <br/>

      in Windows OS it could be: <b>C:\Users\DBO\Documents\projet7\groupomania_db_dev_daniel_ouattara.sql</b> <br/>

      note: The filname <b>groupomania_db_dev_daniel_ouattara</b> is for convenience only, you can rename it to fillfull your needs.

 - notice: in <b>users</b> table, 2 initial <b>Admin</b> users are provided. <br/> You can user them to create other <b>Admin</b>
  in the frontend <b>AdminBoard</b>.
 - initial admins credentials : <br/> <b> email: admin1@test.com, password: admin1@test.com</b>  <br/> <b> email: admin2@test.com, password: admin2@test.com</b>
 - done.

#### Backend

- in <b>backend/</b> folder copy <b>env.txt</b> file and save it as <b>.env</b> file

- fill in this .env with your MySQL credentials. Only <b>your_user</b> and <b>your_password</b> need to be changed.

- if you change database file name (groupomania_db_dev_daniel_ouattara) then report it in the .env file.

- open the terminal in the <b>backend</b> folder

- run <b> npm install </b> to install all dependencies
 
- run <b> npm run start</b> to start the server

- done

#### Frontend
- go to the <b> frontend</b> folder
- run <b> npm install </b> to install all the dependencies
- run <b> npm run serve </b> to start vueJS development server.
- follow VueJS instructions on the terminal windows
- done

### Admin account creation in Frontend
- use  <b> 1_superRolePassword! </b> as authorization password

### Any question ? 
