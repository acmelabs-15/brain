---
package: rjm
name: temporal-contamination
slug: temporal-contamination
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/SKILL.md, sha256: 37e67b69f3823d49f1c582e8630b9e55a7e88dc7159edca5c8a0c3c7463fa97e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# temporal-contamination

## Definition — verbatim
(used, not defined)

> "| `resources/temporal-contamination.md` | Detecting/fixing temporally contaminated comments  |" — .claude/skills/planner/SKILL.md:276

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/SKILL.md | 276 | used here | Resource table entry referencing resources/temporal-contamination.md for detecting and fixing temporally contaminated comments in plans. |

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
defects: missing-path, doc-drift

## Design notes
temporal-contamination is a resource file name identifying the specification resources/temporal-contamination.md referenced in the planner skill rather than an independent lifecycle concept.
