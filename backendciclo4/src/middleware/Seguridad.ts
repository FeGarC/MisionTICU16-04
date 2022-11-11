import jwt from "jsonwebtoken";
import { Request, Response, NextFunction} from "express";

class Seguridad{
public validar (req:Request,res:Response,next:NextFunction){
    if (req.headers.authorization) {
        try {
            const miLlave=String(process.env.SECRETA);
            const tokenEntregado=req.headers.authorization?.split(" ")[1] as string;
            const misDatos=jwt.verify(tokenEntregado,miLlave);
            req.body.datosUsuario=misDatos;
            next();
        } catch (error) {
            res.status(401).json({respuesta:"Credencial inválida"})
        }
    } else {
        res.status(401).json({respuesta:"No puedes entrar"})
    }
};
};

const seguridad= new Seguridad();
export default seguridad;