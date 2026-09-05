---
package: rjm
path: .agents/architecture/ADR-031-hybrid-powershell-architecture.md
type: agent
bytes: 7767
unit: inv-rjm-12
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-031-hybrid-powershell-architecture.md, sha256: 578d49dd51a0f627f03dcf6b304dc4be8ce35f163748e4334af46d2d02c7f6f4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-031-hybrid-powershell-architecture.md

## Purpose — required, verbatim
> "Claude Code suffers from systemic performance issues when invoking PowerShell skills." — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:48

## Design intent — required
Architectural decision record that proposed a two-strategy hybrid execution model to eliminate PowerShell process spawn overhead in Claude Code: routing simple wrapper operations to direct `gh` CLI invocations while keeping a persistent named-pipe PowerShell daemon for complex GraphQL and multi-resource queries. Although Strategy 1 partially shipped as native wrapper scripts before Strategy 2 was abandoned, the proposal was ultimately rejected following ADR-042's complete repository migration from PowerShell to Python, which made PowerShell performance routing obsolete.

## Phase — required
none

## Inputs — required
PowerShell spawn performance measurements from Session 80 benchmark data (`.agents/architecture/ADR-031-hybrid-powershell-architecture.md:52, 206`), strategic performance analysis in `.agents/analysis/claude-pwsh-performance-strategic.md` (`.agents/architecture/ADR-031-hybrid-powershell-architecture.md:205`), GitHub issue #284 (`.agents/architecture/ADR-031-hybrid-powershell-architecture.md:207`), and architectural constraints from ADR-005 (`.agents/architecture/ADR-031-hybrid-powershell-architecture.md:31, 200`) and ADR-006 (`.agents/architecture/ADR-031-hybrid-powershell-architecture.md:201`).

## Outputs — required
Formal rejection record documenting why the hybrid PowerShell architecture was declined (`.agents/architecture/ADR-031-hybrid-powershell-architecture.md:16`), a routing decision tree and classification table mapping wrapper skills to `gh` CLI versus named-pipe daemon execution (`.agents/architecture/ADR-031-hybrid-powershell-architecture.md:84-109`), performance targets (`.agents/architecture/ADR-031-hybrid-powershell-architecture.md:173-180`), and implementation tracking under issues #286 and #287 (`.agents/architecture/ADR-031-hybrid-powershell-architecture.md:21-27, 208`).

## Invokes — required
- doc docs/github-api-capabilities.md — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:24
- config ADR-073 — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:28
- config ADR-005 — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:31
- config ADR-042 — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:33
- config ADR-006 — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:201
- doc .agents/analysis/claude-pwsh-performance-strategic.md — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:205

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:217

## Concepts named — required, verbatim
- `hybrid architecture` — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:18 — defined here
- `Strategy 1` — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:19 — defined here
- `Strategy 2` — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:20 — defined here
- `named-pipe daemon` — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:27 — defined here
- `spawn overhead` — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:48 — used here
- `gh-native` — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:24 — used here
- `ADR-005` — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:31 — used here
- `ADR-042` — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:33 — used here
- `ADR-073` — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:28 — used here
- `Process Spawn Overhead` — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:50 — defined here
- `Routing Decision Tree` — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:84 — defined here
- `Get-PRContext` — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:90 — used here
- `Set-IssueLabels` — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:90 — used here
- `Set-IssueMilestone` — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:103 — used here
- `Post-IssueComment` — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:104 — used here
- `Get-PRReviewComments` — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:105 — used here
- `Resolve-PRReviewThread` — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:106 — used here
- `Add-CommentReaction` — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:107 — used here
- `Test-WorkflowRateLimit` — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:108 — used here
- `PowerShell MCP Server` — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:117 — used here
- `Runspace pool` — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:118 — used here
- `Pester` — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:154 — used here

## Structure
- ADR-031: Hybrid PowerShell Architecture for Claude Code Performance — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:12
- Status — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:14
- Date — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:42
- Context — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:46
- Root Cause: Process Spawn Overhead — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:50
- Architectural Constraints — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:70
- Decision — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:77
- Routing Decision Tree — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:84
- Classification of Current Skills — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:97
- Rationale — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:110
- Alternatives Considered — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:112
- Trade-offs — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:122
- Consequences — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:135
- Positive — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:137
- Negative — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:145
- Neutral — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:152
- Implementation Notes — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:157
- Phase 1: gh CLI Migration (Weeks 1-2) — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:159
- Phase 2: Named Pipe Daemon (Weeks 3-4) — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:166
- Performance Targets — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:173
- Routing Implementation — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:181
- Related Decisions — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:198
- References — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:203

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .agents/architecture/ADR-031-hybrid-powershell-architecture.md:4,44 · Frontmatter date (2026-08-25, date of rejection) differs from ## Date section (2025-12-29, date of original proposal).

## Observations
Illustrates how architectural decisions evolve with foundational changes: the high latency of repeated PowerShell spawns (~400ms per call) initially justified complex process daemonization and splitting execution across direct CLI commands and named pipes. When ADR-042 shifted the core scripting language to Python, the entire problem surface vanished.

## Context cost
7767 bytes, 215 lines, ~1900 tokens. Loads no external files.
