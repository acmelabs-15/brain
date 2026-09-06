---
package: addy
name: /constraints guard
slug: constraints-guard
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/constraints.toml, sha256: 149ae460288b1f86487bb842ea5cf3476cdb2766a3f703985d83499cf8f6c817}
  - {path: commands/constraints.toml, sha256: bcc519db853a0ebdf0b07f378e2bc87cb112508d28e41f0d39dd1b17aa68def4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# /constraints guard

## Definition — verbatim
> "- `/constraints guard` — inspect the diff for a weakened bar: lowered thresholds, skipped or deleted tests, new suppression comments, unfinished stubs, new exceptions" — .gemini/commands/constraints.toml:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/constraints.toml | 30 | defined here | Sub-command inspecting diffs for weakened bar moves before changes merge. |
| commands/constraints.toml | 30 | defined here | Sub-command in Claude Code command definition for inspecting diffs against weakened standards. |

## Consumes
Git diff between current branch and baseline.

## Produces
Diff audit report flagging lowered thresholds, skipped tests, suppression comments, or stubs.

## When applied
During task completion and pre-merge code review.

## Sub-concepts
none

## Part of
constraint-driven-development

## Implementation status
clean

## Design notes
A diff inspection technique that guards against stealthy regressions where agents weaken thresholds, disable tests, or add linter suppressions to reach a green build.
