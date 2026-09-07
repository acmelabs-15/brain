---
package: rjm
name: extract_frontmatter
slug: extract-frontmatter
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/discover_skills.py, sha256: 54678530ba1813bb24971e1d38b689c5eae3dc0c7c16217436e119074ea3f4ed}
  - {path: .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py, sha256: b2f5fa9b65615958cab3a8a9a402652e131570e1aacd577eb7e754caa2681ec7}
  - {path: scripts/skill_description_budget.py, sha256: ff108f0301535684ddc0d27b6a5d51544a846b7332cdfe4bb8201eced72ee13a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# extract_frontmatter

## Definition — verbatim
(used, not defined)

> "def extract_frontmatter(content: str) -> dict[str, Any]:" — .claude/skills/skillforge/scripts/discover_skills.py:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/discover_skills.py | 144 | defined here | Function extracting YAML frontmatter from markdown content with PyYAML and fallback parsing. |
| .claude/skills/spec-generator/scripts/validate_spec_frontmatter.py | 95 | defined here | Pure-Python parser extracting top-level scalar frontmatter fields and list sentinel markers. |
| scripts/skill_description_budget.py | 48 | defined here | Utility function safely extracting frontmatter dictionaries for description token budget analysis. |

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
defects: doc-drift, missing-path

## Design notes
extract_frontmatter is a Python utility function identifier implemented across multiple scripts to parse YAML frontmatter blocks rather than an operational lifecycle concept, classified as name-only per D-023.
