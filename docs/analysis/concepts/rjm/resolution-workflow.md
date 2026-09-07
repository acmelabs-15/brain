---
package: rjm
name: Resolution Workflow
slug: resolution-workflow
kind: pattern
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

# Resolution Workflow

## Definition — verbatim
> "## Resolution Workflow" — .claude/agents/merge-resolver.md:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/merge-resolver.md | 75 | defined here | Section heading defining the 7-phase disciplined merge resolution process. |
| templates/agents/merge-resolver.shared.md | 47 | defined here | Section heading outlining the multi-phase merge resolution workflow across shared templates. |

## Consumes
PR branches with merge conflicts, git repository worktrees, and commit history.

## Produces
An end-to-end execution lifecycle: Context Gathering, Conflict Classification, Intent Analysis, Resolution, Staging and Verification, Resolution Report, Commit.

## When applied
When resolving conflicted pull requests and branch merges.

## Sub-concepts
context-gathering, conflict-classification, intent-analysis, resolution-report

## Part of
merge-conflict-resolution-specialist

## Implementation status
defects: doc-drift

## Design notes
Establishes the sequential, multi-phase lifecycle for resolving merge conflicts. By separating context gathering, categorization, historical blame analysis, combination heuristics, verification, and audit reporting into discrete phases, it prevents hasty line-by-line patching and ensures all resolutions are grounded in author intent.
