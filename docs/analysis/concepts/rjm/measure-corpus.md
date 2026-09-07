---
package: rjm
name: measure_corpus
slug: measure-corpus
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# measure_corpus

## Definition — verbatim
(used, not defined)

> "def measure_corpus(root: Path) -> BudgetReport:" — scripts/skill_description_budget.py:131

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skill_description_budget.py | 131 | defined here | Scans all SKILL.md files under a directory root and returns an aggregate BudgetReport. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
`measure_corpus` is an internal Python helper function iterating across the skill directory tree rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
