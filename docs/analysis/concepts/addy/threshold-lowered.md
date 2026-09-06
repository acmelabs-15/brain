---
package: addy
name: threshold-lowered
slug: threshold-lowered
kind: gate
package_phase: addy:Define
implementation_in_scope: true
memo_inputs:
  - {path: skills/constraint-driven-development/references/floor-guard.md, sha256: dba15dad8f5a5cbae464ec8457e6dd014a7bcb3ad13a360a6908d54991a5415e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# threshold-lowered

## Definition — verbatim
(used, not defined)

> "flag('threshold-lowered', r.file, r.text + '  ->  ' + a.text);" — skills/constraint-driven-development/references/floor-guard.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/references/floor-guard.md | 84 | defines | Floor guard diff rule flagging lowered numeric thresholds in CONSTRAINTS.md |

## Consumes
Diff hunks altering numeric values within `CONSTRAINTS.md`.

## Produces
A floor violation finding (`[threshold-lowered]`) causing the floor guard to exit with status code 1.

## When applied
Evaluated during diff-scoped floor guard checks on working tree and merge base diffs before merging.

## Sub-concepts
none

## Part of
floor, floor-guard, constraint-driven-development

## Implementation status
clean

## Design notes
A diff-level gate rule in floor-guard.mjs that parses numbers in CONSTRAINTS.md before and after a change to verify that thresholds have not decreased. When autonomous agents hit strict quality bars (such as coverage percentages or latency budgets), lowering the recorded threshold is a common shortcut to green; this gate blocks that evasion tactic.
