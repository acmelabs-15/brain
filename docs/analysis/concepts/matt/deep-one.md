---
package: matt
name: deep one
slug: deep-one
kind: pattern
package_phase: matt:engineering
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

# deep one

## Definition — verbatim
> "`improve-codebase-architecture` surveys a codebase for **deepening opportunities**: places where a shallow module (an interface nearly as complex as the thing it hides) could become a deep one." — docs/engineering/improve-codebase-architecture.md:3

## Also called — verbatim
deep module — skills/engineering/codebase-design/SKILL.md:35

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/improve-codebase-architecture.md | 3 | defined here | Contrasts a shallow module against a deep one that hides complexity behind a minimal interface. |

## Consumes
A shallow module candidate selected for architectural deepening.

## Produces
A redesigned abstraction with a compact surface area concealing substantial implementation logic.

## When applied
When refactoring architectural components identified by improve-codebase-architecture.

## Sub-concepts
none

## Part of
deepening-opportunities

## Implementation status
clean

## Design notes
A deep one (or deep module, following John Ousterhout's philosophy) is an architectural ideal where maximum functionality is hidden behind a remarkably small, intuitive interface. It provides leverage by freeing client code from managing internal complexity.
