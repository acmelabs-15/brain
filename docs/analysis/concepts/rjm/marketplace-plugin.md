---
package: rjm
name: marketplace plugin
slug: marketplace-plugin
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-047-plugin-mode-hook-behavior.md, sha256: 3434f27ef9056e9a72836805fcc30dbb43f5447d14e4fe406330014c02503491}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# marketplace plugin

## Definition — verbatim
(used, not defined)

> "This project is distributed as a Claude Code marketplace plugin installed by hundreds of engineers." — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-047-plugin-mode-hook-behavior.md | 24 | used here | Describes distribution mechanism as an installed plugin requiring dual-environment path resolution |

## Consumes
Bundled agent templates, skill definitions, hook scripts, and plugin manifest (`plugin.json`).

## Produces
Distributable package artifact installable into consumer workspaces via Claude Code plugin marketplaces.

## When applied
Packaged and published for distribution to engineers installing the agent toolkit into consumer repositories.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A marketplace plugin is the distribution artifact through which agent capabilities, skills, and lifecycle hooks are packaged and installed into consumer projects via the Claude Code marketplace.
