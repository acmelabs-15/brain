---
package: rjm
name: _tension_annotation
slug: tension-annotation
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/skillbook.py, sha256: d3a3b4d3968e777b381293bc4908848793a537383691422565cf5965f6b25f89}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _tension_annotation

## Definition — verbatim
(used, not defined)

> "def _tension_annotation(" — scripts/skillbook.py:371

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skillbook.py | 371 | defined here | Evaluates how a candidate policy fares under applicable context tensions, annotating with wins, yields, or unresolved verdicts. |

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
defects: doc-drift

## Design notes
_tension_annotation is a Python helper function identifier evaluating contextual tension verdicts rather than an SDLC lifecycle concept, classified as name-only per D-023.
