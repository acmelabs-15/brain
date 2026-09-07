---
package: matt
name: decision tickets
slug: decision-tickets
kind: artifact
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/prototype.md, sha256: dba351ad5a0c4763e295b8c01b72bf57e2a757c1b642c18305939f0ad0090871}
  - {path: docs/engineering/wayfinder.md, sha256: 5e186ef2b90a77ccf7b48ff7c72bbc97fc5c2ba0abe316b91fefa206cb18430e}
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: skills/engineering/ask-matt/SKILL.md, sha256: b25d86fb36b1d294eeead5d7db529f86135f9671f2afcd607579a63bb2213769}
  - {path: skills/engineering/wayfinder/SKILL.md, sha256: fee6e1d0c50f0e736b4ef8a599060c959afae904c9a97d82c97f049fcc3aa0f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# decision tickets

## Definition — verbatim
> "This skill charts the way as a **shared map** on the repo's issue tracker, then works its **decision tickets** (questions whose resolution is a decision, not slices of a build to execute) one at a time until the route is clear." — skills/engineering/wayfinder/SKILL.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/prototype.md | 65 | used here | Identifies prototype tasks as one of four types of decision tickets in a wayfinder map. |
| docs/engineering/wayfinder.md | 3 | defined here | Defines wayfinder charting large initiatives into a shared map of decision tickets. |
| docs/productivity/grilling.md | 17 | used here | Notes wayfinder running grilling sessions inside decision tickets to resolve ambiguity. |
| external/grilling.md | 30 | used here | Mentions structuring long-term efforts into decision tickets for iterative grilling. |
| external/prototype.md | 66 | used here | Describes linking concrete prototype assets to decision tickets on the project tracker. |
| external/wayfinder.md | 25 | defined here | Explains that wayfinder maps break big goals into discrete decision tickets. |
| skills/engineering/ask-matt/SKILL.md | 44 | defined here | Describes wayfinder charting shared maps of decision tickets that produce decisions rather than deliverables. |
| skills/engineering/wayfinder/SKILL.md | 7 | defined here | Defines decision tickets as questions whose resolution is a decision rather than execution slices. |

## Consumes
A high-level project goal or destination obscured by architectural or domain ambiguity.

## Produces
A tracked issue on the repository issue tracker whose resolution yields a documented decision or concrete asset.

## When applied
When mapping out large, multi-session initiatives in wayfinder across four types (grilling, prototype, research, task).

## Sub-concepts
none

## Part of
wayfinder

## Implementation status
clean

## Design notes
Decision tickets represent the fundamental unit of progress in wayfinder. Unlike execution tickets that produce production code diffs, decision tickets represent questions whose output is a decision or tangible asset, methodically clearing away project fog before code execution starts.
