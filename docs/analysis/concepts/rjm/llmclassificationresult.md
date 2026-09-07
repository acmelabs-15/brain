---
package: rjm
name: LLMClassificationResult
slug: llmclassificationresult
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# LLMClassificationResult

## Definition — verbatim
(used, not defined)

> "Result from LLM classification." — scripts/llm_classification/classifier.py:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/llm_classification/__init__.py | 6 | used here | Imported and re-exported in package public interface. |
| scripts/llm_classification/cache.py | 12 | used here | Imported under TYPE_CHECKING guard for type hinting cache entries. |
| scripts/llm_classification/classifier.py | 42 | defined here | Dataclass defining structured result attributes including actionability, confidence, and reason. |

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
`LLMClassificationResult` is a Python dataclass representing structured output from code review comment classification rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
