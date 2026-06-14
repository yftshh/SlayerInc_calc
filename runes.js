/**
 * Slayer Inc — Rune data
 *
 * - type: rune SET (e.g. "Starter Rune", "Golden Rune")
 * - name: rune name (e.g. "Shiny", "Common")
 * - chance: display odds for fixed tiers ("1/100k", "1/6.06")
 * - raw: fixed 1-in-X denominator (P = 1/raw). NOT used for the set filler.
 * - stats: preserve +x (additive) vs x (multiplicative) exactly as in-game
 *
 * Chance math (per set, lowest→highest order in this file):
 * - Filler when tier below has luck/raw ≥ 1 and tier above still luck/raw < 1.
 * - Below filler (luck > raw): N/A. Above filler: P = luck/raw. Filler: P = 1 − Σ(above).
 */

window.categoryOrder = [
  'Starter Rune',
  'Golden Rune',
  'Magma Rune',
  'Plasma Rune',
  'Snow Rune',
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
    chance: '1/6',
    raw: '6',
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
    stats: ['x10 Damage', 'x100 Essence', 'x2.25 RuneLuck'],
  },
  {
    name: 'Celestial',
    type: 'Starter Rune',
    chance: '1/400oc',
    raw: '400oc',
    stats: ['x10 Xp', 'x12 Golden Points', 'x5 RuneBulk'],
  },
  {
    name: 'Ancient',
    type: 'Starter Rune',
    chance: '1/40ud',
    raw: '40ud',
    stats: ['x10 Plasma', 'x25 Spirit Orbs', 'x3 RuneLuck'],
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
    chance: '1/100k',
    raw: '100k',
    stats: ['+x25 Golden Points'],
  },
  {
    name: 'Auric',
    type: 'Golden Rune',
    chance: '1/2m',
    raw: '2m',
    stats: ['+x25 Damage', '+x20 Essence', 'x2.5 Rune Luck'],
  },
  {
    name: 'Imperial',
    type: 'Golden Rune',
    chance: '1/25m',
    raw: '25m',
    stats: ['+x125 Golden Points', 'x2 Xp', 'x25 Essence'],
  },
  {
    name: 'Treasury',
    type: 'Golden Rune',
    chance: '1/125m',
    raw: '125m',
    stats: ['x8 Power', 'x4 Rune Luck', '+5% Gold Chance'],
  },
  {
    name: 'GildedArcane', 
    type: 'Golden Rune',
    chance: '1/4.25qa',
    raw: '4.25qa',
    stats: ['x8 Xp', 'x10 Lava', 'x3 Rune Bulk'],
  },
  {
    name: 'Kingsmark', 
    type: 'Golden Rune',
    chance: '1/900n',
    raw: '900n',
    stats: ['x75 Power', 'x10 Golden Points', 'x5 RuneLuck'],
  },
  

  // === MAGMA RUNE ===
  {
    name: 'Charred',
    type: 'Magma Rune',
    chance: '1/1',
    raw: '1',
    stats: ['+x5 Magma'],
  },
  {
    name: 'Ignis',
    type: 'Magma Rune',
    chance: '1/500m',
    raw: '500m',
    stats: ['x15 Magma', '+x10 Damage'],
  },
  {
    name: 'Cinder',
    type: 'Magma Rune',
    chance: '1/24.5b',
    raw: '24.5b',
    stats: ['+x3 Power', '+x3 Golden Points', 'x1.5 Rune Luck'],
  },
  {
    name: 'Pyric',
    type: 'Magma Rune',
    chance: '1/2.75t',
    raw: '2.75t',
    stats: ['+x45 Essence', '+x25 Magma', 'x8 Rune Bulk'],
  },
  {
    name: 'Searing',
    type: 'Magma Rune',
    chance: '1/97.5t',
    raw: '97.5t',
    stats: ['x25 Magma', '+x12 Golden Points', 'x3 Rune Luck'],
  },
  {
    name: 'Volcanic',
    type: 'Magma Rune',
    chance: '1/300qa',
    raw: '300qa',
    stats: ['x15 Power', 'x5 Lava', 'x25 Magma'],
  },
  {
    name: 'Worldflare',
    type: 'Magma Rune',
    chance: '1/10sp',
    raw: '10sp',
    stats: ['x5 Plasma', 'x5 Xp', 'x10 Magma'],
  },
  {
    name: 'InfernalSigil',
    type: 'Magma Rune',
    chance: '1/80Dd',
    raw: '80dd',
    stats: ['x45 Power', 'x10 Xp', 'x9 RuneLuck'],
  },

  // === PLASMA RUNE ===
  {
    name: 'Plasmatic',
    type: 'Plasma Rune',
    chance: '1/1',
    raw: '1',
    stats: ['+x5 Plasma', '+x15 Power'],
  },
  {
    name: 'Arclight',
    type: 'Plasma Rune',
    chance: '1/1qi',
    raw: '1qi',
    stats: ['+x25 Plasma', 'x4 Xp', 'x4 RuneBulk'],
  },
  {
    name: 'Voltaris',
    type: 'Plasma Rune',
    chance: '1/12.5qi',
    raw: '12.5qi',
    stats: ['x3 Lava', 'x25 Magma', 'x5 RuneLuck'],
  },
  {
    name: 'Aetherion',
    type: 'Plasma Rune',
    chance: '1/4.6sx',
    raw: '4.6sx',
    stats: ['x12 Power', 'x5 Plasma', 'x7 RuneLuck'],
  },
  {
    name: 'Astralis',
    type: 'Plasma Rune',
    chance: '1/2.5oc',
    raw: '2.5oc',
    stats: ['x9 Plasma', 'x5 Lava', 'x3 RuneLuck'],
  },
  {
    name: 'Ecliptor',
    type: 'Plasma Rune',
    chance: '1/350Td',
    raw: '350td',
    stats: ['???'],
  },

  // === SNOW RUNE ===
  {
    name: 'Snowfall',
    type: 'Snow Rune',
    chance: '1/1',
    raw: '1',
    stats: ['x10 Snowflakes', 'x15 Snowflakes', 'x10 Xp'],
  },
  {
    name: 'Frostbite',
    type: 'Snow Rune',
    chance: '1/99.99N',
    raw: '99.99n',
    stats: ['x40 Power', 'x10 Xp', 'x7 Snowflakes'],
  },
  {
    name: 'Icebound',
    type: 'Snow Rune',
    chance: '1/1.999Dd',
    raw: '1.999dd',
    stats: ['x2 Xp', 'x5 Snowflakes', 'x15 Plasma'],
  },
  {
    name: 'Glacial',
    type: 'Snow Rune',
    chance: '1/49.99Td',
    raw: '49.99td',
    stats: ['x50 Power', 'x?? Magma', 'x3 RuneLuck'],
  },
  {
    name: 'WintersWrath',
    type: 'Snow Rune',
    chance: '1/999.9Qui',
    raw: '999.9qui',
    stats: ['x?? Power', '5 Snowflakes', 'x?? RuneBulk'],
  }
];
