import { Usuario } from './Usuario';

export interface Persona {
     identificador? : string;
     nombre : string;
     apellidos : string;
     numeroIdentificacion : string;
     email : string;
     tipoIdentificacion : string; 
     fechaCreacion? : Date | string;
     identificacionCompleta? : string;
     nombreCompleto? : string;
     user?: string;
     password?: string;
}