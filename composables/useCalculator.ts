import type { GearAttributes, CalculationResult, PredictionResult } from '@/types/gear'

export const useCalculator = () => {
  const calculateCurrentScore = (attributes: GearAttributes): number => {
    const {
      attackPercent,
      defensePercent,
      healthPercent,
      effectHitPercent,
      effectResistancePercent,
      speed,
      critRatePercent,
      critDamagePercent,
      flatAttack,
      flatDefense,
      flatHealth
    } = attributes

    const getValue = (value: number | null) => {
      return (value && value > 0) ? value : 0
    }

    return getValue(attackPercent) + 
           getValue(defensePercent) + 
           getValue(healthPercent) + 
           getValue(effectHitPercent) + 
           getValue(effectResistancePercent) + 
           (getValue(speed) * 2) + 
           (getValue(critRatePercent) * 1.5) + 
           (getValue(critDamagePercent) * 1.25) + 
           getValue(flatAttack) + 
           getValue(flatDefense) + 
           getValue(flatHealth)
  }

  const calculate85LevelPredictions = (currentScore: number): PredictionResult => {
    if (currentScore === 0) {
      return { level6: 0, level9: 0, level12: 0, level15: 0 }
    }

    return {
      level6: Math.round(((currentScore + 24) * 1.2 + 27) * 100) / 100,
      level9: Math.round(((currentScore + 16) * 1.2 + 27) * 100) / 100,
      level12: Math.round(((currentScore + 8) * 1.2 + 27) * 100) / 100,
      level15: Math.round((currentScore * 1.2 + 27) * 100) / 100,
      upgraded90: Math.round((currentScore + 27) * 100) / 100
    }
  }

  const calculate88LevelPredictions = (currentScore: number): PredictionResult => {
    if (currentScore === 0) {
      return { level6: 0, level9: 0, level12: 0, level15: 0 }
    }

    return {
      level6: Math.round((currentScore + 27 + 26) * 100) / 100,
      level9: Math.round((currentScore + 18 + 26) * 100) / 100,
      level12: Math.round((currentScore + 9 + 26) * 100) / 100,
      level15: Math.round((currentScore + 26) * 100) / 100
    }
  }

  const calculateGearScore = (attributes: GearAttributes): CalculationResult => {
    const currentScore = calculateCurrentScore(attributes)
    
    return {
      currentScore: Math.round(currentScore * 100) / 100,
      level85: calculate85LevelPredictions(currentScore),
      level88: calculate88LevelPredictions(currentScore)
    }
  }

  return {
    calculateGearScore
  }
}