---
package: rjm
name: Auto-Resolution Script
slug: auto-resolution-script
kind: reference
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

# Auto-Resolution Script

## Definition — verbatim
> "For bulk auto-resolution of known safe patterns:" — .claude/agents/merge-resolver.md:226

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/merge-resolver.md | 224 | defined here | Section documenting the invocation syntax and role of `resolve_pr_conflicts.py`. |

## Consumes
PR number, branch name, and target branch arguments.

## Produces
Bulk automated resolution of safe file patterns across conflicted PR branches.

## When applied
Invoked when resolving large PRs containing known safe auto-resolvable patterns.

## Sub-concepts
none

## Part of
merge-conflict-resolution-specialist

## Implementation status
defects: doc-drift

## Design notes
References `resolve_pr_conflicts.py`, the CLI helper script in `.claude/skills/merge-resolver/scripts/`. It handles bulk automated checkout of safe file patterns, abstracting repetitive git checkout operations away from the agent while leaving manual semantic conflicts for intent analysis.
