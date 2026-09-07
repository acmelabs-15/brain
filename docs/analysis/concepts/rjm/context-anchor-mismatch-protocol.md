---
package: rjm
name: Context anchor mismatch protocol
slug: context-anchor-mismatch-protocol
kind: technique
package_phase: rjm:execution
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/scripts/executor.py, sha256: 799b7ea2a7c4a82acd3d64fe89ae0f9ee335efce29bb057086a26dc8232883e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Context anchor mismatch protocol

## Definition — verbatim
> "When @agent-developer reports context lines don't match actual code:" — .claude/skills/planner/scripts/executor.py:276

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 274 | defined here | Establishes handling rules when developer agents encounter discrepancies between planned diff context lines and actual source code. |

## Consumes
Discrepancy reports from developer agents detailing mismatches between planned context anchors and target source files.

## Produces
Action directives: proceed with normalized match, record execution log note, note deviation, or STOP and escalate to planner.

## When applied
Applied during Step 3 (Milestone Execution) when code context anchors in planned diffs diverge from real file content.

## Sub-concepts
none

## Part of
executor

## Implementation status
defects: missing-path, internal-contradiction, exit-code-mismatch

## Design notes
A runtime recovery protocol that dictates how implementing agents handle anchor drift between planned diffs and real source code. It permits minor formatting and restructuring variations to proceed while halting execution on missing anchors or fundamental logic shifts.
