---
package: rjm
name: scan_root
slug: scan-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_shipped_skill_routes.py, sha256: bafff39d3de4725ac44e0ec799ac0b66e8dd4c701136ab47edf20adcf007b9c2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# scan_root

## Definition — verbatim
(used, not defined)

> "def scan_root(root: Path, repo_root: Path) -> tuple[list[Finding], int]:" — scripts/validation/check_shipped_skill_routes.py:525

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_shipped_skill_routes.py | 525 | defined here | Scans all markdown documents within a plugin root to validate skill route references. |

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
A root scanning function in `scripts/validation/check_shipped_skill_routes.py` that checks skill routes across markdown files, classified as `name-only` per D-023.
