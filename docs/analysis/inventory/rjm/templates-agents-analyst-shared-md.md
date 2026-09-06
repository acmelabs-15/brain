---
package: rjm
path: templates/agents/analyst.shared.md
type: agent
bytes: 13633
unit: inv-rjm-313
in_scope_via: templates/AGENTS.md
aliases: []
memo_inputs:
  - {path: templates/agents/analyst.shared.md, sha256: 6b9742aa1f6e82b0e80d0c3b8897141c9d34f4be457de5c043c6b61a6175743a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/analyst.shared.md

## Purpose — required, verbatim
> "You investigate before implementation. Surface root causes, unknowns, and dependencies. Deliver structured findings with evidence. Never modify production code." — templates/agents/analyst.shared.md:51

## Design intent — required
Defines the shared, cross-platform prompt and behavioral contract for the `analyst` agent, serving as a read-only research and root-cause investigation specialist across VS Code Copilot Chat and GitHub Copilot CLI. The analyst surfaces root causes, verifies claims against codebase files and documentation via strict evidence tiers (Level 1 Grep to Level 4 unpublishable training memory), bounds findings volume (maximum 7 findings, top 3 hypotheses, maximum 7-step investigation plan), and maintains a hard untrusted-content security boundary against prompt injection. Without this agent template, multi-agent workflows would jump prematurely into coding without verified evidence or root-cause understanding, resulting in faulty assumptions, broad blast radiuses, and unconstrained context bloat.

## Phase — required
rjm:spec

## Inputs — required
- Investigation topic, bug report, issue description, or PR URL via argument prompt (`argument-hint: Describe the topic, issue, or feature to research` — templates/agents/analyst.shared.md:4)
- Problem framing, incident symptoms, or research questions (templates/agents/analyst.shared.md:86-92)
- Codebase files via read-only tools: `read`, `search` (templates/agents/analyst.shared.md:6-7, 27-28, 123)
- GitHub repository data via declared read tools: `github/issue_read`, `github/pull_request_read`, `github/get_file_contents`, `github/list_commits`, `github/list_workflow_runs`, `github/get_workflow_run`, `github/get_job_logs` (templates/agents/analyst.shared.md:8-14, 29-35, 137-142)
- Documentation and knowledge tools: `cognitionai/deepwiki/*`, `context7/*`, `serena/find_symbol`, `serena/find_referencing_symbols`, `serena/find_implementations`, `serena/get_symbols_overview`, `serena/get_diagnostics_for_file`, `serena/find_declaration`, `serena/list_memories`, `serena/read_memory`, `serena/initial_instructions` (templates/agents/analyst.shared.md:15-25, 36-46, 125-127)
- External command execution, builds, git operations, and test logs supplied by the orchestrator (templates/agents/analyst.shared.md:148-152, 192-196)

## Outputs — required
- Structured investigation findings in response text: Problem Framing (1-3 sentences), Hypotheses (top 3 ranked), Evidence, Findings (at most 7 items with file:line pointers), Root Cause (5 Whys trace), Recommendation, and Open Questions (templates/agents/analyst.shared.md:250-277)
- Confidence level assessment (`HIGH/MEDIUM/LOW`) with reasoning (templates/agents/analyst.shared.md:284)
- Recommended next steps for orchestrator routing (architect, milestone-planner, implementer, critic) (templates/agents/analyst.shared.md:285-289)
- Missing context error alerts (`[BLOCKED] Missing context required for analysis`) when load-bearing evidence is unavailable (templates/agents/analyst.shared.md:198-212)

## Invokes — required
- reference prose-self-check — templates/agents/analyst.shared.md:56
- reference .serena/memories/cynefin-framework.md — templates/agents/analyst.shared.md:233
- agent architect — templates/agents/analyst.shared.md:286
- agent milestone-planner — templates/agents/analyst.shared.md:287
- agent implementer — templates/agents/analyst.shared.md:288
- agent critic — templates/agents/analyst.shared.md:289

## Invoked by — required
- template AGENTS.md — templates/AGENTS.md:90
- skill ai-agents-empirical-probe-toolkit — src/copilot-cli/skills/ai-agents-empirical-probe-toolkit/SKILL.md:90
- skill ai-agents-research-methodology — src/copilot-cli/skills/ai-agents-research-methodology/SKILL.md:74

## Concepts named — required, verbatim
- `prose-self-check` — templates/agents/analyst.shared.md:56 — used here
- `Analysis Reasoning Protocol` — templates/agents/analyst.shared.md:66 — defined here
- `Search before claiming` — templates/agents/analyst.shared.md:80 — defined here
- `Occam's razor` — templates/agents/analyst.shared.md:76 — used here
- `When to Produce vs When to Ask` — templates/agents/analyst.shared.md:84 — defined here
- `Investigation Methodology` — templates/agents/analyst.shared.md:93 — defined here
- `5 Whys` — templates/agents/analyst.shared.md:101 — used here
- `Hypothesis Ranking` — templates/agents/analyst.shared.md:107 — defined here
- `GitHub URL routing` — templates/agents/analyst.shared.md:133 — defined here
- `Command routing` — templates/agents/analyst.shared.md:148 — defined here
- `PR identity gate` — templates/agents/analyst.shared.md:154 — defined here
- `Untrusted-content boundary` — templates/agents/analyst.shared.md:173 — defined here
- `Context delegation contract` — templates/agents/analyst.shared.md:186 — defined here
- `Read-Only Constraint` — templates/agents/analyst.shared.md:214 — defined here
- `Decision Frameworks` — templates/agents/analyst.shared.md:221 — defined here
- `Cynefin` — templates/agents/analyst.shared.md:227 — used here
- `Rumsfeld Matrix` — templates/agents/analyst.shared.md:228 — used here
- `Wardley Mapping` — templates/agents/analyst.shared.md:229 — used here
- `Five Whys` — templates/agents/analyst.shared.md:230 — used here
- `CAP Theorem` — templates/agents/analyst.shared.md:231 — used here
- `Output Length Bounds` — templates/agents/analyst.shared.md:235 — defined here
- `Output Structure` — templates/agents/analyst.shared.md:247 — defined here
- `architect` — templates/agents/analyst.shared.md:286 — used here
- `milestone-planner` — templates/agents/analyst.shared.md:287 — used here
- `implementer` — templates/agents/analyst.shared.md:288 — used here
- `critic` — templates/agents/analyst.shared.md:289 — used here

## Structure
- # Analyst Agent — templates/agents/analyst.shared.md:49
- ## Prose Self-Check — templates/agents/analyst.shared.md:53
- ## Core Behavior — templates/agents/analyst.shared.md:60
- ## Analysis Reasoning Protocol — templates/agents/analyst.shared.md:66
- ## When to Produce vs When to Ask — templates/agents/analyst.shared.md:84
- ## Investigation Methodology — templates/agents/analyst.shared.md:93
- ## Hypothesis Ranking — templates/agents/analyst.shared.md:107
- ## Tools — templates/agents/analyst.shared.md:121
- ### Untrusted-content boundary — templates/agents/analyst.shared.md:173
- ### Context delegation contract — templates/agents/analyst.shared.md:186
- ## Read-Only Constraint — templates/agents/analyst.shared.md:214
- ## Decision Frameworks — templates/agents/analyst.shared.md:221
- ## Output Length Bounds — templates/agents/analyst.shared.md:235
- ## Output Structure — templates/agents/analyst.shared.md:247
- ## Handoff — templates/agents/analyst.shared.md:279

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · templates/agents/analyst.shared.md:233 · The referenced fallback file `.serena/memories/cynefin-framework.md` does not exist in `sources/rjm/.serena/memories/`.

## Observations
- Implements a four-tier evidence hierarchy (L1 Grep/Glob, L2 Read, L3 External docs via MCP, L4 Training knowledge) with an absolute prohibition on publishing Level 4 unverified assertions.
- Untrusted-content boundary enforces prompt injection defense by treating all tool outputs (GitHub, Context7, DeepWiki, Serena, file reads) as DATA, never instructions.
- Caps output size to maintain dense, actionable findings: maximum 7 findings (each 1 sentence with file:line), maximum 3 hypotheses, maximum 7 investigation steps.
- Forms VARIANT V27 with `.claude/agents/analyst.md` and V28 with `src/claude/analyst.md` (72% shared lines), replacing Claude Code MCP tool prefixes (`mcp__*`) with cross-platform tool definitions (`tools_vscode`, `tools_copilot`), generalizing doc lookup descriptions, and omitting Claude Code-specific degraded mode fallbacks.

## Context cost
13633 bytes. Approximately 3,400 tokens for the agent template itself. When transformed and loaded by a platform runner, adds ~1,000 tokens of tool definitions for the 20 declared VS Code / Copilot tools.
