---
package: matt
name: vertical slices
slug: vertical-slices
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/tdd/SKILL.md, sha256: cb01f66bebfaa25fa1f88e6b7e769cd9fd9f35b1120b8563749820738814c927}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# vertical slices

## Definition — verbatim
> "Work in **vertical slices** instead: one test → one implementation → repeat, each test a **tracer bullet** that responds to what the last cycle taught you." — skills/engineering/tdd/SKILL.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/tdd/SKILL.md | 32 | defined here | Prescribed as the remedy to horizontal slicing, coupling one test to one implementation in sequence. |

## Consumes
System requirements or decomposed ticket specifications.

## Produces
Incrementally functioning, end-to-end verified capabilities.

## When applied
During both ticket decomposition and test-driven implementation cycles.

## Sub-concepts
tracer-bullet, one-slice-at-a-time

## Part of
tdd, to-tickets

## Implementation status
defects: internal-contradiction (skills/engineering/tdd/SKILL.md:38 red-green-refactor contradiction)

## Design notes
Vertical slicing requires building end-to-end functionality across all architectural layers (schema, API, UI, tests) one small increment at a time. It prevents the hazards of horizontal slicing (where all tests or all database tables are created first without integration), allowing each completed slice to deliver immediate, testable feedback before tackling the next cycle.
