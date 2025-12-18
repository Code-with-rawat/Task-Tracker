// It handles my all login routes logics

const express = require('express');
const routing =  express.Router();

const{login} = require("../Controllers/authentication")

routing.post("/login",login);

module.exports = routing;
