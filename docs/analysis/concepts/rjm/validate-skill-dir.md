---
package: rjm
name: validate_skill_dir
slug: validate-skill-dir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_skill_installation.py, sha256: 79da66a839b12bd87c6a6de7f14835f23a19d1c1dd505507adc06d19d563f191}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_skill_dir

## Definition — verbatim
(used, not defined)

> "def validate_skill_dir(skill_dir: Path, verbose: bool = False) -> list[str]:" — scripts/validate_skill_installation.py:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_installation.py | 59 | defined here | Function validating SKILL.md existence, frontmatter YAML syntax, and required fields in a skill directory. |

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
`validate_skill_dir` is a Python function identifier validating directory-level SKILL.md structure and YAML frontmatter rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
