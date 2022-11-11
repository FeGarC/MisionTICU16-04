import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import express from "express";
import ConexionDB from "./ConexionDB";
import perfilRuta from "../ruta/PerfilRuta";
import usuarioRuta from "../ruta/UsuarioRuta"
import seguridad from "../middleware/Seguridad";

class Servidor {
  public app: express.Application;
  constructor() {
    this.app=express();
    dotenv.config({ path: "variables.env" });
    ConexionDB();
    this.configuracionBasica();
    this.cargarRutas();
  }
  public configuracionBasica() {
    this.app.set("PORT", process.env.PORT);
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json({ limit: "100MB" }));
    this.app.use(express.urlencoded({ extended: true }));
  }

  public cargarRutas() {
    this.app.use("/api/perfiles", seguridad.validar, perfilRuta);
    this.app.use("/api/usuarios",usuarioRuta);
  }

  public iniciarApi(){
    this.app.listen(this.app.get("PORT"),()=>{
      console.log("Api funcionando en el puerto 3123",this.app.get("PORT"));
    });
  };

}

export default Servidor;
