---
package: rjm
name: _resolve_baseline_path
slug: resolve-baseline-path
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _resolve_baseline_path

## Definition — verbatim
(used, not defined)

> "def _resolve_baseline_path(root: Path, baseline: Path | None) -> Path | None:" — scripts/validation/check_skill_md_exec_portability.py:414

## Also called — verbatim
`def _resolve_baseline_path(root: Path, baseline: Path | None) -> Path | None:` — scripts/validation/check_skill_portability.py:267
`def resolve_baseline_path(` — scripts/validation/portability_common.py:165

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 414 | defined here | Resolves the baseline file path ensuring it resides within the repository root. |
| scripts/validation/check_skill_portability.py | 267 | defined here | Resolves the script portability baseline path refusing out-of-root files. |
| scripts/validation/portability_common.py | 165 | defined here | Resolves and validates baseline path containment to prevent path traversal vulnerabilities. |

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
defects: other, doc-drift, orphan

## Design notes
An internal Python utility function identifier locating and validating baseline file paths within repository bounds rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
