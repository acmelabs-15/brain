---
package: rjm
name: collect_violations
slug: collect-violations
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# collect_violations

## Definition — verbatim
(used, not defined)

> "def collect_violations(repo_root: Path) -> list[GateViolation]:" — scripts/validation/check_build_gates.py:103

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_build_gates.py | 103 | defined here | Scans build.md to identify missing exit gates or required argument flags. |
| scripts/validation/check_canonical_citations.py | 224 | defined here | Scans Python files across configured roots to discover uncited mirror claims. |

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
`collect_violations` is a Python function identifier across validation scripts that traverses repository files to collect validation rule violations rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
