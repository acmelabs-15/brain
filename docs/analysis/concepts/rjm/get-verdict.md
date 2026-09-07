---
package: rjm
name: get_verdict
slug: get-verdict
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ai_review_common/quality_gate.py, sha256: 4b256216d3a93ee6f649647aa42dde223b52202cbd69d3fa1077d3e3854d8adb}
  - {path: scripts/ai_review_common/verdict.py, sha256: 6b3475739059a19aef3022a05e7b77ff7f5add074b06310fbdb5d48fa61d60e1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_verdict

## Definition — verbatim
(used, not defined)

> "def get_verdict(output: str) -> str:" — scripts/ai_review_common/verdict.py:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_common/quality_gate.py | 15 | used here | Re-exports verdict parser from the quality gate facade. |
| scripts/ai_review_common/verdict.py | 17 | defined here | Parses verdict tokens from raw AI output, defaulting to CRITICAL_FAIL on failure. |

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
A Python helper function identifier (get_verdict) extracting verdict tokens from AI outputs in legacy CI pipelines rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
