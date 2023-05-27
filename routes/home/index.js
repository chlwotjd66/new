"use strict"; //java 문법 준수

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home); 

router.get("/login", ctrl.login);

module.exports = router;