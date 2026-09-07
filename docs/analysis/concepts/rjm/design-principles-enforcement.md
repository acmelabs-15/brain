---
package: rjm
name: Design Principles Enforcement
slug: design-principles-enforcement
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/steering-committee-charter.md, sha256: 855a890ef575ea88a2e46161c4b17481be4f6d194e3e35353820d393b2c9741a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Design Principles Enforcement

## Definition — verbatim
(used, not defined)

> "Design Principles Enforcement" — .agents/governance/steering-committee-charter.md:116

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/steering-committee-charter.md | 116 | defined here | Heading and matrix defining committee enforcement mechanisms for core agent design principles. |

## Consumes
Proposed agent ADRs, specification documents, interface definitions, and chaining diagrams.

## Produces
Pass/fail review determinations verifying non-overlapping boundaries, clear entry criteria, explicit limitations, and composability.

## When applied
During Steering Committee evaluation of all new agent proposals and architecture reviews.

## Sub-concepts
none

## Part of
steering-committee-charter

## Implementation status
defects: doc-drift, missing-path

## Design notes
Architectural review gate enforcing six fundamental design principles (non-overlapping, clear entry criteria, explicit limitations, composable, verifiable, consistent interface). It provides quantitative rejection thresholds (>20% overlap) to protect system modularity.
