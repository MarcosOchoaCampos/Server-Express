import { getConnection, sql } from "../database/index";
import { querys } from "../database/querysToken.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config.js";

//registro
export const appToken = async (req, res, next) => {
  res.render("appToken", {
    title: "Token",
  });
  next();
};

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const pool = await getConnection();
    const result = await pool
      .request()
      .input("email", sql.VarChar, email)
      .input("pass", sql.VarChar, hashedPassword)
      .query(querys.addUser);

    //GENERAR CONSULTA PARA CONOCER SU ID DEL USUARIO REGISTRADO
    const insertedId = result.recordset[0].id;

    // Generar un token de acceso
    const accessToken = jwt.sign({ userId: insertedId }, config.secretKey);

    // Enviar una respuesta al cliente
    res.status(201).json({ accessToken });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al registrar el usuario" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Verificar si el email existe en nuestra BD
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("email", sql.VarChar, email)
      .input("pass", sql.VarChar, password)
      .query(querys.loginUser);

    if (!result) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      result.recordset[0].pass
    );

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const insertedId = result.recordset[0].id;

    // Generar un token de acceso
    const accessToken = jwt.sign({ userId: insertedId }, config.secretKey);

    res.status(200).json({ accessToken });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ha ocurrido un error al iniciar sesión" });
  }
};
