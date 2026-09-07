---
package: rjm
name: Focus Selection
slug: focus-selection
kind: phase
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
  - {path: .claude/skills/analyze/references/DEVELOPMENT.md, sha256: 5602933212eb69cbc09c0bc6999de9cfa4f8631ca9ee973ad271013c504002bb}
  - {path: .claude/skills/analyze/references/strategy-ooda-loop.md, sha256: b27a9dfc0c884c93391b7acecade4bd48ec460803cd31b4e1b2ddaff101e21b7}
  - {path: .claude/skills/analyze/scripts/analyze.py, sha256: ea1822893c16811b9955a98e2059edf0eb46073e93a8f2c3bd1f2f3abc255a4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Focus Selection

## Definition — verbatim
> "Classify findings by dimension, assign priorities" — .claude/skills/analyze/references/strategy-ooda-loop.md:33

## Also called — verbatim
"Phase 2: Focus Selection (Step 2)" — .claude/skills/analyze/SKILL.md:107

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/DEVELOPMENT.md | 29 | defined here | Designated as Step 2 mapped to get_step_guidance(step == 2). |
| .claude/skills/analyze/references/strategy-ooda-loop.md | 33 | defined here | Aligned with the Orient stage of the OODA loop to prioritize findings by dimension. |
| .claude/skills/analyze/scripts/analyze.py | 7 | defined here | Documented in docstring as step 2 classifying investigation areas. |
| .claude/skills/analyze/SKILL.md | 107 | defined here | Executed as Phase 2 to select target dimensions and allocate investigation effort. |

## Consumes
Exploration phase findings, architectural signals.

## Produces
Prioritized candidate areas classified by analysis dimensions (architecture, security, quality).

## When applied
Step 2 of the analysis lifecycle following broad exploration.

## Sub-concepts
none

## Part of
phase-map

## Implementation status
defects: exit-code-mismatch, missing-path, orphan

## Design notes
Phase 2 in rjm's analyze skill where initial observations are categorized and prioritized across investigation dimensions, ensuring that limited budget is focused on highest-risk components.
