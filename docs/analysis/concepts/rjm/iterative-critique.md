---
package: rjm
name: Iterative Critique
slug: iterative-critique
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Iterative Critique

## Definition — verbatim
> "| **Refinement** | Iterative Critique | Specific quality dimensions need improvement | Self-Refine, Format Strictness | n/a | Moderate; targeted feedback reduces iterations | Monotonic improvement on scored dimensions |" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 16 | defined here | Listed in the technique selection guide for scenarios where specific quality dimensions require targeted iterative evaluation. |

## Consumes
Draft response and designated quality dimensions or scoring criteria.

## Produces
Targeted feedback on specific dimensions and monotonic improvement across evaluated criteria.

## When applied
Applied when specific quality dimensions need improvement rather than general open-ended refinement.

## Sub-concepts
none

## Part of
prompt-engineer, multi-turn-prompts

## Implementation status
clean

## Design notes
Iterative Critique is a targeted refinement technique focused on evaluating and revising specific scored dimensions of an output. By directing model feedback toward explicit criteria rather than unconstrained critique, it minimizes unnecessary revision cycles and produces monotonic quality improvements.
