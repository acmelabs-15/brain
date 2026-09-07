---
package: rjm
name: 7-phase pipeline
slug: 7-phase-pipeline
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/getting-started.md, sha256: 1ee78be702025c56a7806ece0ca99ba2821047890152daebcc00899a99a86ad3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# 7-phase pipeline

## Definition — verbatim
> "The agents follow a 7-phase pipeline. Each phase has a defined input, a command to invoke, and a durable artifact it produces." — docs/getting-started.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/getting-started.md | 67 | defined here | Core lifecycle framework mapping each development stage to specific commands, inputs, and artifacts. |

## Consumes
User feature requests, problem statements, and repository context.

## Produces
Progressive lifecycle artifacts: PRD, Spec, Plan, Code, Test verdicts table, Review findings list, and Ship report.

## When applied
Applied end-to-end for every non-trivial feature developed with the AI Agents toolkit.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The 7-phase pipeline is the primary development lifecycle model in rjm. It organizes software creation into seven sequential phases: Grill Me (`/spec`), PRD to Spec (`/spec`), Kanban (`/plan`), Implement (`/build`), QA (`/test`), Review (`/review`), and Ship (`/ship`), formalizing ordered progression, strict artifact handoffs, and the operational division between human-interactive Day Shift and autonomous Night Shift.
