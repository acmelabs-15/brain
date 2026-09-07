---
package: rjm
name: Merge Conflict Resolution Specialist
slug: merge-conflict-resolution-specialist
kind: role
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/merge-resolver.md, sha256: 86e3616bd8f081ebb1d343da98a60df28413592427c10d9ce95f992eab3e738b}
  - {path: templates/agents/merge-resolver.shared.md, sha256: 9783a32baa9d4e4ee8a5b0d597e6a15d1c192d9c7b0d3b364c9698e408db223e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Merge Conflict Resolution Specialist

## Definition — verbatim
> "**Merge Conflict Resolution Specialist** that resolves git merge conflicts by analyzing commit history, code intent, and PR metadata. Applies heuristic-based resolution strategies with confidence scoring." — .claude/agents/merge-resolver.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/merge-resolver.md | 26 | defined here | Core identity statement defining the specialist agent role for resolving merge conflicts. |
| templates/agents/merge-resolver.shared.md | 34 | defined here | Core identity statement defining the merge conflict resolution specialist across shared templates. |

## Consumes
Conflicted git branches, PR metadata, git blame history, and commit logs.

## Produces
Resolved merge conflicts, staged commits, and structured resolution reports with confidence ratings.

## When applied
When branch integration, rebasing, or PR merges encounter unresolved conflict markers.

## Sub-concepts
execution-capability-precondition, resolution-workflow, auto-resolvable, rename-never-content-merge, confidence-scoring

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
A specialized executor agent role dedicated to git merge conflict resolution in rjm. By analyzing commit intent, git blame history, and semantic impact rather than mechanically picking sides, it resolves non-trivial conflicts while enforcing hard rules against overwriting audit records or hallucinating merges when shell execution is unavailable.
