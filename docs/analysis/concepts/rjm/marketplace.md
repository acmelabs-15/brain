---
package: rjm
name: Marketplace
slug: marketplace
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/claude-code-plugin-marketplaces.md, sha256: 7bf3c4c5147775914422c77a5ab9b7f61a348c3a0584fd947ec2959316ddfd8b}
  - {path: scripts/dev/dogfood_copilot_plugin.py, sha256: c9070ffbcff5d39290ffdfe5932104942ab93407904dc5215c89c2fa78f2c98c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Marketplace

## Definition — verbatim
> "A marketplace is a catalog file (`.claude-plugin/marketplace.json`) that:" — .agents/analysis/claude-code-plugin-marketplaces.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-code-plugin-marketplaces.md | 35 | defined here | Section heading defining marketplaces as catalogs listing available plugins and metadata. |
| scripts/dev/dogfood_copilot_plugin.py | 36 | defined here | Constant identifying the target marketplace identifier for local dogfooding. |

## Consumes
Plugin registries, source repositories, versioning specifications, and author metadata.

## Produces
A discoverable catalog index enabling automated installation and updating of plugins.

## When applied
Used when publishing, discovering, installing, or updating agent plugins across teams and repositories.

## Sub-concepts
marketplace-json, strictknownmarketplaces

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A marketplace provides an indexed catalog for plugin discovery, versioning, and distribution, allowing development teams to manage and distribute approved suites of agent skills and commands across projects.
