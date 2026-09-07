---
package: matt
name: grills
slug: grills
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# grills

## Definition — verbatim
(used, not defined)

> "It writes them up as a self-contained HTML report, and then [grills](https://www.aihero.dev/ai-coding-dictionary/grilling) you through whichever one you pick." — docs/engineering/improve-codebase-architecture.md:3

## Also called — verbatim
grilling — docs/engineering/improve-codebase-architecture.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/improve-codebase-architecture.md | 3 | used here | Describes the interactive interrogation phase conducted after a user selects an architectural candidate. |

## Consumes
An architectural candidate selected by the user from the survey report.

## Produces
Rigorous alignment on boundaries, constraints, and surviving tests before code modification begins.

## When applied
Immediately after picking a candidate from an improve-codebase-architecture survey report.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Grills is the active verb form of the grilling interview technique. In improve-codebase-architecture, once a candidate is chosen, the agent grills the human on constraints and design trade-offs to ensure consensus before any refactoring takes place.
