---
package: rjm
name: Alternative Framing
slug: alternative-framing
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

# Alternative Framing

## Definition — verbatim
(used, not defined)

> "\"step_title\": \"Alternative Framing\"," — .claude/skills/decision-critic/scripts/decision-critic.py:267

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/scripts/decision-critic.py | 267 | defined here | Step 6 title and prompt guidance directing the re-examination of the problem statement and hidden premises. |

## Consumes
Original problem formulation, stated constraints, and stakeholder perspectives.

## Produces
Alternative framing statement, highlighted priorities, revealed hidden assumptions, and decision implications.

## When applied
Executed as Step 6 in the challenge phase of the structured decision-critic workflow.

## Sub-concepts
none

## Part of
decision-critic

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
A problem reframing technique that temporarily sets aside the proposed solution to challenge the problem formulation itself, asking whether the team is solving the right problem or merely treating symptoms of a deeper architectural issue.
