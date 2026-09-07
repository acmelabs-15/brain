---
package: rjm
name: SKILL SOURCES
slug: skill-sources
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

# SKILL SOURCES

## Definition — verbatim
(used, not defined)

> "# SKILL SOURCES" — .claude/skills/skillforge/scripts/discover_skills.py:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/discover_skills.py | 67 | defined here | Section comment header for configured skill discovery directories and discovery priorities. |
| .claude/skills/skillforge/scripts/discover_skills.py | 70 | defined here | List constant defining source directories, search patterns, and priority levels for skill discovery. |

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
SKILL SOURCES is a code section heading and constant list in discover_skills.py configuring discovery search paths rather than an operational lifecycle concept, classified as name-only per D-023.
