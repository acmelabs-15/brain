---
package: rjm
name: first_pass_protocol
slug: first-pass-protocol
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

# first_pass_protocol

## Definition — verbatim
> "<first_pass_protocol>" — .claude/skills/analyze/scripts/analyze.py:408

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/scripts/analyze.py | 408 | defined here | Deep analysis phase instruction tag governing initial investigation of P1 focus areas. |

## Consumes
Investigation plan commitments from Step 3 (Phase 3).

## Produces
Initial documented findings with required evidence formatting (severity, file:line, 2–5 quoted lines, explanation) and updated hypotheses.

## When applied
Invoked in Phase 4 (Deep Analysis) at deep analysis step 1 (step 4 overall).

## Sub-concepts
none

## Part of
analyze

## Implementation status
defects: exit-code-mismatch

## Design notes
`first_pass_protocol` governs the first deep analysis execution step, disciplining the agent to read target files, answer committed questions, update hypotheses, and capture verbatim code evidence for highest-priority focus areas.
