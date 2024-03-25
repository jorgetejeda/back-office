<template>
    <Authentication title="Registro" subtitle="Crea una cuenta para acceder a nuestro servicio">
        <Debug :data="form" />
        <form @submit.prevent="onSubmit" class="mt-3">

            <Input v-model="form.name" @blur="validateField('name')" type="text" :isRequired="true"
                placeholder="Ingrese su usuario o correo" appendInnerIcon="badge" />

            <Input v-model="form.email" @blur="validateField('email')" type="email" :isRequired="true"
                placeholder="Email" appendInnerIcon="email" />

            <Input v-model="form.userName" @blur="validateField('userName')" type="text" :isRequired="true"
                placeholder="Nombre de usuario" appendInnerIcon="person" />

            <Password v-model="form.password" @blur="validateField('password')" :isRequired="true"
                placeholder="Ingrese su contraseña" />

            <Password v-model="form.confirmPassword" @blur="validateField('confirmPassword')" :isRequired="true"
                placeholder="Confirme su contraseña" />

            <Checkbox v-model="form.terms" id="terms" label="Acepto los términos y condiciones" :isRequired="true"
                :error="''" />

            <Button component="button" type="submit" text="Registrame" variant="primary" :loading="loading"
                customClass="w-100 mt-3" />
        </form>

        <div class="mt-3 d-flex gap-2">
            <Text variant="caption" text="¿Ya tienes una cuenta?" />
            <Button component="link" to="/" text="Inicia sesión" variant="text" />
        </div>
    </Authentication>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

// @components
import Authentication from '@/layouts/Authentication.vue';
import Button from '@/components/Button.vue';
import Text from '@/components/Text.vue';
import Input from '@/components/Form/Input.vue';
import Password from '@/components/Form/Password.vue';
import Checkbox from '@/components/Form/Checkbox.vue';
import Debug from '@/components/Debug.vue';

interface RegisterForm {
    name: string;
    email: string;
    userName: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
}

const router = useRouter();

const loading = ref(false);
const form: RegisterForm = reactive({
    name: '',
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
    terms: false,
});

const required = (v: string) => !!v || 'Este campo es requerido';

const validateField = (fieldName: keyof RegisterForm) => {
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
        // const data = await axiosService.post("/login", form);
        // const response = handleResponse<ServerResponse>(data);
        // if (response.success) {
        router.push('/dashboard');
        // }
        console.log('Formulario enviado', form);
    } catch (error) {
        // popupAlert.show = true;
        // popupAlert.color = 'error';
        // popupAlert.message = error.message;
    }
    loading.value = false;
};
</script>

<style lang="scss"></style>
