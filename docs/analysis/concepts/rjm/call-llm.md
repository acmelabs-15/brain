---
package: rjm
name: _call_llm
slug: call-llm
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _call_llm

## Definition — verbatim
(used, not defined)

> "Make an LLM API call to classify the comment." — scripts/llm_classification/classifier.py:89

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/llm_classification/classifier.py | 88 | defined here | Method invoking the Anthropic messages API with retry logic and parsing JSON classification results. |

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
`_call_llm` is an internal method in `LLMClassifier` that handles network calls and response serialization for LLM inference rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
