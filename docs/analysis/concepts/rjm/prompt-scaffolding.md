---
package: rjm
name: Prompt Scaffolding
slug: prompt-scaffolding
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/references/bitter-lesson-llms.md, sha256: d5704127da8f69f150db8fb57ed02da11e400c198eedff21733a4162ada1a7a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Prompt Scaffolding

## Definition — verbatim
> "### 1. Prompt Scaffolding" — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/references/bitter-lesson-llms.md | 17 | defined here | Identifies prompt scaffolding as the first architectural component vulnerable to obsolescence across step-change model upgrades. |

## Consumes
Agent system prompts, prompt chains, procedural instructions, and multi-step prompt templates.

## Produces
Audited, minimal prompt specifications that declare what and why rather than procedural step-by-step algorithms.

## When applied
Applied when designing, reviewing, or pruning agent prompts to eliminate unnecessary complexity and instructions.

## Sub-concepts
none

## Part of
the-bitter-lesson-of-building-with-llms

## Implementation status
defects: missing-path

## Design notes
Prompt Scaffolding encompasses the wrapper instructions, guardrails, and procedural steps added around LLMs. In rjm's Bitter Lesson architecture, prompt scaffolding is treated as ephemeral technical debt that should be audited line-by-line and pruned by 30-50% whenever model capabilities jump, specifying objectives rather than micromanaging execution.
