export type RolUsuario = 'USUARIO' | 'TECNICO' | 'ADMINISTRADOR';
export interface UsuarioResponse {
    id: number;
    nombres: string;
    apellidos: string;
    email: string;
    rol: RolUsuario;
}