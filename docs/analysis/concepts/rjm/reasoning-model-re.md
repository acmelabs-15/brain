---
package: rjm
name: _REASONING_MODEL_RE
slug: reasoning-model-re
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

# _REASONING_MODEL_RE

## Definition — verbatim
(used, not defined)

> "_REASONING_MODEL_RE = re.compile(r\"^(?:[a-z0-9-]+/)?(?:o\d|gpt-5)\", re.IGNORECASE)" — scripts/eval/_providers.py:164

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_providers.py | 164 | defined here | Regular expression pattern matching reasoning model identifiers that require max_completion_tokens. |

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
_REASONING_MODEL_RE is a module-level regular expression constant for detecting OpenAI reasoning models rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
