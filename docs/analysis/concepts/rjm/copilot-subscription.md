---
package: rjm
name: Copilot subscription
slug: copilot-subscription
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/copilot-cli-setup.md, sha256: 59024c233a64c24d142b282be6874ab91ab23cc063663ad1c4331c54973a9519}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Copilot subscription

## Definition — verbatim
(used, not defined)

> "- GitHub account with **Copilot subscription** (Individual, Business, or Enterprise)" — docs/copilot-cli-setup.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/copilot-cli-setup.md | 8 | used here | Prerequisite requirement specifying that the GitHub account must possess an active Copilot subscription. |

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
defects: orphan

## Design notes
`Copilot subscription` is an external GitHub commercial licensing prerequisite for Copilot CLI access rather than an internal SDLC lifecycle concept, classified as `kind: name-only` per D-023.
