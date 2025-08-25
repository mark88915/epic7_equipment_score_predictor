<template>
  <div>
    <h2 class="text-xl md:text-2xl font-bold text-jp-primary-700 mb-4 md:mb-6 flex items-center">
      ⚔️ {{ t('form.title') }}
    </h2>
    <AForm
      :model="attributes"
      layout="vertical"
      class="jp-form"
    >
      <ARow :gutter="16">
        <ACol :xs="24" :md="12">
          <AFormItem :label="t('form.attackPercent')" name="attackPercent">
            <AInputNumber
              v-model:value="attributes.attackPercent"
              :min="0.01"
              :precision="2"
              :controls="false"
              allow-clear
              class="w-full"
              :placeholder="t('form.placeholders.attackPercent')"
              @change="handleChange"
            />
          </AFormItem>
        </ACol>
        <ACol :xs="24" :md="12">
          <AFormItem :label="t('form.defensePercent')" name="defensePercent">
            <AInputNumber
              v-model:value="attributes.defensePercent"
              :min="0.01"
              :precision="2"
              :controls="false"
              allow-clear
              class="w-full"
              :placeholder="t('form.placeholders.defensePercent')"
              @change="handleChange"
            />
          </AFormItem>
        </ACol>
        <ACol :xs="24" :md="12">
          <AFormItem :label="t('form.healthPercent')" name="healthPercent">
            <AInputNumber
              v-model:value="attributes.healthPercent"
              :min="0.01"
              :precision="2"
              :controls="false"
              allow-clear
              class="w-full"
              :placeholder="t('form.placeholders.healthPercent')"
              @change="handleChange"
            />
          </AFormItem>
        </ACol>
        <ACol :xs="24" :md="12">
          <AFormItem :label="t('form.effectHitPercent')" name="effectHitPercent">
            <AInputNumber
              v-model:value="attributes.effectHitPercent"
              :min="0.01"
              :precision="2"
              :controls="false"
              allow-clear
              class="w-full"
              :placeholder="t('form.placeholders.effectHitPercent')"
              @change="handleChange"
            />
          </AFormItem>
        </ACol>
        <ACol :xs="24" :md="12">
          <AFormItem :label="t('form.effectResistancePercent')" name="effectResistancePercent">
            <AInputNumber
              v-model:value="attributes.effectResistancePercent"
              :min="0.01"
              :precision="2"
              :controls="false"
              allow-clear
              class="w-full"
              :placeholder="t('form.placeholders.effectResistancePercent')"
              @change="handleChange"
            />
          </AFormItem>
        </ACol>
        <ACol :xs="24" :md="12">
          <AFormItem :label="t('form.speed')" name="speed">
            <AInputNumber
              v-model:value="attributes.speed"
              :min="1"
              :precision="0"
              :controls="false"
              allow-clear
              class="w-full"
              :placeholder="t('form.placeholders.speed')"
              @change="handleChange"
            />
          </AFormItem>
        </ACol>
        <ACol :xs="24" :md="12">
          <AFormItem :label="t('form.critRatePercent')" name="critRatePercent">
            <AInputNumber
              v-model:value="attributes.critRatePercent"
              :min="0.01"
              :precision="2"
              :controls="false"
              allow-clear
              class="w-full"
              :placeholder="t('form.placeholders.critRatePercent')"
              @change="handleChange"
            />
          </AFormItem>
        </ACol>
        <ACol :xs="24" :md="12">
          <AFormItem :label="t('form.critDamagePercent')" name="critDamagePercent">
            <AInputNumber
              v-model:value="attributes.critDamagePercent"
              :min="0.01"
              :precision="2"
              :controls="false"
              allow-clear
              class="w-full"
              :placeholder="t('form.placeholders.critDamagePercent')"
              @change="handleChange"
            />
          </AFormItem>
        </ACol>
        <ACol :xs="24" :md="12">
          <AFormItem :label="t('form.flatAttack')" name="flatAttack">
            <AInputNumber
              v-model:value="attributes.flatAttack"
              :min="1"
              :precision="0"
              :controls="false"
              allow-clear
              class="w-full"
              :placeholder="t('form.placeholders.flatAttack')"
              @change="handleChange"
            />
          </AFormItem>
        </ACol>
        <ACol :xs="24" :md="12">
          <AFormItem :label="t('form.flatDefense')" name="flatDefense">
            <AInputNumber
              v-model:value="attributes.flatDefense"
              :min="1"
              :precision="0"
              :controls="false"
              allow-clear
              class="w-full"
              :placeholder="t('form.placeholders.flatDefense')"
              @change="handleChange"
            />
          </AFormItem>
        </ACol>
        <ACol :xs="24" :md="12">
          <AFormItem :label="t('form.flatHealth')" name="flatHealth">
            <AInputNumber
              v-model:value="attributes.flatHealth"
              :min="1"
              :precision="0"
              :controls="false"
              allow-clear
              class="w-full"
              :placeholder="t('form.placeholders.flatHealth')"
              @change="handleChange"
            />
          </AFormItem>
        </ACol>
      </ARow>
      
      <AFormItem>
        <AButton 
          @click="resetForm"
          class="jp-button text-white font-medium px-6 py-2 h-auto"
          type="primary"
        >
          🔄 {{ t('form.reset') }}
        </AButton>
      </AFormItem>
    </AForm>
  </div>
</template>

<script setup lang="ts">
import type { GearAttributes } from '@/types/gear'

const emit = defineEmits<{
  calculate: [attributes: GearAttributes]
}>()

const { t } = useI18n()

const attributes = ref<GearAttributes>({
  attackPercent: null,
  defensePercent: null,
  healthPercent: null,
  effectHitPercent: null,
  effectResistancePercent: null,
  speed: null,
  critRatePercent: null,
  critDamagePercent: null,
  flatAttack: null,
  flatDefense: null,
  flatHealth: null
})

const handleChange = () => {
  emit('calculate', attributes.value)
}

const resetForm = () => {
  attributes.value = {
    attackPercent: null,
    defensePercent: null,
    healthPercent: null,
    effectHitPercent: null,
    effectResistancePercent: null,
    speed: null,
    critRatePercent: null,
    critDamagePercent: null,
    flatAttack: null,
    flatDefense: null,
    flatHealth: null
  }
  emit('calculate', attributes.value)
}
</script>

<style scoped>
/* 隱藏 InputNumber 的調整按鈕 */
:deep(.ant-input-number-handler-wrap) {
  display: none !important;
}

/* 確保輸入框只允許數字 */
:deep(.ant-input-number-input) {
  text-align: left;
}

/* Japanese game style for form inputs */
:deep(.ant-input-number) {
  border: 2px solid rgba(99, 102, 241, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

:deep(.ant-input-number:hover) {
  border-color: rgba(99, 102, 241, 0.4);
  background: rgba(255, 255, 255, 0.95);
}

:deep(.ant-input-number:focus-within) {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  background: rgba(255, 255, 255, 1);
}

:deep(.ant-form-item-label > label) {
  color: #4338ca;
  font-weight: 500;
  font-size: 14px;
}

/* Reset button styling */
:deep(.jp-button) {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%) !important;
  border: none !important;
  border-radius: 12px !important;
  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3) !important;
  transition: all 0.3s ease !important;
  position: relative;
  overflow: hidden;
}

:deep(.jp-button:hover) {
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4) !important;
}

:deep(.jp-button::before) {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

:deep(.jp-button:hover::before) {
  left: 100%;
}
</style>