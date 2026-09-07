---
package: rjm
name: _resolve_baseline_path
slug: resolve-baseline-path
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_exec_portability.py, sha256: 176c423ce1b4d3957c58c67a909039ca428157be432a1170ee8157911ac1a051}
  - {path: scripts/validation/check_skill_portability.py, sha256: 95cfb8c0749cec5771cc2c74e1a765f1ec706c86d206e90562cb3eeed64efd99}
  - {path: scripts/validation/portability_common.py, sha256: 1ca675f452447698f1720f14d3d4a41778f37621bbdbd15c3136f65b793757c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
