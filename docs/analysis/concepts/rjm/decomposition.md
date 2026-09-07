---
package: rjm
name: Decomposition
slug: decomposition
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md, sha256: 4fecb4c15025c5d210c0eb5c3d456700fb637c758c8e7fc2cca1ad5ad114192a}
  - {path: .claude/skills/decision-critic/references/mental-models-chestertons-fence.md, sha256: a25fbfb672bb5b888f219603a67db7738b430faa60074acaaf91535c0370a0c6}
  - {path: .claude/skills/decision-critic/scripts/decision-critic.py, sha256: 7023b3544db880a33f7ef99b77b933de70e70933c8a1be50bb226fe05039a033}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Decomposition

## Definition — verbatim
> "DECOMPOSITION (1-2)    Extract claims, assumptions, constraints, judgments" — .claude/skills/decision-critic/SKILL.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md | 19 | used here | Recommends using survivorship bias during Decomposition (Steps 1-2) to surface hidden data gaps. |
| .claude/skills/decision-critic/references/mental-models-chestertons-fence.md | 17 | used here | Recommends using Chesterton's Fence during Decomposition (Steps 1-2) to surface hidden legacy assumptions. |
| .claude/skills/decision-critic/scripts/decision-critic.py | 18 | defined here | Implements stage mapping returning 'DECOMPOSITION' for steps 1 and 2. |
| .claude/skills/decision-critic/SKILL.md | 25 | defined here | Defines Decomposition as steps 1-2 extracting claims, assumptions, constraints, and judgments with stable IDs. |

## Consumes
Raw decision statement, context narrative, architectural proposal, or plan.

## Produces
Decomposed structural elements with stable identifiers: Claims (C1..Cn), Assumptions (A1..An), Constraints (K1..Kn), and Judgments (J1..Jn).

## When applied
Executed at the start of the decision-critic process (Steps 1 and 2).

## Sub-concepts
none

## Part of
decision-critic

## Implementation status
defects: missing-path, doc-drift, internal-contradiction (.claude/skills/decision-critic/SKILL.md); exit-code-mismatch, doc-drift (.claude/skills/decision-critic/scripts/decision-critic.py)

## Design notes
Decomposition is the initial phase of structured decision critique that breaks down narrative proposals into atomic, identifiable elements (claims, assumptions, constraints, and judgments). By assigning persistent IDs to each component, it prevents holistic rationalization and enables targeted, rigorous verification of each constituent piece.
