<template>
  <ALayout class="min-h-screen">
    <ALayoutHeader class="jp-header shadow-jp-glow overflow-hidden">
      <div class="max-w-6xl mx-auto px-4 h-full">
        <div class="flex justify-between items-center py-4 md:py-6 h-full min-h-0">
          <h1 class="m-0 text-lg md:text-3xl font-bold text-white drop-shadow-lg leading-tight flex-1 min-w-0 pr-4">
            <span class="hidden sm:inline">✨ {{ t('title') }} ✨</span>
            <span class="sm:hidden">{{ t('title') }}</span>
          </h1>
          <div class="flex-shrink-0">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </ALayoutHeader>
    
    <ALayoutContent class="py-8 px-4">
      <div class="max-w-6xl mx-auto">
        <ARow :gutter="[16, 16]">
          <ACol :xs="24" :lg="12" class="mb-4 lg:mb-0">
            <div class="jp-card p-4 md:p-6">
              <GearForm @calculate="handleCalculate" />
            </div>
          </ACol>
          <ACol :xs="24" :lg="12">
            <div class="jp-card p-4 md:p-6">
              <ResultsTable 
                :result="calculationResult" 
              />
            </div>
          </ACol>
        </ARow>
      </div>
    </ALayoutContent>
    
    <ALayoutFooter class="bg-gradient-to-r from-jp-primary-50 to-jp-secondary-50 border-t border-jp-primary-200 text-center py-6">
      <span class="text-jp-primary-700 font-medium">
        🎮 {{ t('subtitle') }} 🎯
      </span>
    </ALayoutFooter>
  </ALayout>
</template>

<script setup lang="ts">
import type { GearAttributes, CalculationResult } from '@/types/gear'

const { calculateGearScore } = useCalculator()
const { t } = useI18n()

const calculationResult = ref<CalculationResult | null>(null)

const handleCalculate = (attributes: GearAttributes) => {
  calculationResult.value = calculateGearScore(attributes)
}

useHead({
  title: 'E7衝裝潛力計算',
  meta: [
    { name: 'description', content: '基於遊戲公式的裝備分數預測工具' }
  ]
})
</script>