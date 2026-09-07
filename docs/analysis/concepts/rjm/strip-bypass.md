---
package: rjm
name: strip bypass
slug: strip-bypass
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-087-held-out-validated-improvement.md, sha256: f599d484b96816678b0f4d3b72e55cf2794d3a10a1c5de1b212e4d3f920aa513}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# strip bypass

## Definition — verbatim
> "A known corpus beside an unknown one counts as a disagreement, which is what closes the strip bypass described below." — .agents/architecture/ADR-087-held-out-validated-improvement.md:283-285

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 284 | defined here | Identifies an integrity vulnerability where stripping metadata envelopes converted known corpus mismatches into permitted unknown comparisons. |

## Consumes
Evaluation result metadata envelopes and baseline corpus commitments.

## Produces
Closed vulnerability by treating known-vs-unknown corpus pairings as active disagreements.

## When applied
Enforced during corpus verification in `optimize-artifact.py gate`.

## Sub-concepts
none

## Part of
declared-corpora

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
An anti-tampering pattern that prevents callers from evading corpus mismatch refusals. In naive implementations, stripping the results envelope turned a known corpus mismatch into two null corpora; ADR-087 prevents this by pinning the corpus in `split.json` and treating known-vs-null as an active conflict.
