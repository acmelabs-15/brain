---
package: rjm
name: extended_investigation_protocol
slug: extended-investigation-protocol
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

# extended_investigation_protocol

## Definition — verbatim
> "<extended_investigation_protocol>" — .claude/skills/analyze/scripts/analyze.py:462

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/scripts/analyze.py | 462 | defined here | Deep analysis phase instruction tag governing remaining gaps, open questions, and pattern validation. |

## Consumes
Accumulated state from prior investigation passes.

## Produces
Verification of unanswered questions, validation of cross-file patterns, strengthened evidence citations, or step reduction if complete.

## When applied
Invoked in Phase 4 (Deep Analysis) for steps beyond pass 2 (step 6+ overall) prior to verification.

## Sub-concepts
none

## Part of
analyze

## Implementation status
defects: exit-code-mismatch

## Design notes
`extended_investigation_protocol` handles iterative deep analysis steps (pass 3 and beyond), driving systematic closure of open questions and gaps before transitioning to formal completeness verification.
