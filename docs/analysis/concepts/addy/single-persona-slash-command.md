---
package: addy
name: Single-persona slash command
slug: single-persona-slash-command
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/orchestration-patterns.md, sha256: 61e543d86f19f86b83074f8c1c769455c7085a2c72dd47b1da21a8c63785be4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Single-persona slash command

## Definition — verbatim
> "A slash command that wraps one persona with the project's skills. Saves the user from re-explaining the workflow every time." — references/orchestration-patterns.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/orchestration-patterns.md | 30 | defined here | Pattern catalog entry defining slash commands that encapsulate repeatable single-persona invocations with relevant skills |

## Consumes
Preconfigured slash command prompt, specialist persona, required skills

## Produces
Repeatable specialist analysis report executed with project-specific instructions

## When applied
When the same single-persona invocation happens repeatedly with the same setup (for example /review, /test, /code-simplify)

## Sub-concepts
none

## Part of
orchestration-patterns

## Implementation status
clean

## Design notes
The single-persona slash command pattern packages repeatable specialist workflows (such as /review binding code-reviewer with code-review-and-quality) into reusable CLI shortcuts. It standardizes prompt setup and skill loading without adding architectural complexity, preserving the one-round-trip cost efficiency of direct invocation.
