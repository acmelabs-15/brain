---
package: rjm
name: Core Philosophy
slug: core-philosophy
kind: pattern
package_phase: rjm:support
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/janitor.shared.md, sha256: d341d17755611a3c50912455dba61ca3418780bf4584785f2f7a3d69b68a66d8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Core Philosophy

## Definition — verbatim
> "**Less Code = Less Debt**: Deletion is the most powerful refactoring. Simplicity beats complexity." — templates/agents/janitor.shared.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/janitor.shared.md | 40 | defines | Founding principle of the janitor agent emphasizing deletion and aggressive simplification. |

## Consumes
Codebase metrics, debt inventory, candidate dead code.

## Produces
Aggressive simplification, dead code elimination, and reduced maintenance footprint.

## When applied
Applied during codebase maintenance, refactoring, and tech debt remediation.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Establishes the foundational principle for technical debt remediation that code deletion is superior to additive complexity, treating unused or over-engineered code as an active liability to be safely eliminated.
