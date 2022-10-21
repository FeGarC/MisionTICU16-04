import { response, Response } from "express";
import PerfilEsquema from "../esquema/PerfilEsquema";

class PerfilDao {
  protected static async obtenerPerfiles(res: Response): Promise<any> {
    const informacion = await PerfilEsquema.find();
    res.status(200).json(informacion);
  }

  protected static async crearPerfil(
    parametros: any,
    res: Response
  ): Promise<any> {
    const existe = await PerfilEsquema.findOne(parametros);
    if (existe) {
      res.status(400).json({ respuesta: "El perfil ya existe" });
    } else {
      const objPerfil = new PerfilEsquema(parametros);
      objPerfil.save((miError, miObjeto) => {
        if (miError) {
          res.status(400).json({ respuesta: "No se puede grabar perfil" });
        } else {
          res.status(200).json({
            respuesta: "El perfil se grabó con éxito",
            codigo: miObjeto._id,
          });
        }
      });
    }
  }

  protected static async eliminarPerfil(
    identificador: any,
    res: Response
  ): Promise<any> {
    const existe = await PerfilEsquema.findById(identificador);
    if (existe) {
      PerfilEsquema.findByIdAndDelete(
        identificador,
        (miError: any, miObjeto: any) => {
          if (miError) {
            res.status(400).json({ respuesta: "No se puede eliminar perfil" });
          } else {
            res.status(200).json({
              respuesta: "El perfil se eliminó con éxito",
              eliminado: miObjeto,
            });
          }
        }
      );
    } else {
      res.status(400).json({ respuesta: "El perfil no existe" });
    }
  }

  protected static async actualizarPerfil(
    identificador: any,
    parametros: any,
    res: Response
  ): Promise<any> {
    const existe = await PerfilEsquema.findById(identificador);
    if (existe) {
      PerfilEsquema.findByIdAndUpdate(
        { _id: identificador },
        {$set:parametros},
        (miError: any, miObjeto: any) => {
          if (miError) {
            res.status(400).json({ respuesta: "No se puede actualizar perfil" });
          } else {
            res.status(200).json({
              respuesta: "El perfil se actualizó con éxito",
              antiguo: miObjeto,
              actualizado:parametros
            });
          }
        }
      );
    } else {
      res.status(400).json({ respuesta: "El perfil no existe" });
    }
  }
}

export default PerfilDao;
