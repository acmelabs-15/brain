---
package: rjm
name: validate_skill
slug: validate-skill
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/quick_validate.py, sha256: 579d5fb466abe33bebdd9997f39953776bfe932e972df0d57e2051864c060214}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_skill

## Definition — verbatim
(used, not defined)

> "def validate_skill(skill_path, root: str | None = None):" — .claude/skills/skillforge/scripts/quick_validate.py:191

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/quick_validate.py | 191 | defined here | Primary entrypoint function performing basic structural and frontmatter validation on a skill directory. |

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
defects: doc-drift, exit-code-mismatch

## Design notes
Python validation function in `quick_validate.py` executing quick checks on skill structure and frontmatter, classified as name-only per D-023.
