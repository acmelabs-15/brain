---
package: matt
name: block
slug: block
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/to-tickets/SKILL.md, sha256: 5c9fba69845c2519b9b35b9af42ae5142c21f8ca15ac2123dc2722002c8058ae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# block

## Definition — verbatim
> "Break a plan, spec, or conversation into a set of **tickets**: tracer-bullet vertical slices, each declaring the tickets that **block** it." — skills/engineering/to-tickets/SKILL.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/to-tickets/SKILL.md | 9 | defined here | Introduces the blocking relationship declared by each vertical slice ticket against prerequisite tickets. |

## Consumes
Decomposed vertical slice tickets and dependency relationships identified during planning.

## Produces
Prerequisite dependency edges gating execution until predecessor tickets are completed.

## When applied
During ticket decomposition in `/to-tickets` when assigning prerequisite relationships between slices.

## Sub-concepts
none

## Part of
to-tickets, tickets

## Implementation status
defects: missing-path (skills/engineering/to-tickets/SKILL.md:11 missing setup command)

## Design notes
A gating dependency relationship where a ticket declares other tickets that must finish before it can start. By establishing explicit blocking prerequisites, `/to-tickets` constructs a dependency graph that prevents premature execution, ensures context windows remain focused on unblocked work, and allows execution to proceed safely along the frontier of unblocked tickets.
