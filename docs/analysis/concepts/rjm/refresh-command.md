---
package: rjm
name: REFRESH_COMMAND
slug: refresh-command
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/ruleset_required_contexts.py, sha256: e20d3bab6c5e8d2312db178d5a46b54f27f0a1fc6401ccd229996a4f7f57234b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# REFRESH_COMMAND

## Definition — verbatim
(used, not defined)

> "REFRESH_COMMAND = (" — scripts/ci/ruleset_required_contexts.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/ruleset_required_contexts.py | 25 | defined here | Constant string documenting the GitHub CLI command used to refresh and query live ruleset contexts. |

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
`REFRESH_COMMAND` is a Python string constant in `ruleset_required_contexts.py` containing a template `gh api` CLI command rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
