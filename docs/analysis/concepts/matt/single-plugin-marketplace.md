---
package: matt
name: single-plugin marketplace
slug: single-plugin-marketplace
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0002-ship-as-a-claude-code-plugin.md, sha256: c8f8f946db9fee714fc55270caf6107e749e30316d43fb80cb3ce2f048dd949d}
  - {path: CLAUDE.md, sha256: fa8a2aaf79ca544e92c76401fe2a862aba0583fe62c3a4908af6f20ebadeb89e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# single-plugin marketplace

## Definition — verbatim
> "We list the promoted skills one by one, exclude everything else with zero ambiguity, and add `.claude-plugin/marketplace.json` so the repo is its own single-plugin marketplace." — .agents/adr/0002-ship-as-a-claude-code-plugin.md:11
> "`.claude-plugin/marketplace.json` makes the repo its own single-plugin marketplace (a fallback the install block explains, not the documented route)." — CLAUDE.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0002-ship-as-a-claude-code-plugin.md | 11 | defined here | Defined in ADR as self-hosting mechanism for direct repository plugin installation |
| CLAUDE.md | 11 | defined here | Developer instructions identifying marketplace.json as single-plugin fallback |

## Consumes
`.claude-plugin/marketplace.json` and `.claude-plugin/plugin.json`.

## Produces
A standalone, self-hosted plugin catalog allowing direct installation without third-party marketplace registries.

## When applied
When installing skills directly from unreleased commits, private forks, or custom git remotes before official marketplace propagation.

## Sub-concepts
claude-plugin-marketplace-json

## Part of
claude-code-plugin

## Implementation status
clean

## Design notes
A packaging pattern enabling a git repository to act as its own self-contained plugin marketplace. By hosting `.claude-plugin/marketplace.json` alongside `.claude-plugin/plugin.json`, users and developers can add the repository directly via `/plugin marketplace add`, serving as an immediate distribution fallback while official marketplace catalog pins synchronize.
