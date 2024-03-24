<template>
    <div class="input">
        <label class="label" :for="label" v-if="label">{{ label }}</label>
        <div class="input-group">
            <input class="input-field" v-model="inputValue" :type="inputType" :placeholder="placeholder"
                @input="handleInput" @blur="handleBlur" @focus="handleFocus" :required="isRequired" />
            <Icon :icon="togglePasswordIcon" class="inner-icon" @click="toggleVisibility" />
        </div>
        <Text variant="caption" v-if="error && showError" class="error-message" :text="error" />
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
// @components
import Text from '@/components/Text.vue';
import Icon from '@/components/Icon.vue';

interface InputProps {
    label?: string;
    placeholder: string;
    isRequired: boolean;
    error: string;
}

const { label, placeholder, isRequired, error } = defineProps<InputProps>();

const emit = defineEmits(['update:modelValue', 'focus', 'blur']);

const inputValue = ref('');
const inputType = ref('password');

const handleInput = (event: Event) => {
    inputValue.value = (event.target as HTMLInputElement).value;
    emit('update:modelValue', inputValue.value);
};

const handleBlur = (event: FocusEvent) => {
    emit('blur', event);
    validateInput()
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
    return isRequired && !inputValue.value;
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