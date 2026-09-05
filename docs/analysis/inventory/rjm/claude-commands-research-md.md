---
package: rjm
path: .claude/commands/research.md
type: command
bytes: 4350
unit: inv-rjm-74
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/commands/research.md, sha256: a08ee89a1f75b86ad11d4044ef5ae0757629420384900a2f9ff2d38deeaeeda4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/commands/research.md

## Purpose — required, verbatim
> "Research external topics, create comprehensive analysis, and incorporate learnings into memory systems" — .claude/commands/research.md:2

## Design intent — required
Drives structured external investigation and knowledge ingestion across a 5-phase workflow (Research, Analysis, Applicability, Memory, Action). It produces an in-depth analysis artifact in `.agents/analysis/`, persists memory representations into Serena and Forgetful systems, creates follow-up GitHub issues for actionable tasks, and operates under strict 50,000 output-token budget bounds with well-defined fallback and stop conditions.

## Phase — required
cross-phase

## Inputs — required
- Research parameters: Topic, Context, and optional URLs ("Topic: {topic name}" — .claude/commands/research.md:22; "Context: {why this matters to the project}" — .claude/commands/research.md:23; "URLs: {optional comma-separated source URLs}" — .claude/commands/research.md:24)
- Web search and fetch data ("Check existing knowledge, fetch URLs, perform web searches" — .claude/commands/research.md:47)
- GitHub issues, comments, PR context via github skill scripts ("Use the github skill scripts" — .claude/commands/research.md:62)

## Outputs — required
- Analysis document ("Write 3000-5000 word analysis to" — .claude/commands/research.md:48; "Analysis document" — .claude/commands/research.md:77)
- Serena memory ("Create Serena memory + 5-10 atomic Forgetful memories" — .claude/commands/research.md:50; "Serena memory" — .claude/commands/research.md:78)
- Forgetful memories ("5-10 atomic memories in knowledge graph" — .claude/commands/research.md:79)
- GitHub issue created via new_issue.py ("Create GitHub issue if implementation work identified, via" — .claude/commands/research.md:51)

## Invokes — required
- script new_issue.py — .claude/commands/research.md:51
- script get_issue_context.py — .claude/commands/research.md:62
- script get_issue_comments.py — .claude/commands/research.md:62
- script get_pr_context.py — .claude/commands/research.md:62
- script get_pr_review_comments.py — .claude/commands/research.md:62
- script get_pr_review_threads.py — .claude/commands/research.md:62
- skill research-and-incorporate — .claude/commands/research.md:84

## Invoked by — required
- doc CONTRIBUTING.md — CONTRIBUTING.md:364

## Concepts named — required, verbatim
- `Research and Incorporate Command` — .claude/commands/research.md:11 — defined here
- `ultrathink` — .claude/commands/research.md:13 — used here
- `Research Phase` — .claude/commands/research.md:47 — defined here
- `Analysis Phase` — .claude/commands/research.md:48 — defined here
- `Applicability Phase` — .claude/commands/research.md:49 — defined here
- `Memory Phase` — .claude/commands/research.md:50 — defined here
- `Action Phase` — .claude/commands/research.md:51 — defined here
- `Fallback Rules` — .claude/commands/research.md:57 — defined here
- `Stop Conditions` — .claude/commands/research.md:65 — defined here

## Structure
- # Research and Incorporate Command — .claude/commands/research.md:11
- ## Usage — .claude/commands/research.md:17
- ## Parameters — .claude/commands/research.md:27
- ## Example — .claude/commands/research.md:35
- ## What This Does — .claude/commands/research.md:45
- ## Budget — .claude/commands/research.md:53
- ## Fallback Rules — .claude/commands/research.md:57
- ## Stop Conditions — .claude/commands/research.md:65
- ## Output — .claude/commands/research.md:73
- ## Related — .claude/commands/research.md:82

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · .claude/commands/research.md:85 · References memory skill as `/memory-search` command, but memory commands were migrated to skills.

## Observations
- Pinned to model `opus` in frontmatter.
- Bounded by a 50k output-token budget with graceful degradation rules across phases.
- Routes github.com URLs to local python scripts rather than WebFetch to bypass tool denial hooks.

## Context cost
4,350 bytes. Approximately 1,100 tokens.
