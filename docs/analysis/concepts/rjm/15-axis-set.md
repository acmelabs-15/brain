---
package: rjm
name: 15-axis set
slug: 15-axis-set
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

# 15-axis set

## Definition — verbatim
> "explicit deep review runs the full 15-axis set." — .claude/skills/review/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 4 | defined here | Defines the complete 15-axis review suite combining Stage-1 gate, 11 canonical axes, and 3 local skill axes. |

## Consumes
Stage-1 spec-compliance prompt, 11 Stage-2 canonical reference prompts, and 3 local skill script paths.

## Produces
Complete multi-dimensional findings table comprising 15 rows with per-axis verdicts and structured findings.

## When applied
Invoked when deep review is requested or when diff change risk cannot be classified with confidence.

## Sub-concepts
spec-compliance, stage-2-review-axes, local-only-skill-axes

## Part of
review, deep-review

## Implementation status
defects: missing-path, doc-drift

## Design notes
The 15-axis set represents the total review surface of rjm's review phase, integrating spec compliance, 11 canonical review perspectives, and 3 local repo-level analysis skills into a unified evaluation matrix. It guarantees complete coverage of specification alignment, architecture, security, and coding standards prior to production release.
