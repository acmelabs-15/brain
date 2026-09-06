---
package: matt
name: implement-spec
slug: implement-spec
kind: technique
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/add-implement-spec-skill.md, sha256: abbf2ece03c6629782df0f815603378f275252c92379529eae0268e101721246}
  - {path: skills/in-progress/README.md, sha256: febfa7e4b0e2409af96ad8d045b9552e75cc758ee068a0e7109f6b973e91cd14}
  - {path: skills/in-progress/implement-spec/SKILL.md, sha256: f703b5f41df9c2202e19540d203e0d5fc32613572a838a070136cc22e712b129}
  - {path: skills/in-progress/implement-spec/agents/openai.yaml, sha256: d457ae78ff282b8798380b0c2e393c9798bc2bf5ee7dfe9ca31607714c6cd7d3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# implement-spec

## Definition — verbatim
> "Add the `implement-spec` skill (in-progress bucket, user-invoked). It takes a spec and its tickets and drives them to a single PR: the tickets are read as a task graph with blocking edges, so implementer subagents run in background worktrees across the ready frontier for concurrency, a merger subagent folds each one back into the PR branch, and the flow closes with `/code-review` before the PR is marked ready." — .changeset/add-implement-spec-skill.md:5

## Also called — verbatim
`Implement Spec` — skills/in-progress/implement-spec/agents/openai.yaml:2

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/add-implement-spec-skill.md | 5 | defined here | Changeset announcing the new implement-spec skill in the in-progress bucket and describing its workflow. |
| skills/in-progress/implement-spec/agents/openai.yaml | 2 | defined here | Declares the agent interface display name and policy for implement-spec. |
| skills/in-progress/implement-spec/SKILL.md | 2 | defined here | Skill frontmatter declaring name: implement-spec and core procedural instructions. |
| skills/in-progress/README.md | 17 | used here | Lists implement-spec as an in-progress skill driving specs to PRs via task graphs and concurrent subagents. |

## Consumes
A specification issue and associated tickets structured with dependency blocking relationships.

## Produces
A unified pull request branch implementing the entire specification, verified by `/code-review`.

## When applied
Invoked directly by the user to execute an entire specification containing multiple interconnected tickets autonomously.

## Sub-concepts
task-graph, blocking-edges, implementer-subagents, background-worktrees, ready-frontier, merger-subagent, pr-branch

## Part of
none

## Implementation status
clean

## Design notes
An experimental multi-agent orchestration skill residing in the in-progress bucket. It overcomes the limitation of single-ticket serial execution by modeling tickets as an acyclic task graph, launching concurrent implementer subagents across unblocked frontier tickets in isolated git worktrees, merging outputs via merger subagents, and culminating in a single verified pull request.
