<template>
    <div class="input">
        <label class="label" :for="label" v-if="label">{{ label }}</label>
        <div class="input-group" :class="{ 'error': showError }">
            <input class="input-field" v-model="inputValue" :type="inputType" :placeholder="placeholder"
                @input="handleInput" @blur="handleBlur" @focus="handleFocus" :required="isRequired" />
            <Icon :icon="togglePasswordIcon" class="inner-icon" :class="{ 'error': showError }"
                @click="toggleVisibility" />
        </div>
        <div class="hint">
            <Text variant="caption" class="error-message" :text="showError ? 'Este campo es requerido' : ''" />
            <Button v-if="forgotPassword" component="link" text="¿Olvidaste tu contraseña?" variant="text"
                :to="forgotPasswordLink" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

// @components
import Text from '@/components/Text.vue';
import Icon from '@/components/Icon.vue';
import Button from '../Button.vue';

interface InputProps {
    label?: string;
    placeholder: string;
    isRequired: boolean;
    forgotPassword?: boolean;
    forgotPasswordLink?: string;
}

const { label, placeholder, isRequired, forgotPassword, forgotPasswordLink } = defineProps<InputProps>();

const emit = defineEmits(['update:modelValue', 'focus', 'blur']);

const inputValue = ref('');
const inputType = ref('password');
const blur = ref(false);

const handleInput = (event: Event) => {
    inputValue.value = (event.target as HTMLInputElement).value;
    emit('update:modelValue', inputValue.value);
};

const handleBlur = (event: FocusEvent) => {
    emit('blur', event);
    blur.value = true;
};

const handleFocus = (event: FocusEvent) => {
    emit('focus', event);
};

const toggleVisibility = () => {
    inputType.value = inputType.value === 'text' ? 'password' : 'text';
};

const togglePasswordIcon = computed(() => {
    return inputType.value === 'password' ? 'visibility' : 'visibility_off'
});

const showError = computed(() => {
    return blur.value && isRequired && !inputValue.value;
});

const validateInput = () => {
    if (isRequired && !inputValue.value) {
        console.log('info')
    }
};

</script>

<style lang="scss" scoped>
@import 'src/assets/styles/index';
@import 'src/assets/styles/inputs';
</style>