---
package: rjm
name: _scan_roots
slug: scan-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_canonical_citations.py, sha256: e4e5b8b622488dcc368c7dea8195de353e5b8a3325a9a07da0b9c67bccef3dd5}
  - {path: scripts/validation/check_skill_contract_tests.py, sha256: b3471055e8c34baf066d4a98dbd60382fe98aedc0c4f61064ee7b155e0fb04f9}
  - {path: scripts/validation/check_skill_md_exec_portability.py, sha256: 176c423ce1b4d3957c58c67a909039ca428157be432a1170ee8157911ac1a051}
  - {path: scripts/validation/check_skill_resolver_anchoring.py, sha256: 8013b916e0028b1191d0d6f89083dfc8030d317c22fc705a4fb159522f950e46}
  - {path: scripts/validation/check_vendor_portability.py, sha256: cecc8477184c3806256222c607ff2a0f50c5395e69f10f61d15b7702354385b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
