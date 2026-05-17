/**
 * Slayer Inc — Rune data
 *
 * - type: rune SET (e.g. "Starter Rune", "Golden Rune")
 * - name: rune name (e.g. "Shiny", "Common")
 * - chance: display odds ("1/100k", "1")
 * - raw: value for ETA math (denominator only for "1/X" — e.g. "100k")
 * - stats: preserve +x (additive) vs x (multiplicative) exactly as in-game
 */

window.categoryOrder = [
  'Starter Rune',
  'Golden Rune',
];

window.runeData = [
  // === STARTER RUNE ===
  {
    name: 'Common',
    type: 'Starter Rune',
    chance: '1/1.21',
    raw: '1.21',
    stats: ['+x10 Power'],
  },
  {
    name: 'Uncommon',
    type: 'Starter Rune',
    chance: '1/6.06',
    raw: '6.06',
    stats: ['+x25 Power', '+x5 Xp'],
  },
  {
    name: 'Rare',
    type: 'Starter Rune',
    chance: '1/100.19',
    raw: '100.19',
    stats: ['+x125 Essence'],
  },
  {
    name: 'Epic',
    type: 'Starter Rune',
    chance: '1/1.252k',
    raw: '1.252k',
    stats: ['+x300 Power', '+x1.25 Golden Points'],
  },
  {
    name: 'Legendary',
    type: 'Starter Rune',
    chance: '1/60.11k',
    raw: '60.11k',
    stats: ['+x1.25k Power', '+x15 Xp', 'x1.5 Rune Bulk'],
  },
  {
    name: 'Mythical',
    type: 'Starter Rune',
    chance: '1/606.1k',
    raw: '606.1k',
    stats: ['+x100k Power', 'x4 Golden Points', 'x2.25 Rune Luck'],
  },
  {
    name: 'Secret',
    type: 'Starter Rune',
    chance: '1/2.504m',
    raw: '2.504m',
    stats: ['x10 Power', 'x2 RuneClone'],
  },
  {
    name: 'Unknown',
    type: 'Starter Rune',
    chance: '1/40.07b',
    raw: '40.07b',
    stats: ['x100 Damage', 'x100 Essence', 'x3 RuneLuck'],
  },

  // === GOLDEN RUNE ===
  {
    name: 'Shiny',
    type: 'Golden Rune',
    chance: '1',
    raw: '1',
    stats: ['+x8 Golden Points', '+x10 Xp'],
  },
  {
    name: 'Regal',
    type: 'Golden Rune',
    chance: '100k',
    raw: '100k',
    stats: ['+x25 Golden Points'],
  },
  {
    name: 'Auric',
    type: 'Golden Rune',
    chance: '2m',
    raw: '2m',
    stats: ['+x25 Damage', '+x20 Essence', 'x2.5 Rune Luck'],
  },
  {
    name: 'Imperial',
    type: 'Golden Rune',
    chance: '25m',
    raw: '25m',
    stats: ['+x125 Golden Points', 'x2 Xp', 'x25 Essence'],
  },
  {
    name: 'Treasury',
    type: 'Golden Rune',
    chance: '125m',
    raw: '125m',
    stats: ['x8 Power', 'x4 Rune Luck', '+5% Gold Chance'],
  },
];
