---
package: rjm
name: scan_all
slug: scan-all
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_exec_portability.py, sha256: 176c423ce1b4d3957c58c67a909039ca428157be432a1170ee8157911ac1a051}
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
  - {path: scripts/validation/check_subprocess_encoding.py, sha256: 843f80d8eb5f5b0075c9f6e94c9fe2018b68c66d22889d0019d5c4c5d8b92c35}
  - {path: scripts/validation/sha_pinning.py, sha256: 669f66344294caa22d3a4bb6ec0948f1147277258be166b8a90a4eebf930c06f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
