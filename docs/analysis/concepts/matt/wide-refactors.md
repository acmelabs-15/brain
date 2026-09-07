---
package: matt
name: wide refactors
slug: wide-refactors
kind: pattern
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

# wide refactors

## Definition — verbatim
> "A **wide refactor** is one mechanical change (rename a column, retype a shared symbol) whose **blast radius** fans across the whole codebase, so a single edit breaks thousands of call sites at once and no vertical slice can land green." — skills/engineering/to-tickets/SKILL.md:40

## Also called — verbatim
> "wide refactor" — skills/engineering/to-tickets/SKILL.md:40

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/to-tickets/SKILL.md | 40 | defined here | Identifies wide refactors as the exception to vertical slicing, mandating an expand-contract migration sequence. |

## Consumes
Mechanical changes that affect shared symbols or database schemas across multiple packages or directories.

## Produces
An expand-contract ticket sequence composed of an expansion ticket, batched migration tickets, and a final contraction ticket.

## When applied
During ticket decomposition when a mechanical edit's blast radius fans across the whole codebase, making single-ticket green CI impossible.

## Sub-concepts
blast-radius, expand-contract

## Part of
to-tickets

## Implementation status
defects: missing-path (skills/engineering/to-tickets/SKILL.md:11 missing setup command)

## Design notes
Wide refactors represent the designated exception to the rule of tracer-bullet vertical slicing. Because single changes across ubiquitous symbols break thousands of call sites simultaneously, attempting vertical slices would leave CI broken for long intervals. Instead, wide refactors sequence work through expand-contract: introducing new interfaces in parallel, migrating call sites in batched tickets, and deleting old interfaces only after all call sites are migrated.
