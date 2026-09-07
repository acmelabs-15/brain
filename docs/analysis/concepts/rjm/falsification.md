---
package: rjm
name: falsification
slug: falsification
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

# falsification

## Definition — verbatim
(used, not defined)

> "Designed to reveal if the claim is FALSE (falsification focus)" — .claude/skills/decision-critic/scripts/decision-critic.py:134

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/scripts/decision-critic.py | 134 | used here | Question design criterion instructing the critic to formulate questions revealing if claims are false. |

## Consumes
Verifiable claims, assumptions, and hypotheses proposed in decision making.

## Produces
Disconfirming test criteria and questions aimed at attempting to disprove assertions rather than validating them.

## When applied
During verification question design (Step 3) and adversarial critique.

## Sub-concepts
none

## Part of
decision-critic

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
A core epistemic principle applied in decision criticism requiring verification questions and tests to actively seek disconfirming evidence (Popperian falsification) rather than seeking confirmatory proof, protecting agents against sycophantic validation.
