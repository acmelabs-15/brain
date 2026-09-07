---
package: rjm
name: Baseline reference
slug: baseline-reference
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

# Baseline reference

## Definition — verbatim
> "**Category**: Baseline reference" — .claude/skills/planner/resources/temporal-contamination.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/resources/temporal-contamination.md | 29 | defined here | Category specification for comments that compare current code against previous or external baselines. |

## Consumes
Comments that compare against removed or previous code implementations.

## Produces
Self-contained comments explaining the technical justification without reference to historical code.

## When applied
Applied when a comment compares current implementation details to an obsolete baseline not present in the code.

## Sub-concepts
none

## Part of
temporal-contamination-in-code-comments

## Implementation status
defects: doc-drift, missing-path

## Design notes
Baseline reference identifies comments that make comparative statements against code that no longer exists in the codebase (e.g., "Unlike the old approach..."). Removing these comparisons prevents cognitive debt for future readers who have no access or context regarding the historical baseline.
