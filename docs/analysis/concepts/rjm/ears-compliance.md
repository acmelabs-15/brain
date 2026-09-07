---
package: rjm
name: EARS Compliance
slug: ears-compliance
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-schemas.md, sha256: 6520d76b9eae7f6d574a1291dc027464ad24dd8d388d55ea04364b25a8a7a431}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# EARS Compliance

## Definition — verbatim
> "EARS Compliance" — .claude/skills/spec-generator/references/spec-schemas.md:133

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-schemas.md | 133 | used here | Validation rule mandating that requirement document bodies contain an EARS-format requirement statement. |

## Consumes
Draft requirement text in `REQ-NNN` artifacts.

## Produces
Validated requirement statements conforming to Easy Approach to Requirements Syntax patterns.

## When applied
> "Body must contain EARS-format requirement statement" — .claude/skills/spec-generator/references/spec-schemas.md:133

## Sub-concepts
none

## Part of
requirement-schema

## Implementation status
defects: missing-path

## Design notes
Enforces the Easy Approach to Requirements Syntax (EARS) structural syntax across requirement artifacts, eliminating ambiguous or untestable prose and ensuring every requirement defines clear triggers, system responses, and rationale.
