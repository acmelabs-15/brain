---
package: rjm
name: COMPLETE
slug: complete
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_copilot_cli.py, sha256: 42c92fa1b72b6b37bd4b7864b19b8d9987761bdcf034129d7cf2e7a40f70a16c}
  - {path: templates/agents/code-simplifier.shared.md, sha256: 4ec268bd1710b891d2cdbd614849ad34357aa8da48ebceb6e22afa0729731407}
  - {path: templates/agents/comment-analyzer.shared.md, sha256: edcee882ed36961652791afd7a6fa09620e7d6753248bbe30f9d0bd35ce86296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# COMPLETE

## Definition — verbatim
> "- **[COMPLETE]**: refactors produced; hand off to qa agent for regression validation on touched files." — templates/agents/code-simplifier.shared.md:122

## Also called — verbatim
> "- **[COMPLETE]**: findings produced; hand off to pr-comment-responder agent (if PR review thread) or implementer (if direct comment edits) to apply the proposed changes." — templates/agents/comment-analyzer.shared.md:118

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_copilot_cli.py | 428 | defined here | Completion method executing prompt submission and transcript extraction over Copilot CLI. |
| templates/agents/code-simplifier.shared.md | 122 | used here | Terminal success status tag indicating simplifications were produced and signaling handoff to QA. |
| templates/agents/comment-analyzer.shared.md | 118 | used here | Terminal success status tag indicating comment findings were produced and signaling handoff to PR responder or implementer. |

## Consumes
Valid refactoring diffs or comment analysis findings conforming to output bounds and safety protocols.

## Produces
Authoritative success signal authorizing downstream handoff to QA or PR review agents.

## When applied
Emitted when an agent completes all requested transformations or review steps without hitting error boundaries or size limits.

## Sub-concepts
none

## Part of
cross-phase

## Implementation status
clean

## Design notes
`COMPLETE` is the terminal success gate across rjm agent task protocols, confirming that expected outputs were successfully produced within bounds and authorizing clean handoff to downstream verification agents. In `_copilot_cli.py`, `complete` also serves as the provider method for executing completions.
