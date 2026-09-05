---
package: rjm
path: .claude/skills/agent-harness-reference/references/probe-evidence.md
type: reference
bytes: 12226
unit: inv-rjm-79
in_scope_via: .claude/commands/build.md
aliases: []
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/references/probe-evidence.md, sha256: 4f51c58a5c559556cf9521e7d4887e065d7557204a3ab1ecd981b4fa923e0284}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/agent-harness-reference/references/probe-evidence.md

## Purpose — required, verbatim
> "This file records version-scoped runtime observations. Official behavior belongs in `official-hook-contracts.md`. Keep a probe here when the docs are silent, when runtime behavior contradicted the docs, or when a negative control proves a repository decision is load-bearing." — .claude/skills/agent-harness-reference/references/probe-evidence.md:7-10

## Design intent — required
Empirical grounding and experimental verification record behind the agent harness hook contracts for GitHub Copilot CLI and Claude Code. While `official-hook-contracts.md` records vendor-stated behavior, this document preserves version-scoped probe methodologies, test configurations, observations, and negative controls for behaviors where vendor documentation was silent, ambiguous, or directly contradicted by runtime reality (such as plugin root resolution, foreign-cwd behavior, native camelCase vs PascalCase payload structures, host process SIGTERM/kill timeouts, permission surface enumeration, auto-update interception, and script identity verification). Without it, developers and automated agents would have no empirical evidence to distinguish deliberate runtime workarounds from obsolete code, risking regressions when modifying dispatchers, launchers, and cross-harness adapters.

## Phase — required
cross-phase

## Inputs — required
- Isolated test installations and runtime execution environments of GitHub Copilot CLI (versions 1.0.57, 1.0.58, 1.0.72-1, 1.0.73, 1.0.74-0, 1.0.79-6) and Claude Code (versions 2.1.159, 2.1.217, 2.1.223).
- Test probe scripts and plugins (`tests/e2e/copilot_hook_probe.py`, `tests/e2e/test_plugin_load_smoke.py`, `tests/test_nightly_cli_smoke_security.py`, `tests/build_scripts/test_generate_hooks_runtime_contract.py`, `tests/hooks/test_dispatch_groups_parity.py`).
- CLI command executions and options: `copilot --version`, `copilot help permissions`, `copilot help config`, `copilot --no-auto-update`, `claude --version`.
- Issue investigation records and incident retrospectives (#2205, #2290, #2295, #4764, #4825, #5154, ADR-085).

## Outputs — required
none

## Invokes — required
- reference official-hook-contracts.md — .claude/skills/agent-harness-reference/references/probe-evidence.md:8
- skill ai-agents-empirical-probe-toolkit — .claude/skills/agent-harness-reference/references/probe-evidence.md:319

## Invoked by — required
- skill agent-harness-reference — .claude/skills/agent-harness-reference/SKILL.md:25
- skill ai-agents-portability-campaign — .claude/skills/ai-agents-portability-campaign/SKILL.md:33
- reference .claude/skills/agent-harness-reference/references/official-hook-contracts.md — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:81

## Concepts named — required, verbatim
- `Plugin root and cwd` — .claude/skills/agent-harness-reference/references/probe-evidence.md:12 — defined here
- `Payload casing` — .claude/skills/agent-harness-reference/references/probe-evidence.md:45 — defined here
- `Historical timeout and kill evidence` — .claude/skills/agent-harness-reference/references/probe-evidence.md:70 — defined here
- `Copilot CLI 1.0.72-1 contract correction` — .claude/skills/agent-harness-reference/references/probe-evidence.md:88 — defined here
- `Copilot CLI 1.0.72-1 permission-surface inventory` — .claude/skills/agent-harness-reference/references/probe-evidence.md:142 — defined here
- `Pinned-package runtime verification and Copilot auto-update` — .claude/skills/agent-harness-reference/references/probe-evidence.md:174 — defined here
- `Python command permission and script identity` — .claude/skills/agent-harness-reference/references/probe-evidence.md:215 — defined here
- `Relevance before policy on the plugin-wide Bash matcher` — .claude/skills/agent-harness-reference/references/probe-evidence.md:274 — defined here
- `Re-running a probe` — .claude/skills/agent-harness-reference/references/probe-evidence.md:317 — defined here

## Structure
- Probe Evidence Behind the Hook Contract — .claude/skills/agent-harness-reference/references/probe-evidence.md:3
- 1. Plugin root and cwd — .claude/skills/agent-harness-reference/references/probe-evidence.md:12
- 2. Payload casing — .claude/skills/agent-harness-reference/references/probe-evidence.md:45
- 3. Historical timeout and kill evidence — .claude/skills/agent-harness-reference/references/probe-evidence.md:70
- 4. Copilot CLI 1.0.72-1 contract correction — .claude/skills/agent-harness-reference/references/probe-evidence.md:88
- 5. Copilot CLI 1.0.72-1 permission-surface inventory — .claude/skills/agent-harness-reference/references/probe-evidence.md:142
- 6. Pinned-package runtime verification and Copilot auto-update — .claude/skills/agent-harness-reference/references/probe-evidence.md:174
- 7. Python command permission and script identity — .claude/skills/agent-harness-reference/references/probe-evidence.md:215
- 7a. Relevance before policy on the plugin-wide Bash matcher — .claude/skills/agent-harness-reference/references/probe-evidence.md:274
- 8. Re-running a probe — .claude/skills/agent-harness-reference/references/probe-evidence.md:317

## Scripts
none

## Defects — required
- doc-drift · .claude/skills/agent-harness-reference/references/probe-evidence.md:110 · Copilot CLI documentation states general-purpose agent emits no subagentStop, but empirical probe observed PascalCase SubagentStop firing.
- doc-drift · .claude/skills/agent-harness-reference/references/probe-evidence.md:138 · manual /compact command did not trigger PreCompact hook or write a checkpoint.
- missing-path · .claude/skills/agent-harness-reference/references/probe-evidence.md:272 · test file tests/hooks/test_push_pr_script_identity_guard.py was split into per-area files and no longer exists under that path.

## Observations
- Section 6 identifies that npm installing `@github/copilot@1.0.73` does not pin the binary because Copilot CLI automatically auto-updates at startup to `1.0.74-0` unless `--no-auto-update` is passed, requiring all smoke commands to use a helper that injects the flag.
- Section 2 observes that native camelCase registrations produce JSON string arguments (`toolArgs`), whereas PascalCase registrations produce parsed JSON objects (`tool_input`), justifying PascalCase compatibility registrations for Claude scripts.
- Section 7 and 7a document a retired identity guard (removed in issue #5154 / ADR-085 Decision 8) and preserve the negative control evidence of why a bare `Bash` matcher without a scope/relevance gate denied unrelated commands (15 of 22).

## Context cost
12226 bytes, ~3,100 tokens.
