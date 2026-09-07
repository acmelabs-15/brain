---
package: rjm
name: bottom-up emergence model
slug: bottom-up-emergence-model
kind: pattern
package_phase: rjm:implement
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# bottom-up emergence model

## Definition — verbatim
> "patterns emerge from enforcing qualities, not from picking patterns first." — .claude/agents/implementer.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 3 | used here | Governing architectural principle of the implementer agent where design patterns emerge from qualities. |
| templates/agents/implementer.shared.md | 6 | used here | Shared agent definition stating patterns emerge from enforcing qualities rather than upfront pattern selection. |

## Consumes
Explicit code quality standards (cohesion, encapsulation, testability, low coupling).

## Produces
Organic, resilient architectural structures and design patterns.

## When applied
Applied during code implementation by the implementer agent.

## Sub-concepts
none

## Part of
implementer

## Implementation status
clean

## Design notes
The bottom-up emergence model is rjm's governing design philosophy for implementation. It dictates that architectural patterns (such as factories, strategies, or adapters) must arise organically as the consequence of enforcing granular code qualities like cohesion and intentional coupling, rather than being dogmatically imposed upfront.
