<template>
  <div>
    <h2 class="text-xl md:text-2xl font-bold text-jp-primary-700 mb-4 md:mb-6 flex items-center">
      📊 {{ t('results.title') }}
    </h2>
    <div class="mb-4 md:mb-6 p-3 md:p-4 bg-gradient-to-r from-jp-success-50 to-jp-primary-50 rounded-lg border border-jp-success-200">
      <h3 class="text-lg md:text-xl font-bold text-jp-success-700 flex items-center flex-wrap">
        ⭐ {{ t('results.currentScore') }}: 
        <span class="ml-2 text-xl md:text-2xl text-jp-primary-700">{{ result?.currentScore || 0 }}</span>
      </h3>
    </div>
    
    <ATable
      :dataSource="tableData"
      :columns="columns"
      :pagination="false"
      bordered
      class="jp-table"
      :scroll="{ x: 'max-content' }"
      size="small"
    />
  </div>
</template>

<script setup lang="ts">
import type { CalculationResult } from '@/types/gear'

interface Props {
  result: CalculationResult | null
}

const props = defineProps<Props>()

const { t } = useI18n()

const columns = computed(() => [
  {
    title: t('results.enhancementLevel'),
    dataIndex: 'enhancement',
    key: 'enhancement',
    width: 120,
    align: 'center'
  },
  {
    title: t('results.level85Score'),
    dataIndex: 'level85',
    key: 'level85',
    width: 120,
    align: 'center'
  },
  {
    title: t('results.level88Score'),
    dataIndex: 'level88',
    key: 'level88',
    width: 120,
    align: 'center'
  }
])

const tableData = computed(() => {
  if (!props.result) {
    return [
      { key: '+6', enhancement: '+6', level85: '', level88: '' },
      { key: '+9', enhancement: '+9', level85: '', level88: '' },
      { key: '+12', enhancement: '+12', level85: '', level88: '' },
      { key: '+15', enhancement: '+15', level85: '', level88: '' },
      { key: 'upgrade90', enhancement: t('results.upgradeTo90'), level85: '', level88: '' }
    ]
  }

  return [
    {
      key: '+6',
      enhancement: '+6',
      level85: props.result.level85.level6 || '',
      level88: props.result.level88.level6 || ''
    },
    {
      key: '+9',
      enhancement: '+9',
      level85: props.result.level85.level9 || '',
      level88: props.result.level88.level9 || ''
    },
    {
      key: '+12',
      enhancement: '+12',
      level85: props.result.level85.level12 || '',
      level88: props.result.level88.level12 || ''
    },
    {
      key: '+15',
      enhancement: '+15',
      level85: props.result.level85.level15 || '',
      level88: props.result.level88.level15 || ''
    },
    {
      key: 'upgrade90',
      enhancement: t('results.upgradeTo90'),
      level85: props.result.level85.upgraded90 || '',
      level88: ''
    }
  ]
})
</script>

<style scoped>
/* Japanese game style for results table */
:deep(.jp-table) {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(99, 102, 241, 0.1);
}

/* Desktop: hide scrollbar */
@media (min-width: 768px) {
  :deep(.jp-table .ant-table-body) {
    overflow-x: visible !important;
  }
  
  :deep(.jp-table .ant-table-content) {
    overflow-x: visible !important;
  }
}

/* Mobile: allow horizontal scroll */
@media (max-width: 767px) {
  :deep(.jp-table .ant-table-body) {
    overflow-x: auto !important;
  }
  
  :deep(.jp-table .ant-table-content) {
    overflow-x: auto !important;
  }
}

:deep(.jp-table .ant-table-thead > tr > th) {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border: none;
  text-align: center;
  font-size: 15px;
  padding: 16px 12px;
}

:deep(.jp-table .ant-table-tbody > tr > td) {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  padding: 14px 12px;
  color: #4338ca;
  border: 1px solid rgba(99, 102, 241, 0.1);
}

:deep(.jp-table .ant-table-tbody > tr:nth-child(even) > td) {
  background: rgba(240, 244, 255, 0.8);
}

:deep(.jp-table .ant-table-tbody > tr:hover > td) {
  background: rgba(99, 102, 241, 0.1) !important;
  transform: scale(1.02);
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.2);
}

:deep(.jp-table .ant-table-tbody > tr:last-child > td) {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%);
  font-weight: 700;
  color: #16a34a;
}

:deep(.jp-table .ant-table-tbody > tr:last-child:hover > td) {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%) !important;
}

/* Enhancement level column styling */
:deep(.jp-table .ant-table-tbody > tr > td:first-child) {
  font-weight: 700;
  color: #7c3aed;
  background: rgba(124, 58, 237, 0.05);
}

:deep(.jp-table .ant-table-tbody > tr:nth-child(even) > td:first-child) {
  background: rgba(124, 58, 237, 0.1);
}
</style>