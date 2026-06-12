import axios from 'axios';
import type { UsuarioResponse } from '../interfaces/Usuario';

const API_URL = 'http://localhost:8080/api/usuarios';

export const getUsuarios = async ():
    Promise<UsuarioResponse[]> => {
    const response = await axios.get<UsuarioResponse[]>
        (API_URL);

    return response.data;
}

export const getUsuarioByMail = async (mail: string): Promise<UsuarioResponse> => {
    const response = await axios.get<UsuarioResponse>(`${API_URL}/mail/${encodeURIComponent(mail)}`);

    return response.data;
}