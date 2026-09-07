---
package: rjm
name: Architecturally Significant Requirements
slug: architecturally-significant-requirements
kind: reference
package_phase: rjm:Architect
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-022-architecture-governance-split-criteria.md, sha256: da77b4cbae09bfeb2e26a5ca1a2f486548a991e8e1dfd80f4226e3c1c32fa60a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Architecturally Significant Requirements

## Definition — verbatim
(used, not defined)

> "- Wikipedia: [Architecturally Significant Requirements](https://en.wikipedia.org/wiki/Architecturally_significant_requirements)" — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:422

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-022-architecture-governance-split-criteria.md | 422 | used here | Cited as external reference defining requirements that have measurable impact on software architecture. |

## Consumes
Business objectives, non-functional requirements, and quality attribute goals.

## Produces
Architectural decisions addressing critical quality attributes and system trade-offs.

## When applied
Referenced when determining whether a requirement exerts sufficient architectural impact to justify authoring an ADR.

## Sub-concepts
none

## Part of
decision-classification-matrix

## Implementation status
defects: missing-path

## Design notes
An architectural reference citing requirements that exert profound influence on system structure, interface contracts, or core quality attributes. In ADR-022, this concept establishes the qualification threshold for creating an Architectural Decision Record.
