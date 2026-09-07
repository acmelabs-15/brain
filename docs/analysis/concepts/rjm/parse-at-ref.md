---
package: rjm
name: _parse_at_ref
slug: parse-at-ref
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/workflow_provenance.py, sha256: 54e330d98b0775ed2ddc545d4b03aaaee833cbdee1ffa05ba2e0efbea4b2d9d4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _parse_at_ref

## Definition — verbatim
(used, not defined)

> "def _parse_at_ref(" — scripts/github_core/workflow_provenance.py:145

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/workflow_provenance.py | 145 | defined here | Helper function fetching, parsing, and pinning one workflow definition at a given ref. |

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
Private helper function identifier (`_parse_at_ref`) in `workflow_provenance.py` fetching and parsing workflow files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
