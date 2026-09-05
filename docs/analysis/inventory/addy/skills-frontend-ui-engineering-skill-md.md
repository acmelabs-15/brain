---
package: addy
path: skills/frontend-ui-engineering/SKILL.md
type: skill
bytes: 10711
unit: inv-addy-41
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/frontend-ui-engineering/SKILL.md, sha256: 2b74ac4862be3902ec918dceac9366a6fe83b9e003601c0deaf6be09c1766aca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/frontend-ui-engineering/SKILL.md

## Purpose — required, verbatim
> "Builds production-quality, accessible, responsive user-facing UIs. Use when building or modifying interfaces and pages, creating components, implementing layouts, meeting WCAG accessibility requirements, managing state, or when the output needs to look and feel production-quality rather than AI-generated." — skills/frontend-ui-engineering/SKILL.md:3

## Design intent — required
Addresses the persistent tendency of autonomous agents to generate generic, unpolished, and inaccessible frontend interfaces — characterized by stereotypical "AI aesthetics" such as gratuitous purple/indigo palettes, excessive gradients, uniform maximum border radii (`rounded-2xl`), unscaled padding, and stock card grids. It establishes concrete engineering conventions for production-grade web interfaces: component colocation (tests, stories, custom hooks, and types alongside implementation), composition over configuration, clean separation between data container and presentation components, tiered state management (from local `useState` up to global stores), disciplined design token adherence, and mandatory WCAG 2.1 AA accessibility compliance (keyboard navigation, ARIA labeling, focus trapping, and responsive breakpoints). Without this skill, agent-generated UIs appear amateurish, incur severe accessibility debt, fail on mobile viewports, and require extensive human redesign to reach enterprise production standards.

## Phase — required
addy:Build

## Inputs — required
- Feature specifications, UI component requirements, user flows, and page layout goals — skills/frontend-ui-engineering/SKILL.md:14-19
- Existing project design system tokens (colors, spacing scale, border-radii, typography hierarchy) — skills/frontend-ui-engineering/SKILL.md:124, 126, 130, 135-164
- Component props, data schemas, API response contracts, and state requirements — skills/frontend-ui-engineering/SKILL.md:64, 82-88, 106-112
- WCAG 2.1 AA accessibility checklist and testing criteria (`../../references/accessibility-checklist.md`) — skills/frontend-ui-engineering/SKILL.md:165, 297, 328

## Outputs — required
- Colocated component directories and files (e.g. `src/components/TaskList/TaskList.tsx`, `TaskList.test.tsx`, `TaskList.stories.tsx`, `use-task-list.ts`, `types.ts`) — skills/frontend-ui-engineering/SKILL.md:27-34
- Composable UI components, container components, and presentation components — skills/frontend-ui-engineering/SKILL.md:41-49, 64-74, 81-98
- State hooks and server state query/mutation logic with optimistic updates — skills/frontend-ui-engineering/SKILL.md:106-112, 273-292
- Accessible modal dialogs with focus trapping and keyboard listeners — skills/frontend-ui-engineering/SKILL.md:175-184, 205-219
- Mobile-first responsive layouts covering breakpoints (320px, 768px, 1024px, 1440px) — skills/frontend-ui-engineering/SKILL.md:248-256
- Loading skeletons, optimistic update rollbacks, empty states, and error states — skills/frontend-ui-engineering/SKILL.md:84-86, 226-239, 262-270, 278-290

## Invokes — required
- reference references/accessibility-checklist.md — skills/frontend-ui-engineering/SKILL.md:297

## Invoked by — required
- reference references/accessibility-checklist.md — references/accessibility-checklist.md:3
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:25
- doc CLAUDE.md — CLAUDE.md:23
- doc AGENTS.md — AGENTS.md:32
- doc README.md — README.md:40
- doc docs/adoption-guide.md — docs/adoption-guide.md:60
- doc docs/getting-started.md — docs/getting-started.md:71
- doc docs/cursor-setup.md — docs/cursor-setup.md:157
- doc docs/gemini-cli-setup.md — docs/gemini-cli-setup.md:77
- doc docs/opencode-setup.md — docs/opencode-setup.md:122

