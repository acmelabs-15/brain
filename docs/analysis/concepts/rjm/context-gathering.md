---
package: rjm
name: Context Gathering
slug: context-gathering
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/merge-resolver.md, sha256: 86e3616bd8f081ebb1d343da98a60df28413592427c10d9ce95f992eab3e738b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Context Gathering

## Definition — verbatim
> "### Phase 1: Context Gathering" — .claude/agents/merge-resolver.md:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/merge-resolver.md | 77 | defined here | Phase 1 of the resolution workflow specifying PR metadata retrieval and conflicted file identification. |

## Consumes
PR number, base branch, head branch, and repository git state.

## Produces
PR metadata JSON, current branch status, uncommitted merge state, and list of conflicted files.

## When applied
Executed immediately after passing the Phase 0 capability check.

## Sub-concepts
none

## Part of
resolution-workflow

## Implementation status
defects: doc-drift

## Design notes
Phase 1 of merge conflict resolution. It gathers essential operational context—PR title, description, commits, base branch, and conflicted file lists—before attempting any code modifications, ensuring the resolver understands the overarching intent of the pull request prior to analyzing specific diffs.
