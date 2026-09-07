---
package: matt
name: portable module
slug: portable-module
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/prototype/LOGIC.md, sha256: f61c7d249e786a79ef289018901c348271e1798dd0b0bc5607b5c6f4d4a01ab9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# portable module

## Definition — verbatim
> "Put the actual logic (the bit that's answering the question) in a single `<script>` block written as a small, pure module that could be lifted out and dropped into the real codebase later. The page around it is throwaway; this module isn't." — skills/engineering/prototype/LOGIC.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/prototype/LOGIC.md | 22 | defined here | Specified as the core architectural practice of isolating pure logic inside a script block separate from the throwaway HTML UI shell. |

## Consumes
Domain logic, state models, or algorithmic transformations answering the design question.

## Produces
A pure JavaScript module (reducer, state machine, or function set) ready to be lifted into production code.

## When applied
During step 2 of building a logic prototype, keeping DOM manipulation and page handlers strictly isolated from the logic implementation.

## Sub-concepts
pure-reducer

## Part of
logic-prototype

## Implementation status
clean

## Design notes
An architectural pattern in logic prototyping where the core state logic is written as a pure, dependency-free module isolated from the throwaway HTML UI shell, ensuring that once validated, the logic can be directly lifted into the production codebase.
