---
package: rjm
name: LLMClassificationResult
slug: llmclassificationresult
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/llm_classification/__init__.py, sha256: c3d7b52a972fa1fec9a01b75c3d4abddb03c3a8a47adefe77275b101e56ccfcb}
  - {path: scripts/llm_classification/cache.py, sha256: cefad9f5b8119e6d43823c7485111676cd25504342c09e708084aed55d2046ea}
  - {path: scripts/llm_classification/classifier.py, sha256: 98fe4b491eb1fe9dd80935763723e706b5fcc3d12d158afdabac0efcaa6aef28}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
