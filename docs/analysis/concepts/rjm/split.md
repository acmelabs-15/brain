---
package: rjm
name: Split
slug: split
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-022-architecture-governance-split-criteria.md, sha256: da77b4cbae09bfeb2e26a5ca1a2f486548a991e8e1dfd80f4226e3c1c32fa60a}
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Split

## Definition — verbatim
> "#### Use **Split (ADR + Governance)** when:" — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:156

## Also called — verbatim
> "Split (ADR + Governance)" — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:156

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-022-architecture-governance-split-criteria.md | 156 | defined here | Placement rule for decisions possessing both architectural significance and operational enforcement requirements. |
| scripts/eval/README.md | 492 | defined here | Subcommand in eval harness partitioning benchmark task IDs into optimization, selection, and test sets. |

## Consumes
Hybrid decisions with architectural consequences and compliance mandates; evaluation datasets.

## Produces
Paired architectural decision records and governance policies; partitioned evaluation task sets.

## When applied
Applied when a decision affects system structure and requires ongoing policy enforcement; used in eval datasets to partition task splits.

## Sub-concepts
none

## Part of
decision-classification-matrix

## Implementation status
defects: missing-path, doc-drift, script-bug

## Design notes
In rjm's architecture governance, Split refers to the hybrid documentation pattern where a decision involves both immutable architectural design choices and living operational compliance mandates, requiring linked files in both `.agents/architecture/` and `.agents/governance/`. In evaluation tooling, the term also designates the subcommand that partitions benchmark tasks into train, validation, and test sets.
