---
package: addy
name: scripts/validate-skills.js
slug: scripts-validate-skills-js
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

# scripts/validate-skills.js

## Definition — verbatim
(used, not defined)
> " * (docs/skill-anatomy.md). The CLI in scripts/validate-skills.js is a thin" — scripts/lib/skill-lint.js:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/lib/skill-lint.js | 6 | used here | Cited in file header comment as the CLI wrapper script for the skill-lint library. |

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
Script file path referenced in header documentation as the CLI entry point for skill linting, not an engineering lifecycle concept.
