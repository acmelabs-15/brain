---
package: rjm
name: enabledPlugins
slug: enabledplugins
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/claude-code-plugin-marketplaces.md, sha256: 7bf3c4c5147775914422c77a5ab9b7f61a348c3a0584fd947ec2959316ddfd8b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# enabledPlugins

## Definition — verbatim
(used, not defined)

> "  \"enabledPlugins\": {" — .agents/analysis/claude-code-plugin-marketplaces.md:155

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-code-plugin-marketplaces.md | 155 | defined here | Exemplifies the JSON settings key used in `.claude/settings.json` to auto-enable designated marketplace plugins. |

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
defects: missing-path

## Design notes
A configuration dictionary setting in `.claude/settings.json` that maps plugin identifiers to boolean enablement flags; it is a harness configuration identifier rather than an agent lifecycle concept.
