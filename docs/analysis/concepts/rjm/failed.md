---
package: rjm
name: FAILED
slug: failed
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/references/quality-boy-scout-rule.md, sha256: 0d01d36f355d43bbaad3c0de28285c85ff04a8499d03b36b2247729acd7b8b21}
  - {path: .claude/skills/decision-critic/scripts/decision-critic.py, sha256: 7023b3544db880a33f7ef99b77b933de70e70933c8a1be50bb226fe05039a033}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# FAILED

## Definition — verbatim
> "FAILED - Answers reveal inconsistency, error, or contradiction" — .claude/skills/decision-critic/scripts/decision-critic.py:195

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/quality-boy-scout-rule.md | 32 | used here | Categorizes unrelated changes and large refactorings bundled with fixes as FAILED. |
| .claude/skills/decision-critic/scripts/decision-critic.py | 195 | defined here | Defines FAILED verification status when answers reveal inconsistency, error, or contradiction. |
| .claude/skills/decision-critic/SKILL.md | 30 | defined here | Lists FAILED as one of the three item verification ratings in the critique workflow. |

## Consumes
Claim verification question answers that expose contradictions, factual errors, or scope violations.

## Produces
A FAILED status flag on a decomposed claim or assumption that prevents a clean STAND verdict.

## When applied
Assigned during Step 4 (Factored Verification) when factual or logical contradiction is established.

## Sub-concepts
none

## Part of
decision-critic

## Implementation status
defects: missing-path, doc-drift, internal-contradiction (.claude/skills/decision-critic/SKILL.md); exit-code-mismatch, doc-drift (.claude/skills/decision-critic/scripts/decision-critic.py)

## Design notes
FAILED is a terminal item-level verification gate status indicating that a claim, assumption, or constraint has been disproven. Any core claim receiving a FAILED status blocks an overall proposal from standing, forcing revision or escalation.
