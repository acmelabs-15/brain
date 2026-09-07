---
package: rjm
name: Pre-PR Validation Gates
slug: pre-pr-validation-gates
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-049-pre-pr-validation-gates.md, sha256: e9fca386ce2c9bfe87b801d629d7ebf2d44a14111a1bb6906e8e07b991006470}
  - {path: .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md, sha256: b88c9ceff7c5d7e9daf9efaf4a8348565d993020bd7c38ecdcdb4e16e97ba18f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pre-PR Validation Gates

## Definition — verbatim
> "# ADR-049: Pre-PR Validation Gates" — .agents/architecture/ADR-049-pre-pr-validation-gates.md:12

## Also called — verbatim
`Pre-PR Validation Gates` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:279

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-049-pre-pr-validation-gates.md | 12 | defined here | Defined as an architectural decision establishing mandatory local pre-PR validation checks. |
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 279 | used here | Reconciles ADR-049 pre-PR validation gate policy by removing commit-count blocking check. |

## Consumes
Git working tree diff, staged commits, and referenced architectural decision records.

## Produces
Validation check verdicts across commit count, files changed, lines added, and ADR compliance.

## When applied
Triggered locally prior to PR creation or git push to enforce project constraints before review.

## Sub-concepts
local-validation-gate, atomic-commit-standard, adr-compliance, bypass-mechanism

## Part of
shift-left

## Implementation status
defects: missing-path

## Design notes
A pre-submission quality gate that programmatically validates commit count, file changes, line additions, synthesis issues, and ADR compliance locally before PR submission, shifting defect detection left to prevent noisy review cycles and bloated pull requests.
