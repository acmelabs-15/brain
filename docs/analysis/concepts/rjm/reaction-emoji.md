---
package: rjm
name: REACTION_EMOJI
slug: reaction-emoji
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

# REACTION_EMOJI

## Definition — verbatim
(used, not defined)

> "REACTION_EMOJI: dict[str, str] = {" — scripts/github_core/formatting.py:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/formatting.py | 12 | defined here | Module dictionary mapping GitHub reaction name strings to Unicode emojis. |

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
A dictionary constant mapping GitHub reaction identifiers to corresponding Unicode emojis for formatted output, classified as name-only per D-023.
