---
package: rjm
name: COPILOT_GITHUB_TOKEN
slug: copilot-github-token
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

# COPILOT_GITHUB_TOKEN

## Definition — verbatim
(used, not defined)

> "   - **Token name**: `COPILOT_GITHUB_TOKEN` (or descriptive name)" — docs/copilot-cli-setup.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/copilot-cli-setup.md | 28 | used here | Recommended token name and environment variable identifier for dedicated Copilot CLI authentication. |

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
`COPILOT_GITHUB_TOKEN` is an environment variable and repository secret identifier holding a fine-grained token for Copilot CLI requests rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
