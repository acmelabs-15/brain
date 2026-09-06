---
package: addy
name: SKILL_REF_PATTERNS
slug: skill-ref-patterns
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/lib/skill-lint.js, sha256: bf9d058b42516e7cdc01f3681313a7cc727496b571a0b67a03a9444a894f4925}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# SKILL_REF_PATTERNS

## Definition — verbatim
(used, not defined)
> "const SKILL_REF_PATTERNS = [" — scripts/lib/skill-lint.js:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/lib/skill-lint.js | 65 | defined here | Array of regular expressions defining syntactic patterns for explicit cross-skill references. |

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
defects: other

## Design notes
Internal regular expression array in `scripts/lib/skill-lint.js` defining patterns that match cross-skill references, not a lifecycle concept.
