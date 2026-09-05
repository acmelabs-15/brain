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
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/prototype/UI.md

## Purpose — required, verbatim
> "Generate **several radically different UI variations** on a single route, switchable from a floating bottom bar." — skills/engineering/prototype/UI.md:3

## Design intent — required
Execution guide for the visual interface prototyping branch of the `prototype` skill. Mandates generating 3 (capped at 5) structurally distinct UI variants evaluated on an existing application route (sub-shape A, preferred) or a dedicated throwaway route (sub-shape B). Variants are dynamically toggled via a `?variant=` URL parameter and an interactive floating bottom switcher bar. Strictly distinguishes structural exploration (different layout, different information hierarchy) from superficial cosmetic tweaks (colors, copy). Outlines complete lifecycle procedures: defining the question, building structurally distinct components, wiring the switcher with keyboard accessibility, facilitating user evaluation, incorporating the winning layout into production, and archiving the variant set to a throwaway branch.

## Phase — required
cross-phase

## Inputs — required
Visual layout question or UI dilemma; existing application route, styling framework, and data dependencies.

## Outputs — required
3-5 structural variant components (`VariantA`, `VariantB`, `VariantC`); shared `PrototypeSwitcher` component; winning design integrated into main codebase with alternative variants archived to a throwaway branch.

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
- `sub-shape A` — skills/engineering/prototype/UI.md:18 — defined here
- `sub-shape B` — skills/engineering/prototype/UI.md:24 — defined here
- `throwaway route` — skills/engineering/prototype/UI.md:28 — defined here
- `variants` — skills/engineering/prototype/UI.md:38 — defined here
- `PrototypeSwitcher` — skills/engineering/prototype/UI.md:68 — defined here
- `URL search param` — skills/engineering/prototype/UI.md:87 — used here
- `throwaway branch` — skills/engineering/prototype/UI.md:100 — used here

## Structure
- UI Prototype — skills/engineering/prototype/UI.md:1
- When this is the right shape — skills/engineering/prototype/UI.md:7
- Two sub-shapes: strongly prefer sub-shape A — skills/engineering/prototype/UI.md:14
- Sub-shape A: adjustment to an existing page (preferred) — skills/engineering/prototype/UI.md:18
- Sub-shape B: a new page (last resort) — skills/engineering/prototype/UI.md:24
- Process — skills/engineering/prototype/UI.md:34
- 1. State the question and pick N — skills/engineering/prototype/UI.md:36
- 2. Generate radically different variants — skills/engineering/prototype/UI.md:46
- 3. Wire them together — skills/engineering/prototype/UI.md:56
- 4. Build the floating switcher — skills/engineering/prototype/UI.md:77
- 5. Hand it over — skills/engineering/prototype/UI.md:94
- 6. Capture the answer and clean up — skills/engineering/prototype/UI.md:98
- Anti-patterns — skills/engineering/prototype/UI.md:107

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Advocates mounting prototype variations directly within existing host routes (sub-shape A) so that designs are tested against realistic application density, real auth, and real headers rather than isolated, misleading blank pages.

## Context cost
6913 bytes, 113 lines, ~1600 tokens.
