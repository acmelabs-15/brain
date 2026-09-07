---
package: rjm
name: need-payoff
slug: need-payoff
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# need-payoff

## Definition — verbatim
(used, not defined)

> "- Leads stall in the pipeline, or you lose at the close -> `references/spin-selling.md` (situation, problem, implication, need-payoff)." — .claude/skills/business-strategy/SKILL.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/SKILL.md | 54 | used here | Cited as the fourth question stage of Neil Rackham's SPIN Selling methodology for handling stalled sales pipelines. |

## Consumes
Identified customer problems and explored implications from earlier SPIN inquiry stages.

## Produces
Customer-articulated value and buy-in on the benefits of solving the stated problem.

## When applied
When leads stall in the sales pipeline or deals are lost at the close due to incomplete value discovery.

## Sub-concepts
none

## Part of
spin-selling

## Implementation status
defects: missing-path

## Design notes
The final question type in the SPIN Selling framework within rjm's business-strategy reference library. Need-payoff questions lead prospective buyers to state the value and benefits of a solution themselves, converting implicit needs into explicit commitments and reducing closing resistance.
