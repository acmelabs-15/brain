---
package: rjm
name: Timeless Present Rule
slug: timeless-present-rule
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

# Timeless Present Rule

## Definition — verbatim
> "**Timeless Present Rule**: Comments must be written from the perspective of a reader encountering the code for the first time, with no knowledge of what came before or how it got here. The code simply _is_." — .claude/skills/planner/resources/temporal-contamination.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/resources/temporal-contamination.md | 7 | defined here | Foundational rule defining the perspective and phrasing required for all code comments. |

## Consumes
Draft comments in plans and code implementations.

## Produces
Clean, timeless comments describing what the code does rather than how it was modified.

## When applied
Applied whenever authoring or reviewing code comments in plans or code modifications.

## Sub-concepts
none

## Part of
temporal-contamination-in-code-comments

## Implementation status
defects: doc-drift, missing-path

## Design notes
The Timeless Present Rule enforces that comments must be written from the perspective of an engineer reading the code without knowledge of its revision history. It prevents code comments from decaying into obsolete narratives of past bug fixes or transitional refactorings.
