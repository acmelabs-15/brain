---
package: rjm
name: ASSUMPTIONS
slug: assumptions
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

# ASSUMPTIONS

## Definition — verbatim
(used, not defined)

> "ASSUMPTIONS [A1, A2, ...] - Unstated beliefs (2-5 items)" — .claude/skills/decision-critic/scripts/decision-critic.py:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/scripts/decision-critic.py | 56 | defined here | Prompt guidance category label instructing the critic to extract 2-5 unstated beliefs and context implications. |

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
ASSUMPTIONS is a prompt structural classification label in decision-critic.py designating unstated beliefs extracted during Step 1 decomposition rather than an operational lifecycle concept, classified as name-only per D-023.
