---
package: rjm
name: RaR
slug: rar
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

# RaR

## Definition — verbatim
> "RaR asks the LLMs to Rephrase the given questions and then Respond within a single query." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:144

## Also called — verbatim
> "### Rephrase and Respond (RaR)" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:140

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 140 | defined here | Defined as an input enhancement pattern instructing the LLM to clarify and expand questions before answering. |

## Consumes
User inquiry subject to semantic ambiguity or differing conceptual framing.

## Produces
Rephrased, elaborated question formulation followed by the final grounded answer.

## When applied
When questions exhibit ambiguity or frame mismatches between human intent and model interpretation.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
RaR (Rephrase and Respond) prompts the model to restate and expand an input query in its own words prior to generating a solution. This eliminates misalignments between human phrasing and model knowledge structures, preventing errors caused by ambiguous terms.
