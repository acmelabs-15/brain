---
package: rjm
name: v1 Invalidation
slug: v1-invalidation
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-058-agent-eval-discipline.md, sha256: 772b9974abe96bcf928a8c9e89bd63fa9ecfb82e51baff7ccbfc07ce198daf51}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# v1 Invalidation

## Definition — verbatim
(used, not defined)

> "### v1 Invalidation (BOTH committed v1 verdicts retracted)" — .agents/architecture/ADR-058-agent-eval-discipline.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-058-agent-eval-discipline.md | 55 | defined here | Section heading retracting initial v1 spike verdicts due to experimental design asymmetry. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
agent-eval-discipline

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
A historical and methodological section heading in ADR-058 documenting the invalidation and retraction of initial security-spike evaluation verdicts due to an asymmetric prompt contract, classified as `name-only` per D-023.
