#  Task Tracker  App (MERN Stack)
<!--  Setup Steps-->


  # Backend Setup 

 # Open terminal and move to backend server folder
  cd Server 
  npm install

# create a .env  file inside  the server folder 
PORT=8000
MONGO_URI=mongodb+srv://rawathimanshu2005:himanshu123@cluster0.lx4zmcj.mongodb.net/?appName=Cluster0
JWT_SECRET=himanshukey123

# start the backend Server
npm start

# Backend server will run on
http://localhost:8000


# Frontend Setup

 # Open terminal and move to Client folder
 cd client
 npm install 
 
 #  Start the React application
 npm start

# Frontend run on 
http://localhost:5173

<!-- Environment Variables -->

PORT
Defines the port on which the backend server runs.
Port : 8000

MONGO_URI
MongoDB connection string used to connect the application to the database.
mongodb+srv://rawathimanshu2005:himanshu123@cluster0.lx4zmcj.mongodb.net/?appName=Cluster0


JWT_SECRET
Secret key used to generate and verify JWT tokens.
himanshukey123


<!--  APIs Explanation -->
This project uses REST APIs to handle user authentication and task management. The authentication APIs are used to register new users and allow existing users to log in. When a user logs in successfully, the backend generates a JWT token and sends it to the frontend. This token is required to access protected APIs.

# Authentication APIs
POST /api/auth/register  
 New user creates

POST /api/auth/login  
 User login and retuns JWT 

---

# Task APIs

POST /api/tasking  
 Create New tasks

GET /api/tasking  
Gets all task logged-in user

PUT /api/tasking/:id  
It updates Task status By id

DELETE /api/tasking/:id  
It deletes the Task By id
