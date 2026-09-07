---
package: rjm
name: count ratchets
slug: count-ratchets
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md, sha256: b88c9ceff7c5d7e9daf9efaf4a8348565d993020bd7c38ecdcdb4e16e97ba18f}
  - {path: .github/AGENTS.md, sha256: 0e2bb069b704651214e2129c6d8b44543bcefe17f3878a3237f16602c4e3cd63}
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# count ratchets

## Definition — verbatim
> "Count Ratchets" — scripts/validation/pre_pr_sequence.py:221

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 207 | used here | Explains that merge-tree and count ratchets depend on unshallow history (`fetch-depth: 0`) in CI. |
| .github/AGENTS.md | 489 | used here | Describes the concurrent merge race where count ratchets freeze repo-wide violation totals in one-line files. |
| scripts/validation/pre_pr_sequence.py | 221 | defined here | Defines the `Count Ratchets` validation gate in the pre-PR verification sequence. |

## Consumes
Committed baseline violation files and repository-wide linter/validation counts.

## Produces
A pass/fail gate verdict ensuring current violation counts do not exceed recorded baselines.

## When applied
During the pre-PR validation sequence and CI PR validation runs.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Non-regression mechanism that freezes repo-wide violation counts in one-line baseline files, requiring PRs to maintain or decrease the count and preventing race-condition regressions when multiple PRs land.
