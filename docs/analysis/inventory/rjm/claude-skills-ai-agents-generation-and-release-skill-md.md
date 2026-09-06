---
package: rjm
path: .claude/skills/ai-agents-generation-and-release/SKILL.md
type: skill
bytes: 21914
unit: inv-rjm-85
in_scope_via: .claude/commands/build.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-generation-and-release/SKILL.md, sha256: f21f81ca99b028e049733f4a75da58c62b2603d0c74e74bfd6a88459ae76272d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-generation-and-release/SKILL.md

## Purpose — required, verbatim
> "Runbook for the build, generation, mirroring, versioning, and release machinery of this repo." — .claude/skills/ai-agents-generation-and-release/SKILL.md:11

## Design intent — required
Provides an authoritative runbook and operational contract for managing the repository's asymmetric code generation pipeline, multi-surface mirroring, drift detection gates, version-free plugin manifests (ADR-092), and npm package publication workflow. It codifies the precise directional boundaries between canonical sources (`templates/agents/*.shared.md`, `.claude/`, `scripts/`) and derived targets (`src/copilot-cli/`, `src/vs-code-agents/`, `.github/instructions/`, `.claude/lib/`), preventing catastrophic errors such as reversing the generation seam or editing generated files directly. Without it, contributors and autonomous agents would inevitably invert generation drift fixes (as occurred in the 2025-12-15 incident), break cross-harness synchronization, corrupt plugin manifests by reintroducing forbidden version fields, or fail pre-push drift gates.

## Phase — required
cross-phase

## Inputs — required
- Canonical source files: `templates/agents/*.shared.md`, `templates/platforms/*.yaml`, `.claude/skills/*/SKILL.md`, `.claude/commands/*.md`, `.claude/rules/*.md`, `.claude/lib/`, `.claude/settings.json`, `.claude/hooks/`, `scripts/hook_utilities/`, `scripts/github_core/`, `scripts/ai_review_common/`, and `packages/ai-agents-cli/package.json`.
- Configuration and CI files: `lefthook.yml`, `pyproject.toml`, `.claude-plugin/marketplace.json`, `.github/workflows/validate-generated-agents.yml`, `.github/workflows/publish.yml`, and `RELEASING.md`.
- Tooling commands and scripts: `build/generate_agents.py`, `build/scripts/build_all.py`, `scripts/sync_plugin_lib.py`, `scripts/validation/run_install_parity_ci.py`, `build/scripts/check_plugin_manifest_parity.py`, `build/scripts/validate_plugin_version_bump.py`, and `build/scripts/detect_agent_drift.py`.

## Outputs — required
- Generated agent definitions: `src/copilot-cli/agents/*.agent.md`, `src/vs-code-agents/*.agent.md`, and `docs/agent-catalog.md`.
- Generated skills, instructions, libraries, and hooks: `src/copilot-cli/skills/`, `.github/instructions/*.instructions.md`, `src/copilot-cli/instructions/`, `.claude/lib/`, `src/copilot-cli/lib/`, `src/copilot-cli/hooks/`, and `src/copilot-cli/hooks/hooks.json`.
- Audit logs: generation audit log in the gitignored `build/audit` directory.
- Release artifacts: built npm package in `packages/ai-agents-cli/dist/`, published npm package `@rjmurillo/ai-agents` with OIDC provenance, and git release tags (`vX.Y.Z`).

## Invokes — required
- skill ai-agents-build-and-env — .claude/skills/ai-agents-generation-and-release/SKILL.md:32
- skill ai-agents-architecture-contract — .claude/skills/ai-agents-generation-and-release/SKILL.md:33
- skill ai-agents-debugging-playbook — .claude/skills/ai-agents-generation-and-release/SKILL.md:34
- skill ai-agents-change-control — .claude/skills/ai-agents-generation-and-release/SKILL.md:35
- skill ai-agents-config-catalog — .claude/skills/ai-agents-generation-and-release/SKILL.md:36

## Invoked by — required
- command build — .claude/commands/build.md:22
- skill ai-agents-build-and-env — .claude/skills/ai-agents-build-and-env/SKILL.md:39
- skill ai-agents-change-control — .claude/skills/ai-agents-change-control/SKILL.md:56
- skill ai-agents-debugging-playbook — .claude/skills/ai-agents-debugging-playbook/SKILL.md:56
- skill ai-agents-portability-campaign — .claude/skills/ai-agents-portability-campaign/SKILL.md:15
- skill ai-agents-architecture-contract — .claude/skills/ai-agents-architecture-contract/SKILL.md:3
- skill agent-harness-reference — .claude/skills/agent-harness-reference/SKILL.md:359
- skill ai-agents-diagnostics-toolkit — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:48

