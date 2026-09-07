---
package: rjm
name: Analyst evidence handoff
slug: analyst-evidence-handoff
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: src/claude/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Analyst evidence handoff

## Definition — verbatim
> "Before delegating an investigation that needs shell output, git history, builds," — .claude/agents/orchestrator.md:159

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/orchestrator.md | 157 | defined here | Defines the specialized evidence prefetching and delegation protocol for analyst agents. |
| src/claude/orchestrator.md | 157 | defined here | Defines the specialized evidence prefetching and delegation protocol for analyst agents. |
| templates/agents/orchestrator.shared.md | 168 | defined here | Defines the specialized evidence prefetching and delegation protocol for analyst agents. |

## Consumes
Investigation goals requiring shell commands, git logs, build diagnostics, or unrestricted web context.

## Produces
Prefetched execution output, repository SHA/branch metadata, and explicit evidence gap documentation packaged into the delegation context.

## When applied
Applied whenever delegating an investigation to an analyst agent whose toolset lacks direct shell or unrestricted web access.

## Sub-concepts
none

## Part of
handoff-contract, orchestrator

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction

## Design notes
The Analyst evidence handoff pattern resolves toolset limitations inherent to the analyst agent role. Because the analyst agent cannot run arbitrary shell commands or unrestricted web queries, the orchestrator prefetches necessary terminal and build evidence upfront, preventing repeated blocked turns or failed investigation loops.
