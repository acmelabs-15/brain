---
package: rjm
name: ROTI Assessment
slug: roti-assessment
kind: technique
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
  - {path: .claude/skills/retrospective/references/learning-template.md, sha256: 22be20c049d593d49ff4a9c5fe1df636ed19f5721492ee137679df08478d802b}
  - {path: .claude/skills/retrospective/scripts/run_retrospective.py, sha256: 7bef09acd131cbf5a9bbe725c86d14b2024da5828e639f81d0d02cbdcf4e1d9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ROTI Assessment

## Definition — verbatim
> "## ROTI Assessment" — .claude/skills/retrospective/references/frameworks.md:448

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/frameworks.md | 448 | defined here | Closing activity template scoring retrospective value from 0 (wasted cycles) to 4 (exceptional return). |
| .claude/skills/retrospective/references/learning-template.md | 146 | used here | Template section in Phase 5 capturing retrospective score, benefits, duration, and verdict. |
| .claude/skills/retrospective/scripts/run_retrospective.py | 343 | defined here | Markdown section header rendered in artifact scaffold for closing activity assessment. |

## Consumes
Time invested during the retrospective and qualitative benefits received from insights generated.

## Produces
Numerical score (0-4), list of benefits, duration record, and operational verdict (Continue, Modify, or Stop).

## When applied
Applied at the end of Phase 5 (Persist and Close) to evaluate whether retrospective effort was justified.

## Sub-concepts
none

## Part of
closing-activities

## Implementation status
clean

## Design notes
ROTI Assessment (Return on Time Invested) acts as an economic governance mechanism over the retrospective practice. By measuring whether the insights and process fixes generated justify the token and execution time spent, it prevents retrospectives from becoming empty bureaucratic rituals.
