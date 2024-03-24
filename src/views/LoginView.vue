<template>
    <Authentication title="Bienvenido a Back Office"
        subtitle="Por favor, ingrese su usuario y contraseña para iniciar sesión">
        <form @submit.prevent="onSubmit">
            <Input v-model="form.usernameOrEmail" @blur="validateField('usernameOrEmail')" type="text"
                :isRequired="true" placeholder="Enter your username or email"
                :error="(required(form.usernameOrEmail) ? 'Este campo es requerido' : '').toString()"
                appendInnerIcon="email" />
            <Password v-model="form.password" @blur="validateField('password')" :isRequired="true"
                placeholder="Enter your username or email"
                :error="(required(form.password) ? 'Este campo es requerido' : '').toString()" />
            <div class="form-group">
                <input type="checkbox" id="rememberMe" v-model="rememberMe" />
                <label for="rememberMe">Recordarme</label>
            </div>
            <Button type="submit" text="Iniciar Sesión" variant="primary" :loading="loading" class="w-100 mt-3" />
        </form>
    </Authentication>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

// @components
import Authentication from '@/layouts/Authentication.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Form/Input.vue';
import Password from '@/components/Form/Password.vue';

// @interfaces
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

// 

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
        //     router.push('/dashboard');
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
