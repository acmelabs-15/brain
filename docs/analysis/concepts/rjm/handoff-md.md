---
package: rjm
name: HANDOFF.md
slug: handoff-md
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-011-session-state-mcp.md, sha256: 1f587e02f76255cdbfcfe6270ec3765a1e843830f3408b5ae5847068f08e02f1}
  - {path: .agents/architecture/ADR-060-rework-warning-session-log-persistence.md, sha256: ac709bb1d9ab072581f6f1fcaa31e89f028312a0f28c3123ce47edfb84604826}
  - {path: .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md, sha256: 3c5be6f8d487f25cab5cca445ead7dc4205aeb115258cecc4c27c489fe339fda}
  - {path: .claude/skills/merge-resolver/SKILL.md, sha256: 88f9d20e41d105ded6fc9244d9035c51fb0130fbaf4c9cb430d8fbe1840a90b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# HANDOFF.md

## Definition — verbatim
(used, not defined)

> "HANDOFF.md requires manual updates prone to conflicts in parallel sessions" — .agents/architecture/ADR-011-session-state-mcp.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-011-session-state-mcp.md | 29 | used here | Cited as the cross-session context document whose manual updates cause fragile state and conflicts. |
| .agents/architecture/ADR-060-rework-warning-session-log-persistence.md | 30 | used here | Cited as governed by ADR-014 under a read-only contract. |
| .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md | 48 | used here | Recorded in retrospective as a MUST requirement in Phase 2 that was violated during PR #226. |
| .claude/skills/merge-resolver/SKILL.md | 226 | used here | Warns against accepting local `--ours` version during merge conflicts, directing agents to accept canonical `--theirs`. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift

## Design notes
A file name identifying the repository's cross-session handoff markdown file rather than an operational lifecycle concept.
