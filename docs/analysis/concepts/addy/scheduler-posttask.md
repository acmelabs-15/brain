---
package: addy
name: scheduler.postTask()
slug: scheduler-posttask
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

# scheduler.postTask()

## Definition — verbatim
> "- [ ] Modern scheduling APIs used where available: `scheduler.yield()` (preferred), `scheduler.postTask()` with priorities, `isInputPending()` to yield only when needed" — references/performance-checklist.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 50 | used here | Cited as a modern browser scheduling mechanism for executing asynchronous tasks with explicit priority levels |

## Consumes
Prioritized background work, user-blocking vs background tasks

## Produces
Prioritized task scheduling managed cooperatively by the browser

## When applied
When coordinating competing background computations and user interactions

## Sub-concepts
none

## Part of
frontend-checklist

## Implementation status
clean

## Design notes
A prioritized task-scheduling browser API allowing web applications to schedule tasks with specific priorities ('user-blocking', 'user-visible', 'background') so critical UI updates take precedence over background work.
