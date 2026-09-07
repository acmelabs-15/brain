---
package: rjm
name: Investigation Planning
slug: investigation-planning
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

# Investigation Planning

## Definition — verbatim
> "Commit to specific files, questions, hypotheses" — .claude/skills/analyze/references/strategy-ooda-loop.md:34

## Also called — verbatim
"Phase 3: Investigation Planning (Step 3)" — .claude/skills/analyze/SKILL.md:111

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/DEVELOPMENT.md | 30 | defined here | Designated as Step 3 mapped to get_step_guidance(step == 3). |
| .claude/skills/analyze/references/strategy-ooda-loop.md | 34 | defined here | Aligned with the Decide stage of the OODA loop committing to files, questions, and hypotheses. |
| .claude/skills/analyze/scripts/analyze.py | 8 | defined here | Documented in docstring as step 3 committing to specific files and questions. |
| .claude/skills/analyze/SKILL.md | 4 | defined here | Highlighted in skill description as a core phase producing prioritized findings. |
| .claude/skills/analyze/SKILL.md | 111 | defined here | Executed as Phase 3 where the agent defines specific questions and target files for deep inspection. |

## Consumes
Selected focus areas and priority classifications from Step 2.

## Produces
Concrete investigation plan specifying exact target files, hypotheses, and inspection questions.

## When applied
Step 3 of the analysis lifecycle prior to conducting deep analysis.

## Sub-concepts
none

## Part of
phase-map

## Implementation status
defects: exit-code-mismatch, missing-path, orphan

## Design notes
Phase 3 in rjm's analysis workflow, acting as the Decide stage of the OODA loop. It forces the agent to formulate explicit hypotheses and select concrete files and lines to inspect before launching deep analysis passes.
