---
package: rjm
name: Two-Stage Models
slug: two-stage-models
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/security-zero-trust.md, sha256: d85765e15d48f30562264cd967c18952978ab3f76ff0c35fe846048d1888dc26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Two-Stage Models

## Definition — verbatim
> "### Two-Stage Models" — .claude/skills/threat-modeling/references/security-zero-trust.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-zero-trust.md | 37 | defined here | Context-based evaluation pattern dividing classification into fast coarse feature extraction and enriched ML modeling. |

## Consumes
Action telemetry, touched point context, security event metadata.

## Produces
Coarse classification buckets in Stage 1 and precise risk-scored authorization verdicts in Stage 2.

## When applied
Applied when evaluating access requests in Zero Trust architectures where single-stage ML evaluation is too slow or resource-intensive.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Two-Stage Models decouple fast coarse-grained filtering from computationally intensive multi-signal machine learning evaluation, enabling systems to make context-based security authorization decisions within interactive latency budgets.
