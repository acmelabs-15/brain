---
package: rjm
name: declared corpora
slug: declared-corpora
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

# declared corpora

## Definition — verbatim
> "### 5. A comparison whose declared corpora disagree is refused" — .agents/architecture/ADR-087-held-out-validated-improvement.md:278

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 278 | defined here | Section heading establishing that comparisons between evaluation results scored on different corpora are refused. |

## Consumes
Corpus metadata recorded in split files and candidate/baseline result envelopes.

## Produces
Integrity check guaranteeing comparison evaluates artifact differences rather than benchmark changes.

## When applied
Enforced during preflight checks before consultation ledger charging.

## Sub-concepts
corpus-verified, corpus-pinned, strip-bypass

## Part of
held-out-validation

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A consistency pattern ensuring that evaluations compare apples to apples. By requiring that the baseline results, candidate results, and initial split all declare the identical underlying corpus hash, the gate guarantees that performance deltas reflect prompt/artifact modifications rather than changes in test fixtures.
