---
package: rjm
name: Change-relative
slug: change-relative
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

# Change-relative

## Definition — verbatim
> "**Category**: Change-relative" — .claude/skills/planner/resources/temporal-contamination.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/resources/temporal-contamination.md | 17 | defined here | Category specification for comments that describe actions taken rather than existing behavior. |

## Consumes
Comments describing change actions (e.g., "Added mutex to fix race condition").

## Produces
Transformed comments stating timeless behavior (e.g., "Mutex serializes cache access from concurrent requests").

## When applied
Applied when a comment answers "yes" to whether it describes an action taken rather than what exists.

## Sub-concepts
none

## Part of
temporal-contamination-in-code-comments

## Implementation status
defects: doc-drift, missing-path

## Design notes
Change-relative identifies comments that describe a modification event (such as "added", "updated", or "fixed") rather than what the code currently does. Categorizing these comments allows agents to reframe them to focus on the active invariants and behaviors of the component.
