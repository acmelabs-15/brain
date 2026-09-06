---
package: addy
name: isInputPending()
slug: isinputpending
kind: technique
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: references/performance-checklist.md, sha256: 40f564d1e62341e277c01ba42c42d95264b9ef3b8e5a23249dc6e121a7e70067}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# isInputPending()

## Definition — verbatim
> "- [ ] Modern scheduling APIs used where available: `scheduler.yield()` (preferred), `scheduler.postTask()` with priorities, `isInputPending()` to yield only when needed" — references/performance-checklist.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 50 | used here | Recommended for conditional yielding, checking whether pending user inputs require the main thread |

## Consumes
Browser input queue status during execution

## Produces
Boolean indicating whether an unhandled user input event is pending

## When applied
Inside compute-heavy loops where yielding should occur only if user interaction is queued

## Sub-concepts
none

## Part of
frontend-checklist

## Implementation status
clean

## Design notes
A browser API allowing JavaScript execution loops to inspect the input event queue and yield only when an actual user interaction is waiting, eliminating unnecessary yielding overhead while protecting INP.
