---
package: rjm
name: Classify Verifiability
slug: classify-verifiability
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/scripts/decision-critic.py, sha256: 7023b3544db880a33f7ef99b77b933de70e70933c8a1be50bb226fe05039a033}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Classify Verifiability

## Definition — verbatim
(used, not defined)

> "\"step_title\": \"Classify Verifiability\"," — .claude/skills/decision-critic/scripts/decision-critic.py:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/scripts/decision-critic.py | 84 | defined here | Step 2 title and prompt guidance instructing the critic to classify items as verifiable, judgment, or constraint. |

## Consumes
Decomposed items with stable IDs from Step 1 (`Extract Structure`).

## Produces
Tagged items ([V], [J], [C]) and a count of verifiable items requiring testing in subsequent steps.

## When applied
Executed as Step 2 in the decomposition phase of the structured decision-critic workflow.

## Sub-concepts
verifiable, judgment, constraint

## Part of
decision-critic

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
The second decomposition step in decision critique that tags each extracted item by verifiability type using the edge-case precedence rule "prefer [V] over [J] over [C]" to ensure testable assertions are rigorously separated from subjective trade-offs and fixed constraints.
