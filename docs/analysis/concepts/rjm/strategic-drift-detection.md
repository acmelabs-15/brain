---
package: rjm
name: Strategic Drift Detection
slug: strategic-drift-detection
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

# Strategic Drift Detection

## Definition — verbatim
> "Ask these questions every quarter:" — .claude/agents/roadmap.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 72 | defined here | Defined as a quarterly review protocol to detect divergence between plans and delivered outcomes. |
| templates/agents/roadmap.shared.md | 78 | defined here | Defined in the shared roadmap template for quarterly drift audit. |

## Consumes
Committed roadmap deliverables, actual delivered features, outcome reviews, capacity allocations, and kill criteria dates.

## Produces
A quarterly governance audit identifying divergence, shadow backlog, and unreviewed failing projects.

## When applied
Applied every quarter to audit roadmap execution against strategic commitments.

## Sub-concepts
none

## Part of
- roadmap

## Implementation status
defects: doc-drift

## Design notes
Strategic Drift Detection serves as a periodic feedback loop in rjm to verify that engineering execution aligns with organizational strategy. By asking structured quarterly audit questions regarding delivered outcomes, shadow backlog accumulation, and ignored kill criteria, it prevents silent architectural drift and ungrounded project continuation.