## Concepts named — required, verbatim
- `frontend-ui-engineering` — skills/frontend-ui-engineering/SKILL.md:2 — defined here
- `Frontend UI Engineering` — skills/frontend-ui-engineering/SKILL.md:6 — defined here
- `design system` — skills/frontend-ui-engineering/SKILL.md:10 — used here
- `accessibility` — skills/frontend-ui-engineering/SKILL.md:10 — used here
- `AI aesthetic` — skills/frontend-ui-engineering/SKILL.md:10, 118 — defined here
- `Component Architecture` — skills/frontend-ui-engineering/SKILL.md:20 — defined here
- `Colocate` — skills/frontend-ui-engineering/SKILL.md:24 — defined here
- `composition over configuration` — skills/frontend-ui-engineering/SKILL.md:38 — defined here
- `Container` — skills/frontend-ui-engineering/SKILL.md:80 — defined here
- `Skeleton` — skills/frontend-ui-engineering/SKILL.md:84, 261 — used here
- `ErrorState` — skills/frontend-ui-engineering/SKILL.md:85 — used here
- `EmptyState` — skills/frontend-ui-engineering/SKILL.md:86 — used here
- `Presentation` — skills/frontend-ui-engineering/SKILL.md:91 — defined here
- `State Management` — skills/frontend-ui-engineering/SKILL.md:101 — defined here
- `Local state` — skills/frontend-ui-engineering/SKILL.md:106 — defined here
- `useState` — skills/frontend-ui-engineering/SKILL.md:106 — used here
- `Lifted state` — skills/frontend-ui-engineering/SKILL.md:107 — defined here
- `Context` — skills/frontend-ui-engineering/SKILL.md:108 — used here
- `URL state` — skills/frontend-ui-engineering/SKILL.md:109 — defined here
- `searchParams` — skills/frontend-ui-engineering/SKILL.md:109 — used here
- `Server state` — skills/frontend-ui-engineering/SKILL.md:110 — defined here
- `React Query` — skills/frontend-ui-engineering/SKILL.md:110 — used here
- `SWR` — skills/frontend-ui-engineering/SKILL.md:110 — used here
- `Global store` — skills/frontend-ui-engineering/SKILL.md:111 — defined here
- `Zustand` — skills/frontend-ui-engineering/SKILL.md:111 — used here
- `Redux` — skills/frontend-ui-engineering/SKILL.md:111 — used here
- `prop drilling` — skills/frontend-ui-engineering/SKILL.md:114 — defined here
- `Design System Adherence` — skills/frontend-ui-engineering/SKILL.md:116 — defined here
- `spacing scale` — skills/frontend-ui-engineering/SKILL.md:135 — defined here
- `Typography` — skills/frontend-ui-engineering/SKILL.md:145 — defined here
- `type hierarchy` — skills/frontend-ui-engineering/SKILL.md:147 — defined here
- `semantic color tokens` — skills/frontend-ui-engineering/SKILL.md:161 — defined here
- `contrast` — skills/frontend-ui-engineering/SKILL.md:162 — used here
- `WCAG 2.1 AA` — skills/frontend-ui-engineering/SKILL.md:165 — used here
- `Keyboard Navigation` — skills/frontend-ui-engineering/SKILL.md:169 — defined here
- `ARIA Labels` — skills/frontend-ui-engineering/SKILL.md:187 — defined here
- `aria-label` — skills/frontend-ui-engineering/SKILL.md:191, 198 — used here
- `Focus Management` — skills/frontend-ui-engineering/SKILL.md:201 — defined here
- `Trap focus` — skills/frontend-ui-engineering/SKILL.md:212 — defined here
- `Empty and Error States` — skills/frontend-ui-engineering/SKILL.md:222 — defined here
- `Responsive Design` — skills/frontend-ui-engineering/SKILL.md:242 — defined here
- `mobile first` — skills/frontend-ui-engineering/SKILL.md:244 — defined here
- `breakpoints` — skills/frontend-ui-engineering/SKILL.md:256 — defined here
- `Loading and Transitions` — skills/frontend-ui-engineering/SKILL.md:258 — defined here
- `Skeleton loading` — skills/frontend-ui-engineering/SKILL.md:261 — defined here
- `Optimistic updates` — skills/frontend-ui-engineering/SKILL.md:272 — defined here
- `axe-core` — skills/frontend-ui-engineering/SKILL.md:328 — used here

## Structure
- ## Overview
- ## When to Use
- ## Component Architecture
- ### File Structure
- ### Component Patterns
- ## State Management
- ## Design System Adherence
- ### Avoid the AI Aesthetic
- ### Spacing and Layout
- ### Typography
- ### Color
- ## Accessibility (WCAG 2.1 AA)
- ### Keyboard Navigation
- ### ARIA Labels
- ### Focus Management
- ### Meaningful Empty and Error States
- ## Responsive Design
- ## Loading and Transitions
- ## See Also
- ## Common Rationalizations
- ## Red Flags
- ## Verification

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Systematically deconstructs 8 specific failure patterns of LLM frontend generation in the "Avoid the AI Aesthetic" table (lines 122-132): purple/indigo palettes, excessive gradients, uniform maximum border radii (`rounded-2xl`), generic hero sections, lorem-ipsum copy, oversized padding, stock card grids, and shadow-heavy design. Explicitly states engineering intent: "The goal is UI that looks like it was built by a design-aware engineer at a top company — not like it was generated by an AI." — skills/frontend-ui-engineering/SKILL.md:10. Emphasizes upfront mobile-first development over deferred responsiveness: "Retrofitting responsive design is 3x harder than building it from the start." — skills/frontend-ui-engineering/SKILL.md:304.

## Context cost
10,711 bytes (~2,675 tokens). References `references/accessibility-checklist.md` (5,206 bytes, ~1,300 tokens) for detailed WCAG criteria.
