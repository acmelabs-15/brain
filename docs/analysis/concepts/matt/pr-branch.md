---
package: matt
name: PR branch
slug: pr-branch
kind: artifact
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/add-implement-spec-skill.md, sha256: abbf2ece03c6629782df0f815603378f275252c92379529eae0268e101721246}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# PR branch

## Definition — verbatim
(used, not defined)

> "Add the `implement-spec` skill (in-progress bucket, user-invoked). It takes a spec and its tickets and drives them to a single PR: the tickets are read as a task graph with blocking edges, so implementer subagents run in background worktrees across the ready frontier for concurrency, a merger subagent folds each one back into the PR branch, and the flow closes with `/code-review` before the PR is marked ready." — .changeset/add-implement-spec-skill.md:5

## Also called — verbatim
`branch` — skills/in-progress/implement-spec/SKILL.md:9

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/add-implement-spec-skill.md | 5 | used here | Names the PR branch as the target branch where merger subagents fold completed tickets. |

## Consumes
A base branch starting commit, ticket feature branch commits.

## Produces
The unified Git branch hosting all merged ticket implementations for the specification.

## When applied
Created during initialization in `implement-spec` and maintained until all tickets are merged and reviewed.

## Sub-concepts
none

## Part of
implement-spec, pr

## Implementation status
clean

## Design notes
The integration branch in `implement-spec` where individual ticket contributions are progressively merged. It isolates speculative or multi-agent work from the main branch and serves as the unified diff reviewed by `/code-review` before opening the final pull request.
