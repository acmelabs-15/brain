---
package: rjm
name: kebab-case
slug: kebab-case
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/init_skill.py, sha256: 7f9eceac1dd1780fb8c052d8a694477ef10cc5754a07ef0b8a7a2131abee35c3}
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
  - {path: .claude/skills/taste-lints/scripts/taste_lints.py, sha256: 0291a0a69d6836830ca04174c8ddbfa2e15727b2775bdcace843df1e21162f80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# kebab-case

## Definition — verbatim
(used, not defined)

> "Skill directories, YAML files" — .claude/skills/taste-lints/SKILL.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/init_skill.py | 245 | defined here | Validates that skill names follow kebab-case format using lowercase letters, digits, and hyphens. |
| .claude/skills/taste-lints/scripts/taste_lints.py | 656 | defined here | Linter check warning when YAML files do not adhere to kebab-case naming. |
| .claude/skills/taste-lints/SKILL.md | 54 | defined here | Naming convention table requiring kebab-case for skill directories and YAML files. |

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
defects: doc-drift, other

## Design notes
A lexical naming convention for skill directories and configuration files, classified as name-only per D-023.
