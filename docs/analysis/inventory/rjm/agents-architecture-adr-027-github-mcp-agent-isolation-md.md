---
package: rjm
path: .agents/architecture/ADR-027-github-mcp-agent-isolation.md
type: agent
bytes: 15767
unit: inv-rjm-11
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-027-github-mcp-agent-isolation.md, sha256: 3a0cae5d7a44bc1fa4645e919b1e487e35e0c6ab4826e09df105a5c508907ac3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-027-github-mcp-agent-isolation.md

## Purpose — required, verbatim
> "Claude Code's interaction with GitHub currently uses PowerShell wrapper scripts that suffer from significant latency overhead." — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:18

## Design intent — required
Evaluates architectural options to reduce GitHub interaction latency in Claude Code (comparing PowerShell wrappers, direct `gh` CLI invocations, a persistent PowerShell named pipe daemon, and an isolated GitHub MCP server). Proposes a phased hybrid migration starting with quick-win `gh` CLI commands and transitioning to an isolated GitHub agent hosting GitHub MCP tools (drawing from the superpowers-chrome browser-user isolation pattern) to achieve 90-95% latency reduction while preserving clean context boundaries.

## Phase — required
none

## Inputs — required
Performance benchmarks of `pwsh` process startup (with and without `-NoProfile`), GitHub operation use cases (PR context, review comments, reactions, issue operations, labels, GraphQL queries), and agent isolation configuration patterns.

## Outputs — required
Architectural evaluation, phased migration plan (Phase 1: `gh` CLI quick wins, Phase 2: GitHub MCP prototype, Phase 3: full migration), comparison matrix across four options, reversibility assessment, and capability gap analysis.

## Invokes — required
- script Get-PRContext.ps1 — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:47
- script Get-PRReviewComments.ps1 — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:48
- script Post-PRCommentReply.ps1 — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:49
- script Resolve-PRReviewThread.ps1 — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:50
- script Add-CommentReaction.ps1 — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:51
- script Set-IssueLabels.ps1 — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:52
- script Set-IssueMilestone.ps1 — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:53
- script Get-IssueContext.ps1 — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:54
- doc ADR-005 — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:379
- doc ADR-011 — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:380
- doc ADR-003 — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:381

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:166

## Concepts named — required, verbatim
- `agent isolation` — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:14 — defined here
- `pwsh` — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:18 — used here
- `-NoProfile` — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:20 — used here
- `superpowers-chrome` — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:128 — used here
- `github-mcp-server` — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:128 — used here
- `github-agent` — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:153 — defined here
- `MADR` — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:427 — used here

## Structure
- `# ADR-027: GitHub MCP Server with Agent Isolation Pattern` — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:14
- `## Context and Problem Statement` — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:16
- `## Decision Drivers` — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:25
- `## Considered Options` — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:35
- `### Option A: PowerShell Wrappers (Current State)` — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:37
- `### Option B: gh CLI Rewrite (Issue #286)` — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:69
- `### Option C: PowerShell Named Pipe Daemon (Issue #287)` — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:101
- `### Option D: GitHub MCP Server + Agent Isolation (NEW)` — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:126
- `## Decision Outcome` — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:198
- `## Pros and Cons of the Options` — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:263
- `## Reversibility Assessment` — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:305
- `## GitHub MCP Capability Gap Analysis` — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:345
- `## Comparison Matrix` — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:363
- `## Related Decisions` — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:377
- `## More Information` — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:383

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:399 — Session reference `.agents/sessions/2025-12-23-session-80-pwsh-performance-strategic-analysis.md` does not exist (file extension is `.json`).
- missing-path — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:400 — Session reference `.agents/sessions/2025-12-23-session-81-github-mcp-architecture-analysis.md` does not exist (file extension is `.json`).
- missing-path — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:47 — Referenced PowerShell scripts in `.claude/skills/github/scripts/` (e.g., `Get-PRContext.ps1`) no longer exist in repository.

## Observations
- Status remains proposed in frontmatter: "status: proposed" — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:3, as it was never formally accepted before ADR-030 proposed amending it with the skills pattern.
- Context isolation pattern: scopes 40+ MCP tools exclusively to a subagent (`github-agent`) rather than polluting root Claude Code session context, estimating ~10,000 token savings.
- Adopts the MADR 4.0 decision format with explicit reversibility and vendor lock-in assessments.

## Context cost
15767 bytes, ~4000 tokens.
