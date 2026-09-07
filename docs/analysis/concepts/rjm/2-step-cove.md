---
package: rjm
name: 2-Step CoVe
slug: 2-step-cove
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

# 2-Step CoVe

## Definition — verbatim
> "| 2-Step CoVe | 0.19 |" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:309

## Also called — verbatim
> "2-Step verification" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:296

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 309 | defined here | Listed in the precision comparison table as an intermediate verification strategy between Joint CoVe and Factored CoVe. |

## Consumes
Planned verification questions and baseline draft output.

## Produces
Batched verification answers generated without the baseline, followed by explicit inconsistency cross-checks against the baseline.

## When applied
When balancing factual verification precision against the token cost of per-question factored calls.

## Sub-concepts
none

## Part of
factored-vs-joint-verification

## Implementation status
clean

## Design notes
A middle-ground Chain-of-Verification technique that generates all verification answers in a single clean-context pass without the baseline response, then performs an explicit cross-check against the baseline to identify inconsistencies before producing the final verified output.
