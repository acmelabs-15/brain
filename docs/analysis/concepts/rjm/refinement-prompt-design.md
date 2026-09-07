---
package: rjm
name: Refinement Prompt Design
slug: refinement-prompt-design
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

# Refinement Prompt Design

## Definition — verbatim
> "The refinement prompt applies feedback to produce improved output." — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:143

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 141 | defined here | Section outlining prompt structure, instructions, and historical context accumulation for refinement turns. |

## Consumes
Task description, draft output, prior feedback, and accumulated attempt history.

## Produces
A structured refinement prompt directing the model to address each critique point without repeating mistakes.

## When applied
When designing prompts for the revision turn of multi-turn improvement workflows.

## Sub-concepts
none

## Part of
iterative-refinement

## Implementation status
clean

## Design notes
A prompt engineering technique for constructing refinement prompts in Self-Refine loops. It specifies how to present previous attempts and accumulated feedback across iterations, instructing the model to systematically address all feedback points while retaining history to avoid regression.
