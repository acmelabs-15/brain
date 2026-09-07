---
package: rjm
name: JUDGMENTS
slug: judgments
kind: name-only
package_phase: none
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

# JUDGMENTS

## Definition — verbatim
(used, not defined)

> "JUDGMENTS [J1, J2, ...] - Subjective tradeoffs (1-3 items)" — .claude/skills/decision-critic/scripts/decision-critic.py:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/scripts/decision-critic.py | 64 | defined here | Prompt guidance category label instructing the critic to extract 1-3 subjective tradeoffs and value weightings. |

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
JUDGMENTS is a prompt structural classification label in decision-critic.py designating subjective trade-offs and value choices extracted during Step 1 decomposition rather than an operational lifecycle concept, classified as name-only per D-023.
