---
package: rjm
name: tw_delegation
slug: tw-delegation
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

# tw_delegation

## Definition — verbatim
> "Delegate to @agent-technical-writer for documentation updates." — .claude/skills/planner/scripts/executor.py:443

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 445 | defined here | Defines delegation requirements and skip conditions for technical writer documentation passes. |

## Consumes
Plan file path, modified files list, and codebase documentation structure (`CLAUDE.md`, `README.md`).

## Produces
Updated tabular `CLAUDE.md` index entries, project README architectural documentation, module docstrings, and verified code comments.

## When applied
Invoked during Step 6 of plan execution for code-primary plans after quality review passes; skipped if all milestones were purely documentation.

## Sub-concepts
none

## Part of
executor

## Implementation status
defects: missing-path, internal-contradiction, exit-code-mismatch

## Design notes
A post-implementation documentation protocol in the executor that delegates index updates, README architecture sections, and comment hygiene checks to `@agent-technical-writer` once code passes quality review.
