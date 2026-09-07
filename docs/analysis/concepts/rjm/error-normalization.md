---
package: rjm
name: Error Normalization
slug: error-normalization
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

# Error Normalization

## Definition — verbatim
> "Prevents the model from treating expected failures as catastrophic errors requiring apology or stopping." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-quality-gate-prompt-refinement.md | 24 | defined here | Defined as an applied prompt engineering pattern documenting expected edge cases and benign failures as normal operational behavior. |
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 1125 | defined here | Formalized as a behavioral shaping pattern teaching models to differentiate between recoverable environment errors and real problems. |

## Consumes
Expected error responses, tool failure codes, and environment feedback signals.

## Produces
Metacognitive error handling behavior, preventing unwarranted apologies and enabling automatic recovery or retries.

## When applied
Applied when designing tool-use instructions and agent system prompts where recoverable tool failures (e.g. sandbox denials, missing files) regularly occur.

## Sub-concepts
none

## Part of
prompt-engineering-patterns, behavioral-shaping

## Implementation status
defects: missing-path, internal-contradiction, doc-drift (.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:104); clean in .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md

## Design notes
`Error Normalization` instills metacognitive awareness in autonomous agents by identifying benign or expected errors in prompt definitions, ensuring the model reacts with practical fallback strategies rather than halting execution or entering apology loops.
