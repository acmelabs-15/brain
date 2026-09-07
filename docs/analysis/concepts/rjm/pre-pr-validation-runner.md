---
package: rjm
name: pre-PR validation runner
slug: pre-pr-validation-runner
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md, sha256: 9c9d265c58a594d301eccfdd19ae672962b14346fafec48e28c327e3ce1fbf1c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pre-PR validation runner

## Definition — verbatim
(used, not defined)

> "pre-PR validation runner" — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md | 37 | used here | Mentions ADR-049's definition of the pre-PR validation runner in the historical context of local gate tier accumulation. |

## Consumes
Repository working tree state, git index, staged files, and baseline tracking records.

## Produces
Comprehensive sequence verdict over 47 distinct validation checks including syntax, ratchets, encoding, and path integrity.

## When applied
During pre-push hooks or manually before opening or updating a pull request.

## Sub-concepts
count-ratchets, taste-lint

## Part of
none

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
Comprehensive multi-gate validation test runner (implemented via `scripts/validation/pre_pr_sequence.py`) that orchestrates an ordered sequence of dozens of repository integrity, ratchet, and contract checks before code is pushed or reviewed.
