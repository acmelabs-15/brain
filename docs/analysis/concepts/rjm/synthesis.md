---
package: rjm
name: Synthesis
slug: synthesis
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
  - {path: .claude/skills/analyze/references/DEVELOPMENT.md, sha256: 5602933212eb69cbc09c0bc6999de9cfa4f8631ca9ee973ad271013c504002bb}
  - {path: .claude/skills/analyze/references/strategy-ooda-loop.md, sha256: b27a9dfc0c884c93391b7acecade4bd48ec460803cd31b4e1b2ddaff101e21b7}
  - {path: .claude/skills/analyze/scripts/analyze.py, sha256: ea1822893c16811b9955a98e2059edf0eb46073e93a8f2c3bd1f2f3abc255a4b}
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/scripts/decision-critic.py, sha256: 7023b3544db880a33f7ef99b77b933de70e70933c8a1be50bb226fe05039a033}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Synthesis

## Definition — verbatim
> "Consolidate findings, recommend actions" — .claude/skills/analyze/references/strategy-ooda-loop.md:37

## Also called — verbatim
"Phase 6: Synthesis (Step N)" — .claude/skills/analyze/SKILL.md:125

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/DEVELOPMENT.md | 33 | defined here | Designated as Step N mapped to get_step_guidance(is_final). |
| .claude/skills/analyze/references/strategy-ooda-loop.md | 37 | defined here | Aligned with the Orient + Decide stage consolidating findings into recommended actions. |
| .claude/skills/analyze/scripts/analyze.py | 11 | defined here | Documented in docstring as step 6 consolidating verified findings. |
| .claude/skills/analyze/SKILL.md | 4 | defined here | Highlighted in skill description as the terminal deliverable stage of analysis. |
| .claude/skills/analyze/SKILL.md | 125 | defined here | Executed as final Phase 6 generating prioritized recommendations and verdicts. |
| .claude/skills/decision-critic/scripts/decision-critic.py | 24 | defined here | Function exit point returning SYNTHESIS phase identifier. |
| .claude/skills/decision-critic/SKILL.md | 34 | defined here | Defined as step 7 rendering final decision verdict (STAND, REVISE, ESCALATE). |

## Consumes
Verified evidence, findings, and evaluation metrics gathered across prior steps.

## Produces
Prioritized findings report, executive summary, remediation recommendations, or final decision verdicts.

## When applied
The concluding phase of analytical and critical evaluation workflows.

## Sub-concepts
none

## Part of
phase-map

## Implementation status
defects: exit-code-mismatch, missing-path, orphan

## Design notes
The terminal phase in both `analyze` and `decision-critic` workflows in rjm. It consolidates intermediate findings, verifies supporting citations, and issues final prioritized verdicts and action plans.
