---
package: rjm
name: scan_all
slug: scan-all
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# scan_all

## Definition — verbatim
(used, not defined)

> "def scan_all(repo_root: Path) -> tuple[dict[str, int], dict[str, int], dict[str, int]]:" — scripts/validation/check_skill_md_exec_portability.py:251

## Also called — verbatim
`def scan_all(` — scripts/validation/check_skill_md_portability.py:611
`def _scan_all(` — scripts/validation/check_subprocess_encoding.py:1711
`def scan_all(base_path: Path) -> tuple[list[Path], list[Violation]]:` — scripts/validation/sha_pinning.py:106

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 251 | defined here | Performs a unified traversal scanning skill markdown files for executable invocations and marker suppressions. |
| scripts/validation/check_skill_md_portability.py | 611 | defined here | Scans all skill markdown files in a single pass for upstream path references and drift. |
| scripts/validation/check_subprocess_encoding.py | 1711 | defined here | Analyzes tracked Python source files to detect missing explicit subprocess encoding arguments. |
| scripts/validation/sha_pinning.py | 106 | defined here | Scans workflow files across GitHub actions directories for unpinned external action references. |

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
defects: other, doc-drift

## Design notes
A Python validation function identifier traversing files to detect lint, encoding, and portability violations rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
