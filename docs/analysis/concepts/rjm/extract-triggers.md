---
package: rjm
name: extract_triggers
slug: extract-triggers
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

# extract_triggers

## Definition — verbatim
(used, not defined)

> "def extract_triggers(content: str) -> list[str]:" — .claude/skills/skillforge/scripts/discover_skills.py:202

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/discover_skills.py | 202 | defined here | Extracts activation trigger phrases from skill content and trigger markdown tables. |

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
Python helper function in `discover_skills.py` for parsing activation trigger phrases from skill markdown documents, classified as name-only per D-023.
