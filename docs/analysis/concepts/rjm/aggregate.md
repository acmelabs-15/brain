---
package: rjm
name: Aggregate
slug: aggregate
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
  - {path: scripts/eval/_e2e_delivery_core.py, sha256: f7aeb40a86977036c93513fb424b27e9249ddcde90e7e4dc92fdd0097340ccab}
  - {path: scripts/eval/_oneshot_bench_core.py, sha256: ca0711a16c6783ec1ee13ffd37a3eae9dcc589eeb8dd2d79f2101029e9bb876a}
  - {path: scripts/eval/eval-oneshot-vs-shipped.py, sha256: 62ac458c5ee7b965983f33a0e1e246f63f3ad282ba8d2094dcb67e825c4e5f52}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
  - {path: scripts/external_signals/gate_aggregator.py, sha256: f9f7a2f2f9ebcc47353b79aad06d7aeeafbb32ccc699027030b5673c83df71e3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Aggregate

## Definition — verbatim
> "- **Aggregate**: a cluster of entities and value objects with one **Aggregate Root**. The aggregate is the unit of consistency and the unit of transactional change." — .claude/skills/software-engineering-library/references/domain-driven-design.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 20 | defined here | Defined in core vocabulary as a cluster of entities and value objects forming a unit of consistency and transactional change. |
| scripts/eval/_e2e_delivery_core.py | 286 | defined here | Function name aggregating scored run records into comparison reports. |
| scripts/eval/_oneshot_bench_core.py | 276 | defined here | Function name aggregating graded fixtures into benchmark summaries. |
| scripts/eval/eval-oneshot-vs-shipped.py | 38 | used here | Imported function aggregating benchmark results across runs. |
| scripts/eval/eval-rule-activation.py | 1384 | defined here | Function name aggregating per-mechanism averages across evaluation scenarios. |
| scripts/external_signals/gate_aggregator.py | 85 | defined here | Function name aggregating multiple signal verdicts into a final gate verdict. |

## Consumes
Domain entities, value objects, transactional boundaries, or benchmark and signal records.

## Produces
Enforced consistency boundaries in domain models, or aggregated summary metrics and gate verdicts in evaluation scripts.

## When applied
Applied when grouping related domain entities into an atomic consistency boundary, or when rolling up multi-run evaluations and validation signals into summary verdicts.

## Sub-concepts
aggregate-root, entity, value-object

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
In Domain-Driven Design, an Aggregate is a consistency boundary enclosing related entities and value objects governed by a single root entity. In rjm, the term also names core evaluation and gate functions that aggregate multiple benchmark scores and evaluator signals into final summary decisions.
