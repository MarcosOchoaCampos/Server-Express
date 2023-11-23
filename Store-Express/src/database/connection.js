import sql from "mssql"
import {config} from "dotenv"

//buscando variables de entorno
config()


const dbSettings = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    server: process.env.SERVER,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
      }
}

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings)
        return pool
    } catch (error) {
        console.log(error)
    }
}

export {sql}