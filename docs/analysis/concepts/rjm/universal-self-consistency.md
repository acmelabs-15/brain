---
package: rjm
name: Universal Self-Consistency
slug: universal-self-consistency
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

# Universal Self-Consistency

## Definition — verbatim
> "### Universal Self-Consistency (USC)" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:388

## Also called — verbatim
`USC` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:388

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 19 | defined here | Detailed in the technique selection guide as an aggregation method for free-form outputs where exact-match voting is inapplicable. |

## Consumes
A set of N candidate responses sampled at temperature > 0 for a query.

## Produces
The selected most consistent response identified by model-based consensus evaluation.

## When applied
Applied to open-ended, free-form tasks where traditional exact-match majority voting cannot operate.

## Sub-concepts
usc

## Part of
prompt-engineer, multi-turn-prompts

## Implementation status
clean

## Design notes
Universal Self-Consistency (USC) generalizes self-consistency beyond closed-form mathematical or multiple-choice questions to free-form natural language generation. By prompting an LLM to evaluate semantic consensus across candidate responses rather than relying on exact string extraction, it brings consistency gains to open-ended synthesis and QA tasks.
