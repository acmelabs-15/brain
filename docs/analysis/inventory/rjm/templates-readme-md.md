---
package: rjm
path: templates/README.md
type: template
bytes: 14246
unit: inv-rjm-324
in_scope_via: CONTRIBUTING.md
aliases: []
memo_inputs:
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/README.md

## Purpose — required, verbatim
> "This directory contains the shared agent template system for generating platform-specific agent definitions." — templates/README.md:3

## Design intent — required
Documents the shared agent template system, establishing `templates/` as the single canonical source of truth for generating VS Code Copilot Chat (`src/vs-code-agents/`) and GitHub Copilot CLI (`src/copilot-cli/agents/`) agent definitions via `build/generate_agents.py`, while coordinating with hand-maintained Claude Code agent files in `src/claude/`. It defines toolset abstractions (`toolsets.yaml`), canonical delegation syntax (`/agent [name]`), synchronization procedures under ADR-036 / ADR-052, drift detection tooling and CI gating (`build/scripts/detect_agent_drift.py`), and the REQ-003 platform configuration schema (`templates/platforms/*.yaml`) with validation requirements (`build/scripts/validate_templates_schema.py`). Without this guide, agent authors and automated workflows would lack clear operational rules for maintaining cross-platform agent parity, risking direct edits to generated platform targets, divergence between Claude Code and Copilot agent behaviors, and schema violations in platform build configurations.

## Phase — required
cross-phase

## Inputs — required
- Shared agent definition templates in `templates/agents/*.shared.md` (templates/README.md:11, 30, 76)
- Named toolset definitions in `templates/toolsets.yaml` (templates/README.md:20, 31, 42)
- Platform configuration specifications in `templates/platforms/*.yaml` (templates/README.md:17-19, 32, 312)
- Generator script `build/generate_agents.py` (templates/README.md:33, 79, 115)
- Drift detection script `build/scripts/detect_agent_drift.py` and CI workflow `.github/workflows/drift-detection.yml` (templates/README.md:188-189, 195)
- Platform schema validation script `build/scripts/validate_templates_schema.py` and workflow `.github/workflows/validate-generated-agents.yml` (templates/README.md:254, 352, 367)
- Hand-maintained Claude Code agent definitions in `src/claude/{agent}.md` (templates/README.md:105, 131, 137, 181)
- Architectural decisions and requirement specs: ADR-036 (templates/README.md:5, 126, 248), ADR-052 (templates/README.md:5, 248), ADR-006 Amendment (templates/README.md:314, 372), REQ-003 (templates/README.md:310, 316, 322, 345)

## Outputs — required
- Generated VS Code agent definitions in `src/vs-code-agents/*.agent.md` (templates/README.md:81, 89)
- Generated GitHub Copilot CLI agent definitions in `src/copilot-cli/agents/*.agent.md` (templates/README.md:82, 89)
- Validation reports and exit codes from `build/generate_agents.py --validate` (templates/README.md:121)
- Drift detection reports and GitHub issue notifications via `build/scripts/detect_agent_drift.py` (templates/README.md:198, 201, 239)
- Schema validation verdicts and exit codes from `build/scripts/validate_templates_schema.py` (templates/README.md:358-364)

## Invokes — required
- doc ADR-036-two-source-agent-template-architecture.md — templates/README.md:5
- doc ADR-052-template-strategy.md — templates/README.md:5
- template analyst.shared.md — templates/README.md:12
- template architect.shared.md — templates/README.md:13
- template implementer.shared.md — templates/README.md:14
- template orchestrator.shared.md — templates/README.md:15
- config vscode.yaml — templates/README.md:18
- config copilot-cli.yaml — templates/README.md:19
- config toolsets.yaml — templates/README.md:20
- script build/generate_agents.py — templates/README.md:33
- file .github/workflows/drift-detection.yml — templates/README.md:188
- script build/scripts/detect_agent_drift.py — templates/README.md:189
- doc src/claude/AGENTS.md — templates/README.md:249
- config .vscode/toolsets.jsonc — templates/README.md:250
- doc CONTRIBUTING.md — templates/README.md:251
- file .github/workflows/validate-generated-agents.yml — templates/README.md:254
- doc ADR-006-thin-workflows-testable-modules.md — templates/README.md:314
- doc REQ-003-multi-tool-artifact-build.md — templates/README.md:316
- script build/scripts/validate_templates_schema.py — templates/README.md:352

