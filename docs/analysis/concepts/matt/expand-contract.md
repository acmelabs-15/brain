---
package: matt
name: expand–contract
slug: expand-contract
kind: pattern
package_phase: matt:to-tickets
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
  - {path: skills/engineering/to-tickets/SKILL.md, sha256: 5c9fba69845c2519b9b35b9af42ae5142c21f8ca15ac2123dc2722002c8058ae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# expand–contract

## Definition — verbatim
> "Don't force it into a tracer bullet; sequence it as **expand–contract**. First expand: add the new form beside the old so nothing breaks." — skills/engineering/to-tickets/SKILL.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 179 | defined here | Introduces expand-contract pattern for wide refactors in changelog |
| docs/engineering/to-tickets.md | 48 | defined here | Detailed breakdown of expand, migrate, and contract phases |
| external/to-tickets.md | 43 | defined here | Web doc describing the 3-stage expand-contract sequence |
| skills/engineering/to-tickets/SKILL.md | 40 | defined here | Step-by-step instructions for breaking wide refactors into expand, migrate, and contract tickets |

## Consumes
An interface or data structure undergoing a breaking evolutionary change

## Produces
A sequence of tickets: expand (add new beside old), migrate (move callers in batches), contract (delete old)

## When applied
When executing wide refactorings that cannot land in a single atomic commit

## Sub-concepts
none

## Part of
to-tickets, wide-refactor

## Implementation status
clean

## Design notes
Expand-contract solves the dilemma of wide refactorings by phasing changes so that intermediate states remain continuously green and deployable, eliminating the risk of long-lived broken branches.
