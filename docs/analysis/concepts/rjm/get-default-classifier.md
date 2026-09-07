---
package: rjm
name: get_default_classifier
slug: get-default-classifier
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# get_default_classifier

## Definition — verbatim
(used, not defined)

> "Get the default singleton classifier instance." — scripts/llm_classification/classifier.py:158

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/llm_classification/__init__.py | 8 | used here | Imported and exposed in module __all__ exports. |
| scripts/llm_classification/classifier.py | 157 | defined here | Factory function initializing and returning a module-level singleton classifier instance. |
| scripts/update_reviewer_signal_stats.py | 45 | used here | Imported to obtain the default classifier instance for review metrics processing. |

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
`get_default_classifier` is a Python factory function providing access to a singleton classifier instance rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
