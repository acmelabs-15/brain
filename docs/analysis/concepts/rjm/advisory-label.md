---
package: rjm
name: advisory label
slug: advisory-label
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md, sha256: b88c9ceff7c5d7e9daf9efaf4a8348565d993020bd7c38ecdcdb4e16e97ba18f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# advisory label

## Definition — verbatim
(used, not defined)

> "gets a hard stop; the mitigating fact is that the `needs-split` advisory label" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:135

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 135 | used here | Governance classification of labels that provide reviewer visibility without blocking workflows. |

## Consumes
Quality gate measurements and threshold evaluations.

## Produces
Informational labels applied to PRs without failing CI or blocking pushes.

## When applied
When alerting contributors and reviewers to metrics without halting delivery.

## Sub-concepts
needs-split

## Part of
quality-gates

## Implementation status
clean

## Design notes
A governance pattern where metadata labels inform reviewers and contributors of potential concerns without enforcing hard blocking gates that fail closed on credential or environment issues.
