---
package: rjm
name: ai-agents-text-eval-v1
slug: ai-agents-text-eval-v1
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_copilot_cli.py, sha256: 42c92fa1b72b6b37bd4b7864b19b8d9987761bdcf034129d7cf2e7a40f70a16c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ai-agents-text-eval-v1

## Definition — verbatim
(used, not defined)

> "\"schema\": \"ai-agents-text-eval-v1\"," — scripts/eval/_copilot_cli.py:352

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_copilot_cli.py | 352 | defined here | Schema version identifier embedded in prompt payload JSON envelopes submitted to evaluation providers. |

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
`ai-agents-text-eval-v1` is a JSON schema identifier defining the format of evaluation prompt envelopes, classified as `kind: name-only` per D-023.
