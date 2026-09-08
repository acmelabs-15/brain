---
package: rjm
name: _tracked_python_files
slug: tracked-python-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/check_unreachable_code.py, sha256: 1e8ae7aab96a8cc6eab3ea1f5b553811c20ab01b48ad7aca0932ef198e63509e}
  - {path: scripts/validation/validate_python_syntax.py, sha256: cae50f12ab4aab7b54cb7ec16cb66639fed56024af29643a96fc6a935c749c2f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _tracked_python_files

## Definition — verbatim
(used, not defined)

> "def _tracked_python_files(repo_root: Path) -> list[Path]:" — scripts/validation/check_unreachable_code.py:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_unreachable_code.py | 46 | defined here | Helper function collecting tracked Python files using git ls-files with a sanitized environment. |
| scripts/validation/validate_python_syntax.py | 78 | defined here | Helper function discovering tracked Python files via git ls-files with fallback directory walking. |

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
`_tracked_python_files` is a Python helper function identifier across validation scripts enumerating tracked Python files via git rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
