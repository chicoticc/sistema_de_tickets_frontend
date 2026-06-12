<template>
<main class="view-container login-container">
        <section class="login-card">
            <h1>Sistema de Tickets</h1>
            <p>Bienvenido al sistema de de soporte técnico del Liceo Bicentenario Politécnico de Villarrica. Ingresa con tu correo institucional.</p>

            <form class="login-form" @submit.prevent="iniciarSesion">
                <label for="correo">Correo institucional</label>

                <input
                    id="correo"
                    v-model="correo"
                    type="email"
                    placeholder="example@educacionvillarrica.cl"
                />

                <button type="submit" :disabled="cargando">
                    {{ cargando ? 'Ingresando...' : 'Ingresar' }}
                </button>

                <p v-if="error" class="error-message">
                    {{ error }}
                </p>
            </form>
            <p>Acceso exclusivo para cuentas institucionales.</p>
        </section>
    </main>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {getUsuarioByMail} from '../services/usuarioService';
import type {UsuarioResponse} from '../interfaces/Usuario';

const router = useRouter();

const correo = ref('');
const cargando = ref(false);
const error = ref('');


const limpiarError = () => {
    error.value = '';
}

const validarCorreo = (): boolean => {
    if (!correo.value) {
        error.value = 'El correo es obligatorio';
        return false;
    }
    return true;
}

const redirectByRol = (usuario: UsuarioResponse) => {
    if (usuario.rol === 'USUARIO') {
        router.push('/usuario');
        return;
    }

    if (usuario.rol === 'ADMINISTRADOR') {
        router.push('/admin')
        return;
    }

    if (usuario.rol === 'TECNICO') {
        router.push('/tecnico');
        return;
    }
}

const iniciarSesion = async () => {
    limpiarError();

    if (!validarCorreo()) {
        return;
    }

    try {
        cargando.value = true;
        const usuario = await getUsuarioByMail(correo.value.trim());
        redirectByRol(usuario);
    } catch (e) {
        error.value = 'No se encontró un usuario asociado a ese correo';
    } finally {
        cargando.value = false;
    }
}

</script>