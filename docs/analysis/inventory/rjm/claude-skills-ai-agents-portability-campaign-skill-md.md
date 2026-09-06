---
package: rjm
path: .claude/skills/ai-agents-portability-campaign/SKILL.md
type: skill
bytes: 12707
unit: inv-rjm-85
in_scope_via: .claude/commands/build.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-portability-campaign/SKILL.md, sha256: 826dba704e99870bb0d7c622006959840c8d96ac45eb540b94b5eb9e1f6ffae9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-portability-campaign/SKILL.md

## Purpose — required, verbatim
> "Execute cross-harness hook changes for Claude Code and GitHub Copilot CLI using the settled official contract, versioned probes, generators, and runtime tests." — .claude/skills/ai-agents-portability-campaign/SKILL.md:3

## Design intent — required
Establishes a rigorous, 7-phase methodology for implementing, testing, and verifying cross-harness hook changes across Claude Code and GitHub Copilot CLI. It bridges the gap between hook specifications (defined in `agent-harness-reference`) and mirror generation (owned by `ai-agents-generation-and-release`), enforcing strict architectural invariants: single-document output parsing in Copilot CLI, asymmetric translation of permissions (`approve` → `allow`, `ask` → empty stdout), preserving `Stop` and `SubagentStop` as direct registrations rather than merged observers, isolating real-CLI smoke tests from live user configuration (`~/.copilot`), and mandating negative controls for all runtime contract tests. Without it, cross-harness modifications would frequently cause silent hook failures, invalid JSON concatenation, or security vulnerabilities such as failing open or misclassifying per-turn stops as process termination.

## Phase — required
cross-phase

## Inputs — required
- Hook contracts and probe specifications: `.claude/skills/agent-harness-reference/SKILL.md`, `.claude/skills/agent-harness-reference/references/official-hook-contracts.md`, and `.claude/skills/agent-harness-reference/references/probe-evidence.md`.
- Architectural design records: `.agents/architecture/ADR-068-consolidated-hook-dispatcher.md`, `.agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md`, and `.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md`.
- Canonical hook definitions and configuration files: `.claude/rules/generated-artifacts.md`, `.claude/hooks/**`, `.claude/settings.json`, `.claude/hooks/hooks.json`, `templates/platforms/copilot-cli.yaml`, and `.claude/lib/hook_dispatch.py`.
- Hook generator scripts: `build/scripts/generate_hooks*.py` and `build/scripts/generate_dispatcher.py`.

## Outputs — required
- Modified canonical hook scripts and registration configurations in `.claude/hooks/` and `.claude/settings.json`.
- Generated Copilot hook artifacts: `src/copilot-cli/hooks/` (with single PreToolUse and PostToolUse active dispatchers) and `src/copilot-cli/hooks/hooks.json`.
- Test suites: unit, contract, and e2e tests in `tests/build_scripts/test_generate_dispatcher.py`, `tests/build_scripts/test_generate_hooks.py`, `tests/test_hook_dispatch.py`, `tests/build_scripts/test_hook_contract_knowledge.py`, `tests/e2e/test_cli_hook_e2e.py`, and `tests/e2e/test_plugin_load_smoke.py`.
- Empirical probe results and updated sidecars when contract drift is detected.

## Invokes — required
- skill agent-harness-reference — .claude/skills/ai-agents-portability-campaign/SKILL.md:13
- skill ai-agents-empirical-probe-toolkit — .claude/skills/ai-agents-portability-campaign/SKILL.md:14
- skill ai-agents-generation-and-release — .claude/skills/ai-agents-portability-campaign/SKILL.md:15
- reference official-hook-contracts — .claude/skills/ai-agents-portability-campaign/SKILL.md:32
- reference probe-evidence — .claude/skills/ai-agents-portability-campaign/SKILL.md:33
- doc ADR-068-consolidated-hook-dispatcher — .claude/skills/ai-agents-portability-campaign/SKILL.md:34
- doc ADR-071-plugin-hook-runtime-contract-verification — .claude/skills/ai-agents-portability-campaign/SKILL.md:35
- doc generated-artifacts — .claude/skills/ai-agents-portability-campaign/SKILL.md:36
- skill adr-review — .claude/skills/ai-agents-portability-campaign/SKILL.md:278

## Invoked by — required
- command build — .claude/commands/build.md:21
- command test — .claude/commands/test.md:20
- skill autoplan — .claude/skills/autoplan/SKILL.md:126
- skill agent-harness-reference — .claude/skills/agent-harness-reference/SKILL.md:357
- skill ai-agents-empirical-probe-toolkit — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:3
- skill ai-agents-failure-archaeology — .claude/skills/ai-agents-failure-archaeology/SKILL.md:173
- skill ai-agents-research-frontier — .claude/skills/ai-agents-research-frontier/SKILL.md:15
- doc generated-artifacts — .claude/rules/generated-artifacts.md:231
- doc CLAUDE — .claude/skills/CLAUDE.md:8
- agent AGENTS — .claude/agents/AGENTS.md:12

