---
package: rjm
name: final_consolidation
slug: final-consolidation
kind: technique
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/scripts/analyze.py, sha256: ea1822893c16811b9955a98e2059edf0eb46073e93a8f2c3bd1f2f3abc255a4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# final_consolidation

## Definition — verbatim
> "<final_consolidation>" — .claude/skills/analyze/scripts/analyze.py:341

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/scripts/analyze.py | 341 | defined here | Synthesis step instruction structuring all verified findings by severity category. |

## Consumes
Verified findings that cleared the verification and evidence quality check phases.

## Produces
Findings organized into CRITICAL, HIGH, MEDIUM, and LOW tiers with file:line, code quotes, and remediation guidance.

## When applied
Invoked in Phase 6 (Synthesis) when is_final is true in analyze.py.

## Sub-concepts
none

## Part of
analyze

## Implementation status
defects: exit-code-mismatch

## Design notes
`final_consolidation` structures the culmination of the analysis pipeline, ordering verified findings strictly by severity tier (critical to low) rather than discovery order to guarantee actionable focus for developers.
