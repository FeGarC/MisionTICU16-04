"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuarioControlador_1 = __importDefault(require("../controlador/UsuarioControlador"));
class UsuarioRuta {
    constructor() {
        this.rutaAPI = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaAPI.get('/todos', UsuarioControlador_1.default.consulta);
        this.rutaAPI.get('/todos/:codPerfil', UsuarioControlador_1.default.consultPerfil);
        this.rutaAPI.get('/cantxperfil/:codPerfil', UsuarioControlador_1.default.cantidadEnPerfil);
        this.rutaAPI.post('/crear', UsuarioControlador_1.default.crear);
        this.rutaAPI.post('/iniciar', UsuarioControlador_1.default.iniciar);
        this.rutaAPI.delete('/eliminar/:codUsuario', UsuarioControlador_1.default.eliminar);
        this.rutaAPI.put('/actualizar/:codUsuario', UsuarioControlador_1.default.actualizar);
    }
}
;
const usuarioRuta = new UsuarioRuta();
exports.default = usuarioRuta.rutaAPI;
