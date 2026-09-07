---
package: rjm
name: _OpenAICompatibleProvider
slug: openaicompatibleprovider
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_providers.py, sha256: 2b5fd7d1b39ad5792826f1c4d8ca4f17f8aa5a0fdc07213df29167eba2ee2f5d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _OpenAICompatibleProvider

## Definition — verbatim
(used, not defined)

> "class _OpenAICompatibleProvider:" — scripts/eval/_providers.py:172

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_providers.py | 172 | defined here | Provider class implementing OpenAI Chat Completions transport backing OpenAI and GitHub Models. |

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
defects: doc-drift

## Design notes
_OpenAICompatibleProvider is an internal transport implementation class backing OpenAI-compatible providers rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
