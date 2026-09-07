---
package: rjm
name: "Keep, Drop, Add, Modify"
slug: keep-drop-add-modify
kind: technique
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Keep, Drop, Add, Modify

## Definition — verbatim
> "- **Action Classification** (Keep, Drop, Add, Modify): see" — .claude/skills/retrospective/SKILL.md:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/SKILL.md | 127 | used here | Four-category classification technique used during Phase 3 to categorize proposed actions. |

## Consumes
Diagnosed root causes, success patterns, and failure points from Phase 2.

## Produces
Categorized decision table specifying which behaviors and skills to retain, discard, create, or adjust.

## When applied
Applied during Phase 3 of the retrospective when deciding how to remediate diagnostic findings.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: internal-contradiction

## Design notes
Keep, Drop, Add, Modify is an action categorization technique in rjm retrospectives that forces explicit decisions on whether existing behaviors and skills should be sustained, retired, introduced, or adjusted based on session evidence.
