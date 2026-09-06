---
package: matt
name: concurrency
slug: concurrency
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/add-implement-spec-skill.md, sha256: abbf2ece03c6629782df0f815603378f275252c92379529eae0268e101721246}
  - {path: .github/workflows/release.yml, sha256: 73ce81a83de90d93a63272dae7e1a3ff8d57dc2f8e99424694289dc7174eec46}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# concurrency

## Definition — verbatim
(used, not defined)

> "concurrency: ${{ github.workflow }}-${{ github.ref }}" — .github/workflows/release.yml:8

## Also called — verbatim
`maximum concurrency` — skills/in-progress/implement-spec/SKILL.md:15

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/add-implement-spec-skill.md | 5 | used here | Notes running implementer subagents across the ready frontier for concurrency. |
| .github/workflows/release.yml | 8 | used here | Defines the GitHub Actions workflow concurrency group to prevent overlapping release runs. |

## Consumes
Unblocked tasks from a task graph, separate git worktrees, or CI job triggers.

## Produces
Simultaneous execution of multiple subagents or serialized execution of CI release jobs.

## When applied
Applied when orchestrating parallel implementer subagents across the ready frontier, and when scoping CI/CD workflow runs.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The execution model permitting simultaneous independent operations. In `implement-spec`, concurrency enables multiple implementer subagents to execute unblocked tickets in parallel within isolated worktrees; in CI release workflows, concurrency constraints serialize pipeline executions to prevent deployment races.
