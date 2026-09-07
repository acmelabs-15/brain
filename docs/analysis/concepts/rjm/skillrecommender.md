---
package: rjm
name: skillrecommender
slug: skillrecommender
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/discover_skills.py, sha256: 54678530ba1813bb24971e1d38b689c5eae3dc0c7c16217436e119074ea3f4ed}
  - {path: .claude/skills/skillforge/scripts/triage_skill_request.py, sha256: 9fafbd937dd730d969654c465fd4f13eaba78f1866db92488b76c1c27cbc9740}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# skillrecommender

## Definition — verbatim
(used, not defined)

> "Part of the skillrecommender skill." — .claude/skills/skillforge/scripts/discover_skills.py:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/discover_skills.py | 5 | used here | Referenced in module docstring indicating historical script origin before incorporation into SkillForge. |
| .claude/skills/skillforge/scripts/triage_skill_request.py | 208 | used here | Section header noting that skill matching routines were derived from the skillrecommender package. |

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
defects: doc-drift, script-bug, missing-path

## Design notes
skillrecommender is an upstream package and cache directory identifier cited in script headers rather than an operational lifecycle concept, classified as name-only per D-023.
