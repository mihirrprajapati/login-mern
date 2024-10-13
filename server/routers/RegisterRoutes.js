import express from "express";
import {
  getAll,
  addUser,
  isUserValid,
} from "../controllers/RegisterController.js";

const RegisterRouter = express.Router();

RegisterRouter.get("/get", getAll);

RegisterRouter.post("/addUser", addUser);

RegisterRouter.post("/login", isUserValid);

export default RegisterRouter;
