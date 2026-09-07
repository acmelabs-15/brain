---
package: rjm
name: evidence_quality_check
slug: evidence-quality-check
kind: checklist
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

# evidence_quality_check

## Definition — verbatim
> "<evidence_quality_check>" — .claude/skills/analyze/scripts/analyze.py:309

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/scripts/analyze.py | 309 | defined here | Verification phase tag in analyze.py defining criteria for confirming critical and high severity findings. |

## Consumes
Candidate critical and high severity findings produced during earlier analysis passes.

## Produces
Verified findings confirmed with exact file:line references, quoted code, clear impact, and actionable recommendations, or downgraded unverified findings.

## When applied
Applied during Phase 5 (Verification) of the systematic multi-step analysis workflow prior to final synthesis.

## Sub-concepts
none

## Part of
analyze

## Implementation status
defects: exit-code-mismatch

## Design notes
`evidence_quality_check` acts as a quality gate in `analyze.py` that prevents unevidenced or hallucinated findings from entering the final report. It mandates that any high or critical severity issue include 2–5 lines of quoted code and exact line numbers, downgrading unevidenced items.
