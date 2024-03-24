<template>
    <div class="checkbox">
        <label :for="id">
            <input type="checkbox" :id="id" v-model="isChecked" @change="handleChange" />
            <span>{{ label }}</span>
        </label>
        <Text variant="caption" v-if="error && showError" class="error-message" :text="error" />
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Text from '@/components/Text.vue';

interface CheckboxProps {
    id: string;
    label: string;
    isRequired: boolean;
    error: string;
}

const { id, label, isRequired, error } = defineProps<CheckboxProps>();

const emit = defineEmits(['update:modelValue', 'change']);

const isChecked = ref(false);

const handleChange = () => {
    emit('update:modelValue', isChecked.value);
    emit('change', isChecked.value);
};

const showError = computed(() => {
    return isRequired && !isChecked.value;
});
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/index';

.checkbox {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    label {
        display: flex;
        align-items: center;
        cursor: pointer;

        input {
            margin-right: 8px;
        }
    }

    .error-message {
        margin-top: 4px;
    }
}
</style>