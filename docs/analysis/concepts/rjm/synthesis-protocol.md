---
package: rjm
name: Synthesis Protocol
slug: synthesis-protocol
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

# Synthesis Protocol

## Definition — verbatim
> "**Verify artifacts, not reports** - a worker's summary describes what it intended to do, not what it did." — .claude/agents/orchestrator.md:181

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/orchestrator.md | 177 | defined here | Defines the 7-step protocol for verifying artifacts, resolving conflicts, deduplicating, and synthesizing agent returns. |
| src/claude/orchestrator.md | 177 | defined here | Defines the 7-step protocol for verifying artifacts, resolving conflicts, deduplicating, and synthesizing agent returns. |
| templates/agents/orchestrator.shared.md | 188 | defined here | Defines the 7-step protocol for verifying artifacts, resolving conflicts, deduplicating, and synthesizing agent returns. |

## Consumes
Raw returned messages, reports, generated artifacts, diffs, and verification data from delegated agents.

## Produces
A unified, deduplicated, conflict-resolved synthesized report and actionable recommendation for the user.

## When applied
Applied after delegated specialist agents return and before presenting findings or solutions to the user.

## Sub-concepts
none

## Part of
orchestrator

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction

## Design notes
The Synthesis Protocol governs how an orchestrator consolidates multi-agent returns. By requiring empirical inspection of created files and diffs rather than trusting self-reported summaries, and enforcing conflict resolution and deduplication over lazy concatenation, it guarantees high-integrity user-facing conclusions.
