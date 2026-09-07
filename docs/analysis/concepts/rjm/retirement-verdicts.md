---
package: rjm
name: RETIREMENT_VERDICTS
slug: retirement-verdicts
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

# RETIREMENT_VERDICTS

## Definition — verbatim
(used, not defined)

> "RETIREMENT_VERDICTS: frozenset[str] = frozenset({\"SUBSUMED\", \"OVERLAP\"})" — scripts/eval/eval-skill-overlap.py:322

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-skill-overlap.py | 322 | defined here | Constant set containing the verdict strings (SUBSUMED, OVERLAP) that permit skill prune or fold retirement claims. |

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
A Python constant frozenset specifying the subset of evaluation verdicts authorized to trigger skill retirement rather than an operational lifecycle concept.
