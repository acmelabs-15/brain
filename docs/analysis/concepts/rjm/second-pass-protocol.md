---
package: rjm
name: second_pass_protocol
slug: second-pass-protocol
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

# second_pass_protocol

## Definition — verbatim
> "<second_pass_protocol>" — .claude/skills/analyze/scripts/analyze.py:435

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/scripts/analyze.py | 435 | defined here | Deep analysis phase instruction tag directing root cause tracing and caller/callee examination. |

## Consumes
Findings and hypotheses generated during first-pass investigation.

## Produces
Root cause traces, caller/callee relationships, related pattern classifications, and P2 focus area investigation results.

## When applied
Invoked in Phase 4 (Deep Analysis) at deep analysis step 2 (step 5 overall).

## Sub-concepts
none

## Part of
analyze

## Implementation status
defects: exit-code-mismatch

## Design notes
`second_pass_protocol` shifts the agent's posture from initial defect spotting to root cause tracing and boundary exploration, examining callers, callees, configuration, and transitioning to P2 priorities.
