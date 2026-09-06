---
package: matt
name: /plugin install mattpocock-skills@mattpocock
slug: plugin-install-mattpocock-skills-mattpocock
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/install-block.md, sha256: 23f776c69d4b8688e18fd2a29d51ed4f2cb40132f0c3acb3a1ca6d45c1d18f65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# /plugin install mattpocock-skills@mattpocock

## Definition — verbatim
(used, not defined)

> "`.claude-plugin/marketplace.json` makes the repo its own single-plugin marketplace (`/plugin marketplace add mattpocock/skills`, then `/plugin install mattpocock-skills@mattpocock`)." — .agents/install-block.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/install-block.md | 61 | used here | Documents the deprecated fallback command for installing the plugin from the local single-plugin marketplace. |

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
clean

## Design notes
/plugin install mattpocock-skills@mattpocock is a deprecated Claude Code installation command qualified by marketplace source rather than an operational lifecycle concept.