## Invoked by — required
- doc build/AGENTS.md — build/AGENTS.md:424
- doc templates/AGENTS.md — templates/AGENTS.md:316
- doc CONTRIBUTING.md — CONTRIBUTING.md:534
- doc templates.instructions.md — src/copilot-cli/instructions/templates.instructions.md:33
- skill ai-agents-architecture-contract — src/copilot-cli/skills/ai-agents-architecture-contract/SKILL.md:35
- skill ai-agents-build-and-env — src/copilot-cli/skills/ai-agents-build-and-env/SKILL.md:169
- skill ai-agents-config-catalog — src/copilot-cli/skills/ai-agents-config-catalog/SKILL.md:76

## Concepts named — required, verbatim
- `agent template system` — templates/README.md:3 — defined here
- `Two-Source Agent Template Architecture` — templates/README.md:5 — used here
- `ADR-036` — templates/README.md:5 — used here
- `ADR-052` — templates/README.md:5 — used here
- `SOURCE OF TRUTH` — templates/README.md:11 — defined here
- `analyst` — templates/README.md:12 — used here
- `architect` — templates/README.md:13 — used here
- `implementer` — templates/README.md:14 — used here
- `orchestrator` — templates/README.md:15 — used here
- `toolsets.yaml` — templates/README.md:20 — defined here
- `Toolsets` — templates/README.md:35 — defined here
- `GitHub MCP Server toolsets` — templates/README.md:40 — used here
- `editor` — templates/README.md:46 — defined here
- `critic` — templates/README.md:46 — used here
- `milestone-planner` — templates/README.md:46 — used here
- `executor` — templates/README.md:47 — defined here
- `qa` — templates/README.md:47 — used here
- `devops` — templates/README.md:47 — used here
- `knowledge` — templates/README.md:48 — defined here
- `github-research` — templates/README.md:49 — defined here
- `github-oversight` — templates/README.md:50 — defined here
- `github-code` — templates/README.md:51 — defined here
- `github-cicd` — templates/README.md:52 — defined here
- `github-security` — templates/README.md:53 — defined here
- `security` — templates/README.md:53 — used here
- `research` — templates/README.md:54 — defined here
- `Platform Transformations` — templates/README.md:85 — defined here
- `Handoff syntax` — templates/README.md:93 — defined here
- `Agent Invocation Syntax` — templates/README.md:97 — defined here
- `Drift Detection` — templates/README.md:179 — defined here
- `Core Identity` — templates/README.md:213 — used here
- `Core Mission` — templates/README.md:213 — used here
- `Key Responsibilities` — templates/README.md:214 — used here
- `Constraints` — templates/README.md:215 — used here
- `Handoff Options` — templates/README.md:216 — used here
- `Execution Mindset` — templates/README.md:216 — used here
- `Memory Protocol` — templates/README.md:217 — used here
- `Analysis Types` — templates/README.md:218 — used here
- `ADR Templates` — templates/README.md:218 — used here
- `DRIFT DETECTED` — templates/README.md:231 — defined here
- `NO COUNTERPART` — templates/README.md:232 — defined here
- `CRLF line endings` — templates/README.md:294 — used here
- `Session 826 RCA` — templates/README.md:294 — used here
- `Platform Configuration Schema` — templates/README.md:310 — defined here
- `REQ-003` — templates/README.md:310 — used here
- `ADR-006 Amendment 2026-04-28` — templates/README.md:314 — used here
- `REQ-003-002` — templates/README.md:316 — used here
- `copilot-cli` — templates/README.md:322 — used here
- `vscode` — templates/README.md:323 — used here
- `visual-studio` — templates/README.md:324 — used here
- `REQ-003-009` — templates/README.md:345 — used here

