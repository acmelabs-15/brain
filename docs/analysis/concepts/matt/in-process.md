---
package: matt
name: in-process
slug: in-process
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

# in-process

## Definition — verbatim
> "Pure computation, in-memory state, no I/O. Always deepenable: merge the modules and test through the new interface directly. No adapter needed." — skills/engineering/codebase-design/DEEPENING.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/codebase-design.md | 43 | used here | First of four dependency categories in DEEPENING.md governing how deepened modules are tested. |
| skills/engineering/codebase-design/DEEPENING.md | 9 | defined here | Defines pure computation and in-memory dependencies that require no adapters to deepen. |

## Consumes
Candidate modules characterized by pure computation, in-memory state, and zero external I/O.

## Produces
Consolidated deep modules tested directly through their unified interfaces without mock or adapter overhead.

## When applied
When assessing candidates for module deepening whose internal interactions are entirely in-memory:
> "Pure computation, in-memory state, no I/O. Always deepenable: merge the modules and test through the new interface directly. No adapter needed." — skills/engineering/codebase-design/DEEPENING.md:11

## Sub-concepts
none

## Part of
codebase-design, deepening

## Implementation status
clean

## Design notes
The first dependency tier in the deepening taxonomy. In-process dependencies involve purely algorithmic transformations, in-memory data structures, and deterministic logic without side effects, filesystem access, or network calls. Because there is no I/O or environment boundary to fake, these clusters are unconditionally deepenable: shallow internal helpers should be merged into a single deep module and tested directly through the unified interface without mocking.
