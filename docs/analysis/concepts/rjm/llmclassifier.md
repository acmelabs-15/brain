---
package: rjm
name: LLMClassifier
slug: llmclassifier
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# LLMClassifier

## Definition — verbatim
(used, not defined)

> "Classifier that uses an LLM to determine comment actionability." — scripts/llm_classification/classifier.py:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/llm_classification/__init__.py | 7 | used here | Imported and re-exported in package public interface. |
| scripts/llm_classification/classifier.py | 61 | defined here | Class implementing comment classification using Claude API calls with fallback logic. |
| scripts/update_reviewer_signal_stats.py | 43 | used here | Imported for classifying reviewer comments in review signal statistics calculation. |

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
`LLMClassifier` is a Python class for determining the actionability of code review comments via LLM calls rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
