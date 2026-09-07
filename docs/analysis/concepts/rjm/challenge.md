---
package: rjm
name: Challenge
slug: challenge
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md, sha256: 9b965f79cb3d9306372944d26d89fad405b9479e7515201709191307e45bfa21}
  - {path: .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md, sha256: 4fecb4c15025c5d210c0eb5c3d456700fb637c758c8e7fc2cca1ad5ad114192a}
  - {path: .claude/skills/decision-critic/references/decision-pre-committed-metrics.md, sha256: 63254480cf2921d4c45857646e7af6cfe4379fb03cef1afe4cd2c8378013b495}
  - {path: .claude/skills/decision-critic/references/mental-models-conways-law.md, sha256: b73b17cb46fe4c9b84b9e5eb953fe661a53ceac27d983cd23139cc18392dbeb9}
  - {path: .claude/skills/decision-critic/references/mental-models-fat-tails.md, sha256: f4af14542219adb7a4adc77a2aa8dc73cd33cffd6526a255d2384da7772a27f3}
  - {path: .claude/skills/decision-critic/references/mental-models-galls-law.md, sha256: 02e959738698d10d405c028c1a165cd63f81e23e53535bbbe2a8323f8204cf6a}
  - {path: .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md, sha256: d501f1ba7cb7251ea8f3ea5cba3eb2c9d611908ebc12d1a78e3125634c259fd6}
  - {path: .claude/skills/decision-critic/scripts/decision-critic.py, sha256: 7023b3544db880a33f7ef99b77b933de70e70933c8a1be50bb226fe05039a033}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Challenge

## Definition — verbatim
> "CHALLENGE (5-6)        Contrarian perspective + alternative framing" — .claude/skills/decision-critic/SKILL.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md | 19 | used here | Guides allocating review effort during Challenge (Steps 5-6) by flagging claims where refutation effort exceeds authorship. |
| .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md | 19 | used here | Recommends applying survivorship bias during Challenge (Steps 5-6) to surface hidden data gaps. |
| .claude/skills/decision-critic/references/decision-pre-committed-metrics.md | 68 | used here | Directs applying pre-committed metrics during Challenge (Steps 5-6) when evaluating proposed initiatives. |
| .claude/skills/decision-critic/references/mental-models-conways-law.md | 21 | used here | Advises testing organizational and module boundaries during Challenge (Steps 5-6). |
| .claude/skills/decision-critic/references/mental-models-fat-tails.md | 21 | used here | Recommends applying fat tails during Inversion and Challenge (Steps 5-6) when decisions rest on averages. |
| .claude/skills/decision-critic/references/mental-models-galls-law.md | 21 | used here | Directs stress-testing architectural proposals and system designs during Challenge (Steps 5-6). |
| .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md | 25 | used here | Advises identifying second-order effects and feedback loops during Challenge (Steps 5-6). |
| .claude/skills/decision-critic/scripts/decision-critic.py | 22 | defined here | Implements stage mapping returning 'CHALLENGE' for steps 5 and 6. |
| .claude/skills/decision-critic/SKILL.md | 31 | defined here | Defines Challenge as steps 5-6 covering contrarian perspectives and alternative framing in the critic workflow. |

## Consumes
Decomposed structural elements (claims, assumptions, constraints, judgments) and factored verification results.

## Produces
Contrarian perspectives, steel-manned counterarguments, alternative problem framings, and inverted failure mode analysis.

## When applied
Executed during Steps 5 and 6 of the 7-step decision critique workflow after decomposition and verification are complete.

## Sub-concepts
contrarian-perspectives, inversion-analysis

## Part of
decision-critic

## Implementation status
defects: missing-path, doc-drift, internal-contradiction (.claude/skills/decision-critic/SKILL.md); exit-code-mismatch, doc-drift (.claude/skills/decision-critic/scripts/decision-critic.py)

## Design notes
Challenge represents the third phase of the decision-critic lifecycle, actively forcing adversarial inquiry and contrarian perspectives on decisions that have survived initial fact verification. By mandating explicit alternative framings and inversion thinking before synthesis, it prevents premature convergence and groupthink.
