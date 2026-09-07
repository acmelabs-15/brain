---
package: rjm
name: ZOPA
slug: zopa
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

# ZOPA

## Definition — verbatim
> "Consistent application of structured analysis prevents anchoring to the other party's frame before establishing your own ZOPA." — .claude/skills/negotiation/references/skills.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/negotiation.md | 85 | used here | Structured output field mapping walk-away points and agreement overlap in Step 2. |
| .claude/skills/negotiation/references/skills.md | 31 | used here | Evidence note indicating that structured ZOPA analysis prevents anchoring to the counterpart's frame. |
| .claude/skills/negotiation/SKILL.md | 46 | used here | Phase 2 instruction mandating mapping of the Zone of Possible Agreement before qualitative analysis. |
| templates/agents/negotiation.shared.md | 91 | used here | Output template field defining the walk-away overlap boundaries. |

## Consumes
Internal reservation prices (walk-away values) and evidence-backed estimates of counterpart walk-away thresholds.

## Produces
Explicit calculation of the Zone of Possible Agreement range or identification of zero-overlap impasse.

## When applied
Formulated during Step 2 (Analyze) of negotiation evaluation.

## Sub-concepts
none

## Part of
analyze-map-the-zone

## Implementation status
defects: orphan

## Design notes
ZOPA (Zone of Possible Agreement) models the bargaining range bounded by each party's walk-away value. In rjm, defining one's own walk-away and estimating the counterpart's limit before negotiating prevents ungrounded compromises and exposes whether a viable deal exists.
