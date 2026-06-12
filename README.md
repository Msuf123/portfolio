theme:-

# Portfolio Theme Spec — Akshat Malik

## Palette

```css
:root {
  --bg: #1e1e1e;
  --gold: #f4b942;
  --gold-dim: rgba(244, 185, 66, 0.15);
  --green: #34d399;
  --text: #ffffff;
  --text-soft: rgba(255, 255, 255, 0.65);
  --text-dim: rgba(255, 255, 255, 0.35);
  --card: rgba(255, 255, 255, 0.06);
  --card-border: rgba(255, 255, 255, 0.1);
}
```

## Typography

```css
/* Import */
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@400;500&family=Sora:wght@300;400;600;700&display=swap");

/* Display / Headings */
font-family: "Bebas Neue", sans-serif;
letter-spacing: 0.05em;

/* Body / Descriptions */
font-family: "Sora", sans-serif;
font-weight: 300 | 400 | 600;

/* Code / Labels / Tags */
font-family: "JetBrains Mono", monospace;
text-transform: uppercase;
letter-spacing: 0.2em;
```

## Cards

```css
.card {
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  padding: 20px 16px;
  transition: border-color 0.2s;
}

.card:hover {
  border-color: rgba(244, 185, 66, 0.3);
}
```

## Badges

```css
/* Live / Active */
.badge-live {
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(52, 211, 153, 0.15);
  border: 1px solid rgba(52, 211, 153, 0.3);
  border-radius: 20px;
  padding: 3px 8px;
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  color: var(--green);
  letter-spacing: 0.05em;
}

/* Inactive / Coming Soon */
.badge-inactive {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--text-dim);
}
```

## Pills

```css
/* Gold — core tech */
.pill-gold {
  font-family: "JetBrains Mono", monospace;
  font-size: 9.5px;
  color: var(--gold);
  background: var(--gold-dim);
  border: 1px solid rgba(244, 185, 66, 0.2);
  border-radius: 20px;
  padding: 3px 9px;
  letter-spacing: 0.03em;
}

/* Grey — supporting tech */
.pill-grey {
  color: var(--text-soft);
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## Animations

```css
/* Page entrance */
@keyframes floatUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Usage — stagger with delay */
.el-1 {
  animation: floatUp 1s 0s ease both;
}
.el-2 {
  animation: floatUp 1s 0.15s ease both;
}
.el-3 {
  animation: floatUp 1s 0.3s ease both;
}

/* Photo ring spin */
@keyframes spin-ring {
  to {
    transform: rotate(360deg);
  }
}

.photo-ring {
  background: conic-gradient(
    from 180deg,
    var(--gold),
    #e8834a,
    var(--green),
    var(--gold)
  );
  animation: spin-ring 8s linear infinite;
}

/* Live dot ripple */
@keyframes ripple {
  0% {
    opacity: 0.7;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(2.2);
  }
}

.live-dot::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1.5px solid var(--green);
  animation: ripple 2s ease-out infinite;
}

/* Badge dot breathe */
@keyframes pulse-dot {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.7);
  }
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--green);
  animation: pulse-dot 1.8s ease-in-out infinite;
}
```

## Background Effects

```css
/* Hero radial gold glow */
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 70% 55% at 50% 40%,
    rgba(244, 185, 66, 0.07) 0%,
    transparent 65%
  );
  pointer-events: none;
}

/* Bottom separator line */
.hero::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(244, 185, 66, 0.3),
    transparent
  );
}
```

## Tone Rules

- Dark and confident — `#1e1e1e` base, no light surfaces
- **Gold** = identity, emphasis, core branding
- **Green** = live, active, working, online
- **Mono font** for anything code-adjacent (labels, tags, badges, URLs)
- No heavy rounding — sharp cards, tight spacing, purposeful layout
- Radial glow is subtle — atmosphere not decoration
