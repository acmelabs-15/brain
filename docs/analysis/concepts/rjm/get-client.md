---
package: rjm
name: _get_client
slug: get-client
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _get_client

## Definition — verbatim
(used, not defined)

> "Lazily initialize Anthropic client." — scripts/llm_classification/classifier.py:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/llm_classification/classifier.py | 77 | defined here | Method lazily instantiating and caching the Anthropic SDK client using ANTHROPIC_API_KEY. |

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
`_get_client` is an internal helper method in `LLMClassifier` for lazy initialization of the Anthropic API client rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
