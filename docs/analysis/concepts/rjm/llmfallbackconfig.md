---
package: rjm
name: LLMFallbackConfig
slug: llmfallbackconfig
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/llm_classification/__init__.py, sha256: c3d7b52a972fa1fec9a01b75c3d4abddb03c3a8a47adefe77275b101e56ccfcb}
  - {path: scripts/llm_classification/classifier.py, sha256: 98fe4b491eb1fe9dd80935763723e706b5fcc3d12d158afdabac0efcaa6aef28}
  - {path: scripts/llm_classification/config.py, sha256: ad5524115256c40e875acc541ff9d413081f5a58ec8a602e947568d094a7ca5c}
  - {path: scripts/update_reviewer_signal_stats.py, sha256: 4b6c1c52f7c49f9d5ba2b3884926800b17ce518c26602fa0f9089ee99c17b01e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# LLMFallbackConfig

## Definition — verbatim
(used, not defined)

> "Configuration for LLM-based actionability classification fallback." — scripts/llm_classification/config.py:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/llm_classification/__init__.py | 10 | used here | Imported and exposed in package exports. |
| scripts/llm_classification/classifier.py | 16 | used here | Imported to configure classifier threshold bounds, models, and cache capacities. |
| scripts/llm_classification/config.py | 10 | defined here | Dataclass specifying confidence thresholds, model name, token limits, and cache settings. |
| scripts/update_reviewer_signal_stats.py | 44 | used here | Imported for configuring reviewer signal stats classification options. |

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
`LLMFallbackConfig` is a Python configuration dataclass defining thresholds and parameters for LLM fallback rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
