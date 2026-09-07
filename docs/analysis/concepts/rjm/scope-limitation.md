---
package: rjm
name: Scope Limitation
slug: scope-limitation
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

# Scope Limitation

## Definition — verbatim
> "Scope Limitation: Preventing Overthinking" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:774

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-quality-gate-prompt-refinement.md | 58 | used here | Cites scope limitation as an applied prompt pattern bounding CRITICAL_FAIL triggers to relevant scopes. |
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 774 | defined here | Defined as an output control technique preventing overthinking, analysis paralysis, and unsolicited additions. |

## Consumes
Task prompts, instructions, and review scopes.

## Produces
Strictly bounded task outputs, preventing scope creep, speculative additions, or over-planning loops.

## When applied
Applied when prompting agents to complete bounded tasks without adding unrequested improvements or overanalyzing edge cases.

## Sub-concepts
none

## Part of
prompt-engineering-patterns, output-control

## Implementation status
defects: missing-path, internal-contradiction, doc-drift (.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:104); clean in .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md

## Design notes
`Scope Limitation` guards against analysis paralysis and scope creep by explicitly commanding the agent to perform only the requested task without generating speculative suggestions or extraneous features.
