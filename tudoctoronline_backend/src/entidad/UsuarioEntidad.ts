import PerfilEntidad from "./PerfilEntidad";

class UsuarioEntidad {
  public nombreUsuario: string;
  public correoUsuario: string;
  public claveUsuario: number;
  public fechaUsuario: Date;
  public estadoUsuario: number;
  public codPerfil: PerfilEntidad;

  constructor(
    nom: string,
    pass: string,
    clave: number,
    fec: Date,
    est: number,
    cod: PerfilEntidad
  ) {
    this.nombreUsuario = nom;
    this.correoUsuario = pass;
    this.claveUsuario = clave;
    this.fechaUsuario = fec;
    this.estadoUsuario = est;
    this.codPerfil = cod;
  }
}

export default UsuarioEntidad;
