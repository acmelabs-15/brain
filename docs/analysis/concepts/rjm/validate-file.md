---
package: rjm
name: validate_file
slug: validate-file
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py, sha256: b2f5fa9b65615958cab3a8a9a402652e131570e1aacd577eb7e754caa2681ec7}
  - {path: scripts/validate_workflows.py, sha256: 79f3e393f6cbe540ef6a3d5b2c4399226ed9dde0aa7ef2f5b5cc338ba9ebbb22}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_file

## Definition — verbatim
(used, not defined)

> "def validate_file(path: str) -> SpecValidation:" — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:171

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py | 171 | defined here | Validates YAML frontmatter syntax and required schema fields for an individual spec file. |
| scripts/validate_workflows.py | 470 | defined here | Validates YAML syntax, pinned actions, permissions, and security hygiene for a GitHub Actions workflow file. |

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
`validate_file` is a Python function and method identifier implemented in `validate_spec_frontmatter.py` and `validate_workflows.py` to validate individual files against schema and security rules rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
