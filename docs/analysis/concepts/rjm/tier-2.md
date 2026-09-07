---
package: rjm
name: Tier 2
slug: tier-2
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-041-codeql-integration.md, sha256: 6ccbe8a2a535418e33f8f759b7511e36df157bb78c387180d7c6edb35839810a}
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
  - {path: .claude/skills/threat-modeling/references/security-zero-trust.md, sha256: d85765e15d48f30562264cd967c18952978ab3f76ff0c35fe846048d1888dc26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tier 2

## Definition — verbatim
> "- Tier 2 (Local, on-demand): unchanged. The `codeql-scan` skill remains for developer-initiated scans." — .agents/architecture/ADR-041-codeql-integration.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-041-codeql-integration.md | 30 | defined here | Defined as the local on-demand scanning tier in the CodeQL multi-tier strategy. |
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 74 | defined here | Categorized as the Mid-Level execution tier in engineering complexity. |
| .claude/skills/threat-modeling/references/security-zero-trust.md | 62 | used here | Designated as the User workstations and devices tier in zero-trust models. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
A taxonomic tier designation used across multiple domain frameworks (CodeQL local scanning, mid-level engineering complexity, and user device boundaries), classified as name-only per D-023.
