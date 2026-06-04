import axios from 'axios';
import type { TicketResponse } from '../interfaces/Ticket';

const API_URL = 'http://localhost:8080/api/tickets';

export const getTickets = async (): Promise<TicketResponse[]> => {
    const response = await axios.get<TicketResponse[]>(API_URL);
    return response.data;
}