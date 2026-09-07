---
package: rjm
name: UNCERTAIN
slug: uncertain
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/references/critical-thinking-falsifiability.md, sha256: 16b92ac278886404388a0459346144c6d32187344443c3d57185d6abf438d1d6}
  - {path: .claude/skills/decision-critic/references/quality-boy-scout-rule.md, sha256: 0d01d36f355d43bbaad3c0de28285c85ff04a8499d03b36b2247729acd7b8b21}
  - {path: .claude/skills/decision-critic/scripts/decision-critic.py, sha256: 7023b3544db880a33f7ef99b77b933de70e70933c8a1be50bb226fe05039a033}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# UNCERTAIN

## Definition — verbatim
> "UNCERTAIN - Insufficient evidence; state what additional information would resolve" — .claude/skills/decision-critic/scripts/decision-critic.py:196

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/critical-thinking-falsifiability.md | 54 | used here | Requires marking claims whose failure conditions cannot be filled as UNCERTAIN. |
| .claude/skills/decision-critic/references/quality-boy-scout-rule.md | 32 | used here | Defines UNCERTAIN criteria where scope is unclear from context or risk assessments are missing. |
| .claude/skills/decision-critic/scripts/decision-critic.py | 196 | defined here | Defines UNCERTAIN classification for items with insufficient evidence. |
| .claude/skills/decision-critic/SKILL.md | 30 | defined here | Lists UNCERTAIN as one of three verification item ratings in the critic workflow. |

## Consumes
Decomposed items where available evidence is incomplete or verification questions cannot be answered.

## Produces
An UNCERTAIN classification accompanied by a statement of what specific information would resolve the ambiguity.

## When applied
Assigned during Step 4 (Factored Verification) when evidence is insufficient to verify or refute a claim.

## Sub-concepts
none

## Part of
decision-critic

## Implementation status
defects: missing-path, doc-drift, internal-contradiction (.claude/skills/decision-critic/SKILL.md); exit-code-mismatch, doc-drift (.claude/skills/decision-critic/scripts/decision-critic.py)

## Design notes
UNCERTAIN is an intermediate verification gate status representing epistemic humility. It distinguishes between known falsehoods (FAILED) and unproven assertions (UNCERTAIN), requiring decision makers to explicitly acknowledge unresolved risks before proceeding.
