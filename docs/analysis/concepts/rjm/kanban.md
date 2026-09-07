---
package: rjm
name: Kanban
slug: kanban
kind: phase
package_phase: rjm:plan
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

# Kanban

## Definition — verbatim
> "Decomposes specs into milestones with dependency ordering, risk register, and S/M/L sizing" — docs/getting-started.md:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/getting-started.md | 75 | defined here | Defined as Phase 3 of the 7-phase pipeline executed via `/plan` to generate an execution plan. |

## Consumes
Specification files (`REQ-NNN-*.md`, `DESIGN-NNN-*.md`, `TASK-NNN-*.md`) from the spec phase.

## Produces
Versioned execution plan artifact with milestones, dependency ordering, risk register, and S/M/L sizing.

## When applied
> "After `/spec` output exists" — docs/getting-started.md:75

## Sub-concepts
none

## Part of
7-phase-pipeline

## Implementation status
clean

## Design notes
Kanban is the execution planning and milestone scheduling phase in rjm. Invoked through `/plan`, it parses formalized specifications into an ordered dependency graph and risk register, establishing sized slices ready for autonomous or supervised implementation.
