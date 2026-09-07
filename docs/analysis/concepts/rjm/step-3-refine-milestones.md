---
package: rjm
name: step_3_refine_milestones
slug: step-3-refine-milestones
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/scripts/planner.py, sha256: 7c8c5cbbaace2e7111150238c7aac48963f1395180196f85ca965bb7ede4dfaf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# step_3_refine_milestones

## Definition — verbatim
(used, not defined)

> "<step_3_refine_milestones>" — .claude/skills/planner/scripts/planner.py:310

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/planner.py | 310 | defined here | XML prompt guidance tag directing the verification of exact file paths, specific behaviors, and testable acceptance criteria across milestones. |

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
defects: missing-path, doc-drift, internal-contradiction

## Design notes
step_3_refine_milestones is an XML prompt framing tag in planner.py guiding milestone verification rather than an independent lifecycle concept.
