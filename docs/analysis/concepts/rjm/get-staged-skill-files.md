---
package: rjm
name: get_staged_skill_files
slug: get-staged-skill-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/skill_frontmatter.py, sha256: 60453703190dad39f2fe456824d6d9c29d2e427ffabc2a1dfc2734a146e9b57b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# get_staged_skill_files

## Definition — verbatim
(used, not defined)

> "def get_staged_skill_files() -> list[Path]:" — scripts/validation/skill_frontmatter.py:381

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/skill_frontmatter.py | 381 | defined here | Retrieves staged SKILL.md file paths from the git index cache. |

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
defects: exit-code-mismatch, doc-drift, cross-file-contradiction

## Design notes
A Python file discovery function in `scripts/validation/skill_frontmatter.py`, classified as name-only per D-023.
