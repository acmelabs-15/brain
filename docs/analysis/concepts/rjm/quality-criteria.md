---
package: rjm
name: Quality Criteria
slug: quality-criteria
kind: checklist
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/codeql-rollout-checklist.md, sha256: 72ef700c707d07c429d84a9776f758a2f8fc5f450b08fedcefe835e8b7376441}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Quality Criteria

## Definition — verbatim
> "### Quality Criteria" — docs/codeql-rollout-checklist.md:329

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codeql-rollout-checklist.md | 329 | defined here | Success criteria checklist ensuring documentation consistency, correct architectural references, and retired-feature clarity. |

## Consumes
Repository documentation files and architectural records (ADR-041, ADR-042).

## Produces
Audit verification confirming documentation aligns with current two-tier architecture and Python implementations.

## When applied
During pre-rollout review and post-rollout validation of CodeQL documentation.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: always-failing-gate, missing-path, doc-drift

## Design notes
Quality Criteria ensures documentation accuracy and architectural fidelity across the codebase. It requires all docs to reflect the two live scanning tiers, cite Python scripts rather than legacy shell tools, frame edit-time scanning strictly as retired, and maintain up-to-date ADR references.
