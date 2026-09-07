---
package: rjm
name: Complexity tiers reference
slug: complexity-tiers-reference
kind: reference
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Complexity tiers reference

## Definition — verbatim
> "- **Complexity tiers reference** (`engineering-complexity-tiers.md`): try each candidate in order, use the first that exists:" — .claude/skills/review/SKILL.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 50 | defined here | Candidate resolution paths for engineering-complexity-tiers.md reference. |

## Consumes
Candidate paths in Claude Code project layout (`.claude/skills/analyze/references/engineering-complexity-tiers.md`) or vendored plugin root (`skills/analyze/references/engineering-complexity-tiers.md`).

## Produces
Engineering complexity tier classification criteria (Tier 1-5) used to calibrate review depth.

## When applied
Consulted during Step 3 of the review process by the analyst subagent when evaluating diff scope.

## Sub-concepts
none

## Part of
review

## Implementation status
defects: missing-path, doc-drift

## Design notes
The complexity tiers reference provides standardized criteria for classifying changes into engineering complexity tiers (Tier 1 through Tier 5). In rjm's review phase, this classification enables the analyst subagent to calibrate evaluation depth proportionally to change risk, ensuring that minor textual updates avoid excessive review overhead while architectural changes receive exhaustive multi-axis analysis.
