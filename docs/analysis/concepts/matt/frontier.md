---
package: matt
name: frontier
slug: frontier
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
  - {path: docs/engineering/wayfinder.md, sha256: 5e186ef2b90a77ccf7b48ff7c72bbc97fc5c2ba0abe316b91fefa206cb18430e}
  - {path: docs/productivity/grill-me.md, sha256: 20608431988f36024435ba01a02b2fc2e159a558465c8f0d680acdf41cc0e78c}
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
  - {path: external/grill-me.md, sha256: 8ef33c20bc9870b89757d0d6238d319381bb0b7afb299d3e4ef1f92d20dba1d3}
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md, sha256: 7dcda20a2eb4bdc89b95d1143423c0691309921cadae3132e6424f371030506e}
  - {path: skills/engineering/to-tickets/SKILL.md, sha256: 5c9fba69845c2519b9b35b9af42ae5142c21f8ca15ac2123dc2722002c8058ae}
  - {path: skills/engineering/wayfinder/SKILL.md, sha256: fee6e1d0c50f0e736b4ef8a599060c959afae904c9a97d82c97f049fcc3aa0f1}
  - {path: skills/in-progress/README.md, sha256: febfa7e4b0e2409af96ad8d045b9552e75cc758ee068a0e7109f6b973e91cd14}
  - {path: skills/in-progress/implement-spec/SKILL.md, sha256: f703b5f41df9c2202e19540d203e0d5fc32613572a838a070136cc22e712b129}
  - {path: skills/productivity/grilling/SKILL.md, sha256: 10ff989e7498b23b5acb49d5048f11dcd906757d2f79c5cdf8a00001381296f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# frontier

## Definition — verbatim
> "The **frontier** is the open, unblocked, unclaimed tickets (the edge of the known). A session claims a ticket by assigning it to itself before doing any work, so the assignee *is* the claim and concurrent sessions skip it." — docs/engineering/wayfinder.md:40

## Also called — verbatim
`the edge of the known` — docs/engineering/wayfinder.md:40

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 126 | defined here | Changelog definition of the frontier across grilling and wayfinder |
| docs/engineering/to-tickets.md | 40 | defined here | Explains ticket readiness on the frontier for real issue trackers |
| docs/engineering/wayfinder.md | 40 | defined here | Defines the frontier as open, unblocked, unclaimed tickets at the edge of the known |
| docs/productivity/grill-me.md | 3 | defined here | Success criterion requiring that the frontier has moved through grilling |
| docs/productivity/grilling.md | 5 | defined here | Core definition of the frontier in grilling as the boundary of current shared understanding |
| external/grill-me.md | 25 | defined here | External doc criterion for moving the frontier through challenged assumptions |
| external/grilling.md | 26 | defined here | Explains round-based question generation expanding the frontier |
| external/implement.md | 50 | used here | Describes grabbing tickets from the frontier to drive implementation |
| external/to-tickets.md | 39 | defined here | Details how native tracker links place unblocked tickets on the frontier |
| external/wayfinder.md | 44 | defined here | Describes the frontier of open unblocked tickets in wayfinder maps |
| skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md | 28 | used here | Local issue tracker instructions for inspecting unblocked tickets on the frontier |
| skills/engineering/to-tickets/SKILL.md | 65 | defined here | Quality check ensuring at least one unblocked ticket exists on the frontier |
| skills/engineering/wayfinder/SKILL.md | 69 | defined here | Operational definition of the frontier in wayfinder ticket dispatch |
| skills/in-progress/implement-spec/SKILL.md | 11 | defined here | In-progress skill referencing tickets on the frontier |
| skills/in-progress/README.md | 17 | used here | Overview mentioning frontier-based ticket picking |
| skills/productivity/grilling/SKILL.md | 8 | defined here | Grilling definition of advancing the frontier of settled decisions |

## Consumes
A set of tickets with dependency edges, or a set of assumptions and questions in discovery

## Produces
The actionable set of unblocked work items ready for immediate execution

## When applied
When selecting the next ticket to implement or identifying the next round of questions to grill

## Sub-concepts
none

## Part of
wayfinder, to-tickets, grilling

## Implementation status
clean

## Design notes
Across both inquiry and execution, the frontier represents the dynamic boundary of settled understanding and unblocked work—the specific items that can be acted upon immediately without waiting on unresolved dependencies.
