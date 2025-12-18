// It handles all my Tasking Routes Logics  
const express = require('express');
const routing = express.Router();

const { createTasking, getMyTasking, deleteTasking, updateTaskingStatus} = require('../Controllers/userTasking')

const auth = require("../Middleware/authorize")

routing.post("/",auth, createTasking);
routing.get("/",auth, getMyTasking);
routing.get("/:id",auth, updateTaskingStatus)
routing.get("/:id",auth, deleteTasking);

module.exports = routing;