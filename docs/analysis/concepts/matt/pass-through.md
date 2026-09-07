---
package: matt
name: pass-through
slug: pass-through
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pass-through

## Definition — verbatim
(used, not defined)
> "Imagine deleting the module. If complexity vanishes, it was a pass-through. If it reappears across N callers, it was earning its keep." — external/codebase-design.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/codebase-design.md | 39 | used here | Describes shallow modules that fail the deletion test by merely forwarding calls without absorbing complexity. |

## Consumes
Candidate modules undergoing architectural review or deepening evaluation.

## Produces
Identification of low-value, shallow wrappers and candidates for inlining, elimination, or deepening.

## When applied
During the deletion test:
> "Imagine deleting the module. If complexity vanishes, it was a pass-through. If it reappears across N callers, it was earning its keep." — external/codebase-design.md:39

## Sub-concepts
none

## Part of
codebase-design

## Implementation status
clean

## Design notes
An architectural anti-pattern and shallow module failure mode in codebase-design. A pass-through module simply forwards invocations or translates arguments to an underlying collaborator without absorbing meaningful business logic, complexity, or invariants. When subjected to the deletion test, removing a pass-through causes complexity to simply vanish rather than dispersing across callers, demonstrating that the module failed to earn its keep.
