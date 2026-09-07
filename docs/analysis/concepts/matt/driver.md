---
package: matt
name: driver
slug: driver
kind: role
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# driver

## Definition — verbatim
(used, not defined)
> "is a <strong class="ah-prose-strong">reference</strong>, not a driver." — external/tdd.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/tdd.md | 26 | used here | Contrasts passive reference skills that specify rules with active driver entities that manage execution sessions. |

## Consumes
Reference standards and tickets/specs.

## Produces
Directed execution steps carrying out the workflow.

## When applied
Throughout workflow execution where an active driver (user or orchestrator skill) drives state changes.

## Sub-concepts
none

## Part of
tdd

## Implementation status
defects: doc-drift, orphan

## Design notes
A driver represents the active orchestrating role in Matt's design taxonomy. Matt distinguishes between "reference" skills (which codify rules, constraints, and quality standards without executing actions) and "driver" entities (such as the human developer or the /implement skill) that actively control execution flow and apply those references across iterative sessions.
