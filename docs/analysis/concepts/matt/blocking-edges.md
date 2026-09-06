---
package: matt
name: blocking edges
slug: blocking-edges
kind: pattern
package_phase: matt:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/add-implement-spec-skill.md, sha256: abbf2ece03c6629782df0f815603378f275252c92379529eae0268e101721246}
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: README.md, sha256: 4079d981bc2ac0a52aaf2c76d1c1476f4297937a8ff3a2e2322b6b730dc2d4f6}
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
  - {path: skills/engineering/ask-matt/SKILL.md, sha256: b25d86fb36b1d294eeead5d7db529f86135f9671f2afcd607579a63bb2213769}
  - {path: skills/engineering/to-tickets/SKILL.md, sha256: 5c9fba69845c2519b9b35b9af42ae5142c21f8ca15ac2123dc2722002c8058ae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# blocking edges

## Definition — verbatim
> "Each ticket declares its **blocking edges**: the other tickets that have to finish before it can start." — docs/engineering/to-tickets.md:3

## Also called — verbatim
`blocking relationships` — skills/in-progress/implement-spec/SKILL.md:11

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/add-implement-spec-skill.md | 5 | used here | Mentions tickets forming a task graph via blocking edges. |
| CHANGELOG.md | 86 | used here | Discusses blocking edges between tickets in earlier release notes. |
| docs/engineering/to-tickets.md | 3 | defined here | Defines blocking edges as explicit declarations of prerequisites that must finish before a ticket starts. |
| external/implement.md | 73 | used here | Explains how unblocked tickets are discovered through resolved blocking edges. |
| external/to-tickets.md | 25 | defined here | Details declaring blocking edges during vertical slice planning. |
| README.md | 200 | used here | Highlights blocking edges as a key feature of ticket generation. |
| skills/engineering/ask-matt/SKILL.md | 23 | used here | References blocking edges when routing tasks through planning skills. |
| skills/engineering/to-tickets/SKILL.md | 38 | defined here | Instructs the agent to assign blocking edges to tickets during breakdown. |

## Consumes
Dependency analysis between vertical slice tickets during planning.

## Produces
Explicit blocker citations recorded in issue tracker fields or markdown frontmatter/headers.

## When applied
Declared during ticket decomposition in `/to-tickets` and evaluated during multi-agent dispatch in `implement-spec`.

## Sub-concepts
none

## Part of
tickets, task-graph

## Implementation status
clean

## Design notes
Explicit prerequisite declarations between tickets. Instead of relying on implicit numbered task ordering, blocking edges define the exact dependencies required before a ticket can proceed. Tickets without unresolved blocking edges are immediately available on the ready frontier, unlocking safe concurrent execution.
