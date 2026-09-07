---
package: rjm
name: corpus_pinned
slug: corpus-pinned
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-087-held-out-validated-improvement.md, sha256: f599d484b96816678b0f4d3b72e55cf2794d3a10a1c5de1b212e4d3f920aa513}
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# corpus_pinned

## Definition — verbatim
> "carries `corpus_pinned` instead: `true` means the split named the corpus both" — .agents/architecture/ADR-087-held-out-validated-improvement.md:326

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 326 | defined here | Boolean flag in the gate decision payload indicating whether the split file explicitly pinned the corpus against which results were checked. |
| scripts/eval/README.md | 1268 | defined here | Documented verdict property reporting whether the split pinned the corpus identity. |

## Consumes
Split configuration and results envelopes.

## Produces
Boolean flag in gate decision payload.

## When applied
Evaluated during gating comparisons in `optimize-artifact.py gate`.

## Sub-concepts
none

## Part of
declared-corpora

## Implementation status
defects: doc-drift, internal-contradiction, missing-path, script-bug

## Design notes
A transparency field in the gate decision payload reporting whether the evaluation split explicitly bound the corpus identity (`true`) or whether the comparison relied solely on mutual agreement between baseline and candidate result envelopes (`false`).
