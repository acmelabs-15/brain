---
package: rjm
name: Chesterton's Fence
slug: chesterton-s-fence
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-053-adr-exception-criteria.md, sha256: 9bd6a784d02e1fad5ea86eb815d46114decc3c000e4f0fa9be3842620fce1183}
  - {path: .claude/agents/architect.md, sha256: b109baee5c61acd4fd24d1a6b2832b7f77749be8424c85b1fc054216c42cd5e1}
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
  - {path: .claude/skills/analyze/references/quality-boy-scout-rule.md, sha256: fe632e02d3b667f3f21fe6336aefb6747e671955e195820dc4a6bca764b4a6aa}
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/references/mental-models-chestertons-fence.md, sha256: a25fbfb672bb5b888f219603a67db7738b430faa60074acaaf91535c0370a0c6}
  - {path: .claude/skills/decision-critic/references/mental-models-conways-law.md, sha256: b73b17cb46fe4c9b84b9e5eb953fe661a53ceac27d983cd23139cc18392dbeb9}
  - {path: .claude/skills/decision-critic/references/mental-models-galls-law.md, sha256: 02e959738698d10d405c028c1a165cd63f81e23e53535bbbe2a8323f8204cf6a}
  - {path: .claude/skills/decision-critic/references/quality-boy-scout-rule.md, sha256: 0d01d36f355d43bbaad3c0de28285c85ff04a8499d03b36b2247729acd7b8b21}
  - {path: .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md, sha256: d501f1ba7cb7251ea8f3ea5cba3eb2c9d611908ebc12d1a78e3125634c259fd6}
  - {path: .claude/skills/planner/references/mental-models-galls-law.md, sha256: c92dfa5f41a98019df5632823621ccab6fac26ad154ddb59fcda98de50b8f04b}
  - {path: .claude/skills/pre-mortem/references/mental-models-galls-law.md, sha256: a20568aa9cb7817e9a00f0c05fdf506c4791643251a61c282174cde8463bb74d}
  - {path: .claude/skills/reflect/references/triggers.md, sha256: bcbb400093d89616e435a83f03d5f8adbfd300798a7fcc70422a7a9150e2e25b}
  - {path: .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md, sha256: b604165fbc46652b120ab5875ca67002000b87a7c7a39651224cdde9c93b11a7}
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
  - {path: .claude/skills/research-and-incorporate/references/workflow.md, sha256: 4be33ea79eb624e5dba9c924a4984ec3a30a6ea9e6f2f9861454b032f9ce3d69}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Chesterton's Fence

## Definition — verbatim
> "Before removing or changing something, first understand why it exists." — .claude/skills/decision-critic/references/mental-models-chestertons-fence.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-053-adr-exception-criteria.md | 12 | defined here | Establishes mandatory analysis requirement before approving ADR governance exceptions. |
| .claude/agents/architect.md | 320 | used here | Embedded as a governing architectural principle when assessing proposed refactoring and component deprecation. |
| .claude/agents/implementer.md | 495 | used here | Applied during code modification to ensure pre-existing constraints and logic are understood before removal. |
| .claude/skills/adr-review/SKILL.md | 131 | used here | Checklist step verifying that proposed ADR modifications thoroughly evaluate prior architectural rationale. |
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 77 | defined here | Mental model applied when analyzing refactoring complexity and architectural simplification tiers. |
| .claude/skills/analyze/references/quality-boy-scout-rule.md | 61 | defined here | Cited to balance opportunistic cleanup against unintended removal of essential constraints. |
| .claude/skills/decision-critic/references/mental-models-chestertons-fence.md | 7 | defined here | Dedicated mental model document explaining the core principle and decomposition verification questions. |
| .claude/skills/decision-critic/references/mental-models-conways-law.md | 69 | used here | Cross-referenced as a complementary mental model for evaluating architectural changes. |
| .claude/skills/decision-critic/references/mental-models-galls-law.md | 68 | used here | Cross-referenced alongside evolutionary design models during architectural critique. |
| .claude/skills/decision-critic/references/quality-boy-scout-rule.md | 57 | used here | Counterbalances aggressive code cleanup by requiring justification before modifying legacy logic. |
| .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md | 87 | used here | Linked to systems thinking to prevent second-order failures caused by hasty component deletions. |
| .claude/skills/decision-critic/SKILL.md | 98 | used here | Listed in mental model library for probing hidden assumptions during decision review. |
| .claude/skills/planner/references/mental-models-galls-law.md | 60 | used here | Cited in milestone planning to prevent dismantling working components during incremental evolution. |
| .claude/skills/pre-mortem/references/mental-models-galls-law.md | 52 | used here | Applied in pre-mortem risk assessments to identify unexamined assumptions in replacement proposals. |
| .claude/skills/reflect/references/triggers.md | 23 | used here | Triggers reflective analysis when proposing removals of long-standing rules or features. |
| .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md | 66 | used here | Cited during requirements discovery to challenge hasty feature deprecations. |
| .claude/skills/research-and-incorporate/references/workflow.md | 529 | used here | Applied when integrating external research to ensure existing internal patterns are respected. |
| .claude/skills/research-and-incorporate/SKILL.md | 14 | used here | Skill workflow step mandating that existing solutions be examined before introducing new dependencies. |
| templates/agents/architect.shared.md | 555 | defined here | Core mental model in the shared architect template enforcing investigation of prior design intent. |
| templates/agents/implementer.shared.md | 484 | used here | Implementation safeguard in shared template instructing implementers not to delete unfamiliar code. |

## Consumes
Understanding of prior system constraints, original design rationale, and historical decision context.

## Produces
Documented justification of why legacy logic, constraints, or rules can be safely removed or superseded.

## When applied
Mandatory whenever an agent or developer proposes deleting, deprecating, or creating exceptions to existing code, architectures, or ADR policies.

## Sub-concepts
- chesterton-s-fence-analysis

## Part of
none

## Implementation status
defects: cross-file-contradiction, doc-drift, internal-contradiction, missing-path

## Design notes
Chesterton's Fence is an pervasive mental model and architectural pattern in rjm, mandating that agents never dismantle or bypass an existing rule, gate, or code pattern without first understanding and documenting why it was originally established. This principle acts as an indispensable defense against regressions and erosion of architectural standards in autonomous development, forcing explicit justification whenever exceptions or removals are contemplated.
