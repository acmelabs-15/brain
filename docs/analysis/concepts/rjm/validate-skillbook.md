---
package: rjm
name: validate_skillbook
slug: validate-skillbook
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/validate_skillbook.py, sha256: b414daf9f7283aa07ac84ac29d87b726bca25f0845a465a3df01d28667f22607}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# validate_skillbook

## Definition — verbatim
(used, not defined)

> "def validate_skillbook(skillbook_dir: Path, schema_dir: Path) -> list[str]:" — scripts/validation/validate_skillbook.py:312

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_skillbook.py | 312 | defined here | Top-level driver function executing schema and referential integrity validations across all skillbook files. |

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
defects: orphan

## Design notes
`validate_skillbook` is a Python validation entry point function coordinating skillbook verification in `validate_skillbook.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
