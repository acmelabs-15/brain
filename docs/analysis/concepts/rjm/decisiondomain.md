---
package: rjm
name: DecisionDomain
slug: decisiondomain
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/consensus/weights.py, sha256: 22b10a8b11a55f0c1b7e739cc87d38639b97623b5f2e345ad1dcf30642f5ae89}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DecisionDomain

## Definition — verbatim
(used, not defined)

> "DecisionDomain = Literal[" — scripts/consensus/weights.py:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/consensus/weights.py | 12 | defined here | Type alias defining the seven valid decision domains for agent expertise weighting. |

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
DecisionDomain is a Python type alias in scripts/consensus/weights.py defining domain categories rather than an operational lifecycle concept.
