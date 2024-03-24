<template>
    <div class="input">
        <label class="label" :for="label" v-if="label">{{ label }}</label>
        <div class="input-group">
            <input class="input-field" v-model="inputValue" :type="inputType" :placeholder="placeholder"
                @input="handleInput" @blur="handleBlur" @focus="handleFocus" :required="isRequired" />
            <Icon v-if="appendInnerIcon" :icon="appendInnerIcon" class="inner-icon" />
        </div>
        <Text variant="caption" v-if="error" class="error-message" :text="error" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// @components
import Text from '@/components/Text.vue';
import Icon from '@/components/Icon.vue';

interface InputProps {
    label?: string;
    placeholder: string;
    type?: 'text' | 'number';
    isRequired: boolean;
    error: string;
    appendInnerIcon?: string;
}

const { type = 'text', label, placeholder, isRequired, error, appendInnerIcon } = defineProps<InputProps>();

const emit = defineEmits(['update:modelValue', 'focus', 'blur']);

const inputValue = ref('');
const inputType = ref(type);

const handleInput = (event: Event) => {
    inputValue.value = (event.target as HTMLInputElement).value;
    emit('update:modelValue', inputValue.value);
};

const handleBlur = (event: FocusEvent) => {
    emit('blur', event);
};

const handleFocus = (event: FocusEvent) => {
    emit('focus', event);
};

</script>

<style lang="scss" scoped>
@import 'src/assets/styles/index';
@import 'src/assets/styles/inputs';
</style>