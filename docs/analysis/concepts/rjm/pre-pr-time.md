---
package: rjm
name: pre-PR time
slug: pre-pr-time
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_memory_references.py, sha256: 85b6b9c797c4a756e3141d78be4e36d47e3dc5eabaa3f374c8badc6d741d1bc3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pre-PR time

## Definition — verbatim
(used, not defined)

> "This gate makes that class of defect fail at pre-PR time instead." — scripts/validation/check_skill_memory_references.py:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_memory_references.py | 13 | used here | Characterizes the local validation stage before pull request submission where validation gates run. |

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
`pre-PR time` is a descriptive temporal label in script documentation indicating local pre-submission validation rather than a formal SDLC lifecycle phase, classified as `kind: name-only` per D-023.
