---
package: rjm
name: Always-on Corpus Claims
slug: always-on-corpus-claims
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Always-on Corpus Claims

## Definition — verbatim
> "Always-on Corpus Claims" — scripts/validation/pre_pr_sequence.py:419

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 419 | defined here | Pre-PR gate verifying that documented metrics in model-context-doctrine.md match measurements. |

## Consumes
`model-context-doctrine.md` documentation claims and live repository instruction measurements.

## Produces
Pass/fail verification verdict ensuring doctrine documentation accurately matches live instruction metrics.

## When applied
Evaluated during the pre-PR validation sequence before submitting pull requests.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
A pre-PR gate in `pre_pr_sequence.py` (Issue #4285) that reconciles the byte counts, file counts, and multipliers documented in `model-context-doctrine.md` against live filesystem measurements, catching documentation drift in under a second locally rather than in CI.
