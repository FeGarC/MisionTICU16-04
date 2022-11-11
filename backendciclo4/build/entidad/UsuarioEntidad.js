"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuarioEntidad {
    constructor(nom, pass, clave, fec, est, cod) {
        this.nombreUsuario = nom;
        this.correoUsuario = pass;
        this.claveUsuario = clave;
        this.fechaUsuario = fec;
        this.estadoUsuario = est;
        this.codPerfil = cod;
    }
}
exports.default = UsuarioEntidad;
