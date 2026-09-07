---
package: rjm
name: taste-lints
slug: taste-lints
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/SKILL.md, sha256: a7aaeeabf10383fdbee167c8b0ca013789173907695cae91958202cafcea1e12}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
  - {path: scripts/validation/check_build_gates.py, sha256: df1360e6ff865be7eecb97ece1f78d0979415b85c87ea4e19cf9b693ee511102}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# taste-lints

## Definition — verbatim
> "# Taste Lints" — .claude/skills/taste-lints/SKILL.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/SKILL.md | 39 | used here | Referenced and applied in SKILL.md during verification and operational workflows. |
| .claude/skills/review/SKILL.md | 4 | used here | Referenced and applied in SKILL.md during verification and operational workflows. |
| .claude/skills/taste-lints/SKILL.md | 8 | defined here | Primary definition of `taste-lints` within SKILL.md. |
| scripts/validation/check_build_gates.py | 7 | used here | Referenced and applied in check_build_gates.py during verification and operational workflows. |

## Consumes
Developer inputs, configuration parameters, and codebase artifacts.

## Produces
Standardized system behaviors, verified outputs, and structured lifecycle artifacts.

## When applied
Invoked across development, analysis, and synthesis phases.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
An operational technique or artifact (taste-lints) utilized within the rjm ecosystem to ensure consistency and systematic execution.
