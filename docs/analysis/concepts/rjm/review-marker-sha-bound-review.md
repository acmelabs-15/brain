---
package: rjm
name: Review Marker (SHA-bound /review)
slug: review-marker-sha-bound-review
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

# Review Marker (SHA-bound /review)

## Definition — verbatim
> "Review Marker (SHA-bound /review)" — scripts/validation/pre_pr_sequence.py:409

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 409 | defined here | Pre-PR gate checking whether HEAD commit carries a SHA-bound Reviewed-By: /review@... trailer. |

## Consumes
Git commit message metadata of HEAD and current commit tree SHA.

## Produces
Verification status reporting whether a valid SHA-bound review trailer is attached.

## When applied
Run during pre-PR validation sequence (advisory) and during `/ship` (blocking).

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
A verification gate in `pre_pr_sequence.py` (Issue #1938) that checks whether the HEAD commit has a cryptographic SHA-bound `Reviewed-By: /review@...` commit message trailer. Advisory in local pre-PR checks, but enforced as a hard block during `/ship`.
