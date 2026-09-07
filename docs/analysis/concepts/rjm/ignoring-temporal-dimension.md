---
package: rjm
name: Ignoring Temporal Dimension
slug: ignoring-temporal-dimension
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Ignoring Temporal Dimension

## Definition — verbatim
> "<description>Ignoring Temporal Dimension (assuming today's constants remain constant)</description>" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:461

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 461 | defined here | Defined as a major anti-pattern mistaking current constraints for permanent system invariants. |
| .claude/skills/cva-analysis/SKILL.md | 332 | defined here | Listed in SKILL.md anti-patterns advising the inclusion of future variation columns to balance YAGNI with roadmaps. |

## Consumes
Static snapshots of current requirements, unvalidated assumptions of permanence.

## Produces
Fragile architectures that break when previously invariant assumptions inevitably change.

## When applied
Evaluated during commonality analysis to verify whether identified invariants are genuinely permanent.

## Sub-concepts
none

## Part of
cva-analysis

## Implementation status
defects: doc-drift, missing-path

## Design notes
Ignoring Temporal Dimension is a major anti-pattern in CVA analysis that occurs when developers treat today's constant as an immutable law of nature (e.g., assuming a system will only ever operate in a single currency or jurisdiction). While YAGNI prohibits premature generalization, CVA balances this by incorporating a "Future Variations" dimension to ensure the architecture does not paint the system into an inflexible corner when known roadmap items arrive.
