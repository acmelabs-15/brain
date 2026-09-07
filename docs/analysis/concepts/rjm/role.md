---
package: rjm
name: role:
slug: role
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md, sha256: d094c9283eee8c0798076191cc7f2bb8cb21db28a457234065a56952a25408c5}
  - {path: scripts/eval/panels/owner-copilot-cli.json, sha256: 883f252ebff9ef3be47e45e94785d5f1ce172e2a2fa73ac2bfa3ff2b11ab17f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# role:

## Definition — verbatim
> "with a descriptive `role:` key drawn from a closed four-value vocabulary" — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md | 98 | defined here | Frontmatter key replacing tier: across 186 agent files with inert descriptive metadata. |
| scripts/eval/panels/owner-copilot-cli.json | 18 | defined here | JSON schema property designating evaluation role category for model tiers. |

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
defects: doc-drift

## Design notes
A frontmatter and JSON configuration attribute specifying descriptive role metadata without conferring runtime execution authority, classified as name-only per D-023.
