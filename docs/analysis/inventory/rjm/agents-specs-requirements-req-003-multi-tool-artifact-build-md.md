---
package: rjm
path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md
type: agent
bytes: 37770
unit: inv-rjm-61
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md

## Purpose — required, verbatim
> "The repo ships AI agent components to two production tool families with divergent native conventions: **Claude Code** and **GitHub Copilot CLI**." — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:29-30 (no explicit purpose statement)

## Design intent — required
Defines the architectural requirements and build system specification for cross-platform multi-tool artifact compilation in rjm. It establishes `.claude/` as the single canonical authoring tree, YAML-driven platform mapping schemas (`templates/platforms/copilot-cli.yaml`), and automated per-artifact generators emitting fully native artifacts for GitHub Copilot CLI (`src/copilot-cli/` and `.github/instructions/`). Without it, Copilot CLI users would only receive agents and would lack native skills, hooks, commands, and rules, or maintainers would suffer pervasive drift by attempting to manually dual-author divergent formats across platforms.

## Phase — required
rjm:spec

## Inputs — required
- Canonical source artifacts authored under `.claude/<artifact>/` (`.claude/agents/*.md`, `.claude/skills/*/SKILL.md`, `.claude/commands/*.md`, `.claude/rules/*.md`, `.claude/hooks/`, and `.claude/settings.json`).
- Platform substitution and configuration schemas in `templates/platforms/copilot-cli.yaml` (and `templates/platforms/*.yaml`).
- Dual-plugin declarations from `.claude-plugin/marketplace.json`.
- Official GitHub Copilot CLI specifications, official hook contracts, cloud hook guides, and CLI changelogs pinned in `.claude/skills/agent-harness-reference/references/official-hook-contracts.md`.
- Legacy agent generation templates and scripts: `templates/`, `build/generate_agents.py`, and `build/generate_agents_common.py`.
- Cross-tool instruction interoperability comparison (`~/Documents/Mobile/wiki/comparisons/CLI Harness Instruction Interoperability.md`).
- Architectural decisions: ADR-006 (no logic in YAML), ADR-007 (memory-first), ADR-042 (Python migration strategy).

## Outputs — required
- Per-artifact generators: `build/scripts/generate_agents.py`, `build/scripts/generate_skills.py`, `build/scripts/generate_commands.py`, `build/scripts/generate_rules.py`, `build/scripts/generate_hooks.py`, orchestrated by `build/scripts/build_all.py`.
- Schema validator: `build/scripts/validate_templates_schema.py`.
- Generalizer for counter validation: `build/scripts/validate_marketplace_counts.py` (annotated as retired).
- Generated Copilot CLI artifacts: `src/copilot-cli/agents/<name>.agent.md`, `src/copilot-cli/skills/<name>/SKILL.md` (with `user-invocable: true` for commands), `src/copilot-cli/commands/`, `src/copilot-cli/lib/`, `src/copilot-cli/hooks/hooks.json` (with `version: 1` wrapping and dispatcher shims `_manifest.json`, `_dispatch.py`, `_bootstrap.py`), and `.github/instructions/<name>.instructions.md`.
- Shared marketplace manifest: `.claude-plugin/marketplace.json` declaring `claude-toolkit` and `copilot-cli-toolkit`.
- Generation audit logs: `build/audit/GENERATION-AUDIT.md` and structured JSON stdout streams.
- Locked architectural decisions D1 through D11 and acceptance criteria REQ-003-001 through REQ-003-012.

## Invokes — required
- script build/scripts/validate_marketplace_counts.py — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:14
- script build/generate_agents.py — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:32
- reference .claude/skills/agent-harness-reference/references/official-hook-contracts.md — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:46
- config templates/platforms/copilot-cli.yaml — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:98
- doc templates/README.md — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:99
- script build/scripts/validate_templates_schema.py — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:190
- config .claude-plugin/marketplace.json — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:274
- script build/build_all.py — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:299
- doc build/audit/GENERATION-AUDIT.md — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:372
- script build/generate_agents_common.py — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:426

## Invoked by — required
- doc templates/README.md — templates/README.md:316

