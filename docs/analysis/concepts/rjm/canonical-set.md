---
package: rjm
name: canonical set
slug: canonical-set
kind: reference
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# canonical set

## Definition — verbatim
> "Stage-2 review axes from the canonical set." — .claude/skills/review/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 4 | defined here | Defines the discovered baseline set of review axes. |

## Consumes
Prompt definitions co-located under `references/*.md` in the review skill directory.

## Produces
Discovered baseline set of review axes enrolled for Stage-1 gate and Stage-2 evaluation.

## When applied
> "Run after /test." — .claude/skills/review/SKILL.md:4

## Sub-concepts
spec-compliance, stage-2-review-axes

## Part of
review

## Implementation status
defects: missing-path, doc-drift

## Design notes
The canonical set establishes the discovered baseline of review axis prompt definitions co-located with the review skill that serve as the single source of truth for code evaluation in rjm. By auto-discovering prompt files rather than hardcoding an enumerated list, rjm allows new evaluation dimensions to be enrolled cleanly across both local Claude Code sessions and vendored plugin installations.
