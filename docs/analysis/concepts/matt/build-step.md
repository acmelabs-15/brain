---
package: matt
name: build step
slug: build-step
kind: phase
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# build step

## Definition — verbatim
(used, not defined)
> "is the engine inside the build step of the main chain, rather than a step of its own:" — external/tdd.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/tdd.md | 67 | used here | Frames tdd as the core execution engine embedded within the overall build phase of the engineering chain. |

## Consumes
Sliced tickets, specifications, and agreed test seams.

## Produces
Working, verified feature code and passing test suites.

## When applied
During the implementation stage of the lifecycle, driven by /implement.

## Sub-concepts
tdd

## Part of
tdd

## Implementation status
defects: doc-drift, orphan

## Design notes
The build step represents the implementation phase within Matt's overarching lifecycle chain (grill-with-docs → to-spec → to-tickets → implement → code-review). Rather than treating TDD as an isolated lifecycle phase, Matt positions TDD as the internal operational mechanism that powers the build step under the direction of /implement.
