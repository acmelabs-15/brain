---
package: rjm
name: Title Case
slug: title-case
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/init_skill.py, sha256: 7f9eceac1dd1780fb8c052d8a694477ef10cc5754a07ef0b8a7a2131abee35c3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Title Case

## Definition — verbatim
(used, not defined)

> "Convert kebab-case to Title Case." — .claude/skills/skillforge/scripts/init_skill.py:254

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/init_skill.py | 254 | defined here | Docstring of `to_title` describing conversion of kebab-case skill identifiers into Title Case headings. |

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
defects: doc-drift

## Design notes
A typographical capitalization format used for document headings in scaffolded skills, classified as name-only per D-023.
