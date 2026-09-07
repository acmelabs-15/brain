---
package: rjm
name: Feedback Prompt Design
slug: feedback-prompt-design
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

# Feedback Prompt Design

## Definition — verbatim
> "The feedback prompt determines refinement quality." — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:118

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 116 | defined here | Section specifying the structure and constraints of prompts used during the feedback turn. |

## Consumes
Task description, candidate output, and evaluation criteria.

## Produces
A structured feedback prompt requiring identification of flaws and concrete fixes while forbidding rewriting.

## When applied
When authoring prompts for the evaluation and critique turn in multi-turn refinement workflows.

## Sub-concepts
none

## Part of
iterative-refinement

## Implementation status
clean

## Design notes
A prompt engineering technique for authoring feedback prompts in Self-Refine loops. It requires isolating the critique turn from generation, demanding that the model identify specific problematic phrases and suggest concrete actions rather than providing vague feedback or prematurely rewriting the content.
