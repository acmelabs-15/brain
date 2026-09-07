---
package: rjm
name: scan_skill
slug: scan-skill
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/skill_registry.py, sha256: b59dee7092a05da94f9dca83da5ee0b2372eadda816aadb43cc58e02e1f6c786}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# scan_skill

## Definition — verbatim
(used, not defined)

> "def scan_skill(skill_dir: Path, project_root: Path) -> SkillMetadata:" — scripts/skill_registry.py:182

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skill_registry.py | 182 | defined here | Scans a skill directory, parses its frontmatter, checks tests/scripts directories, and extracts metadata. |

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
defects: orphan, doc-drift

## Design notes
scan_skill is a Python utility function identifier scanning individual skill directories rather than an SDLC lifecycle concept, classified as name-only per D-023.
