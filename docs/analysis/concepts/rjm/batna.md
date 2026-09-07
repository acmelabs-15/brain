---
package: rjm
name: BATNA
slug: batna
kind: technique
package_phase: rjm:support
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/negotiation.md, sha256: 1caac2daaa29dde1d3f672383afb71a93b165b4d6f9fb267c62081e03994aff4}
  - {path: .claude/skills/negotiation/SKILL.md, sha256: 9753ad450c2b3aa5ac0cdda0c7d9a429dd82e7c8227ac35b43eda1bfa8b02e41}
  - {path: .claude/skills/negotiation/references/skills.md, sha256: ae5055eedea0db85458d74da810803dc4defc1a70e885ad31b738513c4965114}
  - {path: templates/agents/negotiation.shared.md, sha256: f3c95963b9fcb4b3824e2ae1bfc03e514aca724e316bce209a0742f8394023a5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# BATNA

## Definition — verbatim
> "2. Analyze: ZOPA, BATNA, information asymmetry, value gap" — .claude/skills/negotiation/references/skills.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/negotiation.md | 90 | used here | Structured output section detailing fallback options and strength delta between parties. |
| .claude/skills/negotiation/references/skills.md | 38 | used here | Analysis step in the protocol sequence requiring assessment of alternatives to a negotiated agreement. |
| .claude/skills/negotiation/SKILL.md | 46 | used here | Phase 2 workflow directive requiring explicit BATNA evaluation. |
| templates/agents/negotiation.shared.md | 96 | used here | Template section modeling fallback alternatives for both sides. |

## Consumes
Viable external alternatives, walk-away consequences, and relative dependency assessments.

## Produces
Comparative strength delta establishing which party has greater leverage if the current negotiation terminates.

## When applied
Assessed during the analysis phase of every negotiation offer.

## Sub-concepts
none

## Part of
analyze-map-the-zone

## Implementation status
defects: orphan

## Design notes
BATNA (Best Alternative to a Negotiated Agreement) evaluates the objective fallback position of each side if an agreement is not reached. In rjm, evaluating BATNA strength deltas determines negotiation leverage, indicating whether an aggressive counter, patient posture, or walk-away is warranted.
