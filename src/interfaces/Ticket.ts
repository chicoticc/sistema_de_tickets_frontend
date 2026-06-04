import type { UsuarioResponse } from "./Usuario";

export interface TicketResponse {
    id: number;
    titulo: string;
    descripcion: string;
    areaSolicitante: string;
    ubicacion: string;
    estado: string;
    prioridad: string;
    usuarioCreador: UsuarioResponse;
    tecnicoAsignado: UsuarioResponse | null;
}