---
package: rjm
name: LLMClassifier
slug: llmclassifier
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/llm_classification/__init__.py, sha256: c3d7b52a972fa1fec9a01b75c3d4abddb03c3a8a47adefe77275b101e56ccfcb}
  - {path: scripts/llm_classification/classifier.py, sha256: 98fe4b491eb1fe9dd80935763723e706b5fcc3d12d158afdabac0efcaa6aef28}
  - {path: scripts/update_reviewer_signal_stats.py, sha256: 4b6c1c52f7c49f9d5ba2b3884926800b17ce518c26602fa0f9089ee99c17b01e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
