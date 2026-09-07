---
package: rjm
name: GH_TOKEN
slug: gh-token
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/copilot-cli-setup.md, sha256: 59024c233a64c24d142b282be6874ab91ab23cc063663ad1c4331c54973a9519}
  - {path: scripts/validation/run_workflow_local_test.py, sha256: 6ceadf14ac105ae993d87d9d87d125f1bf88a0049f8304925109b7b290106ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GH_TOKEN

## Definition — verbatim
(used, not defined)

> "- **Standard `GH_TOKEN`**: Works for GitHub API and `gh` commands" — docs/copilot-cli-setup.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/copilot-cli-setup.md | 16 | used here | Contrasted against Copilot tokens as standard auth for GitHub CLI and GitHub API. |
| scripts/validation/run_workflow_local_test.py | 780 | used here | Documented in comment explaining container limitations where missing `GH_TOKEN` causes repository inference failures under `act`. |

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
defects: orphan, doc-drift

## Design notes
`GH_TOKEN` is the standard environment variable identifier for authenticating GitHub CLI (`gh`) and GitHub API requests rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
