---
package: rjm
name: Plan-and-Solve
slug: plan-and-solve
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Plan-and-Solve

## Definition — verbatim
> "### Plan-and-Solve Prompting" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:311

## Also called — verbatim
`Plan-and-Solve Prompting` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:311
`PS` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:322
`PS+` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:323

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 5 | used here | Cited as a foundational single-turn technique assumed as prerequisite knowledge for multi-turn prompt engineering. |
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 311 | defined here | Defines Plan-and-Solve prompting as a two-stage reasoning pattern (devising a plan then executing step-by-step) to minimize missing-step errors. |

## Consumes
Problem statement requiring multi-step arithmetic, logic, or variable extraction.

## Produces
An explicit breakdown of steps (plan) followed by sequential intermediate calculations and final solution.

## When applied
Applied to complex reasoning tasks where basic Zero-shot-CoT experiences missing-step errors or calculation omissions.

## Sub-concepts
none

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
Plan-and-Solve Prompting is a reasoning structure technique designed to overcome the missing-step errors prevalent in standard Zero-shot-CoT. By instructing the model to first understand the problem and devise a plan before carrying it out step by step, it significantly reduces calculation and reasoning omissions on complex multi-step problems.
