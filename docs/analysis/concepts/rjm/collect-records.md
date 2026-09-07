---
package: rjm
name: collect_records
slug: collect-records
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# collect_records

## Definition — verbatim
(used, not defined)

> "def collect_records(adr_dir: Path, repo_root: Path) -> tuple[list[Record], list[Violation]]:" — scripts/validation/check_adr_lifecycle.py:414

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 414 | defined here | Function scanning the ADR directory and collecting Record instances and frontmatter violations in filename order. |

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
clean

## Design notes
A Python function identifier scanning the ADR directory to load and return Record instances and parsing violations, classified as `name-only` per D-023 because it is a code function identifier rather than a development lifecycle concept.
