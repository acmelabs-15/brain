---
package: rjm
name: should_use_fallback
slug: should-use-fallback
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# should_use_fallback

## Definition — verbatim
(used, not defined)

> "Check if LLM fallback should be used for this heuristic score." — scripts/llm_classification/classifier.py:145

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/llm_classification/classifier.py | 144 | defined here | Method checking whether a heuristic confidence score falls into the configured fallback threshold range. |

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
`should_use_fallback` is a predicate method in `LLMClassifier` deciding when low-confidence heuristic scores warrant LLM evaluation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
