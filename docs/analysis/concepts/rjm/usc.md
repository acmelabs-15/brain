---
package: rjm
name: USC
slug: usc
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

# USC

## Definition — verbatim
(used, not defined)
> "| **Aggregation** | Complexity-Weighted Voting | Varying reasoning depth across samples | Self-Consistency, USC | Simple majority voting | Minimal; selection strategy only | Further gains over standard SC (+2-3 points) |" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:21

## Also called — verbatim
`Universal Self-Consistency` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:19

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 21 | used here | Cited in the technique selection guide as an aggregation approach compatible with Complexity-Weighted Voting. |

## Consumes
Multiple generated responses across open-ended or free-form tasks.

## Produces
The most consistent response chosen by model consensus evaluation.

## When applied
Applied when selecting the most consistent candidate among free-form answers where exact-match voting is impossible.

## Sub-concepts
none

## Part of
prompt-engineer, multi-turn-prompts

## Implementation status
clean

## Design notes
USC (Universal Self-Consistency) is the acronym for Universal Self-Consistency, an aggregation technique that employs language models to select the most semantically consistent response across sampled candidate outputs when exact programmatic match voting is inapplicable.
