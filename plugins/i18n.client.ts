export default defineNuxtPlugin(async (nuxtApp) => {
  const messages = {
    'zh-TW': {
      "title": "E7衝裝潛力計算",
      "subtitle": "基於遊戲公式的裝備分數預測工具",
      "form": {
        "title": "裝備屬性",
        "attackPercent": "攻擊力%",
        "defensePercent": "防禦力%",
        "healthPercent": "生命值%",
        "effectHitPercent": "效果命中%",
        "effectResistancePercent": "效果抵抗%",
        "speed": "速度",
        "critRatePercent": "暴擊率%",
        "critDamagePercent": "暴擊傷害%",
        "flatAttack": "攻擊力",
        "flatDefense": "防禦力",
        "flatHealth": "生命值",
        "reset": "重置",
        "placeholders": {
          "attackPercent": "請輸入攻擊力%",
          "defensePercent": "請輸入防禦力%",
          "healthPercent": "請輸入生命值%",
          "effectHitPercent": "請輸入效果命中%",
          "effectResistancePercent": "請輸入效果抵抗%",
          "speed": "請輸入速度",
          "critRatePercent": "請輸入暴擊率%",
          "critDamagePercent": "請輸入暴擊傷害%",
          "flatAttack": "請輸入攻擊力",
          "flatDefense": "請輸入防禦力",
          "flatHealth": "請輸入生命值"
        }
      },
      "results": {
        "title": "計算結果",
        "currentScore": "目前分數",
        "enhancementLevel": "強化等級",
        "level85Score": "85級分數",
        "level88Score": "88級分數",
        "upgradeTo90": "升90級"
      }
    },
    'zh-CN': {
      "title": "E7冲装潜力计算",
      "subtitle": "基于游戏公式的装备分数预测工具",
      "form": {
        "title": "装备属性",
        "attackPercent": "攻击力%",
        "defensePercent": "防御力%",
        "healthPercent": "生命值%",
        "effectHitPercent": "效果命中%",
        "effectResistancePercent": "效果抵抗%",
        "speed": "速度",
        "critRatePercent": "暴击率%",
        "critDamagePercent": "暴击伤害%",
        "flatAttack": "攻击力",
        "flatDefense": "防御力",
        "flatHealth": "生命值",
        "reset": "重置",
        "placeholders": {
          "attackPercent": "请输入攻击力%",
          "defensePercent": "请输入防御力%",
          "healthPercent": "请输入生命值%",
          "effectHitPercent": "请输入效果命中%",
          "effectResistancePercent": "请输入效果抵抗%",
          "speed": "请输入速度",
          "critRatePercent": "请输入暴击率%",
          "critDamagePercent": "请输入暴击伤害%",
          "flatAttack": "请输入攻击力",
          "flatDefense": "请输入防御力",
          "flatHealth": "请输入生命值"
        }
      },
      "results": {
        "title": "计算结果",
        "currentScore": "当前分数",
        "enhancementLevel": "强化等级",
        "level85Score": "85级分数",
        "level88Score": "88级分数",
        "upgradeTo90": "升90级"
      }
    },
    'en': {
      "title": "E7 Gear Enhancement Calculator",
      "subtitle": "Equipment score prediction tool based on game formulas",
      "form": {
        "title": "Equipment Attributes",
        "attackPercent": "Attack%",
        "defensePercent": "Defense%",
        "healthPercent": "Health%",
        "effectHitPercent": "Effect Hit%",
        "effectResistancePercent": "Effect Resistance%",
        "speed": "Speed",
        "critRatePercent": "Crit Rate%",
        "critDamagePercent": "Crit Damage%",
        "flatAttack": "Attack",
        "flatDefense": "Defense",
        "flatHealth": "Health",
        "reset": "Reset",
        "placeholders": {
          "attackPercent": "Enter Attack%",
          "defensePercent": "Enter Defense%",
          "healthPercent": "Enter Health%",
          "effectHitPercent": "Enter Effect Hit%",
          "effectResistancePercent": "Enter Effect Resistance%",
          "speed": "Enter Speed",
          "critRatePercent": "Enter Crit Rate%",
          "critDamagePercent": "Enter Crit Damage%",
          "flatAttack": "Enter Attack",
          "flatDefense": "Enter Defense",
          "flatHealth": "Enter Health"
        }
      },
      "results": {
        "title": "Calculation Results",
        "currentScore": "Current Score",
        "enhancementLevel": "Enhancement Level",
        "level85Score": "Level 85 Score",
        "level88Score": "Level 88 Score",
        "upgradeTo90": "Upgrade to 90"
      }
    }
  }

  // 手動設置訊息
  const { $i18n } = nuxtApp
  if ($i18n) {
    Object.keys(messages).forEach(locale => {
      $i18n.setLocaleMessage(locale, messages[locale])
    })
  }
})