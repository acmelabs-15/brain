---
package: rjm
name: Hide Delegate
slug: hide-delegate
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/refactoring.md, sha256: 4df115ec2bd76ec116af2e77c07f38a6c1a8ad6fc837386afdeb85276858f6fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Hide Delegate

## Definition — verbatim
(used, not defined)

> "Suggests Hide Delegate or, if the chain is load-bearing, accept the coupling and document it." — .claude/skills/software-engineering-library/references/refactoring.md:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 68 | used here | Suggested as a refactoring transformation to encapsulate navigation and resolve Message Chains smells. |

## Consumes
Client code directly invoking delegate objects through an intermediary host.

## Produces
Forwarding methods on the host object that shield client callers from underlying delegates.

## When applied
Applied to eliminate Message Chains by creating forwarding methods on the immediate server object.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Hide Delegate is a refactoring technique in rjm's software engineering library. To prevent clients from navigating through an object to reach its delegate, the host object provides its own forwarding method that wraps the delegate invocation. This enforces encapsulation, shields callers from downstream structural reorganizations, and upholds the Law of Demeter.
