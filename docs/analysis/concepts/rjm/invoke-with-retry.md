---
package: rjm
name: invoke_with_retry
slug: invoke-with-retry
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ai_review_common/quality_gate.py, sha256: 4b256216d3a93ee6f649647aa42dde223b52202cbd69d3fa1077d3e3854d8adb}
  - {path: scripts/ai_review_common/retry.py, sha256: 946e205f020fd5dd595bc19053d4b90dc344df5f8b1ea99571f072d5705eacf1}
  - {path: scripts/ci/invoke_copilot_cli.py, sha256: 279e376171031fb1d2eb9d4ccbe0178dc93aa91c7c81e25e98cb5c78bb32e84a}
  - {path: scripts/llm_classification/classifier.py, sha256: 98fe4b491eb1fe9dd80935763723e706b5fcc3d12d158afdabac0efcaa6aef28}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# invoke_with_retry

## Definition — verbatim
(used, not defined)

> "def invoke_with_retry(" — scripts/ai_review_common/retry.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_common/quality_gate.py | 4 | used here | Re-exports retry function as part of quality gate facade. |
| scripts/ai_review_common/retry.py | 31 | defined here | Implements generic retry loop with exponential backoff for callable functions. |
| scripts/ci/invoke_copilot_cli.py | 224 | defined here | Implements Copilot CLI command invocation with retry logic and timeout handling. |
| scripts/llm_classification/classifier.py | 11 | used here | Imports retry utility to wrap LLM classification API calls. |

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
defects: orphan

## Design notes
A Python helper function identifier (invoke_with_retry) wrapping operations in exponential backoff retry loops rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
