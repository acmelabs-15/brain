---
package: rjm
name: JudgeFn
slug: judgefn
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-skill-overlap.py, sha256: df7052dcf1361e8df552ea9c4a15a3f720e7a3f3576d24b4ddddb7628045d026}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# JudgeFn

## Definition — verbatim
(used, not defined)

> "JudgeFn = Callable[[str, str, str], float]" — scripts/eval/eval-skill-overlap.py:583

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-skill-overlap.py | 583 | defined here | Type alias for a callable that scores a model response against prompt and expected text on a 1-5 scale. |

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
defects: doc-drift, other

## Design notes
A Python type alias defining the callable signature for scoring prompt responses against expected answers rather than an operational lifecycle concept.
