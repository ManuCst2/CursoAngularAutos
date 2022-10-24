export interface Autos {
}
export interface Marcas {
    id: number;
    nombre: string;
    clase: string;
}
export interface Clases {
    cve_clase: number;
    txt_clase: string;
    status: number;
    fecha_actualiza: string;
    id_usuario: number;
}
export interface Lineas {
    id: number;
    nombre: string;
    modelo: string;
    color: string;
}
