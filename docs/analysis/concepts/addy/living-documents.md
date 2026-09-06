---
package: addy
name: living documents
slug: living-documents
kind: pattern
package_phase: addy:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/getting-started.md, sha256: 2c218fb92f46645d93191b9f3ff4f2df8faa25ba3d7517c336c6fa87fed8ab0b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# living documents

## Definition — verbatim
> "Treat them as **living documents** while the work is in progress:" — docs/getting-started.md:153

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/getting-started.md | 153 | used here | Principle instructing teams to treat spec and task artifacts as actively updated shared truth during development. |

## Consumes
Working artifacts including `SPEC.md`, `tasks/plan.md`, and `tasks/todo.md`.

## Produces
Actively updated artifacts reflecting current project scope, decisions, and task progress.

## When applied
While feature development or task implementation is in progress following specification and planning.

## Sub-concepts
none

## Part of
spec-driven-development, planning-and-task-breakdown

## Implementation status
clean

## Design notes
The living documents pattern mandates that specifications and plan files remain mutable and continuously synchronized with evolving scope and decisions throughout implementation, maintaining a shared truth between human and agent.
