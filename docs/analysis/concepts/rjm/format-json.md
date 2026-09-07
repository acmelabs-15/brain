---
package: rjm
name: format_json
slug: format-json
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/taste-lints/scripts/taste_lints.py, sha256: 0291a0a69d6836830ca04174c8ddbfa2e15727b2775bdcace843df1e21162f80}
  - {path: .codeql/scripts/get_codeql_diagnostics.py, sha256: 2372f00b68a7a924f56957e139c6b0c1f1e64fce73a2cc350e49fe85ee4504a7}
  - {path: scripts/skill_registry.py, sha256: b59dee7092a05da94f9dca83da5ee0b2372eadda816aadb43cc58e02e1f6c786}
  - {path: scripts/validation/hook_contracts.py, sha256: c04f10b106e2e97cce4ee061b755033b16b415d046d304a7ff015069fcae357b}
  - {path: scripts/validation/instruction_budget.py, sha256: c57feaeaba07cea56c524e40fcef7945cc51684df1a4f69733a85e65ae241183}
  - {path: scripts/validation/passive_context_budget.py, sha256: 1eb3cf2167b042b03dea6986c67b3e87ac6e84062453a3840384ea9d5ff07cff}
  - {path: scripts/validation/sha_pinning.py, sha256: 669f66344294caa22d3a4bb6ec0948f1147277258be166b8a90a4eebf930c06f}
  - {path: scripts/validation/traceability.py, sha256: 40c7c048372c9e5232f2b8e2b4f5e31a1153f88fdde32afb7e069d5b065fd1a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# format_json

## Definition — verbatim
(used, not defined)

> "def format_json(result: LintResult) -> str:" — .claude/skills/taste-lints/scripts/taste_lints.py:1016

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/scripts/taste_lints.py | 1016 | defined here | Formats taste lint results and violations as a JSON object string. |
| .codeql/scripts/get_codeql_diagnostics.py | 392 | defined here | Prints structured diagnostic metadata for CodeQL CLI and database status as JSON. |
| scripts/skill_registry.py | 241 | defined here | Serializes scanned skill metadata and catalog entries into a structured JSON string. |
| scripts/validation/hook_contracts.py | 913 | defined here | Formats hook contract validation results and violations as a JSON string. |
| scripts/validation/instruction_budget.py | 76 | defined here | Exported in `__all__` as a formatter function serializing instruction budget measurements as JSON. |
| scripts/validation/passive_context_budget.py | 134 | defined here | Formats passive context budget evaluation results as a JSON string for machine consumption. |
| scripts/validation/sha_pinning.py | 219 | defined here | Formats GitHub Action SHA pinning validation results and violations as a JSON string. |
| scripts/validation/traceability.py | 436 | defined here | Serializes spec and governance traceability validation results and warnings into JSON. |

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
defects: other, doc-drift, missing-path, orphan

## Design notes
`format_json` is a reusable Python function identifier implemented across multiple CLI validation scripts to produce machine-readable JSON reports, classified as kind: name-only per D-023.
