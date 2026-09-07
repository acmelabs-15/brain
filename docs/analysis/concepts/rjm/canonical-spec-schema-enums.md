---
package: rjm
name: canonical spec schema enums
slug: canonical-spec-schema-enums
kind: reference
package_phase: rjm:spec
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

# canonical spec schema enums

## Definition — verbatim
> "Validate spec frontmatter against the canonical spec schema enums." — .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py | 2 | defined here | Docstring describing the validation target against canonical spec schema enums. |

## Consumes
Specification YAML frontmatter mappings extracted from `REQ-NNN`, `DESIGN-NNN`, and `TASK-NNN` documents.

## Produces
Validation results confirming that status, priority, category, and complexity fields strictly adhere to authorized values.

## When applied
Enforced by `validate_spec_frontmatter.py` across all generated spec frontmatter before task completion.

## Sub-concepts
none

## Part of
validate_spec_frontmatter.py, spec-schemas

## Implementation status
clean

## Design notes
The standardized sets of allowed enumeration values for specification metadata (such as priority `P0|P1|P2`, status sets per tier, categories, and complexities), mirrored from governance schemas into automated validators to eliminate LLM drift.
