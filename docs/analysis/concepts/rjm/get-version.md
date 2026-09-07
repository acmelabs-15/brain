---
package: rjm
name: get_version
slug: get-version
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/discover_skills.py, sha256: 54678530ba1813bb24971e1d38b689c5eae3dc0c7c16217436e119074ea3f4ed}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_version

## Definition — verbatim
(used, not defined)

> "def get_version(frontmatter: dict[str, Any]) -> str:" — .claude/skills/skillforge/scripts/discover_skills.py:186

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/discover_skills.py | 186 | defined here | Extracts version from skill frontmatter, checking root level then metadata.version before falling back to default "1.0.0". |

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
Python helper function in `discover_skills.py` for extracting skill version metadata from frontmatter dictionaries, classified as name-only per D-023.
