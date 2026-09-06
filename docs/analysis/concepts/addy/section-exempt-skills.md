---
package: addy
name: SECTION_EXEMPT_SKILLS
slug: section-exempt-skills
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/lib/skill-lint-test.js, sha256: dc3a01270a1b83399e7f21d72f6c457ebf3d878e4e040d2db0622858ddafa7df}
  - {path: scripts/lib/skill-lint.js, sha256: bf9d058b42516e7cdc01f3681313a7cc727496b571a0b67a03a9444a894f4925}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# SECTION_EXEMPT_SKILLS

## Definition — verbatim
(used, not defined)
> "const SECTION_EXEMPT_SKILLS = {" — scripts/lib/skill-lint.js:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/lib/skill-lint-test.js | 41 | used here | Referenced in test comment explaining prototype chain security checks against the allowlist |
| scripts/lib/skill-lint.js | 57 | defined here | Dictionary constant defining allowlisted skills exempt from required section validation |

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
defects: orphan, other (CommonJS module format issues across test and library files)

## Design notes
Validator configuration constant mapping exempt skill directory names to justification strings in repository tooling rather than an engineering lifecycle concept.
