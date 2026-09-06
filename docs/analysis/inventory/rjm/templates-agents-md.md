---
package: rjm
path: templates/AGENTS.md
type: template
bytes: 12193
unit: inv-rjm-313
in_scope_via: .agents/architecture/ADR-036-two-source-agent-template-architecture.md
aliases: []
memo_inputs:
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/AGENTS.md

## Purpose — required, verbatim
> "This document describes the AI agents defined in the template system and how they are transformed into platform-specific outputs." — templates/AGENTS.md:3

## Design intent — required
Documents the two-source agent template architecture (governed operationally by ADR-036), establishing `templates/` as the single canonical source of truth for generating VS Code Copilot Chat and GitHub Copilot CLI agent definitions via `build/generate_agents.py`, while clearly segregating them from hand-maintained Claude Code agents in `src/claude/`. Without this document, agent authors and automated workflows would lack clear operational rules for multi-platform agent synchronization, risking direct manual edits to generated platform files, semantic divergence between Claude and Copilot capabilities, and uncoordinated prompt updates across harnesses.

## Phase — required
cross-phase

## Inputs — required
- Shared agent templates in `templates/agents/*.shared.md` (templates/AGENTS.md:20, 57)
- Platform configurations in `templates/platforms/vscode.yaml` and `templates/platforms/copilot-cli.yaml` (templates/AGENTS.md:58-59, 224, 233)
- Hand-maintained Claude Code agent files in `src/claude/*.md` (templates/AGENTS.md:31, 49, 101)
- Generator script `build/generate_agents.py` and transformation module `build/generate_agents_common.py` (templates/AGENTS.md:23, 266-267)
- Procedures and references: `agent-harness-reference` (templates/AGENTS.md:9), `ai-agents-portability-campaign` (templates/AGENTS.md:10), ADR-036 (templates/AGENTS.md:15), ADR-052 (templates/AGENTS.md:15), and `src/claude/AGENTS.md` (templates/AGENTS.md:13, 128)

## Outputs — required
- Generated VS Code agent definitions: `src/vs-code-agents/*.agent.md` (templates/AGENTS.md:27, 47, 67, 228)
- Generated GitHub Copilot CLI agent definitions: `src/copilot-cli/agents/*.agent.md` (templates/AGENTS.md:27, 48, 68, 237)
- Claude Code installed runtime agents: `.claude/agents/*.md` (templates/AGENTS.md:38, 50)
- CI drift issue reports and validation statuses via `.github/workflows/drift-detection.yml` and `build/scripts/detect_agent_drift.py` (templates/AGENTS.md:148-158, 310-311)

## Invokes — required
- script build/generate_agents.py — templates/AGENTS.md:7
- reference agent-harness-reference — templates/AGENTS.md:9
- reference ai-agents-portability-campaign — templates/AGENTS.md:10
- reference src/claude/AGENTS.md — templates/AGENTS.md:13
- template platforms/vscode.yaml — templates/AGENTS.md:58
- template platforms/copilot-cli.yaml — templates/AGENTS.md:59
- reference build/generate_agents_common.py — templates/AGENTS.md:267
- script build/scripts/detect_agent_drift.py — templates/AGENTS.md:311
- reference templates/README.md — templates/AGENTS.md:316
- reference build/AGENTS.md — templates/AGENTS.md:318
- reference AGENTS.md — templates/AGENTS.md:319

## Invoked by — required
- doc AGENTS.md — src/claude/AGENTS.md:357
- doc AGENTS.md — build/AGENTS.md:423
- skill agent-harness-reference — src/copilot-cli/skills/agent-harness-reference/SKILL.md:53

