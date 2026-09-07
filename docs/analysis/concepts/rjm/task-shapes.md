---
package: rjm
name: task shapes
slug: task-shapes
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/when-to-use.md, sha256: b1010165adfde7358c21c0b295d842c982690d7c5a74e28d1e830df2346ba6b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# task shapes

## Definition — verbatim
> "This is a fitness guide. It maps task shapes to the lifecycle commands" — docs/when-to-use.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/when-to-use.md | 3 | defined here | Taxonomic categories classifying engineering tasks by scope, ambiguity, and blast radius. |

## Consumes
Problem characteristics, code boundaries, blast radius, and customer impact.

## Produces
Classification into one of eight recognized task shapes for lifecycle command selection.

## When applied
Evaluated at task inception before running commands or routing agents.

## Sub-concepts
scaled-delivery, compliance-or-guardrail-change, defect-mitigation, customer-facing-generated-artifact, exploratory-spike, documentation-only-change, context-black-hole

## Part of
fitness-guide

## Implementation status
clean

## Design notes
A structural taxonomy in rjm categorizing software engineering tasks according to ambiguity, blast radius, and risk profile to determine appropriate lifecycle rigor.
