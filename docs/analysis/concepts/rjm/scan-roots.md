---
package: rjm
name: _scan_roots
slug: scan-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _scan_roots

## Definition — verbatim
(used, not defined)

> "def _scan_roots(repo_root: Path) -> list[Path]:" — scripts/validation/check_canonical_citations.py:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_canonical_citations.py | 98 | defined here | Returns candidate directory paths to inspect for mirror claim assertions. |
| scripts/validation/check_skill_contract_tests.py | 52 | defined here | Tuple constant specifying skill directories to scan for contract testing coverage. |
| scripts/validation/check_skill_md_exec_portability.py | 47 | defined here | Tuple constant defining paths to scan for execution portability across platforms. |
| scripts/validation/check_skill_resolver_anchoring.py | 43 | defined here | Tuple constant specifying skill trees to scan for shell resolver anchoring. |
| scripts/validation/check_vendor_portability.py | 141 | defined here | Tuple constant defining directories scanned for vendor-shipped script paths. |
| scripts/validation/check_vendor_portability.py | 175 | defined here | Function returning resolved candidate scan-root directories that exist under repository root. |

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
defects: orphan, other, doc-drift

## Design notes
`_scan_roots` (and `SCAN_ROOTS` / `scan_roots`) is a Python function and constant identifier across validation scripts specifying target directory roots for static analysis scans rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
