---
package: matt
path: skills/engineering/prototype/UI.md
type: skill
bytes: 6913
unit: inv-matt-39
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/prototype/UI.md, sha256: 723211e878acbc7b6ff09755263f3295cde724ba902ff0064da41eed51d45ad3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/prototype/UI.md

## Purpose — required, verbatim
> "Generate **several radically different UI variations** on a single route, switchable from a floating bottom bar. The user flips between variants in the browser, picks one (or steals bits from each), then throws the rest away." — skills/engineering/prototype/UI.md:3

## Design intent — required
Defines the implementation pattern for exploratory user interface prototypes. Eliminates time wasted deliberating abstract mockups by rapidly rendering 3–5 structurally distinct UI variations on a single route switchable via a `?variant=` query parameter and a floating bottom bar. Strongly favors embedding variations into existing pages (sub-shape A) over isolated blank routes (sub-shape B) to evaluate density and context against real app chrome, and dictates a cleanup protocol where the winning variant is refactored into production while losing variations are preserved on a throwaway branch.

## Phase — required
matt:engineering

## Inputs — required
UI design questions, layout alternatives, component requirements, and host page routing/data.

## Outputs — required
Multiple structurally different UI component variants, route switcher component with URL parameter binding (`?variant=`), floating bottom switcher bar, settled UI design, and throwaway branch archive.

## Invokes — required
- doc LOGIC.md — skills/engineering/prototype/UI.md:5
- doc SKILL.md — skills/engineering/prototype/UI.md:100

## Invoked by — required
- doc UI.md — skills/engineering/prototype/SKILL.md:15
- doc UI.md — skills/engineering/prototype/LOGIC.md:14

## Concepts named — required, verbatim
- `UI Prototype` — skills/engineering/prototype/UI.md:1 — defined here
- `UI variations` — skills/engineering/prototype/UI.md:3 — defined here
- `floating bottom bar` — skills/engineering/prototype/UI.md:3 — defined here
- `LOGIC.md` — skills/engineering/prototype/UI.md:5 — used here
- `Sub-shape A` — skills/engineering/prototype/UI.md:18 — defined here
- `?variant=` — skills/engineering/prototype/UI.md:20 — defined here
- `Sub-shape B` — skills/engineering/prototype/UI.md:24 — defined here
- `throwaway route` — skills/engineering/prototype/UI.md:28 — defined here
- `3 variants` — skills/engineering/prototype/UI.md:38 — defined here
- `structurally different` — skills/engineering/prototype/UI.md:54 — defined here
- `switcher component` — skills/engineering/prototype/UI.md:58 — defined here
- `PrototypeSwitcher` — skills/engineering/prototype/UI.md:68 — defined here
- `floating switcher` — skills/engineering/prototype/UI.md:77 — defined here
- `SKILL.md` — skills/engineering/prototype/UI.md:100 — used here
- `throwaway branch` — skills/engineering/prototype/UI.md:100 — used here
- `Anti-patterns` — skills/engineering/prototype/UI.md:107 — defined here

## Structure
- `# UI Prototype` — skills/engineering/prototype/UI.md:1
- `## When this is the right shape` — skills/engineering/prototype/UI.md:7
- `## Two sub-shapes: strongly prefer sub-shape A` — skills/engineering/prototype/UI.md:14
- `### Sub-shape A: adjustment to an existing page (preferred)` — skills/engineering/prototype/UI.md:18
- `### Sub-shape B: a new page (last resort)` — skills/engineering/prototype/UI.md:24
- `## Process` — skills/engineering/prototype/UI.md:34
- `### 1. State the question and pick N` — skills/engineering/prototype/UI.md:36
- `### 2. Generate radically different variants` — skills/engineering/prototype/UI.md:46
- `### 3. Wire them together` — skills/engineering/prototype/UI.md:56
- `### 4. Build the floating switcher` — skills/engineering/prototype/UI.md:77
- `### 5. Hand it over` — skills/engineering/prototype/UI.md:94
- `### 6. Capture the answer and clean up` — skills/engineering/prototype/UI.md:98
- `## Anti-patterns` — skills/engineering/prototype/UI.md:107

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Emphasizes structural divergence over cosmetic changes: "Variants must be structurally different: different layout, different information hierarchy, different primary affordance, not just different colours" (skills/engineering/prototype/UI.md:54). Requires that the floating switcher bar be gated on `process.env.NODE_ENV !== 'production'` to prevent accidental leakage into production releases.

## Context cost
6,913 bytes (~1,728 tokens). Implementation reference for multi-variant UI prototyping and interactive switcher construction.
