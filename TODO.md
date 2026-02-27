# TODO: Apply Consistent Card Animation and Hover Effects

## Overview
Apply uniform fade-in animation and hover effects to all cards across the website, ensuring no scaling on hover and consistent theme-aware styling.

## Requirements
- Animation: `animate-fade-in` on load
- Hover Effects: `hover:-translate-y-1`, `hover:shadow-lg`, theme-aware border changes
- Transitions: 300ms duration, ease-out
- No scaling (remove `hover:scale-105` if present)
- Theme support: Light theme accent #2563EB, Dark theme #38BDF8

## Tasks

### 1. Update ProjectCard.jsx
- [x] Remove `hover:scale-105` if present
- [x] Ensure consistent hover classes: `hover:-translate-y-1 hover:shadow-lg hover:border-blue-500 dark:hover:border-cyan-400`
- [x] Verify `animate-fade-in` is present

### 2. Update Experience.jsx cards
- [x] Remove `hover:scale-105` from experience cards
- [x] Ensure consistent hover classes
- [x] Verify `animate-fade-in` with animation delays

### 3. Update Contact.jsx form card
- [x] Remove `hover:scale-105` from contact form card
- [x] Ensure consistent hover classes
- [x] Verify `animate-fade-in`

### 4. Update Skills.jsx category cards
- [x] Remove `hover:scale-105` from all three skill category cards (Frontend, Tools, Concepts)
- [x] Ensure consistent hover classes for each card
- [x] Verify `animate-fade-in`

### 5. Update Home.jsx cards
- [x] Remove `hover:scale-105` from skills cards in Home.jsx
- [x] Remove `hover:scale-105` from experience cards in Home.jsx
- [x] Ensure consistent hover classes
- [x] Verify `animate-fade-in`

### 6. Verify SkillBadge.jsx (if needed)
- [x] Check if SkillBadge needs updates (it's a badge, not a card, but ensure consistency if it has card-like behavior)

### 7. Test and Verify
- [x] Run the development server
- [x] Check all sections for consistent animations and hover effects
- [x] Ensure no scaling on hover
- [x] Verify theme switching works correctly

## Completion Criteria
- All cards have identical hover effects: lift, shadow increase, border accent
- No cards have `hover:scale-105`
- All cards animate in with `animate-fade-in`
- Effects work in both light and dark themes
- Transitions are smooth and professional (300ms ease-out)
