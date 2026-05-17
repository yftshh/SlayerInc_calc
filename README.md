# 🧿 Slayer Inc — Rune Calculator

![GitHub Pages](https://img.shields.io/github/deployments/yftshh/SlayerInc_calc/github-pages?label=GitHub%20Pages&color=crimson)
![HTML](https://img.shields.io/badge/HTML-Static%20Site-orange)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Made with ❤ for Roblox](https://img.shields.io/badge/Made%20with%20%E2%9D%A4%20for-Roblox-red)

*Forge your path through demon runes — calculate ETAs, stack potions, and plan your next drop in **Slayer Inc**.*

![Calculator Preview](./preview.png)

---

## 🌐 Live Demo

**[https://yftshh.github.io/SlayerInc_calc/](https://yftshh.github.io/SlayerInc_calc/)**

---

## ✨ Features

- ⚔ **Dark Forge UI** — crimson, ember, and obsidian theme
- 🧮 **Live calculations** — Effective RPS and rune ETAs update on every input
- 🎯 **Custom target** — any threshold (`500k`, `2.5b`, `1/5OcDe`) with configurable confidence %
- 🧪 **Rune potions** — Rune Speed Potion (×1.25 speed), Rune Luck Potion (×1.5 luck)
- 🔍 **Search** — filter by rune name or set name
- 📊 **Sort modes** — group by rune set or sort by ETA
- ⭐ **Pin runes** — starred cards under **⭐ Pinned**
- 🃏 **Rune cards** — ETAs at 63% / 50% / 90%, color-coded by time
- 📱 **Mobile-friendly** — collapsible **⚔ Config** sidebar
- 📂 **Scalable data** — all runes live in [`runes.js`](runes.js)

---

## 📖 How to Use

1. Open the **[live calculator](https://yftshh.github.io/SlayerInc_calc/)** or open `index.html` locally (keep `runes.js` in the same folder).
2. Set **Cooldown (Speed)** in seconds (default `0.15`).
3. Enter **Rune Bulk** and **Rune Luck** — suffixes like `100k`, `5m`, `1ocde` work.
4. Toggle **Rune Speed Potion** and **Rune Luck Potion** if active in-game.
5. Browse cards grouped by **rune set** (e.g. Starter Rune).
6. Click a card to load its threshold into **Custom Target**.
7. Optionally set **Custom ETA %** (1–99); leave empty for **63%** base.
8. Use **Search**, **Pin** (⭐), and **Sort by ETA** to plan your grind.

---

## 🧮 How the Math Works

```
effectiveRPS = Bulk / (Cooldown / speedPotionMult)
totalPower   = effectiveRPS × (Luck × luckPotionMult)
ETA (63%)    = runeThreshold / totalPower
ETA (X%)     = ETA_63% × -ln(1 - X/100)
```

- **Rune Speed Potion**: `×1.25` → cooldown divided by 1.25 (rolls faster).
- **Rune Luck Potion**: `×1.5` luck.
- No event multipliers are applied (none in-game currently).

---

## ➕ Adding Your Runes

Edit **[`runes.js`](runes.js)** — not `index.html`.

### Rune sets vs rune names

- **`type`** — rune **set** name (e.g. `"Starter Rune"`) — used for section headers and colors.
- **`name`** — individual rune name (e.g. `"Common"`, `"Legendary"`, `"Unknown"`) — these are names, not a rarity tier system.

### Example entry

```javascript
{
  name: "Legendary",
  type: "Starter Rune",
  chance: "50k",
  raw: "50k",
  stats: ["+example bonus"],
}
```

For inverse odds: `chance: "1/5OcDe"`, `raw: "5ocde"`.

### `categoryOrder`

```javascript
window.categoryOrder = [
  "Starter Rune",
  // more sets...
];
```

Sets not listed appear after ordered ones.

---

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| App logic | [`index.html`](index.html) |
| Rune data | [`runes.js`](runes.js) |
| Utilities | [Tailwind CSS](https://cdn.tailwindcss.com/) (CDN) |
| Icons | [Font Awesome 6](https://fontawesome.com/) |
| Fonts | Cinzel Decorative, Rajdhani, Share Tech Mono |
| Hosting | GitHub Pages — no build step |

---

## 📄 License

MIT License — use, modify, and share freely.

---

*Happy slaying.* 🔥⚔
