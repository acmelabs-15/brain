---
package: rjm
name: Gall's Law
slug: gall-s-law
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/references/mental-models-chestertons-fence.md, sha256: a25fbfb672bb5b888f219603a67db7738b430faa60074acaaf91535c0370a0c6}
  - {path: .claude/skills/decision-critic/references/mental-models-conways-law.md, sha256: b73b17cb46fe4c9b84b9e5eb953fe661a53ceac27d983cd23139cc18392dbeb9}
  - {path: .claude/skills/decision-critic/references/mental-models-galls-law.md, sha256: 02e959738698d10d405c028c1a165cd63f81e23e53535bbbe2a8323f8204cf6a}
  - {path: .claude/skills/decision-critic/references/rewrite-regression-check.md, sha256: 99924952eb755b00631c90a5aa6d1fded4ea201460304a3d916ba0e9e3384c14}
  - {path: .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md, sha256: d501f1ba7cb7251ea8f3ea5cba3eb2c9d611908ebc12d1a78e3125634c259fd6}
  - {path: .claude/skills/planner/references/design-pit-of-success.md, sha256: c4ff5d944193baea5ecd7c5d5cd000c773ccf709f300a953e8ea17ab634a2064}
  - {path: .claude/skills/planner/references/mental-models-galls-law.md, sha256: c92dfa5f41a98019df5632823621ccab6fac26ad154ddb59fcda98de50b8f04b}
  - {path: .claude/skills/pre-mortem/references/mental-models-galls-law.md, sha256: a20568aa9cb7817e9a00f0c05fdf506c4791643251a61c282174cde8463bb74d}
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Gall's Law

## Definition — verbatim
> "Complex systems that work evolved from simple systems that worked." — .claude/skills/decision-critic/references/mental-models-galls-law.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 77 | defined here | Listed in the Problem Domain Cross-Reference table as a Tier 1 (Entry) legacy systems mental model. |
| .claude/skills/decision-critic/references/mental-models-chestertons-fence.md | 55 | used here | Cross-referenced as a complementary mental model stating complex systems evolved from simple ones. |
| .claude/skills/decision-critic/references/mental-models-conways-law.md | 68 | used here | Cross-referenced as a related model noting complex systems evolve from simple working systems. |
| .claude/skills/decision-critic/references/mental-models-galls-law.md | 7 | defined here | Primary reference document defining Gall's Law principle, corollary, verification questions, and checklist. |
| .claude/skills/decision-critic/references/rewrite-regression-check.md | 78 | used here | Cited in mental models cross-reference to prefer evolving a working system over designed-from-scratch replacement. |
| .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md | 86 | used here | Cited as a key systems thinking mental model for complex systems evolution. |
| .claude/skills/decision-critic/SKILL.md | 100 | used here | Cataloged under Mental Models reference list for challenging complex designs and full rewrites. |
| .claude/skills/planner/references/design-pit-of-success.md | 63 | used here | Listed in related concepts to advise starting simple and evolving based on real feedback. |
| .claude/skills/planner/references/mental-models-galls-law.md | 7 | defined here | Reference guide in planner skill defining Gall's Law for task planning and incremental system development. |
| .claude/skills/pre-mortem/references/mental-models-galls-law.md | 7 | defined here | Reference guide in pre-mortem skill defining Gall's Law to anticipate failure from monolithic greenfield designs. |
| .claude/skills/review/references/decision-rigor.md | 55 | used here | Cited as mandatory reference when reviewing proposals for new systems or major redesigns. |
| scripts/eval/eval-agents.py | 161 | used here | Asserted in agent evaluation prompts as expected warning advising evolution over clean-slate redesign. |

## Consumes
Architectural proposals, rewrite proposals, and complex system designs.

## Produces
Incremental evolutionary migration plans starting from small working systems.

## When applied
Applied when an agent or decision proposes building a new system from scratch or undertaking a major redesign.

## Sub-concepts
none

## Part of
decision-critic

## Implementation status
defects: missing-path

## Design notes
Gall's Law is a foundational systems thinking mental model across rjm's critique, planning, analysis, and review skills. It insists that complex working systems invariably evolve from simple working systems, and that designing complex systems from scratch almost always fails, establishing a strong architectural preference for incremental evolution over big-bang replacements.
