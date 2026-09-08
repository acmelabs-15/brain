---
package: rjm
name: TaskCompleted
slug: taskcompleted
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/hook_contracts.py, sha256: c04f10b106e2e97cce4ee061b755033b16b415d046d304a7ff015069fcae357b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# TaskCompleted

## Definition — verbatim
(used, not defined)

> "\"TaskCompleted\"," — scripts/validation/hook_contracts.py:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/hook_contracts.py | 42 | applies | Listed as a recognized non-blocking hook event type in hook contract validation. |

## Consumes
Task completion event emitted when an assigned agent or tool task concludes.

## Produces
Execution of non-blocking post-task hooks and notification dispatchers.

## When applied
Fires upon completion of a background or agent task.

## Sub-concepts
none

## Part of
non-blocking-hook-types

## Implementation status
defects: doc-drift

## Design notes
TaskCompleted is a non-blocking lifecycle hook event type triggered when an agent task finishes execution, enabling cleanup, logging, and notification workflows.
