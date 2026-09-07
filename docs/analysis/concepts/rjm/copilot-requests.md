---
package: rjm
name: Copilot Requests
slug: copilot-requests
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

# Copilot Requests

## Definition — verbatim
(used, not defined)

> "- **Copilot CLI**: Requires a token with explicit **\"Copilot Requests\"** permission" — docs/copilot-cli-setup.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/copilot-cli-setup.md | 17 | used here | Specified as the mandatory fine-grained PAT account permission required by Copilot CLI. |

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
`Copilot Requests` is a fine-grained GitHub personal access token account permission identifier required to authorize LLM inference in Copilot CLI rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
