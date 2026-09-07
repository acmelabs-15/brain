---
package: rjm
name: lifecycle gate
slug: lifecycle-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# lifecycle gate

## Definition — verbatim
> "Ratcheted lifecycle gate over `.agents/architecture/ADR-NNN-*.md` (issue #5191)." — scripts/validation/check_adr_lifecycle.py:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 24 | defined here | Module docstring defines the ratcheted ADR lifecycle validation gate enforcing metadata and supersession consistency. |

## Consumes
ADR markdown records under `.agents/architecture/ADR-NNN-*.md` and ratchet baseline `adr_lifecycle_baseline.json`.

## Produces
Validation pass/fail verdict and updated baseline counts when invoked with `--write-baseline`.

## When applied
Executed during pre-PR validation and CI builds to prevent regressions in ADR lifecycle frontmatter and supersession relationships.

## Sub-concepts
none

## Part of
lifecycle

## Implementation status
clean

## Design notes
A ratcheted quality gate enforcing structural and relational integrity rules (frontmatter parsing, valid lifecycle statuses, supersession reciprocity, and prose-frontmatter alignment) across architecture decision records to prevent unvetted ADR state regressions from reaching the main branch.
