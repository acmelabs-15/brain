---
package: rjm
name: Affirmative Directives
slug: affirmative-directives
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-quality-gate-prompt-refinement.md, sha256: 2ce12204e8fcce359f0ece469370f710f3e9518ba9576a232239d592753fd963}
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Affirmative Directives

## Definition — verbatim
> "Employ affirmative directives such as 'do,' while steering clear of negative language like 'don't'." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1216

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-quality-gate-prompt-refinement.md | 23 | defined here | Defined as a prompt pattern replacing negative prohibitions ("don't do X") with positive guidance ("do Y instead") across orchestrator and quality gate prompts. |
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 1214 | defined here | Formalized as a behavioral shaping pattern grounded in research (Bsharat et al., 2024) improving model compliance. |

## Consumes
Agent instructions, system prompts, role guidelines, and guardrail definitions.

## Produces
Clear, actionable positive instructions that guide model behavior toward desired actions rather than negative constraints.

## When applied
Used when engineering or refining agent prompts, role specifications, and quality gate instructions.

## Sub-concepts
none

## Part of
prompt-engineering-patterns, behavioral-shaping

## Implementation status
defects: missing-path, internal-contradiction, doc-drift (.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:104); clean in .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md

## Design notes
`Affirmative Directives` improves model reliability and rule following by specifying what actions agents should take instead of merely listing prohibited behaviors, avoiding the cognitive confusion associated with negative constraints in LLMs.
