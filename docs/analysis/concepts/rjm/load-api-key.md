---
package: rjm
name: load_api_key
slug: load-api-key
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_anthropic_api.py, sha256: 574e0b74df4e4a048641130705579a08ddd84d48c0a4e79655dae3040888e1e8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# load_api_key

## Definition — verbatim
(used, not defined)

> "def load_api_key() -> str:" — scripts/eval/_anthropic_api.py:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_anthropic_api.py | 33 | defined here | Function retrieving the Anthropic API key from environment variables or .env files. |

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
load_api_key is a Python utility function identifier in scripts/eval/_anthropic_api.py retrieving credentials from environment files rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
