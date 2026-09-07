---
package: rjm
name: Planning artifact
slug: planning-artifact
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

# Planning artifact

## Definition — verbatim
> "**Category**: Planning artifact" — .claude/skills/planner/resources/temporal-contamination.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/resources/temporal-contamination.md | 55 | defined here | Category specification for comments that document future intent or unfinished planning tasks. |

## Consumes
Comments documenting speculative future features or unfinished tasks (e.g., "TODO: add retry logic later").

## Produces
Remediation decisions either deleting speculative comments or implementing required functionality immediately.

## When applied
Applied when a comment describes future intentions or planning notes rather than concrete current behavior.

## Sub-concepts
none

## Part of
temporal-contamination-in-code-comments

## Implementation status
defects: doc-drift, missing-path

## Design notes
Planning artifact identifies comments that record hypothetical futures, unfinished plans, or deferred decisions. Purging them ensures that code comments remain authoritative descriptions of actual system behavior rather than abandoned planning scratchpads.
