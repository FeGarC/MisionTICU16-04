"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ConexionDB = () => {
    // variables de configuración
    const urlConexion = String(process.env.DB_MONGO);
    (0, mongoose_1.connect)(urlConexion)
        .then(() => {
        console.log("Conectado a", urlConexion);
    })
        .catch((elError) => {
        console.log("No se puede conectar a MONGO", elError);
    });
};
exports.default = ConexionDB;
