---
package: rjm
name: Rephrase and Respond
slug: rephrase-and-respond
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Rephrase and Respond

## Definition — verbatim
> "**Rephrase and Respond** lets the LLM clarify the question in its own terms before answering." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:142

## Also called — verbatim
> "### Rephrase and Respond (RaR)" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:140

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 140 | defined here | Defined as an input enhancement method enabling the LLM to clarify and transform input questions prior to response generation. |

## Consumes
User inquiry requiring clarification of intent or conceptual scope.

## Produces
Clarified problem restatement and subsequent answer aligned with model understanding.

## When applied
When addressing ambiguous questions or frame mismatches between user phrasing and model expectations.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
Rephrase and Respond addresses human-LLM communication mismatches by prompting the model to reframe the user's query before answering. Clarifying the query within the prompt context ensures subsequent reasoning operates on an unambiguous, well-specified objective.
