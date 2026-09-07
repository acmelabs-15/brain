---
package: rjm
name: "DecisionScore"
slug: decisionscore
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/scripts/score_decision.py, sha256: 482aba62657f1d636ac910c399c5799245380818be20d222c9c09fab62856f4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# DecisionScore

## Definition — verbatim
(used, not defined)

> "class DecisionScore:" — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/score_decision.py | 17 | defined here | Python dataclass definition holding calculated scores, winning option, confidence level, and sensitivity data. |

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
defects: doc-drift, exit-code-mismatch

## Design notes
A Python dataclass identifier in `score_decision.py` encapsulating the output metrics of decision matrix evaluation rather than an operational lifecycle concept, authored with kind name-only per D-023.
