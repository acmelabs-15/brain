---
package: rjm
name: response_text_variance
slug: response-text-variance
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/variance-control.py, sha256: 1d714bacc4692f831c8bc76888ce6339cc62588a7b6fe7b76649725096c6d369}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# response_text_variance

## Definition — verbatim
(used, not defined)

> "def response_text_variance(" — scripts/eval/variance-control.py:112

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/variance-control.py | 112 | defined here | Function analyzing text-level variance, identity, and consecutive normalized edit distances across model responses. |

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
`response_text_variance` is a Python function identifier in `variance-control.py` computing response distance metrics rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
