---
package: rjm
name: CoVe
slug: cove
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

# CoVe

## Definition — verbatim
> "### Chain-of-Verification (CoVe)" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:204

## Also called — verbatim
`Chain-of-Verification` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:204

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 18 | used here | Cited in the technique selection guide as stacking with Factored Verification. |
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 1443 | used here | Explains that list-based accuracy improvement (17% to 70%) is specific to the factored CoVe approach. |

## Consumes
Initial query and draft response requiring factual verification.

## Produces
A set of planned verification questions, independently executed verification answers, and a final verified response.

## When applied
Applied when factual precision is paramount and hallucination risks are elevated across entity generation or list-based QA.

## Sub-concepts
joint-cove

## Part of
prompt-engineer, multi-turn-prompts

## Implementation status
clean

## Design notes
CoVe (Chain-of-Verification) is a four-step prompt engineering technique that reduces model hallucination through structured self-verification. By generating an initial draft, formulating discrete verification questions, answering those questions independently, and revising the final answer based on verified facts, it exploits the asymmetry between longform confabulation and shortform factual accuracy.
