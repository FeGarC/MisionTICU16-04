import { connect } from "mongoose";

const ConexionDB = () => {
  // variables de configuración
  const urlConexion = String(process.env.DB_MONGO);
  connect(urlConexion)
    .then(() => {
      console.log("Conectado a", urlConexion);
    })
    .catch((elError) => {
      console.log("No se puede conectar a MONGO", elError);
    });
};

export default ConexionDB;
