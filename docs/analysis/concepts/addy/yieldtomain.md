---
package: addy
name: yieldToMain
slug: yieldtomain
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

# yieldToMain

## Definition — verbatim
> "`yieldToMain` pattern used inside long-running loops so input events can run between chunks" — references/performance-checklist.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 49 | used here | Recommended pattern for breaking up long-running loops to permit intermediate input event processing |

## Consumes
Long-running JavaScript execution blocks, intensive iterative loops

## Produces
Interleaved execution allowing browser event loop to handle user inputs

## When applied
When processing heavy client-side computation on the main thread

## Sub-concepts
none

## Part of
frontend-checklist

## Implementation status
clean

## Design notes
A task-chunking technique in browser JavaScript that yields control back to the main thread's event loop during long-running tasks. This prevents thread starvation, keeping the UI responsive and safeguarding INP.
