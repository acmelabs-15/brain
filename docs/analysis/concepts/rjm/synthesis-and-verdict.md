---
package: rjm
name: Synthesis and Verdict
slug: synthesis-and-verdict
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

# Synthesis and Verdict

## Definition — verbatim
(used, not defined)

> "\"step_title\": \"Synthesis and Verdict\"," — .claude/skills/decision-critic/scripts/decision-critic.py:309

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/scripts/decision-critic.py | 309 | defined here | Step 7 title and prompt guidance defining the verdict rubric for STAND, REVISE, and ESCALATE. |

## Consumes
Accumulated findings from decomposition, verification, and challenge phases.

## Produces
Verification summary, challenge assessment, final decision verdict (STAND, REVISE, ESCALATE), and recommendation.

## When applied
Executed as Step 7 in the synthesis phase of the structured decision-critic workflow.

## Sub-concepts
revise

## Part of
decision-critic

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
The final synthesis technique in decision critique that aggregates verification results and adversarial challenge insights into a definitive verdict rubric (STAND, REVISE, ESCALATE), providing actionable recommendations while favoring revision in borderline cases.
