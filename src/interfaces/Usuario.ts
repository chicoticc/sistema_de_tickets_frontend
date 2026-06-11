export type RolUsuario = 'USUARIO' | 'TECNICO' | 'ADMIN' | 'ADMINISTRADOR';
export interface UsuarioResponse {
    id: number;
    nombres: string;
    apellidos: string;
    email: string;
    rol: RolUsuario;
}