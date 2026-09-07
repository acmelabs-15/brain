---
package: rjm
name: is_low_confidence
slug: is-low-confidence
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# is_low_confidence

## Definition — verbatim
(used, not defined)

> "def is_low_confidence(self, score: float) -> bool:" — scripts/llm_classification/config.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/llm_classification/config.py | 38 | defined here | Method checking whether a heuristic confidence score falls within configured low-confidence boundaries. |

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
Method identifier on LLMFallbackConfig checking heuristic score confidence bounds, classified as name-only per D-023.
