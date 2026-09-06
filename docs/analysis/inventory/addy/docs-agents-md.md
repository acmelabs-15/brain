---
package: addy
path: docs/agents.md
type: doc
bytes: 6996
unit: inv-addy-4
aliases: []
memo_inputs:
  - {path: docs/agents.md, sha256: e03481592a725146ed48ee22010086dcfebd1faf1373cb99e7f2ed4d2100275c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# docs/agents.md

## Purpose — required, verbatim
> "Specialist personas that play a single role with a single perspective. Each persona is a Markdown file consumed as a system prompt by your harness (Claude Code, Cursor, Copilot, etc.)." — docs/agents.md:3

## Design intent — required
Defines the architectural model for specialist agent personas and their relationship to skills and commands. Establishes a three-tier layered separation: skills define the "how" (workflows), personas define the "who" (roles and perspectives), and commands define the "when" (entry points and orchestration). Explicitly bans personas invoking other personas and rejects meta-orchestrators in favor of flat fan-out or user-driven sequential execution.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- agent code-reviewer — docs/agents.md:7
- agent security-auditor — docs/agents.md:8
- agent test-engineer — docs/agents.md:9
- agent web-performance-auditor — docs/agents.md:10
- skill code-review-and-quality — docs/agents.md:18
- command /review — docs/agents.md:20
- command /ship — docs/agents.md:20
- command /test — docs/agents.md:38
- command /webperf — docs/agents.md:39
- reference orchestration-patterns — docs/agents.md:46

## Invoked by — required
- doc README.md — README.md:297
- agent agents/code-reviewer.md — agents/code-reviewer.md:102
- agent agents/security-auditor.md — agents/security-auditor.md:112
- agent agents/test-engineer.md — agents/test-engineer.md:95
- agent agents/web-performance-auditor.md — agents/web-performance-auditor.md:184

## Concepts named — required, verbatim
- `code-reviewer` — docs/agents.md:7, 19 — defined here
- `security-auditor` — docs/agents.md:8 — defined here
- `test-engineer` — docs/agents.md:9 — defined here
- `web-performance-auditor` — docs/agents.md:10 — defined here
- `Five-axis review` — docs/agents.md:7 — used here
- `Core Web Vitals` — docs/agents.md:10, 32 — used here
- `Prove-It pattern` — docs/agents.md:9 — used here
- `Skill` — docs/agents.md:18 — defined here
- `Persona` — docs/agents.md:19 — defined here
- `Command` — docs/agents.md:20 — defined here
- `fan-out` — docs/agents.md:41, 60 — defined here
- `orchestration-patterns` — docs/agents.md:46 — used here
- `meta-orchestrator` — docs/agents.md:81 — defined here
- `Claude Code subagents` — docs/agents.md:108 — used here
- `Agent Teams` — docs/agents.md:108, 111 — used here

## Structure
- `# Agent Personas` — docs/agents.md:1
- `## How personas relate to skills and commands` — docs/agents.md:12
- `## When to use each` — docs/agents.md:24
- `### Direct persona invocation` — docs/agents.md:26
- `### Slash command (single persona behind it)` — docs/agents.md:34
- `### Slash command (orchestrator — fan-out)` — docs/agents.md:41
- `## Decision matrix` — docs/agents.md:48
- `## Worked example: valid orchestration` — docs/agents.md:58
- `## Worked example: invalid orchestration (do not build this)` — docs/agents.md:79
- `## Rules for personas` — docs/agents.md:99
- `## Claude Code interop` — docs/agents.md:106
- `## Adding a new persona` — docs/agents.md:117

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents interoperability with Claude Code subagents and experimental Claude Code Agent Teams (`CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`), where persona text is appended to the teammate system prompt rather than replacing it. Notes platform constraint that plugin agents do not support `hooks`, `mcpServers`, or `permissionMode` frontmatter fields.

## Context cost
6996 bytes, approximately 1750 tokens.