## Concepts named — required, verbatim
- `ai-agents-generation-and-release` — .claude/skills/ai-agents-generation-and-release/SKILL.md:2 — defined here
- `Generator` — .claude/skills/ai-agents-generation-and-release/SKILL.md:15 — defined here
- `Drift` — .claude/skills/ai-agents-generation-and-release/SKILL.md:16 — defined here
- `Canonical` — .claude/skills/ai-agents-generation-and-release/SKILL.md:17 — defined here
- `Semver` — .claude/skills/ai-agents-generation-and-release/SKILL.md:18 — defined here
- `Phase 1: Know the Seam Before You Edit` — .claude/skills/ai-agents-generation-and-release/SKILL.md:40 — defined here
- `ADR-072` — .claude/skills/ai-agents-generation-and-release/SKILL.md:42 — used here
- `ADR-036` — .claude/skills/ai-agents-generation-and-release/SKILL.md:55 — used here
- `ADR-052` — .claude/skills/ai-agents-generation-and-release/SKILL.md:55 — used here
- `REQ-003-010` — .claude/skills/ai-agents-generation-and-release/SKILL.md:71 — used here
- `OWNED_PREFIXES` — .claude/skills/ai-agents-generation-and-release/SKILL.md:72 — used here
- `Phase 2: Regenerate After Editing a Canonical Surface` — .claude/skills/ai-agents-generation-and-release/SKILL.md:80 — defined here
- `Phase 3: Run the Drift Gates Locally Before Pushing` — .claude/skills/ai-agents-generation-and-release/SKILL.md:100 — defined here
- `Agent template drift` — .claude/skills/ai-agents-generation-and-release/SKILL.md:106 — used here
- `Full pipeline staleness` — .claude/skills/ai-agents-generation-and-release/SKILL.md:107 — used here
- `Lib mirror drift` — .claude/skills/ai-agents-generation-and-release/SKILL.md:108 — used here
- `Install parity` — .claude/skills/ai-agents-generation-and-release/SKILL.md:109 — used here
- `Manifest description parity` — .claude/skills/ai-agents-generation-and-release/SKILL.md:110 — used here
- `Plugin version field present` — .claude/skills/ai-agents-generation-and-release/SKILL.md:111 — used here
- `Semantic agent drift` — .claude/skills/ai-agents-generation-and-release/SKILL.md:112 — used here
- `Phase 4: Plugin Manifests Carry No Version` — .claude/skills/ai-agents-generation-and-release/SKILL.md:138 — defined here
- `ADR-092` — .claude/skills/ai-agents-generation-and-release/SKILL.md:152 — used here
- `ADR-079` — .claude/skills/ai-agents-generation-and-release/SKILL.md:152 — used here
- `Phase 5: npm Release Path` — .claude/skills/ai-agents-generation-and-release/SKILL.md:163 — defined here
- `OIDC provenance` — .claude/skills/ai-agents-generation-and-release/SKILL.md:174 — used here
- `roll-FORWARD` — .claude/skills/ai-agents-generation-and-release/SKILL.md:177 — used here

## Structure
- frontmatter — .claude/skills/ai-agents-generation-and-release/SKILL.md:1
- # ai-agents Generation and Release — .claude/skills/ai-agents-generation-and-release/SKILL.md:8
- ## Triggers — .claude/skills/ai-agents-generation-and-release/SKILL.md:20
- ## When NOT to Use This Skill — .claude/skills/ai-agents-generation-and-release/SKILL.md:28
- ## Process — .claude/skills/ai-agents-generation-and-release/SKILL.md:38
- ### Phase 1: Know the Seam Before You Edit — .claude/skills/ai-agents-generation-and-release/SKILL.md:40
- ### Phase 2: Regenerate After Editing a Canonical Surface — .claude/skills/ai-agents-generation-and-release/SKILL.md:80
- ### Phase 3: Run the Drift Gates Locally Before Pushing — .claude/skills/ai-agents-generation-and-release/SKILL.md:100
- ### Phase 4: Plugin Manifests Carry No Version — .claude/skills/ai-agents-generation-and-release/SKILL.md:138
- ### Phase 5: npm Release Path — .claude/skills/ai-agents-generation-and-release/SKILL.md:163
- ## Anti-Patterns — .claude/skills/ai-agents-generation-and-release/SKILL.md:179
- ## Verification — .claude/skills/ai-agents-generation-and-release/SKILL.md:193
- ## Provenance and Maintenance — .claude/skills/ai-agents-generation-and-release/SKILL.md:205

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- unfailable-gate — .claude/skills/ai-agents-generation-and-release/SKILL.md:161 — marketplace description-count validation is currently unenforced due to retirement of the dedicated count validator and its YAML configuration.
- doc-drift — .claude/skills/ai-agents-generation-and-release/SKILL.md:228 — records ADR-036 as superseded by ADR-052 (2026-08-25) but procedure remains operative and unimplemented in codebase.

## Observations
- Emphasizes the critical lesson from the 2025-12-15 incident: drift detection output demonstrates difference, not direction; editing the canonical source to match stale generated output inverts the seam.
- Documents the enforcement of invariant REQ-003-010 in `build_all.py`, exiting code 2 if any generator attempts to write into the canonical `.claude/` tree.
- Records ADR-092's structural decision to eliminate `version` fields from plugin manifests (`plugin.json`), avoiding merge conflict storms in high-concurrency PR environments and relying on git commit SHAs for cache invalidation.
- Highlights that generated Python code under `src/copilot-cli/` is exempted from ruff linting in `pyproject.toml`.

## Context cost
21,914 bytes of source (~5,500 tokens). Loads `build/scripts/build_all.py`, `build/generate_agents.py`, and related scripts on demand during generation tasks.
