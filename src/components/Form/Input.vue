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
.input {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    font-family: var(--font-family);

    .label {
        font-size: 1rem;
        color: var(--text-info-color);
        margin-bottom: 0.5rem;
    }

    .input-group {
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--border-color);
        transition: 0.2s ease-out;

        .input-field {
            padding: 0.5rem 0;
            border: none;
            font-size: 1rem;
            flex: 1;
            outline: none;
            background-color: transparent;
            font-weight: 400;
            font-family: var(--font-family);

            &::placeholder {
                color: lightgray;
            }

            &:focus {
                border-color: var(--primary-color);
            }
        }

        .inner-icon {
            color: var(--text-value-color);
            transition: 0.2s ease-out;
            margin-left: 0.5rem;
        }
    }

    .error-message {
        color: var(--danger-color);
        font-size: 0.8rem;
        padding-top: 8px;
    }
}
</style>