---
package: rjm
path: .claude/skills/agent-harness-reference/SKILL.md
type: skill
bytes: 20398
unit: inv-rjm-79
in_scope_via: .claude/commands/build.md
aliases: []
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/SKILL.md, sha256: 14891e17feb0fc88842a48f8d44b570badb38861a40292484adeb6854d22f372}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/agent-harness-reference/SKILL.md

## Purpose — required, verbatim
> "Use this reference before changing a hook, dispatcher, generator, hook config, or runtime test. Do not repeat web research unless the refresh rules below say the recorded contract is stale." — .claude/skills/agent-harness-reference/SKILL.md:10-12

## Design intent — required
Operational policy authority and coordinating skill governing Claude Code and GitHub Copilot CLI agent harness contracts. It bridges official vendor specifications (`references/official-hook-contracts.md`) and version-scoped runtime probe records (`references/probe-evidence.md`) with repository architectural decisions (ADR-068, ADR-071, ADR-097). It establishes exact rules for hook triggers, authority hierarchy, repository loading surfaces (canonical `.claude/` vs generated `src/copilot-cli/`), event policies, exit code handling (ADR-035 exemption for Claude hooks), adapter and dispatcher behaviors, plugin-root path resolution (`${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT}}`), fail-open vs fail-closed recovery policies for launcher commands, and a strict 17-item pre-change verification checklist. Without it, developers and automated subagents modifying cross-harness hooks would lack clear ownership of harness facts, risk catastrophic session wedging (such as stale plugin root `Errno 2` failures denying all tool calls), and re-introduce historical bugs in payload casing or timeout handling.

## Phase — required
cross-phase

## Inputs — required
- Sidecar references: `references/official-hook-contracts.md` and `references/probe-evidence.md`.
- Architectural decision records: ADR-006, ADR-035, ADR-068 (`.agents/architecture/ADR-068-consolidated-hook-dispatcher.md`), ADR-071 (`.agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md`), ADR-085, ADR-097.
- Repository configuration files: `.claude/settings.json`, `.claude/hooks/hooks.json`, `src/copilot-cli/hooks/hooks.json`.
- Historical retrospectives and issue reports: #2050, #2205, #2290, #2295, #3068, #3218, #3321, #3332, #4672, #4763, #4764, #4825, #5085, #5154.
- Serena knowledge graph memories.

## Outputs — required
none

## Invokes — required
- reference references/official-hook-contracts.md — .claude/skills/agent-harness-reference/SKILL.md:24
- reference references/probe-evidence.md — .claude/skills/agent-harness-reference/SKILL.md:25
- reference .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md — .claude/skills/agent-harness-reference/SKILL.md:347
- reference .agents/architecture/ADR-068-consolidated-hook-dispatcher.md — .claude/skills/agent-harness-reference/SKILL.md:348
- skill ai-agents-portability-campaign — .claude/skills/agent-harness-reference/SKILL.md:357
- skill ai-agents-empirical-probe-toolkit — .claude/skills/agent-harness-reference/SKILL.md:358
- skill ai-agents-generation-and-release — .claude/skills/agent-harness-reference/SKILL.md:359

## Invoked by — required
- command .claude/commands/build.md — .claude/commands/build.md:19
- command .claude/commands/test.md — .claude/commands/test.md:18
- skill .claude/skills/ai-agents-portability-campaign/SKILL.md — .claude/skills/ai-agents-portability-campaign/SKILL.md:31
- skill .claude/skills/autoplan/SKILL.md — .claude/skills/autoplan/SKILL.md:125
- skill .claude/skills/ai-agents-architecture-contract/SKILL.md — .claude/skills/ai-agents-architecture-contract/SKILL.md:87
- skill .claude/skills/ai-agents-debugging-playbook/SKILL.md — .claude/skills/ai-agents-debugging-playbook/SKILL.md:31
- doc .claude/skills/CLAUDE.md — .claude/skills/CLAUDE.md:7
- doc .claude/agents/AGENTS.md — .claude/agents/AGENTS.md:10
- doc .claude/rules/generated-artifacts.md — .claude/rules/generated-artifacts.md:61

