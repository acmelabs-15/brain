---
package: rjm
name: _validate_file_path
slug: validate-file-path
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _validate_file_path

## Definition — verbatim
(used, not defined)

> "def _validate_file_path(file_path: str, allowed_dir: Path) -> Path:" — scripts/validate_skill_output.py:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_output.py | 42 | defined here | Validates that user-provided input file path is within repo root and resolves symlinks securely (CWE-22 defense). |

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
defects: doc-drift

## Design notes
`_validate_file_path` is an internal Python function identifier enforcing CWE-22 path traversal defenses on input file paths rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
