---
package: rjm
name: Deep Analysis
slug: deep-analysis
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

# Deep Analysis

## Definition — verbatim
> "Execute the plan, collect evidence" — .claude/skills/analyze/references/strategy-ooda-loop.md:35

## Also called — verbatim
"Phase 4: Deep Analysis (Steps 4 to N-2)" — .claude/skills/analyze/SKILL.md:115

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/DEVELOPMENT.md | 31 | defined here | Designated as Steps 4 through N-2 in the phase map table. |
| .claude/skills/analyze/references/strategy-ooda-loop.md | 35 | defined here | Aligned with the Act stage of the OODA loop executing investigation plans. |
| .claude/skills/analyze/scripts/analyze.py | 9 | defined here | Documented in docstring as step 4 conducting progressive investigation with evidence. |
| .claude/skills/analyze/SKILL.md | 115 | defined here | Executed across intermediate steps collecting concrete evidence for each hypothesis. |

## Consumes
Hypotheses, target file lists, and inspection questions from Step 3.

## Produces
Concrete file-and-line citations, evidence findings, confirmed or refuted hypotheses.

## When applied
Multi-step investigation core (Steps 4 through N-2).

## Sub-concepts
none

## Part of
phase-map

## Implementation status
defects: exit-code-mismatch, missing-path, orphan

## Design notes
The core execution phase of rjm's analyze pipeline, spanning steps 4 to N-2. The agent progressively reads source code, runs tools, and collects byte-level citations to substantiate findings before synthesis.
