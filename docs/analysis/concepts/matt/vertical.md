---
package: matt
name: vertical
slug: vertical
kind: pattern
package_phase: matt:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# vertical

## Definition — verbatim
> "A **vertical** slice (the tracer bullet) ships one thin path through all the layers at once, so it is verifiable alone and owns everything it grades." — docs/engineering/to-tickets.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/to-tickets.md | 27 | defined here | Defines vertical slicing as cutting a thin path through all layers simultaneously to maintain verifiable independence. |
| external/to-tickets.md | 34 | defined here | External catalog explanation of vertical slices as self-contained tracer bullets. |

## Consumes
Feature specifications and system architectures requiring implementation across multiple stack layers.

## Produces
Independently verifiable work units that deliver functional end-to-end paths from user interface to persistence.

## When applied
Mandated as the primary decomposition strategy when generating tickets in `to-tickets`.

## Sub-concepts
none

## Part of
to-tickets

## Implementation status
clean

## Design notes
A vertical slice (also termed a tracer bullet) is Matt's mandated method for decomposing software work. By implementing a thin, end-to-end slice spanning all architectural layers (schema, business logic, API, UI, tests), each ticket can be verified in isolation immediately upon completion. This ensures agents own everything their acceptance criteria evaluate, drastically reducing feedback loops and integration failures.
