---
package: rjm
name: Tier 3
slug: tier-3
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-041-codeql-integration.md, sha256: 6ccbe8a2a535418e33f8f759b7511e36df157bb78c387180d7c6edb35839810a}
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tier 3

## Definition — verbatim
> "Tier 3 is where engineers stop being measured on what they build and start being measured on what they enable others to build." — .claude/skills/analyze/references/engineering-complexity-tiers.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-041-codeql-integration.md | 21 | defined here | Referenced as the retired automatic PostToolUse quick-scan hook in the amendment section. |
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 61 | defined here | Defined as the senior engineering tier focused on multiplying team impact. |

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
A taxonomic tier designation used for the retired automatic CodeQL hook in ADR-041 and the senior engineer level in complexity frameworks, classified as name-only per D-023.
