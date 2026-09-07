---
package: rjm
name: Git State Verification
slug: git-state-verification
kind: phase
package_phase: rjm:session-start
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-011-session-state-mcp.md, sha256: 1f587e02f76255cdbfcfe6270ec3765a1e843830f3408b5ae5847068f08e02f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Git State Verification

## Definition — verbatim
(used, not defined)

> "| 4 | Git State Verification | RECOMMENDED | Git state documented |" — .agents/architecture/ADR-011-session-state-mcp.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-011-session-state-mcp.md | 39 | used here | Listed as Phase 4 in the session protocol phase table with requirement level RECOMMENDED. |

## Consumes
Working repository tree and git status/branch inspection outputs.

## Produces
Documented git status (branch, clean worktree, HEAD commit SHA) recorded in the session log.

## When applied
Executed during session start (Phase 4) prior to commencing feature or implementation work.

## Sub-concepts
none

## Part of
session-protocol

## Implementation status
not-implemented

## Design notes
Phase 4 of the rjm session lifecycle protocol, recommending verification and documentation of the repository's git working tree and branch status at session commencement. This confirms that work begins on the correct clean base branch, preventing dirty commits or accidental branch divergence.
