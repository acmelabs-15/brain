---
package: rjm
name: validate_fields
slug: validate-fields
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py, sha256: b2f5fa9b65615958cab3a8a9a402652e131570e1aacd577eb7e754caa2681ec7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_fields

## Definition — verbatim
(used, not defined)

> "def validate_fields(path: str, fields: dict[str, str]) -> SpecValidation:" — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:141

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py | 141 | defined here | Python function validating parsed frontmatter fields against per-type schema constraints. |

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
A Python function identifier in validate_spec_frontmatter.py that validates frontmatter key-value mappings rather than an operational lifecycle concept.
