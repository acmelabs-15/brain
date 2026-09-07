---
package: matt
name: vertical slice
slug: vertical-slice
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: docs/engineering/tdd.md, sha256: 879c4bad53e79f3972dd3b37438330f9ff86035843f3bf83ef41ff51e8337860}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# vertical slice

## Definition — verbatim
> "**Vertical slice.** One seam, one test, one minimal implementation, then repeat, the first cycle being a **tracer bullet** that proves a single path end to end." — docs/engineering/tdd.md:33

## Also called — verbatim
tracer-bullet vertical slices — external/implement.md:44

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/implement.md | 83 | defined here | States that successful implement diffs represent a vertical slice through every layer for a single ticket. |
| docs/engineering/tdd.md | 33 | defined here | Defines vertical slice TDD as one seam, one test, and one minimal implementation repeated. |
| external/implement.md | 44 | used here | Explains that tickets produced by to-tickets are tracer-bullet vertical slices sized for a single window. |
| external/tdd.md | 37 | defined here | Contrasts vertical slice test development against brittle horizontal bulk test authoring. |

## Consumes
A ticket or feature specification decomposed along end-to-end user behaviors.

## Produces
A complete, functional diff traversing all necessary architectural layers from interface to persistence.

## When applied
When structuring tickets in to-tickets and driving development in implement and tdd.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A vertical slice cuts through all technical layers to deliver one complete, verifiable behavioral capability. In Matt's lifecycle, horizontal slicing (e.g. writing all database tables or all tests first) is treated as a major anti-pattern; vertical slices keep diffs reviewable and sized to fit comfortably inside a single context window.