## Concepts named — required, verbatim
- `Multi-tool Artifact Build System` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:11 — defined here
- `Claude Code` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:30 — used here
- `GitHub Copilot CLI` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:30 — used here
- `plugin.json` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:51 — used here
- `marketplace.json` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:52 — used here
- `hooks.json` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:54 — used here
- `agentStop` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:56 — used here
- `errorOccurred` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:56 — used here
- `notification` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:56 — used here
- `permissionRequest` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:56 — used here
- `postToolUse` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:56 — used here
- `postToolUseFailure` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:56 — used here
- `preCompact` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:56 — used here
- `preToolUse` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:56 — used here
- `sessionEnd` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:56 — used here
- `sessionStart` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:56 — used here
- `subagentStart` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:56 — used here
- `subagentStop` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:56 — used here
- `userPromptSubmitted` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:56 — used here
- `userPromptTransformed` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:56 — used here
- `PreToolUse` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:60 — used here
- `applyTo:` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:67 — used here
- `copilot-instructions.md` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:68 — used here
- `AGENTS.md` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:69 — used here
- `CVA` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:78 — used here
- `user-invocable` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:83 — used here
- `matcher` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:148 — used here
- `generate_<artifact>.py` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:173 — defined here
- `schemaVersion` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:193 — used here
- `directory-copy` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:205 — defined here
- `command-to-skill` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:212 — defined here
- `dispatcher` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:237 — defined here
- `eventRemap` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:238 — defined here
- `eventDrop` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:249 — defined here
- `matcherPolicy` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:250 — defined here
- `auditPolicy` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:252 — defined here
- `pathBlocklist` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:253 — defined here
- `claude-toolkit` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:275 — defined here
- `copilot-cli-toolkit` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:276 — defined here
- `gate` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:319 — defined here
- `advise` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:319 — defined here
- `observe` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:319 — defined here
- `HOOK_STDIN_CEILING_MIB` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:333 — defined here
- `MATCHED_SHIM_PAYLOAD_LIMIT_MIB` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:334 — defined here
- `MAX_MATCHER_TOOL_CALLS` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:334 — defined here
- `NO-REGEN` — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:351 — defined here

## Structure
- # REQ-003: Multi-tool Artifact Build System — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:11
- ## Problem statement — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:27
- ## Verified facts (refreshed 2026-07-19) — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:42
- ## Architectural decisions (locked, 2026-04-27) — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:73
- ## In scope — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:89
- ## Out of scope — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:106
- ## CVA summary — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:118
- ### Axis = **provider** (per D2) — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:120
- ### Commonalities (across all artifacts and providers) — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:122
- ### Variabilities (per provider) — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:134
- ### Relationships — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:153
- ## Acceptance criteria — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:168
- ### Ubiquitous — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:170
- ### Event-driven — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:294
- ### State-driven — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:311
- ### Unwanted behavior — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:346
- ### Optional / Complex — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:392
- ## Resolved questions (from prior round) — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:399
- ## Residual open questions — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:410
- ## Traceability — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:417
- ## Risks (pre-mortem candidates) — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:433
- ## Implementation phasing (informational; not part of acceptance criteria) — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:444

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — build/scripts/validate_marketplace_counts.py referenced at .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:14, 97, 281, 285 does not exist on disk (retired in PR #2187).
- missing-path — ~/Documents/Mobile/wiki/comparisons/CLI Harness Instruction Interoperability.md referenced at .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:37-38 is an unresolvable path to a user-local directory outside the repository.
- doc-drift — lines .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:280-293 (REQ-003-004) mandate generalizing build/scripts/validate_marketplace_counts.py to validate manifest counts from YAML, but lines 14-20 annotate this as retired and no longer actionable.
- doc-drift — lines .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:67, 413 note that applyTo: path-specific instructions are "currently only supported for Copilot cloud agent and Copilot code review" and not general Copilot CLI, so emitting .github/instructions/ may produce dead artifacts.

## Observations
- High-rigor spec: REQ-003 establishes the complete Commonality and Variability Analysis (CVA), 11 architectural decisions (D1-D11), and 12 formal acceptance criteria (REQ-003-001 through REQ-003-012) governing multi-platform artifact generation.
- Strict canonical unidirectional compilation: .claude/ is established as the sole canonical authoring tree; REQ-003-010 explicitly enforces that generators must never write to .claude/.
- Dual-plugin marketplace architecture: .claude-plugin/marketplace.json declares both claude-toolkit and copilot-cli-toolkit, using discovery order differences to serve both hosts without collision.
- Command-to-skill bridge: Compensates for Copilot CLI's lack of custom plugin slash commands by transforming Claude commands into skills with user-invocable: true.
- Hook consolidation & matcher shims: Bridges Claude's 30 hook events to Copilot CLI's 14 native events with version: 1 wrapping, event dispatchers (_dispatch.py), and bounded, idempotent matcher shims (# AUTO-GENERATED MATCHER SHIM (REQ-003-007)).
- Customer-protection sentinels: Supports # NO-REGEN comments and .noregen sidecar files to prevent build overwriting of manual edits.

## Context cost
37,770 bytes (~9,440 tokens) for this specification alone. When referenced during full build and schema validation workflows, related configuration and reference files (templates/platforms/copilot-cli.yaml, templates/README.md, official-hook-contracts.md) add approximately 35 KB (~8,750 tokens), totaling ~72 KB (~18,000 tokens) of combined context.
