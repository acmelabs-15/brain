---
package: rjm
name: format_console
slug: format-console
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .codeql/scripts/get_codeql_diagnostics.py, sha256: 2372f00b68a7a924f56957e139c6b0c1f1e64fce73a2cc350e49fe85ee4504a7}
  - {path: scripts/validation/hook_contracts.py, sha256: c04f10b106e2e97cce4ee061b755033b16b415d046d304a7ff015069fcae357b}
  - {path: scripts/validation/sha_pinning.py, sha256: 669f66344294caa22d3a4bb6ec0948f1147277258be166b8a90a4eebf930c06f}
  - {path: scripts/validation/traceability.py, sha256: 40c7c048372c9e5232f2b8e2b4f5e31a1153f88fdde32afb7e069d5b065fd1a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# format_console

## Definition — verbatim
(used, not defined)

> "def format_console(diagnostics: dict[str, Any]) -> None:" — .codeql/scripts/get_codeql_diagnostics.py:327

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .codeql/scripts/get_codeql_diagnostics.py | 327 | defined here | Formats CodeQL diagnostics report for console display. |
| scripts/validation/hook_contracts.py | 892 | defined here | Formats hook contract validation report for console display. |
| scripts/validation/sha_pinning.py | 118 | defined here | Formats GitHub Actions SHA pinning check results for console display. |
| scripts/validation/traceability.py | 360 | defined here | Formats requirement traceability verification metrics and errors for console display. |

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
defects: missing-path (.codeql/scripts/get_codeql_diagnostics.py:81); doc-drift (scripts/validation/hook_contracts.py:6); clean in scripts/validation/sha_pinning.py and scripts/validation/traceability.py

## Design notes
A utility function identifier (`format_console`) defined across validation and diagnostic scripts to render terminal output, classified as `name-only` per D-023.
