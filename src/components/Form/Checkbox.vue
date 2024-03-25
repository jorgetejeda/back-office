<template>
    <div class="checkbox">
        <label :for="id">
            <input type="checkbox" :id="id" v-model="isChecked" @change="handleChange" />
            <Text variant="caption" :text="label" />
        </label>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Text from '@/components/Text.vue';

interface CheckboxProps {
    id: string;
    label: string;
    isRequired: boolean;
}

const { id, label, isRequired } = defineProps<CheckboxProps>();

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
            margin-top: 2px;
        }
    }

}
</style>