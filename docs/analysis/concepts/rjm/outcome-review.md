---
package: rjm
name: Outcome Review
slug: outcome-review
kind: checklist
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
  - {path: templates/agents/roadmap.shared.md, sha256: fd92ee8e3cf1daac90afd929e18eef500c446fc015b43703096a4dffb49592b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Outcome Review

## Definition — verbatim
> "Filled after the epic ships, on the Success Metrics review date. Without this, the roadmap captures hypotheses but never learns whether they held." — .claude/agents/roadmap.md:118

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 117 | defined here | Post-delivery review section closing the feedback loop on epic hypotheses. |
| templates/agents/roadmap.shared.md | 123 | defined here | Defined in the shared roadmap template for post-delivery hypothesis evaluation. |

## Consumes
Shipped epics, measured metrics on the target review date, and original epic hypotheses.

## Produces
Empirical validation verdicts (confirmed / refuted) feeding updated confidence scores back into future planning cycles.

## When applied
Applied post-delivery on the specified review date once production metrics are available.

## Sub-concepts
none

## Part of
- epic-structure
- roadmap

## Implementation status
defects: doc-drift

## Design notes
Outcome Review closes the empirical loop in rjm's roadmap management. By mandating a formal post-delivery evaluation against original metric targets, it ensures that the organization learns whether delivered features achieved their intended impact, adjusting confidence estimates for future initiatives accordingly.