## Concepts named — required, verbatim
- `Agent Harness Reference` — .claude/skills/agent-harness-reference/SKILL.md:8 — defined here
- `Triggers` — .claude/skills/agent-harness-reference/SKILL.md:14 — defined here
- `Authority Order` — .claude/skills/agent-harness-reference/SKILL.md:31 — defined here
- `DOCS SILENT` — .claude/skills/agent-harness-reference/SKILL.md:29 — defined here
- `Repository Loading Surfaces` — .claude/skills/agent-harness-reference/SKILL.md:43 — defined here
- `When to Refresh` — .claude/skills/agent-harness-reference/SKILL.md:69 — defined here
- `GitHub Copilot CLI Contract` — .claude/skills/agent-harness-reference/SKILL.md:82 — defined here
- `Shipped registrations` — .claude/skills/agent-harness-reference/SKILL.md:100 — defined here
- `Event policy` — .claude/skills/agent-harness-reference/SKILL.md:117 — defined here
- `Adapter behavior` — .claude/skills/agent-harness-reference/SKILL.md:149 — defined here
- `Copilot Plugin Runtime Fields` — .claude/skills/agent-harness-reference/SKILL.md:175 — defined here
- `Stale plugin root wedges a running session` — .claude/skills/agent-harness-reference/SKILL.md:194 — defined here
- `Claude Code Delta` — .claude/skills/agent-harness-reference/SKILL.md:261 — defined here
- `Verification` — .claude/skills/agent-harness-reference/SKILL.md:278 — defined here
- `Anti-Patterns` — .claude/skills/agent-harness-reference/SKILL.md:309 — defined here
- `Extension Points` — .claude/skills/agent-harness-reference/SKILL.md:316 — defined here
- `Provenance and Maintenance` — .claude/skills/agent-harness-reference/SKILL.md:322 — defined here
- `Vendored Use` — .claude/skills/agent-harness-reference/SKILL.md:336 — defined here

## Structure
- Agent Harness Reference — .claude/skills/agent-harness-reference/SKILL.md:8
- Triggers — .claude/skills/agent-harness-reference/SKILL.md:14
- Process — .claude/skills/agent-harness-reference/SKILL.md:22
- Authority Order — .claude/skills/agent-harness-reference/SKILL.md:31
- Repository Loading Surfaces — .claude/skills/agent-harness-reference/SKILL.md:43
- When to Refresh — .claude/skills/agent-harness-reference/SKILL.md:69
- GitHub Copilot CLI Contract — .claude/skills/agent-harness-reference/SKILL.md:82
- Shipped registrations — .claude/skills/agent-harness-reference/SKILL.md:100
- Event policy — .claude/skills/agent-harness-reference/SKILL.md:117
- Adapter behavior — .claude/skills/agent-harness-reference/SKILL.md:149
- Copilot Plugin Runtime Fields — .claude/skills/agent-harness-reference/SKILL.md:175
- Stale plugin root wedges a running session — .claude/skills/agent-harness-reference/SKILL.md:194
- Claude Code Delta — .claude/skills/agent-harness-reference/SKILL.md:261
- Verification — .claude/skills/agent-harness-reference/SKILL.md:278
- Anti-Patterns — .claude/skills/agent-harness-reference/SKILL.md:309
- Extension Points — .claude/skills/agent-harness-reference/SKILL.md:316
- Provenance and Maintenance — .claude/skills/agent-harness-reference/SKILL.md:322
- Vendored Use — .claude/skills/agent-harness-reference/SKILL.md:336
- Related — .claude/skills/agent-harness-reference/SKILL.md:345

## Scripts
none

## Defects — required
- doc-drift · .claude/skills/agent-harness-reference/SKILL.md:65 · cites hook file .claude/hooks/SessionStart/invoke_context_loader.py which was modified/retired under ADR-097, noting invoke_observation_sync.py citation was retired.
- doc-drift · .claude/skills/agent-harness-reference/SKILL.md:223 · notes that previous advice in lines 212-221 forbidding launcher existence checks was superseded by issue #4672 requiring fail-open-with-warning launcher checks.

## Observations
- Tracks evolution of hook architecture: ADR-097 retired all 4 hooks in vendored `.claude/hooks/hooks.json` and deleted `_dispatch.py` in `src/copilot-cli/hooks/hooks.json`, leaving 0 vendored registrations while maintaining 7 local development registrations in `.claude/settings.json`.
- Crucial resilience insight in issue #4672: failing closed on infrastructure errors (missing Python, stale plugin root) causes 100% protection loss because users uninstall the broken plugin; degrade-and-warn fail-open yields strictly higher expected security.
- Explicitly separates per-turn `Stop` behavior from process-lifecycle `SessionEnd` events, preventing inappropriate aliasing across harnesses.

## Context cost
20398 bytes, ~5,100 tokens. When invoked with its sidecars: ~48,286 bytes (~12,100 tokens).
