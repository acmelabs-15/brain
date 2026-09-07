---
package: rjm
name: _SYSTEM_PROMPT
slug: system-prompt
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _SYSTEM_PROMPT

## Definition — verbatim
(used, not defined)

> "You are a code review comment classifier. Your task is to determine" — scripts/llm_classification/classifier.py:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/llm_classification/classifier.py | 20 | defined here | Constant defining the system instructions and few-shot examples for the Anthropic Claude API call. |

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
`_SYSTEM_PROMPT` is a module-level string constant in `classifier.py` providing prompt guidance to the classification model rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
