import { getConnection, sql } from "../database/index";
import { querys } from "../database/querysToken.js";
import jwt from "jsonwebtoken";
import config from "../config.js";

const authenticateToken = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    const accessToken =
      authorizationHeader && authorizationHeader.split(" ")[1];

    if (!accessToken) {
      return res
        .status(401)
        .json({ message: "No se ha proporcionado un token de acceso" });
    }

    const { userId } = jwt.verify(accessToken, config.secretKey);

    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, userId)
      .query(querys.userById);


    res.status(200).json({result});
    
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        message: "Ha ocurrido un error al autenticar el token de acceso",
      });
  }
};

export default authenticateToken;
