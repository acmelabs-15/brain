---
package: rjm
name: LLMFallbackConfig
slug: llmfallbackconfig
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