## Concepts named — required, verbatim
- `ai-agents-portability-campaign` — .claude/skills/ai-agents-portability-campaign/SKILL.md:2 — defined here
- `Phase 0: Load the Settled Contract` — .claude/skills/ai-agents-portability-campaign/SKILL.md:27 — defined here
- `PascalCase` — .claude/skills/ai-agents-portability-campaign/SKILL.md:45 — used here
- `snake_case` — .claude/skills/ai-agents-portability-campaign/SKILL.md:45 — used here
- `Stop` — .claude/skills/ai-agents-portability-campaign/SKILL.md:46 — used here
- `SessionEnd` — .claude/skills/ai-agents-portability-campaign/SKILL.md:46 — used here
- `PreCompact` — .claude/skills/ai-agents-portability-campaign/SKILL.md:47 — used here
- `Matcher` — .claude/skills/ai-agents-portability-campaign/SKILL.md:48 — used here
- `PreToolUse` — .claude/skills/ai-agents-portability-campaign/SKILL.md:49 — used here
- `permissionDecision` — .claude/skills/ai-agents-portability-campaign/SKILL.md:49 — used here
- `PermissionRequest` — .claude/skills/ai-agents-portability-campaign/SKILL.md:50 — used here
- `Observer output` — .claude/skills/ai-agents-portability-campaign/SKILL.md:51 — used here
- `PostToolUse` — .claude/skills/ai-agents-portability-campaign/SKILL.md:51 — used here
- `additionalContext` — .claude/skills/ai-agents-portability-campaign/SKILL.md:51 — used here
- `SessionStart` — .claude/skills/ai-agents-portability-campaign/SKILL.md:51 — used here
- `UserPromptSubmit` — .claude/skills/ai-agents-portability-campaign/SKILL.md:51 — used here
- `Phase 1: Classify the Source Hook` — .claude/skills/ai-agents-portability-campaign/SKILL.md:55 — defined here
- `SubagentStop` — .claude/skills/ai-agents-portability-campaign/SKILL.md:78 — used here
- `PostToolUseFailure` — .claude/skills/ai-agents-portability-campaign/SKILL.md:80 — used here
- `modifiedResult` — .claude/skills/ai-agents-portability-campaign/SKILL.md:84 — used here
- `Phase 2: Change Canonical Sources` — .claude/skills/ai-agents-portability-campaign/SKILL.md:97 — defined here
- `Phase 3: Test Before Generation` — .claude/skills/ai-agents-portability-campaign/SKILL.md:145 — defined here
- `negative control` — .claude/skills/ai-agents-portability-campaign/SKILL.md:164 — used here
- `Phase 4: Regenerate All Mirrors` — .claude/skills/ai-agents-portability-campaign/SKILL.md:167 — defined here
- `Phase 5: Test Shipped Artifacts` — .claude/skills/ai-agents-portability-campaign/SKILL.md:196 — defined here
- `Phase 6: Refresh Knowledge Only When Needed` — .claude/skills/ai-agents-portability-campaign/SKILL.md:215 — defined here
- `eventRemap` — .claude/skills/ai-agents-portability-campaign/SKILL.md:262 — used here

## Structure
- frontmatter — .claude/skills/ai-agents-portability-campaign/SKILL.md:1
- # ai-agents Portability Campaign — .claude/skills/ai-agents-portability-campaign/SKILL.md:8
- ## Triggers — .claude/skills/ai-agents-portability-campaign/SKILL.md:17
- ## Process — .claude/skills/ai-agents-portability-campaign/SKILL.md:25
- ### Phase 0: Load the Settled Contract — .claude/skills/ai-agents-portability-campaign/SKILL.md:27
- ### Phase 1: Classify the Source Hook — .claude/skills/ai-agents-portability-campaign/SKILL.md:55
- ### Phase 2: Change Canonical Sources — .claude/skills/ai-agents-portability-campaign/SKILL.md:97
- ### Phase 3: Test Before Generation — .claude/skills/ai-agents-portability-campaign/SKILL.md:145
- ### Phase 4: Regenerate All Mirrors — .claude/skills/ai-agents-portability-campaign/SKILL.md:167
- ### Phase 5: Test Shipped Artifacts — .claude/skills/ai-agents-portability-campaign/SKILL.md:196
- ### Phase 6: Refresh Knowledge Only When Needed — .claude/skills/ai-agents-portability-campaign/SKILL.md:215
- ## Anti-Patterns — .claude/skills/ai-agents-portability-campaign/SKILL.md:234
- ## Extension Points — .claude/skills/ai-agents-portability-campaign/SKILL.md:250
- ## Verification — .claude/skills/ai-agents-portability-campaign/SKILL.md:256
- ## Provenance and Maintenance — .claude/skills/ai-agents-portability-campaign/SKILL.md:269

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — .claude/skills/ai-agents-portability-campaign/SKILL.md:200 — references tests/build_scripts/test_copilot_dispatcher_artifact.py which does not exist in the repository.
- doc-drift — .claude/skills/ai-agents-portability-campaign/SKILL.md:178-181 — lists specific registration counts for .claude/settings.json, .claude/hooks/hooks.json, and src/copilot-cli/hooks/hooks.json that risk becoming stale over time as warned in lines 279-280.

## Observations
- Solves Copilot CLI's single-document JSON constraint: Copilot expects a single JSON document per command hook execution; multiple decision objects cannot simply be concatenated without causing invalid JSON and dropping decisions.
- Explains why `Stop` and `SubagentStop` hooks must remain direct registrations rather than being merged into an observer dispatcher, since their structured decision objects require host-level merging.
- Documents asymmetric permission translation between Claude Code and Copilot CLI (`approve` -> `allow`, `deny` -> `deny`, and `ask` -> empty stdout).
- Enforces isolation rules for E2E hook testing, warning that unisolated hook uninstallation in Copilot CLI 1.0.72-1 can mutate active hooks and deny all matching tools.

## Context cost
12,707 bytes of source (~3,200 tokens). Loads `agent-harness-reference` and hook test suites on demand.
