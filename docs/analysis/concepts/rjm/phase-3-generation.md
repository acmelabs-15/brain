---
package: rjm
name: "Phase 3: Generation"
slug: phase-3-generation
kind: phase
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/SKILL.md, sha256: 48f99b914a2a3d461fcafe31057925156480895fffae14e6ba0aef9fefe88d19}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 3: Generation

## Definition — verbatim
> "## Phase 3: Generation" — .claude/skills/skillforge/SKILL.md:176

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/SKILL.md | 176 | defined here | Third procedural phase of skill creation generating directory structure, SKILL.md, references, assets, and scripts. |

## Consumes
Validated XML skill specification from Phase 2, architecture pattern selection, and template assets.

## Produces
Skill directory containing SKILL.md, references/, assets/, and optional scripts/.

## When applied
Applied after specification validation passes, enforcing sequential generation from high-level documentation to reference details and executable scripts.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: doc-drift, missing-path, script-bug

## Design notes
Phase 3: Generation is the authoring and file creation phase of SkillForge in rjm, establishing an explicit generation order (structure, main markdown, progressive disclosure references, scripts) to prevent context bloat.
