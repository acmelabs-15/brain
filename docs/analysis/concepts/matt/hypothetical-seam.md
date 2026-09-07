---
package: matt
name: hypothetical seam
slug: hypothetical-seam
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
  - {path: skills/engineering/codebase-design/DEEPENING.md, sha256: f3dd099ce99289bd213914d8ee3e2429b78309c3957ca4583f7659551b1d53c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# hypothetical seam

## Definition — verbatim
> "One adapter means a hypothetical seam. Two adapters means a real one." — skills/engineering/codebase-design/DEEPENING.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/codebase-design.md | 41 | defined here | Fourth principle of codebase design warning against speculative seam creation without variation. |
| skills/engineering/codebase-design/DEEPENING.md | 29 | defined here | Enforces seam discipline: requiring two distinct adapters to justify introducing an abstraction. |

## Consumes
Proposed interfaces, ports, and candidate adapter implementations.

## Produces
Rejection of unearned abstractions and preservation of direct in-process calls until variation exists.

## When applied
When an engineer or agent evaluates whether to cut a seam:
> "One adapter means a hypothetical seam. Two adapters means a real one." — skills/engineering/codebase-design/DEEPENING.md:29

## Sub-concepts
single-adapter-seam, seam, adapter

## Part of
codebase-design

## Implementation status
clean

## Design notes
An architectural anti-pattern and premature abstraction heuristic in codebase-design. When an interface has only a single concrete adapter (such as a production implementation with no distinct test fake, or a speculative abstraction for future unneeded variations), the seam is purely hypothetical. Cutting a seam before variation actually occurs introduces gratuitous indirection and maintenance overhead without providing leverage.
