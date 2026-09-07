---
package: rjm
name: Detection Heuristic
slug: detection-heuristic
kind: technique
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

# Detection Heuristic

## Definition — verbatim
> "## Detection Heuristic" — .claude/skills/planner/resources/temporal-contamination.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/resources/temporal-contamination.md | 11 | defined here | Section heading introducing the heuristic evaluation questions for identifying contaminated comments. |

## Consumes
Code comments under inspection.

## Produces
Classification of comments into contamination categories or clean timeless present status.

## When applied
Applied by technical writers and reviewers when auditing plans and code diffs for contaminated comments.

## Sub-concepts
change-relative, baseline-reference, location-directive, planning-artifact, intent-leakage

## Part of
temporal-contamination-in-code-comments

## Implementation status
defects: doc-drift, missing-path

## Design notes
Detection Heuristic provides a structured questionnaire to evaluate whether a code comment contains historical bias, relative comparisons, diff location directives, or authorial intent leaks. It gives agents a systematic decision framework to classify and remediate contaminated comments.
