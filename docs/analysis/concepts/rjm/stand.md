---
package: rjm
name: STAND
slug: stand
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/references/quality-boy-scout-rule.md, sha256: 0d01d36f355d43bbaad3c0de28285c85ff04a8499d03b36b2247729acd7b8b21}
  - {path: .claude/skills/decision-critic/references/rewrite-regression-check.md, sha256: 99924952eb755b00631c90a5aa6d1fded4ea201460304a3d916ba0e9e3384c14}
  - {path: .claude/skills/decision-critic/scripts/decision-critic.py, sha256: 7023b3544db880a33f7ef99b77b933de70e70933c8a1be50bb226fe05039a033}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# STAND

## Definition — verbatim
> "STAND when ALL of these apply:" — .claude/skills/decision-critic/scripts/decision-critic.py:327

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/quality-boy-scout-rule.md | 51 | used here | Defines STAND for improvement decisions that are clearly scoped, safe, and not blocking delivery. |
| .claude/skills/decision-critic/references/rewrite-regression-check.md | 39 | used here | Explains conditions allowing flagged STAND when rewrite mathematical checks are resolved. |
| .claude/skills/decision-critic/scripts/decision-critic.py | 327 | defined here | Defines the STAND verdict criteria requiring no FAILED items and all challenges addressable. |
| .claude/skills/decision-critic/SKILL.md | 34 | defined here | Specifies STAND (clean or flagged) as the favorable outcome in the Synthesis phase. |

## Consumes
Factored verification ratings (no FAILED items on core claims) and resolved challenge responses.

## Produces
An approved decision critique verdict (clean or flagged) allowing work to commit.

## When applied
Issued in Step 7 (Synthesis) when a decision passes all verification and challenge criteria.

## Sub-concepts
none

## Part of
decision-critic

## Implementation status
defects: missing-path, doc-drift, internal-contradiction (.claude/skills/decision-critic/SKILL.md); exit-code-mismatch, doc-drift (.claude/skills/decision-critic/scripts/decision-critic.py)

## Design notes
STAND is the affirmative synthesis verdict issued by the decision-critic skill, indicating that a decision proposal has survived rigorous adversarial stress-testing. A clean STAND confirms complete verification, while a flagged STAND indicates approval with accepted, acknowledged risks.
