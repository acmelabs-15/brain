---
package: rjm
name: Testability as leverage
slug: testability-as-leverage
kind: technique
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Testability as leverage

## Definition — verbatim
> "**Testability as leverage**: If it is hard to test, that signals poor encapsulation, tight coupling, weak cohesion, or procedural thinking. Always ask \"how would I test this?\" even without writing tests." — templates/agents/implementer.shared.md:305

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/implementer.shared.md | 305 | defines | Design diagnostic principle using difficulty of testing as an indicator of architectural defects. |

## Consumes
Code under design, implementation, or review.

## Produces
Diagnostic insight into encapsulation, coupling, cohesion, and procedural design defects.

## When applied
Applied during code design, implementation, and self-critique passes.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
Treats testability not merely as a verification goal but as a design diagnostic tool: code that is awkward or difficult to unit test reveals architectural flaws such as tight coupling, poor encapsulation, or lack of cohesion that must be resolved at the design level.
