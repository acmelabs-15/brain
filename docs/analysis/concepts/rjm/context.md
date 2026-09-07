---
package: rjm
name: Context
slug: context
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-template.md, sha256: b2e5e4d7d00674c28331639b8cc7d205f3ff649dcf12b20225a7f0a9997dd020}
  - {path: .claude/skills/analyze/references/reliability-observability-pillars.md, sha256: 6450d4c78251d4f6f6dbb7af254742bb68a42e5b2d4df5697f668bcca3c560fa}
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: .claude/skills/code-qualities-assessment/templates/.qualityrc.json, sha256: 31e9d74ee0b0c490d54d9ae9176b111a6b6bd6002550e4881e727afa7e3727d0}
  - {path: .claude/skills/observability/references/three-pillars-reference.md, sha256: 63be0738d54cfdc95c4c4190a3f4bf85375759061d8b4d32deed110f28d5526b}
  - {path: .claude/skills/panning-for-gold/SKILL.md, sha256: 1f40dc18c6cd6fb4bd569c0803ca82dc42d45a86b7277259f9781a32c1afe286}
  - {path: .claude/skills/panning-for-gold/references/inventory-template.md, sha256: 68b211dc4ce7a2b2965102dc8c33cd07efe876b13396a717af4b636bf2e149cd}
  - {path: .claude/skills/panning-for-gold/scripts/inventory.py, sha256: b622e9c01913b410cadc11fa13a34ca0b2a6bc8bfcccfac206b54c2a3f3f4972}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Context

## Definition — verbatim
> "## Context" — .claude/skills/adr-generator/references/adr-template.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-template.md | 52 | defined here | Required ADR section describing the problem, driving forces, and why a decision is needed. |
| .claude/skills/analyze/references/reliability-observability-pillars.md | 58 | defined here | Defined in distributed tracing as propagated trace ID and span ID across services. |
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 12 | defined here | Classified alongside Core as non-differentiating table-stakes capabilities. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 89 | defined here | Tag defining table stakes, industry-standard capabilities defaulting to Buy. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 75 | used here | Purpose statement for Phase 1 classifying capabilities into Core vs Context. |
| .claude/skills/code-qualities-assessment/templates/.qualityrc.json | 19 | defined here | Configuration section setting contextual quality score thresholds for test and generated code. |
| .claude/skills/observability/references/three-pillars-reference.md | 56 | defined here | Defined in observability reference as propagated trace ID and span ID across boundaries. |
| .claude/skills/panning-for-gold/references/inventory-template.md | 13 | defined here | Required field in thread inventory recording where a highlighted signal originated. |
| .claude/skills/panning-for-gold/scripts/inventory.py | 29 | used here | Listed in REQUIRED_FIELDS tuple enforced by automated thread inventory validation. |
| .claude/skills/panning-for-gold/SKILL.md | 77 | used here | Documented structure field explaining background origin of an inventoried thread. |

## Consumes
Problem statements, distributed trace identifiers, capability definitions, or source transcript excerpts.

## Produces
Clear architectural problem framing, propagated trace metadata, or candidate classification bounds.

## When applied
Applied across ADR documentation, distributed tracing correlation, buy-vs-build capability classification, and thread extraction.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift, exit-code-mismatch

## Design notes
A ubiquitous multi-domain concept in rjm spanning four distinct functions: (1) architectural problem framing in ADRs, (2) non-differentiating table-stakes capabilities in the Buy vs Build framework, (3) distributed trace propagation headers in observability, and (4) provenance metadata for extracted signals in conversation mining.
