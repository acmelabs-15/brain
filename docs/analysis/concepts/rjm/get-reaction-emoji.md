---
package: rjm
name: get_reaction_emoji
slug: get-reaction-emoji
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/formatting.py, sha256: ed8945a7dfd0a16b514afb8f3b126bf5456b5c24afe55d6c36433352186b3bef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_reaction_emoji

## Definition — verbatim
(used, not defined)

> "def get_reaction_emoji(reaction: str) -> str:" — scripts/github_core/formatting.py:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/formatting.py | 29 | defined here | Converts GitHub reaction names to standard Unicode emoji representations. |

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
Python helper function mapping GitHub reaction identifiers to emoji characters, classified as name-only per D-023.
