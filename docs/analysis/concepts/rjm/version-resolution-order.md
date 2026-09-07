---
package: rjm
name: version-resolution order
slug: version-resolution-order
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-079-merge-time-plugin-version-bump.md, sha256: b317b3a12963681bd925bbe44f1233471c97de08730385744caff8aea3b93604}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# version-resolution order

## Definition — verbatim
> "Version-resolution order (code.claude.com plugin-marketplaces docs): `plugin.json` `version`, then marketplace entry `version`, then the commit SHA." — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-079-merge-time-plugin-version-bump.md | 50 | used here | Documents Claude Code's tiered resolution fallback order from plugin.json to marketplace entry to commit SHA. |

## Consumes
Claude Code plugin marketplace specification and documentation.

## Produces
Deterministic version resolution for installed plugins across fallback tiers.

## When applied
Consulted when determining whether omitted or explicitly declared manifest versions trigger client cache invalidation.

## Sub-concepts
none

## Part of
plugin-version-management

## Implementation status
clean

## Design notes
Version-resolution order defines how Claude Code resolves the active version of a plugin across fallback layers. By documenting that Claude Code falls back from `plugin.json` to `marketplace.json` to git commit SHA, the architecture can evaluate whether explicit version strings are strictly required for Claude compared to Copilot CLI.
