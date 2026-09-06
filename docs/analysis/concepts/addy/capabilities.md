---
package: addy
name: capabilities
slug: capabilities
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .codex-plugin/plugin.json, sha256: a4b79f3cae857be406a7a29b4f525a8b472c2c94505be0b8738b99c9a22dc09c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# capabilities

## Definition — verbatim
(used, not defined)
> "capabilities" — .codex-plugin/plugin.json:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .codex-plugin/plugin.json | 19 | defined here | Manifest property declaring plugin capabilities (Interactive, Read, Write) for Codex. |

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
A JSON configuration key in .codex-plugin/plugin.json specifying agent capabilities, rather than a development lifecycle concept.
