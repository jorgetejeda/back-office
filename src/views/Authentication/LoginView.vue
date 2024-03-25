<template>
    <Authentication title="Bienvenido a Back Office"
        subtitle="Por favor, ingrese su usuario y contraseña para iniciar sesión">
        <Debug :data="form" />
        <form @submit.prevent="onSubmit" class="mt-3">
            <Input v-model="form.usernameOrEmail" @blur="validateField('usernameOrEmail')" type="text"
                :isRequired="true" placeholder="Ingrese su usuario o correo" appendInnerIcon="email" />
            <Password v-model="form.password" @blur="validateField('password')" :isRequired="true"
                placeholder="Ingrese su contraseña" :forgotPassword="true" forgotPasswordLink="/forgot-password" />
            <Checkbox v-model="rememberMe" id="rememberMe" label="Recordarme mi contraseña" :isRequired="true"
                :error="''" />
            <Button component="button" type="submit" text="Iniciar Sesión" variant="primary" :loading="loading"
                customClass="w-100 mt-3" />
        </form>

        <div class="mt-3 d-flex gap-2">
            <Text variant="caption" text="¿Aún no tienes una cuenta?" />
            <Button component="link" to="/register" text="Regístrate" variant="text" />
        </div>
    </Authentication>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

// @services
import { axiosService, handleResponse, type ServerResponse } from '@/utilities/axios-services';

// @components
import Authentication from '@/layouts/Authentication.vue';
import Button from '@/components/Button.vue';
import Text from '@/components/Text.vue';
import Input from '@/components/Form/Input.vue';
import Password from '@/components/Form/Password.vue';
import Checkbox from '@/components/Form/Checkbox.vue';
import Debug from '@/components/Debug.vue';

interface Form {
    usernameOrEmail: string;
    password: string;
}

const router = useRouter();

const loading = ref(false);
const rememberMe = ref(false);
const form: Form = reactive({
    usernameOrEmail: '',
    password: '',
});

const required = (v: string) => !!v || 'Este campo es requerido';

const validateField = (fieldName: keyof Form) => {
    console.log(fieldName, form[fieldName], !form[fieldName])
    if (!form[fieldName]) {
        console.log(`El campo ${fieldName} es requerido`);
    }
};

const onSubmit = async () => {
    const isValid = Object.values(form).every(x => !!x);
    if (!isValid) {
        console.log('Debes completar el formulario');
        return;
    }
    // rememberMe.value && rememberMeOnLocal();
    loading.value = true;
    try {
        const data = await axiosService.post("/login", form);
        const response = handleResponse<ServerResponse>(data);
        if (response.success) {
            router.push('/home');
        }
        console.log('Formulario enviado', form);
    } catch (error) {
        console.log('Error', error);
        // popupAlert.show = true;
        // popupAlert.color = 'error';
        // popupAlert.message = error.message;
    }
    loading.value = false;
};
</script>

<style lang="scss"></style>
