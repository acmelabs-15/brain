---
package: rjm
name: Aggregation and Consistency
slug: aggregation-and-consistency
kind: pattern
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

# Aggregation and Consistency

## Definition — verbatim
> "Techniques that sample multiple responses and select or synthesize the best output." — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:386

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 384 | defined here | Section heading and taxonomy category grouping techniques that sample and synthesize multiple reasoning paths. |

## Consumes
Multiple candidate responses sampled at non-zero temperature across identical or diverse prompts.

## Produces
A consolidated final output selected via majority voting, complexity filtering, consistency evaluation, or meta-reasoning synthesis.

## When applied
When single-pass generation exhibits high variance or error rates and sampling multiple reasoning paths provides a more reliable signal.

## Sub-concepts
simple-majority-voting, complexity-based-consistency, mcr

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
A foundational prompt engineering pattern in rjm encompassing techniques that sample multiple model responses and apply post-generation algorithms to select or synthesize the optimal output. It includes Universal Self-Consistency, Multi-Chain Reasoning, and Complexity-Weighted Voting.
