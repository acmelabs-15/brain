---
package: rjm
name: MAX_JUDGE_EVIDENCE_CHARS
slug: max-judge-evidence-chars
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MAX_JUDGE_EVIDENCE_CHARS

## Definition — verbatim
(used, not defined)

> "MAX_JUDGE_EVIDENCE_CHARS = 16_384" — scripts/eval/eval-rule-activation.py:106

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-rule-activation.py | 106 | defined here | Constant capping the maximum character count (16,384) of response evidence parsed by the judge. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
Safety limit constant constraining response evidence string lengths sent to evaluation judges; classified as `name-only` per D-023.
