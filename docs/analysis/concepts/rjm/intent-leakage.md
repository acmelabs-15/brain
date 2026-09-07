---
package: rjm
name: Intent leakage
slug: intent-leakage
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

# Intent leakage

## Definition — verbatim
> "**Category**: Intent leakage" — .claude/skills/planner/resources/temporal-contamination.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/resources/temporal-contamination.md | 69 | defined here | Category specification for comments describing authorial design choices rather than code mechanics. |

## Consumes
Comments that explain the author's internal reasoning or choices (e.g., "Intentionally placed after validation").

## Produces
Objective comments that state the observable architectural facts (e.g., "Runs after validation completes").

## When applied
Applied when a comment focuses on why the author chose a path rather than how the component operates.

## Sub-concepts
none

## Part of
temporal-contamination-in-code-comments

## Implementation status
defects: doc-drift, missing-path

## Design notes
Intent leakage categorizes comments that describe the personal motivations or justifications of the developer rather than the objective operational properties of the software. Transforming these ensures the codebase documentation remains objective and professional.
