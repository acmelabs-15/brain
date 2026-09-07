---
package: rjm
name: DESIGN-004 §5.3
slug: design-004-5-3
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_scoring_engine.py, sha256: f19eb353dc46e0c76c0a93c21866c66ec297781c644286cb9dcf8f5bf2537fd8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DESIGN-004 §5.3

## Definition — verbatim
(used, not defined)

> "DESIGN-004 §5.3 (Strategy over AssertionKind). Adding AstScorer or" — scripts/eval/_scoring_engine.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_scoring_engine.py | 3 | used here | Cites design document section establishing Strategy pattern for scoring engine over AssertionKind. |

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
A design specification section identifier referencing the scoring strategy architecture of the agent eval harness, classified as name-only per D-023.
