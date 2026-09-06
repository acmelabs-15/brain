---
package: matt
name: .claude-plugin/marketplace.json
slug: claude-plugin-marketplace-json
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0002-ship-as-a-claude-code-plugin.md, sha256: c8f8f946db9fee714fc55270caf6107e749e30316d43fb80cb3ce2f048dd949d}
  - {path: .agents/install-block.md, sha256: 23f776c69d4b8688e18fd2a29d51ed4f2cb40132f0c3acb3a1ca6d45c1d18f65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .claude-plugin/marketplace.json

## Definition — verbatim
(used, not defined)
> "We list the promoted skills one by one, exclude everything else with zero ambiguity, and add `.claude-plugin/marketplace.json` so the repo is its own single-plugin marketplace." — .agents/adr/0002-ship-as-a-claude-code-plugin.md:11
> "`.claude-plugin/marketplace.json` makes the repo its own single-plugin marketplace (`/plugin marketplace add mattpocock/skills`, then `/plugin install mattpocock-skills@mattpocock`)." — .agents/install-block.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0002-ship-as-a-claude-code-plugin.md | 11 | used here | Documented as turning the repo into its own single-plugin marketplace |
| .agents/install-block.md | 61 | used here | Characterized as a fallback for direct fork or unreleased commit installs |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
single-plugin-marketplace

## Implementation status
clean

## Design notes
Manifest file establishing a local or fallback Claude Code marketplace definition within the repository; recorded as a name-only card representing a configuration file rather than an engineering lifecycle concept.
