---
package: rjm
name: Commit Budget
slug: commit-budget
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md, sha256: 5760a41f262c0ac1fd5a7496c95cd0b37005dc15a36ac52de32b931cb045d720}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Commit Budget

## Definition — verbatim
(used, not defined)

> "## Commit Budget (AGENTS.md: ≤5 files, ≤20 commits/PR)" — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:368

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md | 368 | used here | Section heading and allocation table enforcing AGENTS.md limits of at most 5 files per commit and 20 commits per PR. |

## Consumes
task-breakdown

## Produces
commit-allocation-plan

## When applied
> "Commit Budget (AGENTS.md: ≤5 files, ≤20 commits/PR)" — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:368

## Sub-concepts
none

## Part of
agents-governance

## Implementation status
defects: doc-drift

## Design notes
A governance constraint derived from repository standards limiting PR size to at most 5 files per commit and 20 commits per pull request. This constraint forces agents and human contributors to break down large tasks into small, incremental, and independently reviewable units of work.
