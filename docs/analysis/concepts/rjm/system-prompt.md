---
package: rjm
name: _SYSTEM_PROMPT
slug: system-prompt
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/llm_classification/classifier.py, sha256: 98fe4b491eb1fe9dd80935763723e706b5fcc3d12d158afdabac0efcaa6aef28}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
