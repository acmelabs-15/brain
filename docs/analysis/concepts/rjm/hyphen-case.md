---
package: rjm
name: hyphen-case
slug: hyphen-case
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/quick_validate.py, sha256: 579d5fb466abe33bebdd9997f39953776bfe932e972df0d57e2051864c060214}
  - {path: .claude/skills/skillforge/scripts/validate-skill.py, sha256: 7e63f01559bff720606d6fb801af3b59172a70cc96e4f45c21f424e9a7c8b9ba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# hyphen-case

## Definition — verbatim
(used, not defined)

> "Check naming convention (hyphen-case: starts with letter, lowercase with hyphens)" — .claude/skills/skillforge/scripts/quick_validate.py:275

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/quick_validate.py | 275 | defined here | Validates that skill names adhere to hyphen-case (starting with a letter, lowercase with hyphens). |
| .claude/skills/skillforge/scripts/validate-skill.py | 222 | defined here | Validates that skill names follow hyphen-case without consecutive hyphens. |

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
defects: doc-drift, exit-code-mismatch, script-bug

## Design notes
A lexical naming convention for skill identifiers enforced across skill validation scripts, classified as name-only per D-023.
