---
package: rjm
name: Operating Context
slug: operating-context
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/workflow.md, sha256: ea1e77d662f8c4a12ffda0f422ecfffe351f582581aa20548657f26eef2e2fef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Operating Context

## Definition — verbatim
> "### 1.1 Operating Context" — .claude/skills/prompt-engineer/references/workflow.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/workflow.md | 45 | defined here | Defined as the Phase 1 analytical step evaluating interaction model, agent type, token constraints, and failure modes. |

## Consumes
Candidate prompt and description of its target environment, runtime harness, and failure symptoms.

## Produces
Documented baseline understanding of operational constraints and execution realities before technique selection.

## When applied
At the start of Phase 1 (Understand the Prompt) before decomposing or editing complex prompts.

## Sub-concepts
none

## Part of
full-process

## Implementation status
clean

## Design notes
Operating Context grounds prompt optimization in runtime reality. By systematically answering whether a prompt is single-shot or conversational, what agent type executes it, what token budgets apply, and what concrete failure modes occur, it prevents technique selection from degenerating into ungrounded guesswork.
