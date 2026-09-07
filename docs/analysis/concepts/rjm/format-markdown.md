---
package: rjm
name: format_markdown
slug: format-markdown
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .codeql/scripts/get_codeql_diagnostics.py, sha256: 2372f00b68a7a924f56957e139c6b0c1f1e64fce73a2cc350e49fe85ee4504a7}
  - {path: scripts/analyze_pr_failure.py, sha256: ec0ba314fcf793fbd994ee6e5a3ca52a376de12777ee978e1e6c78f19abfc21b}
  - {path: scripts/skill_registry.py, sha256: b59dee7092a05da94f9dca83da5ee0b2372eadda816aadb43cc58e02e1f6c786}
  - {path: scripts/validation/sha_pinning.py, sha256: 669f66344294caa22d3a4bb6ec0948f1147277258be166b8a90a4eebf930c06f}
  - {path: scripts/validation/traceability.py, sha256: 40c7c048372c9e5232f2b8e2b4f5e31a1153f88fdde32afb7e069d5b065fd1a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# format_markdown

## Definition — verbatim
(used, not defined)

> "def format_markdown(diagnostics: dict[str, Any]) -> None:" — .codeql/scripts/get_codeql_diagnostics.py:396

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .codeql/scripts/get_codeql_diagnostics.py | 396 | defined here | Generates markdown summary report from CodeQL diagnostics dictionary. |
| scripts/analyze_pr_failure.py | 310 | defined here | Generates markdown formatted summary of PR failure analysis metrics. |
| scripts/skill_registry.py | 257 | defined here | Formats list of registered skill metadata into a markdown table. |
| scripts/validation/sha_pinning.py | 168 | defined here | Formats GitHub Actions SHA pinning scan results into a markdown report. |
| scripts/validation/traceability.py | 394 | defined here | Formats traceability metrics, errors, and warnings into a markdown table. |

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
defects: missing-path (.codeql/scripts/get_codeql_diagnostics.py:81); exit-code-mismatch (scripts/analyze_pr_failure.py:388); orphan (scripts/analyze_pr_failure.py:1, scripts/skill_registry.py:1); doc-drift (scripts/skill_registry.py:9); clean in scripts/validation/sha_pinning.py and scripts/validation/traceability.py

## Design notes
A utility function identifier (`format_markdown`) implemented across diagnostic and reporting scripts to format structured data into markdown, classified as `name-only` per D-023.
