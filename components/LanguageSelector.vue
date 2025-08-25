<template>
  <ASelect
    :value="locale"
    class="w-24 sm:w-36 jp-select"
    @change="changeLocale"
    placement="bottomRight"
    :getPopupContainer="(triggerNode) => triggerNode.parentNode"
  >
    <ASelectOption value="zh-TW">
      <span class="hidden sm:inline">🇹🇼 繁體中文</span>
      <span class="sm:hidden">🇹🇼 繁中</span>
    </ASelectOption>
    <ASelectOption value="zh-CN">
      <span class="hidden sm:inline">🇨🇳 简体中文</span>
      <span class="sm:hidden">🇨🇳 簡中</span>
    </ASelectOption>
    <ASelectOption value="en">
      <span class="hidden sm:inline">🇺🇸 English</span>
      <span class="sm:hidden">🇺🇸 EN</span>
    </ASelectOption>
  </ASelect>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()

const changeLocale = (newLocale: string) => {
  setLocale(newLocale)
}
</script>

<style scoped>
/* Japanese game style for language selector */
:deep(.jp-select .ant-select-selector) {
  border: 2px solid rgba(255, 255, 255, 0.3) !important;
  border-radius: 8px !important;
  background: rgba(255, 255, 255, 0.2) !important;
  backdrop-filter: blur(10px) !important;
  color: white !important;
  font-weight: 500 !important;
  transition: all 0.3s ease !important;
  font-size: 14px !important;
}

/* Mobile optimizations */
@media (max-width: 640px) {
  :deep(.jp-select .ant-select-selector) {
    padding: 2px 8px !important;
    font-size: 12px !important;
    min-height: 32px !important;
  }
  
  :deep(.jp-select .ant-select-selection-item) {
    font-size: 12px !important;
  }
}

:deep(.jp-select .ant-select-selector:hover) {
  border-color: rgba(255, 255, 255, 0.5) !important;
  background: rgba(255, 255, 255, 0.3) !important;
}

:deep(.jp-select.ant-select-focused .ant-select-selector) {
  border-color: rgba(255, 255, 255, 0.7) !important;
  background: rgba(255, 255, 255, 0.4) !important;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2) !important;
}

:deep(.jp-select .ant-select-selection-item) {
  color: white !important;
  font-weight: 500 !important;
}

:deep(.jp-select .ant-select-arrow) {
  color: white !important;
}

/* Dropdown styling */
:global(.ant-select-dropdown) {
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(10px) !important;
  border-radius: 8px !important;
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.2) !important;
  border: 2px solid rgba(99, 102, 241, 0.1) !important;
}

:global(.ant-select-item) {
  color: #4338ca !important;
  font-weight: 500 !important;
  transition: all 0.2s ease !important;
}

:global(.ant-select-item:hover) {
  background: rgba(99, 102, 241, 0.1) !important;
}

:global(.ant-select-item-option-selected) {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2)) !important;
  color: #6366f1 !important;
  font-weight: 600 !important;
}
</style>