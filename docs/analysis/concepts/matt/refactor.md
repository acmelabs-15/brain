---
package: matt
name: refactor
slug: refactor
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

# refactor

## Definition — verbatim
(used, not defined)
> "Because the refactor step was removed and the description was not. The removal was deliberate: agents essentially never did it, and keeping implementation and review in separate sessions works better." — external/tdd.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/tdd.md | 44 | used here | Discussed in FAQ explaining why the traditional refactor phase was removed from the tdd skill loop. |

## Consumes
Working, tested code from the implementation step.

## Produces
Restructured code with identical behavior and improved design.

## When applied
Handed off to a separate post-implementation session (code-review / improve-codebase-architecture) rather than executed during the TDD inner loop.

## Sub-concepts
none

## Part of
tdd

## Implementation status
defects: doc-drift, orphan

## Design notes
The refactor phase in traditional TDD ("red-green-refactor") was deliberately removed from Matt's tdd skill. Field observation demonstrated that coding agents rarely executed refactoring reliably while maintaining test focus in the same context window. Matt's lifecycle decouples implementation from refactoring, delegating restructuring to dedicated subsequent review sessions.
