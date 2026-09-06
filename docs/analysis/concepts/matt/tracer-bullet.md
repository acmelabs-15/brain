---
package: matt
name: tracer bullet
slug: tracer-bullet
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
  - {path: docs/engineering/tdd.md, sha256: 879c4bad53e79f3972dd3b37438330f9ff86035843f3bf83ef41ff51e8337860}
  - {path: docs/engineering/to-spec.md, sha256: 47dbcde3e8ba381dc6650206bf36c64336c91f2d9de86ab1898355155081fe5a}
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
  - {path: skills/engineering/tdd/SKILL.md, sha256: cb01f66bebfaa25fa1f88e6b7e769cd9fd9f35b1120b8563749820738814c927}
  - {path: skills/engineering/to-tickets/SKILL.md, sha256: 5c9fba69845c2519b9b35b9af42ae5142c21f8ca15ac2123dc2722002c8058ae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# tracer bullet

## Definition — verbatim
> "Every ticket is a **tracer bullet**: a narrow but complete path through every layer of the change (schema, API, UI, tests) that can be demoed on its own the moment it lands." — docs/engineering/to-tickets.md:5

## Also called — verbatim
`vertical slice` — docs/engineering/tdd.md:33

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 76 | used here | Listed as one of the skill's leading words to maintain consistent language across documentation. |
| docs/engineering/tdd.md | 33 | defined here | Defined in the context of vertical slices where the first TDD cycle proves a single path end to end. |
| docs/engineering/to-spec.md | 81 | used here | Emphasizes that specifications should establish seams for tracer bullets rather than exhaustive implementations. |
| docs/engineering/to-tickets.md | 5 | defined here | Defines every ticket as a narrow but complete path through every layer of a change that is independently demoable. |
| external/implement.md | 44 | used here | Explains that tickets produced by to-tickets are tracer-bullet vertical slices sized for a single fresh context window. |
| external/tdd.md | 37 | defined here | Recommends working in vertical slices where the first cycle is a tracer bullet proving a path end to end. |
| external/to-spec.md | 69 | used here | Mentions tracer bullet tickets in the context of splitting specifications. |
| external/to-tickets.md | 26 | defined here | Outlines vertical slice rules requiring each ticket to be an independently verifiable tracer bullet. |
| external/writing-for-agents.md | 43 | used here | Advises structuring tasks as tracer bullets across system boundaries. |
| skills/engineering/tdd/SKILL.md | 32 | defined here | Prescribes vertical slicing where each test is a tracer bullet responding to what the previous cycle taught. |
| skills/engineering/to-tickets/SKILL.md | 27 | defined here | Directs the agent to break planning work into tracer bullet tickets. |

## Consumes
A specification or architectural plan with identified seams and agreed boundaries.

## Produces
Vertically sliced tickets or test cycles spanning all architectural layers end to end.

## When applied
Applied during ticket breakdown (`/to-tickets`) or initial TDD cycles (`/tdd`) to establish end-to-end verification.

## Sub-concepts
none

## Part of
to-tickets, tdd

## Implementation status
clean

## Design notes
A core decomposition principle in Matt Pocock's methodology where units of work cut vertically through every layer of the system (database, domain logic, API, UI, tests) rather than horizontally by technical tier. Each tracer bullet proves an end-to-end path immediately, enabling continuous validation and sizing work to fit safely inside a single fresh context window.
