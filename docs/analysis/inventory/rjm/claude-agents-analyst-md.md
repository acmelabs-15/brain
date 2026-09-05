---
package: rjm
path: .claude/agents/analyst.md
type: agent
bytes: 14835
unit: inv-rjm-64
in_scope_via: .claude/commands/build.md
aliases: []
memo_inputs:
  - {path: .claude/agents/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/analyst.md

## Purpose — required, verbatim
> "Research and investigation specialist who digs deep into root causes, surfaces unknowns, and gathers evidence before implementation. Methodical about documenting findings, evaluating feasibility, and identifying dependencies and risks. Use when you need clarity on patterns, impact assessment, requirements discovery, or hypothesis validation." — .claude/agents/analyst.md:3

## Design intent — required
Autonomous research and investigation specialist subagent designed to surface root causes, technical unknowns, risk assessments, and architectural dependencies before code implementation begins. By establishing strict evidence tiers (Level 1 Grep to Level 4 unpublishable training memory), bounding output volume (maximum 7 findings, top 3 hypotheses, maximum 7-step investigation plan), enforcing read-only constraints with no shell or write access, and providing systematic GitHub URL and PR identity routing to declared read-only MCP tools, the analyst prevents premature coding, hallucinations, and unverified assumptions from contaminating development lifecycles.

## Phase — required
cross-phase

## Inputs — required
- Research topic, bug report, issue description, or PR URL via argument prompt (`argument-hint: Describe the topic, issue, or feature to research` — .claude/agents/analyst.md:7)
- Codebase files via read-only tools: `Read`, `Glob`, `Grep` (.claude/agents/analyst.md:9-11)
- GitHub repository data via MCP tools: issues (`mcp__github__issue_read`), pull requests (`mcp__github__pull_request_read`), files (`mcp__github__get_file_contents`), commits (`mcp__github__list_commits`), workflow runs (`mcp__github__list_workflow_runs`, `mcp__github__get_workflow_run`), job logs (`mcp__github__get_job_logs`) (.claude/agents/analyst.md:12-18)
- Symbol definitions, referencing symbols, implementations, overview, diagnostics, declaration, memories via Serena MCP (`mcp__serena__*`) (.claude/agents/analyst.md:19-27)
- External library documentation via Context7 MCP (`mcp__context7__resolve_library_id`, `mcp__context7__get_library_docs`) (.claude/agents/analyst.md:28-29)
- Repository wiki structure and contents via DeepWiki MCP (`mcp__deepwiki__read_wiki_structure`, `mcp__deepwiki__read_wiki_contents`) (.claude/agents/analyst.md:30-31)
- Shell command outputs, git operations, builds, and test output supplied externally by orchestrator (.claude/agents/analyst.md:133-137, 180-184)

## Outputs — required
- Structured investigation findings in response text following the standard markdown template: Problem Framing (1-3 sentences), Hypotheses (top 3 ranked), Evidence, Findings (at most 7 items with file:line pointers), Root Cause (5 Whys trace), Recommendation, and Open Questions (.claude/agents/analyst.md:258-286)
- Confidence level assessment (`HIGH/MEDIUM/LOW`) with reasoning (.claude/agents/analyst.md:293)
- Recommended next steps for orchestrator routing (architect, milestone-planner, implementer, critic) (.claude/agents/analyst.md:294-298)
- Missing context error alerts (`[BLOCKED] Missing context required for analysis`) when load-bearing evidence is unavailable (.claude/agents/analyst.md:186-200)

## Invokes — required
- agent architect — .claude/agents/analyst.md:295
- agent milestone-planner — .claude/agents/analyst.md:296
- agent implementer — .claude/agents/analyst.md:297
- agent critic — .claude/agents/analyst.md:298

## Invoked by — required
- command analyst — .claude/commands/plan.md:24
- command analyst — .claude/commands/build.md:28
- command analyst — .claude/commands/test.md:58
- skill analyst — .claude/skills/review/SKILL.md:76
- doc analyst — .agents/AGENT-SYSTEM.md:34
- doc analyst — .claude/agents/AGENTS.md:219

## Concepts named — required, verbatim
- `prose-self-check` — .claude/agents/analyst.md:41 — used here
- `Analysis Reasoning Protocol` — .claude/agents/analyst.md:51 — defined here
- `Search before claiming` — .claude/agents/analyst.md:65 — defined here
- `Investigation Methodology` — .claude/agents/analyst.md:78 — defined here
- `5 Whys` — .claude/agents/analyst.md:86 — used here
- `Hypothesis Ranking` — .claude/agents/analyst.md:92 — defined here
- `Occam's razor` — .claude/agents/analyst.md:100 — used here
- `PR identity gate` — .claude/agents/analyst.md:139 — defined here
- `Untrusted-content boundary` — .claude/agents/analyst.md:158 — defined here
- `Context delegation contract` — .claude/agents/analyst.md:172 — defined here
- `Degraded Mode Protocol` — .claude/agents/analyst.md:202 — defined here
- `Cynefin` — .claude/agents/analyst.md:236 — used here
- `Rumsfeld Matrix` — .claude/agents/analyst.md:237 — used here
- `Wardley Mapping` — .claude/agents/analyst.md:238 — used here
- `Five Whys` — .claude/agents/analyst.md:239 — used here
- `CAP Theorem` — .claude/agents/analyst.md:240 — used here
- `Output Length Bounds` — .claude/agents/analyst.md:244 — defined here

## Structure
- # Analyst Agent — .claude/agents/analyst.md:34
- ## Prose Self-Check — .claude/agents/analyst.md:38
- ## Core Behavior — .claude/agents/analyst.md:45
- ## Analysis Reasoning Protocol — .claude/agents/analyst.md:51
- ## When to Produce vs When to Ask — .claude/agents/analyst.md:69
- ## Investigation Methodology — .claude/agents/analyst.md:78
- ## Hypothesis Ranking — .claude/agents/analyst.md:92
- ## Tools — .claude/agents/analyst.md:106
- ### Untrusted-content boundary — .claude/agents/analyst.md:158
- ### Context delegation contract — .claude/agents/analyst.md:172
- ## Degraded Mode Protocol — .claude/agents/analyst.md:202
- ## Read-Only Constraint — .claude/agents/analyst.md:223
- ## Decision Frameworks — .claude/agents/analyst.md:230
- ## Output Length Bounds — .claude/agents/analyst.md:244
- ## Output Structure — .claude/agents/analyst.md:256
- ## Handoff — .claude/agents/analyst.md:288

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/agents/analyst.md:242 · The fallback reference file `.serena/memories/cynefin-framework.md` does not exist in `sources/rjm/.serena/memories/`.

## Observations
- Strong epistemic governance: enforces four evidence levels (Level 1 Grep to Level 4 training memory) and strictly forbids publishing Level 4 guesses.
- Security-minded data boundary: treats all tool-returned data (from GitHub, Context7, DeepWiki, Serena, Read) as DATA rather than system instructions to resist prompt injection.
- Dense output bounds: explicitly caps findings at 7 items, hypotheses at 3, and investigation steps at 7 to prevent context bloat.
- Has identical byte content to `src/claude/analyst.md` (14,835 bytes, SHA256 `89ee6f3da12d5954`), recorded in duplication ledger EXACT row 3.
- Forms VARIANT pair V27 with `templates/agents/analyst.shared.md` (72% shared lines), differing primarily in tool namespace mapping (Claude Code MCP naming vs VS Code / Copilot toolsets) and Claude-specific degraded mode handling.

## Context cost
14835 bytes. Approximately 3,700 tokens for the agent definition itself, plus ~1,500 tokens for 22 declared MCP tools when loaded into context.