## Structure
- `# Agent Templates` — templates/README.md:1
- `## Directory Structure` — templates/README.md:7
- `## How It Works` — templates/README.md:24
- `### Template System` — templates/README.md:26
- `### Toolsets` — templates/README.md:35
- `### Generation Flow` — templates/README.md:73
- `### Platform Transformations` — templates/README.md:85
- `### Agent Invocation Syntax` — templates/README.md:97
- `## Usage` — templates/README.md:109
- `### Generate Platform Files` — templates/README.md:111
- `### Modify an Agent` — templates/README.md:124
- `### Add a New Agent` — templates/README.md:139
- `## Drift Detection` — templates/README.md:179
- `### Weekly CI Check` — templates/README.md:183
- `### Run Locally` — templates/README.md:191
- `### What Gets Compared` — templates/README.md:207
- `### Drift Types` — templates/README.md:227
- `### Handling Drift` — templates/README.md:235
- `## Related Documentation` — templates/README.md:246
- `## Template Format` — templates/README.md:257
- `### Frontmatter` — templates/README.md:259
- `### Required Sections` — templates/README.md:296
- `## Platform Configuration Schema (REQ-003)` — templates/README.md:310
- `### Provider × Artifact mapping (current state)` — templates/README.md:318
- `### Adding an artifact type to an existing provider` — templates/README.md:330
- `### Validating locally` — templates/README.md:349
- `### CI gating` — templates/README.md:365
- `### Constraints (ADR-006 Amendment Conditions 3 + 7)` — templates/README.md:372

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · templates/README.md:5 · Notes that ADR-036 is superseded in governance by ADR-052, but ADR-036 procedure remains active and ADR-052 target state is not yet implemented.
- `cross-file-contradiction` · templates/README.md:115 · Recommends running `uv run python build/generate_agents.py`, but `src/copilot-cli/skills/ai-agents-build-and-env/SKILL.md:169-170` flags following `templates/README.md` build instructions as an anti-pattern (claiming it predates ADR-042, though README.md has since been updated to `uv run` while build-and-env still asserts pwsh commands).
- `doc-drift` · templates/README.md:188 · Cites `.github/workflows/drift-detection.yml` for drift detection, but `src/copilot-cli/skills/ai-agents-config-catalog/SKILL.md:76` cites `.github/workflows/agent-drift-detection.yml` (both workflows exist in the repository with different trigger / check scopes).

## Observations
- Documents the single source of truth (`templates/agents/*.shared.md`) and generator flow (`build/generate_agents.py`) targeting VS Code (`src/vs-code-agents/`) and Copilot CLI (`src/copilot-cli/agents/`).
- Details toolset expansion via `toolsets.yaml` using `$toolset:name` syntax, mapping directly to GitHub MCP Server toolset patterns and handling platform-specific tool variants.
- Explains canonical invocation syntax transformation (`/agent [agent_name]` -> `#runSubagent with subagentType=[name]` in VS Code, `/agent [name]` in Copilot CLI).
- Highlights critical operational fragility of ADR-036: updating shared templates does not update Claude agents (`src/claude/`), mandating manual dual-edits and relying on weekly drift detection (`build/scripts/detect_agent_drift.py`) with similarity thresholds to catch missed edits.
- Documents the platform configuration schema under REQ-003 and ADR-006 Amendment (2026-04-28), governing provider mapping and validation (`build/scripts/validate_templates_schema.py`) with strict constraints (safe_load only, no YAML anchors/aliases, line limits, relative paths).
- Documents Windows CRLF inline YAML array bug in GitHub Copilot CLI (Session 826 RCA), enforcing block-style arrays.

## Context cost
14246 bytes. Approximately 3,560 tokens for the document itself; loading referenced platform configs (`vscode.yaml` 1,205 bytes, `copilot-cli.yaml` 4,586 bytes, `toolsets.yaml` ~2,500 bytes) and generator script (`build/generate_agents.py` 26,104 bytes) adds ~8,600 tokens (~12,200 tokens total).
