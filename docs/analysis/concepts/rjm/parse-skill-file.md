---
package: rjm
name: parse_skill_file
slug: parse-skill-file
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/discover_skills.py, sha256: 54678530ba1813bb24971e1d38b689c5eae3dc0c7c16217436e119074ea3f4ed}
  - {path: scripts/validation/check_skill_skip_clauses.py, sha256: 7185094210f05a814ef0fbbb05fcb47d005ac6a080e09cbadaab26e065095ea4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# parse_skill_file

## Definition — verbatim
(used, not defined)

> "def parse_skill_file(path: Path, source_name: str, priority: int) -> dict | None:" — .claude/skills/skillforge/scripts/discover_skills.py:276

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/discover_skills.py | 276 | defined here | Parses a skill file and extracts frontmatter, triggers, keywords, domain classifications, and description. |
| scripts/validation/check_skill_skip_clauses.py | 58 | defined here | Parses a SKILL.md file and extracts YAML frontmatter into a Skill dataclass record without raising on malformed frontmatter. |

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
defects: doc-drift, missing-path, script-bug

## Design notes
Python helper function for extracting frontmatter and metadata from skill markdown files, classified as name-only per D-023.
