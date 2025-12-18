const express=require("express");
const routes = express.Router();

const { validateRegistration } = require("../middlewares/validaton.middlewares");

const {login,register}= require("../controllers/auth.controller");

routes.post("/register", validateRegistration, register);
routes.post("/login", login);
module.exports= routes;