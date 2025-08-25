export interface GearAttributes {
  attackPercent: number | null
  defensePercent: number | null
  healthPercent: number | null
  effectHitPercent: number | null
  effectResistancePercent: number | null
  speed: number | null
  critRatePercent: number | null
  critDamagePercent: number | null
  flatAttack: number | null
  flatDefense: number | null
  flatHealth: number | null
}

export interface PredictionResult {
  level6: number
  level9: number
  level12: number
  level15: number
  upgraded90?: number
}

export interface CalculationResult {
  currentScore: number
  level85: PredictionResult
  level88: PredictionResult
}