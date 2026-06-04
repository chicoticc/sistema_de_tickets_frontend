<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { TicketResponse } from './interfaces/Ticket'
import { getTickets } from './services/ticketService'

const tickets = ref<TicketResponse[]>([])
const cargando = ref<boolean>(true)
const error = ref<string>('')

const cargarTickets = async () => {
  try {
    tickets.value = await getTickets()
  } catch (e) {
    error.value = 'No se pudieron cargar los tickets desde el backend.'
    console.error(e)
  } finally {
    cargando.value = false
  }
}

onMounted(() => {
  cargarTickets()
})
</script>

<template>
  <main class="app-container">
    <h1>Sistema de Tickets</h1>
    <p>Listado de tickets registrados en el backend.</p>

    <section v-if="cargando">
      <p>Cargando tickets...</p>
    </section>

    <section v-else-if="error">
      <p class="error">{{ error }}</p>
    </section>

    <section v-else>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Área</th>
            <th>Ubicación</th>
            <th>Estado</th>
            <th>Prioridad</th>
            <th>Usuario creador</th>
            <th>Técnico asignado</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="ticket in tickets" :key="ticket.id">
            <td>{{ ticket.id }}</td>
            <td>{{ ticket.titulo }}</td>
            <td>{{ ticket.areaSolicitante }}</td>
            <td>{{ ticket.ubicacion }}</td>
            <td>{{ ticket.estado }}</td>
            <td>{{ ticket.prioridad }}</td>
            <td>
              {{ ticket.usuarioCreador.nombres }}
              {{ ticket.usuarioCreador.apellidos }}
            </td>
            <td>
              <span v-if="ticket.tecnicoAsignado">
                {{ ticket.tecnicoAsignado.nombres }}
                {{ ticket.tecnicoAsignado.apellidos }}
              </span>
              <span v-else>Sin asignar</span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<style scoped>
.app-container {
  padding: 2rem;
  font-family: Arial, sans-serif;
}

h1 {
  margin-bottom: 0.5rem;
}

table {
  width: 100%;
  margin-top: 1.5rem;
  border-collapse: collapse;
  background-color: white;
}

th,
td {
  padding: 0.75rem;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #eeeeee;
}

.error {
  color: red;
  font-weight: bold;
}
</style>