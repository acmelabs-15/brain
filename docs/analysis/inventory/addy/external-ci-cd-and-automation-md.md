---
package: addy
path: external/ci-cd-and-automation.md
type: external-doc
bytes: 26179
unit: inv-addy-14
deprecated: false
aliases: []
memo_inputs:
  - {path: external/ci-cd-and-automation.md, sha256: 2e149360f286dd6f40d73eec2e358a38676a2b41821ea97aa76c3288e7a6777f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/ci-cd-and-automation.md

## Purpose — required, verbatim
> "Automates CI/CD pipeline setup. Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops - automate the gates so speed and safety compound." — external/ci-cd-and-automation.md:5

## Design intent — required
This page serves as the public documentation and catalog entry on skills.addy.ie for Addy Osmani's `ci-cd-and-automation` skill, categorised under the Ship phase. It provides developers and autonomous agent harnesses with a high-level summary of the skill's purpose (automating CI/CD setup, shift-left quality gates, feature flags, and fast failure loops), explains triggering conditions, displays CLI installation commands via `npx skills`, outlines the 6-part standardized skill anatomy, and links to related Ship-phase skills (`git-workflow-and-versioning`, `deprecation-and-migration`, `documentation-and-adrs`). Without this external entry, agent developers discovering skills via the web catalog would lack a consumable overview of the skill's structure and CLI installation syntax before downloading the full repository.

## Phase — required
addy:Ship

## Inputs — required
Static rendered documentation snapshot; takes no runtime inputs. Displays installation commands for the skills CLI (`npx skills add addyosmani/agent-skills --skill ci-cd-and-automation`) and links to repository source `skills/ci-cd-and-automation/SKILL.md`.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Shift Left` — external/ci-cd-and-automation.md:5 — used here
- `Faster is Safer` — external/ci-cd-and-automation.md:5 — used here
- `feature flags` — external/ci-cd-and-automation.md:5 — used here
- `quality-gate pipelines` — external/ci-cd-and-automation.md:5 — used here
- `failure feedback loops` — external/ci-cd-and-automation.md:5 — used here
- `Ship phase` — external/ci-cd-and-automation.md:5 — used here
- `skills CLI` — external/ci-cd-and-automation.md:6 — used here
- `Overview` — external/ci-cd-and-automation.md:10 — used here
- `When to Use` — external/ci-cd-and-automation.md:10 — used here
- `Process` — external/ci-cd-and-automation.md:10 — used here
- `Rationalizations` — external/ci-cd-and-automation.md:10 — used here
- `Red Flags` — external/ci-cd-and-automation.md:10 — used here
- `Verification` — external/ci-cd-and-automation.md:10 — used here
- `Ship phase` — external/ci-cd-and-automation.md:12 — used here
- `/ship` — external/ci-cd-and-automation.md:12 — used here
- `trunk-based development` — external/ci-cd-and-automation.md:12 — used here
- `atomic commits` — external/ci-cd-and-automation.md:12 — used here
- `commit-as-save-point` — external/ci-cd-and-automation.md:12 — used here
- `code-as-liability` — external/ci-cd-and-automation.md:12 — used here
- `zombie-code removal` — external/ci-cd-and-automation.md:12 — used here
- `Architecture Decision Records` — external/ci-cd-and-automation.md:12 — used here
- `API docs` — external/ci-cd-and-automation.md:12 — used here
- `inline standards` — external/ci-cd-and-automation.md:12 — used here

## Structure
- ci-cd-and-automation (h1) — external/ci-cd-and-automation.md:5
- Install just this skill (h2) — external/ci-cd-and-automation.md:5
- How this skill is structured (h2) — external/ci-cd-and-automation.md:8
  - 01 Overview — external/ci-cd-and-automation.md:10
  - 02 When to Use — external/ci-cd-and-automation.md:10
  - 03 Process — external/ci-cd-and-automation.md:10
  - 04 Rationalizations — external/ci-cd-and-automation.md:10
  - 05 Red Flags — external/ci-cd-and-automation.md:10
  - 06 Verification — external/ci-cd-and-automation.md:10
- Ship phase (h3 sidebar) — external/ci-cd-and-automation.md:12
- More in the Ship phase (h2) — external/ci-cd-and-automation.md:12
- Product (h3 footer) — external/ci-cd-and-automation.md:15
- Setup (h3 footer) — external/ci-cd-and-automation.md:15
- Resources (h3 footer) — external/ci-cd-and-automation.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift: In external/ci-cd-and-automation.md:10, the page claims the skill workflow anatomy includes step 03 "Process" — external/ci-cd-and-automation.md:10, whereas skills/ci-cd-and-automation/SKILL.md:24 uses "The Quality Gate Pipeline" — skills/ci-cd-and-automation/SKILL.md:24 and contains no section named Process.
- doc-drift: In external/ci-cd-and-automation.md:10, step 04 is labeled "Rationalizations" — external/ci-cd-and-automation.md:10, whereas the in-repo skill section heading is "## Common Rationalizations" — skills/ci-cd-and-automation/SKILL.md:360.
- doc-drift: The external documentation description states "Automates CI/CD pipeline setup. Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops - automate the gates so speed and safety compound." — external/ci-cd-and-automation.md:5, which drifts from the in-repo skill frontmatter description "Automates CI/CD pipeline setup. Use when setting up or modifying build and deployment pipelines. Use when you need to automate quality gates, configure test runners in CI, or establish deployment strategies." — skills/ci-cd-and-automation/SKILL.md:3.
- orphan: external/ci-cd-and-automation.md is an external documentation snapshot not invoked or linked by any in-repo code or manifest entry point.

## Observations
- Standardized 6-part skill anatomy: The external documentation page defines a uniform 6-part anatomy for agent skills (`01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification`) under the explicit principle "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/ci-cd-and-automation.md:9. This provides a clean model for structuring agent-executable workflow instructions.
- CLI distribution mechanism: The page advertises single-skill installation via the open skills CLI ("npx skills add addyosmani/agent-skills --skill ci-cd-and-automation" — external/ci-cd-and-automation.md:8), demonstrating how individual skills are fetched and added into agent environments independently of the full repository.
- Low information density: The snapshot is 26,179 bytes of HTML, navigation chrome, inline SVG icons, and Astro styling, containing only a small amount of unique skill documentation compared to the 11,332-byte Markdown skill file `skills/ci-cd-and-automation/SKILL.md`.

## Context cost
26,179 bytes (external HTML document). Loads no external files. Approximate tokens: ~6,500.
