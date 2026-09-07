---
package: rjm
name: Stage-2 review axes
slug: stage-2-review-axes
kind: technique
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

# Stage-2 review axes

## Definition — verbatim
> "Stage-1 spec-compliance gate, then risk-selected Stage-2 review axes from the canonical set." — .claude/skills/review/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 4 | defined here | Defines risk-selected review axes evaluated after Stage-1 gate. |

## Consumes
Stage-1 spec-compliance gate pass or inconclusive verdict, and verified changed paths from the PR diff.

## Produces
Per-axis review findings and verdict tokens across selected architectural and quality dimensions.

## When applied
> "Run after /test." — .claude/skills/review/SKILL.md:4

## Sub-concepts
analyst, architect, qa, security, devops, roadmap, reliability, observability, agent-safety, decision-rigor, code-quality

## Part of
review, 15-axis-set

## Implementation status
defects: missing-path, doc-drift

## Design notes
In rjm's review phase, Stage-2 review axes decompose code evaluation across specialized engineering dimensions selected dynamically by change risk rather than running an indiscriminate blind fan-out. By calibrating the active axis set to actual diff characteristics, rjm balances thorough multi-perspective scrutiny against context budget and execution latency.
