<template>
  <Dropdown
    v-model="locale"
    :options="localeList"
    option-label="label"
    option-value="value"
    class="mr-4"
  />
</template>

<script setup lang="ts">
import Dropdown from 'primevue/dropdown';
import { useI18n } from 'vue-i18n';
import { I18nLocale } from '@/helpers';

const { locale } = useI18n({ useScope: 'global' });

const localeList: Array<{ label: String; value: I18nLocale }> = [
  { label: 'English', value: 'en' },
  { label: 'Français', value: 'fr' },
  { label: 'العربية', value: 'ar' },
  { label: 'Español', value: 'es' },
];
</script>
<style lang="scss" scoped>
.p-dropdown {
  border: none;
  padding: 0 1.5em;
  :deep(.p-dropdown-trigger) {
    display: none;
  }
  :deep(.p-dropdown-label) {
    color: $tenant-ui-link-color;
  }
}
</style>
