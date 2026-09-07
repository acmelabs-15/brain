---
package: rjm
name: commit-limit-bypass label
slug: commit-limit-bypass-label
kind: name-only
package_phase: none
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

# commit-limit-bypass label

## Definition — verbatim
(used, not defined)

> "Remove the commit-count block and its commit-limit-bypass label" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 12 | used here | Retired GitHub PR label used to bypass commit-count blocks, removed under ADR-099. |

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
clean

## Design notes
A GitHub label name (`commit-limit-bypass`), classified as name-only per D-023 as an issue tracker label identifier rather than a lifecycle concept.
