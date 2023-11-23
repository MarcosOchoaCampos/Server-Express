import {config} from "dotenv"

config()

export default{
    port: process.env.PORT,
    secretKey: 'clave_secreta_para_jsonwebtoken'
}