---
package: rjm
name: Temporal Contamination in Code Comments
slug: temporal-contamination-in-code-comments
kind: pattern
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/resources/temporal-contamination.md, sha256: e52d341aeaff094b536cc2be2d27bdbe4ecec2b6a107c9019ea32bb5655490d5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Temporal Contamination in Code Comments

## Definition — verbatim
> "# Temporal Contamination in Code Comments" — .claude/skills/planner/resources/temporal-contamination.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/resources/temporal-contamination.md | 1 | defined here | Document title and core subject defining comment anti-patterns that leak change history or planning artifacts. |

## Consumes
Source code comments, plan comments, and documentation diffs.

## Produces
Guidance and categorization for identifying and cleaning comments that leak temporal context into codebases.

## When applied
Applied during plan annotation, documentation review, and code simplification passes when reviewing inline code comments.

## Sub-concepts
timeless-present-rule, detection-heuristic, change-relative, baseline-reference, location-directive, planning-artifact, intent-leakage, the-transformation-pattern

## Part of
rjm:plan

## Implementation status
defects: doc-drift, missing-path

## Design notes
Temporal Contamination in Code Comments represents the anti-pattern where code comments leak transient change history, diff locations, author intent, or planning artifacts into the permanent codebase. The rjm lifecycle treats this as technical debt, enforcing rules to ensure comments describe timeless code behavior rather than historical transition narratives.