## Concepts named — required, verbatim
- `source of truth` — templates/AGENTS.md:7 — defined here
- `agent-harness-reference` — templates/AGENTS.md:9 — used here
- `ai-agents-portability-campaign` — templates/AGENTS.md:10 — used here
- `Two-Source Agent Template Architecture` — templates/AGENTS.md:15 — used here
- `ADR-052` — templates/AGENTS.md:15 — used here
- `Bidirectional Synchronization` — templates/AGENTS.md:93 — defined here
- `Drift Monitoring` — templates/AGENTS.md:146 — defined here
- `orchestrator` — templates/AGENTS.md:167 — used here
- `analyst` — templates/AGENTS.md:168 — used here
- `architect` — templates/AGENTS.md:169 — used here
- `milestone-planner` — templates/AGENTS.md:170 — used here
- `implementer` — templates/AGENTS.md:171 — used here
- `critic` — templates/AGENTS.md:172 — used here
- `qa` — templates/AGENTS.md:173 — used here
- `roadmap` — templates/AGENTS.md:174 — used here
- `devops` — templates/AGENTS.md:175 — used here
- `security` — templates/AGENTS.md:176 — used here
- `memory` — templates/AGENTS.md:177 — used here
- `skillbook` — templates/AGENTS.md:178 — used here
- `retrospective` — templates/AGENTS.md:179 — used here
- `explainer` — templates/AGENTS.md:180 — used here
- `task-decomposer` — templates/AGENTS.md:181 — used here
- `backlog-generator` — templates/AGENTS.md:182 — used here
- `high-level-advisor` — templates/AGENTS.md:183 — used here
- `independent-thinker` — templates/AGENTS.md:184 — used here
- `pr-comment-responder` — templates/AGENTS.md:185 — used here
- `RICE scoring` — templates/AGENTS.md:174 — used here
- `OWASP` — templates/AGENTS.md:176 — used here
- `CWE patterns` — templates/AGENTS.md:176 — used here
- `Core Identity` — templates/AGENTS.md:214 — defined here
- `Activation Profile` — templates/AGENTS.md:215 — defined here
- `Core Mission` — templates/AGENTS.md:216 — defined here
- `Key Responsibilities` — templates/AGENTS.md:217 — defined here
- `Constraints` — templates/AGENTS.md:218 — defined here
- `Memory Protocol` — templates/AGENTS.md:219 — defined here
- `Handoff Options` — templates/AGENTS.md:220 — defined here
- `handoffSyntax` — templates/AGENTS.md:231 — defined here

## Structure
- # Template System Agents — templates/AGENTS.md:1
- ## Overview — templates/AGENTS.md:5
- ## Platform Generation vs Claude Installation — templates/AGENTS.md:17
- ## Architecture — templates/AGENTS.md:52
- ## Critical Workflow Rules — templates/AGENTS.md:82
- ### Rule 1: Template is Source of Truth (for VS Code/Copilot) — templates/AGENTS.md:84
- ### Rule 2: Bidirectional Synchronization (CRITICAL - ADR-036) — templates/AGENTS.md:93
- ### Rule 3: Regeneration Required After Template Changes — templates/AGENTS.md:130
- ### Rule 4: Drift Monitoring — templates/AGENTS.md:146
- ## Agent Catalog — templates/AGENTS.md:161
- ## Agent Definitions — templates/AGENTS.md:187
- ### Frontmatter Structure — templates/AGENTS.md:191
- ### Content Sections — templates/AGENTS.md:210
- ## Platform Configurations — templates/AGENTS.md:222
- ### VS Code (platforms/vscode.yaml) — templates/AGENTS.md:224
- ### Copilot CLI (platforms/copilot-cli.yaml) — templates/AGENTS.md:233
- ## Agent Data Flow — templates/AGENTS.md:242
- ## Dependencies — templates/AGENTS.md:262
- ## Security Considerations — templates/AGENTS.md:270
- ## Error Handling — templates/AGENTS.md:276
- ## Invocation — templates/AGENTS.md:285
- ### Generate All Agents — templates/AGENTS.md:287
- ### Preview Changes (Dry Run) — templates/AGENTS.md:293
- ### Validate Generated Files — templates/AGENTS.md:299
- ## Monitoring — templates/AGENTS.md:305
- ## Related Documentation — templates/AGENTS.md:313

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · templates/AGENTS.md:15 · Notes that ADR-036 is superseded in governance by ADR-052, but ADR-036 procedure remains active and ADR-052 target state is not yet implemented.
- `doc-drift` · templates/AGENTS.md:163 · Catalogs 18 agents, but the repository maintains 22+ agents across `.claude/agents/` (e.g. `code-reviewer`, `code-simplifier`, `comment-analyzer`, `debug`, `silent-failure-hunter`, `type-design-analyzer` are omitted from the 18-agent table in templates/AGENTS.md).

## Observations
- Explicitly establishes two distinct agent delivery flows: generated platform files (`src/vs-code-agents/`, `src/copilot-cli/`) from `templates/agents/*.shared.md` via `build/generate_agents.py`, vs. hand-maintained Claude Code agents (`src/claude/*.md` installed to `.claude/agents/*.md`).
- Mandates manual bidirectional synchronization when adding universal content (Rule 2), noting the anti-pattern where updating only one source leaves the other stale.
- Relies on weekly CI drift detection (`.github/workflows/drift-detection.yml`) to detect semantic divergence between hand-maintained Claude agents and generated VS Code agents.
- Enforces block-style YAML arrays for tool declarations due to GitHub Copilot CLI CRLF parsing bugs (citing ADR-040 amendment and Session 826 RCA).

## Context cost
12193 bytes. Approximately 3,050 tokens for the document itself; reading referenced platform configs (`vscode.yaml` 1,205 bytes, `copilot-cli.yaml` 4,586 bytes) and generator script (`build/generate_agents.py` 26,104 bytes) adds ~8,000 tokens.
