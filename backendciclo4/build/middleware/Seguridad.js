"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Seguridad {
    validar(req, res, next) {
        var _a;
        if (req.headers.authorization) {
            try {
                const miLlave = String(process.env.SECRETA);
                const tokenEntregado = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
                const misDatos = jsonwebtoken_1.default.verify(tokenEntregado, miLlave);
                req.body.datosUsuario = misDatos;
                next();
            }
            catch (error) {
                res.status(401).json({ respuesta: "Credencial inválida" });
            }
        }
        else {
            res.status(401).json({ respuesta: "No puedes entrar" });
        }
    }
    ;
}
;
const seguridad = new Seguridad();
exports.default = seguridad;
