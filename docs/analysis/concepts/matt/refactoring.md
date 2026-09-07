---
package: matt
name: Refactoring
slug: refactoring
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Refactoring

## Definition — verbatim
(used, not defined)
> "There is no refactor phase: it was dropped in June 2026 because agents essentially never performed it, and because review and implementation work better as separate sessions. Refactoring belongs to <a class="ah-prose-a" href="/skills-code-review">code-review</a>." — external/tdd.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/code-review.md | 44 | used here | Cites Fowler's Refactoring treatise as the source of the smell baseline heuristics. |
| external/tdd.md | 36 | used here | Clarifies that refactoring was removed from the TDD loop and reassigned to code-review. |

## Consumes
Working code passing tests, identified smells or architectural opportunities, and an independent review session.

## Produces
Cleaner, more modular implementation structures preserving external behavioural contracts.

## When applied
Conducted during code review or dedicated improvement workflows rather than inside the rapid TDD implementation loop.

## Sub-concepts
fowler-code-smells, red-green

## Part of
code-review, improve-codebase-architecture

## Implementation status
defects: doc-drift, other

## Design notes
The discipline of restructuring software internals without changing external observable behavior. In Matt Pocock's methodology, refactoring was explicitly decoupled from the classic red-green-refactor TDD inner loop in June 2026. Because coding agents struggled to execute refactoring mid-implementation and authoring sessions suffer from confirmation bias, refactoring is treated as an independent downstream activity driven by code-review and dedicated improvement skills in separate sessions.
