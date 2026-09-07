---
package: rjm
name: attention manipulation
slug: attention-manipulation
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/agent-architecture-patterns.md, sha256: 144e4d54f12f0d052ddca63e3d1f72022bbcd0720809e105b87449d1bab95253}
  - {path: .claude/skills/planner/references/agent-architecture-patterns.md, sha256: 9b480fa69cb3f4fe279f29126ca7717015e8d68df135b9d13394d7e63401b0bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# attention manipulation

## Definition — verbatim
> "Agent reads the plan before every decision. This is attention manipulation: re-reading keeps goals in the attention window as context grows." — .claude/skills/analyze/references/agent-architecture-patterns.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/agent-architecture-patterns.md | 32 | defined here | Explains that re-reading plan files manipulates model attention to keep goals active. |
| .claude/skills/planner/references/agent-architecture-patterns.md | 23 | defined here | Describes attention manipulation as needle-in-a-haystack mitigation rather than context reduction. |

## Consumes
Current plan file (task_plan.md) and operational objectives.

## Produces
Recency-weighted prompt placement prioritizing goal tokens in the transformer attention layer.

## When applied
Triggered prior to each major tool call or decision point in multi-step workflows.

## Sub-concepts
none

## Part of
context-engineering

## Implementation status
defects: missing-path

## Design notes
Attention manipulation is the intentional practice of re-reading high-priority goal artifacts before every action. In long contexts, transformer models suffer from attention diffusion; re-reading the active plan injects goal definitions into the most recent prompt positions, countering needle-in-a-haystack degradation and keeping execution tightly aligned with task objectives.
