---
package: rjm
path: docs/architecture.md
type: doc
bytes: 6788
unit: inv-rjm-188
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: docs/architecture.md, sha256: 313b6db46f914559de625165f888be95ac076abd9a7bade6bb562d3339792453}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/architecture.md

## Purpose — required, verbatim
> "This document describes the AI Agents system design, including the plugin structure, template system, and platform support." — docs/architecture.md:3

## Design intent — required
Provides the overarching structural specification for the multi-platform AI Agents system. It documents the three-layer architectural pattern (shared templates, automated build generation, and platform runtimes for Claude Code, Copilot CLI, and VS Code), native marketplace plugin distribution schemes, cross-platform feature matrices, centralized orchestrator communication topology, repository layout standards, key architectural decisions (ADRs), and multi-level quality gates.

## Phase — required
cross-phase

## Inputs — required
- Shared agent templates in `templates/agents/*.shared.md` — docs/architecture.md:14
- Platform generation configuration under `platforms/` — docs/architecture.md:143
- Plugin marketplace distribution manifests — docs/architecture.md:75, 95
- Architectural Decision Records in `.agents/architecture/` — docs/architecture.md:169-183

## Outputs — required
- Generated platform agents in `src/claude/`, `src/copilot-cli/`, and `src/vs-code-agents/` — docs/architecture.md:19-21, 69
- Packaged marketplace plugins `claude-agents` and `project-toolkit` — docs/architecture.md:82-90, 102-105

## Invokes — required
- script build/generate_agents.py — docs/architecture.md:17
- config .claude-plugin/marketplace.json — docs/architecture.md:75
- config .github/plugin/marketplace.json — docs/architecture.md:95
- doc AGENTS.md — docs/architecture.md:193

## Invoked by — required
- doc README.md — README.md:535

## Concepts named — required, verbatim
- `Templates` — docs/architecture.md:9 — defined here
- `Build` — docs/architecture.md:10 — defined here
- `Runtime` — docs/architecture.md:11 — defined here
- `Template System` — docs/architecture.md:24 — defined here
- `Plugin Structure` — docs/architecture.md:71 — defined here
- `Platform Differences` — docs/architecture.md:112 — defined here
- `Agent Communication` — docs/architecture.md:125 — defined here
- `Directory Layout` — docs/architecture.md:137 — defined here
- `Design Decisions` — docs/architecture.md:167 — defined here
- `Quality Gates` — docs/architecture.md:184 — defined here
- `orchestrator` — docs/architecture.md:127 — used here
- `critic` — docs/architecture.md:190 — used here
- `QA` — docs/architecture.md:190 — used here
- `security` — docs/architecture.md:190 — used here
- `Pre-commit hooks` — docs/architecture.md:188 — used here
- `Session protocol` — docs/architecture.md:191 — used here
- `ADR-006` — docs/architecture.md:173 — used here
- `ADR-011` — docs/architecture.md:174 — used here
- `ADR-012` — docs/architecture.md:175 — used here
- `ADR-013` — docs/architecture.md:176 — used here
- `ADR-017` — docs/architecture.md:177 — used here
- `ADR-032` — docs/architecture.md:178 — used here
- `ADR-033` — docs/architecture.md:179 — used here
- `ADR-035` — docs/architecture.md:180 — used here
- `ADR-042` — docs/architecture.md:181 — used here
- `ADR-043` — docs/architecture.md:182 — used here

## Structure
- `# Architecture` — docs/architecture.md:1
- `## System Overview` — docs/architecture.md:5
- `## Template System` — docs/architecture.md:24
- `### Modifying Agents` — docs/architecture.md:61
- `## Plugin Structure` — docs/architecture.md:71
- `## Platform Differences` — docs/architecture.md:112
- `## Agent Communication` — docs/architecture.md:125
- `## Directory Layout` — docs/architecture.md:137
- `## Design Decisions` — docs/architecture.md:167
- `## Quality Gates` — docs/architecture.md:184

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · docs/architecture.md:178 · Mislabels ADR-032 as "Standardized exit codes", conflating it with ADR-035 (ADR-032 is actually EARS Requirements Syntax).

## Observations
Details the three-tier architecture (Templates -> Build -> Runtime) allowing agents to be authored once in `templates/agents/*.shared.md` and compiled into runtime-specific formats for Claude Code (`src/claude/`), GitHub Copilot CLI (`src/copilot-cli/`), and VS Code (`src/vs-code-agents/`). Emphasizes a strict hub-and-spoke agent communication topology where specialist agents communicate exclusively via the orchestrator rather than directly invoking each other.

## Context cost
6788 bytes (~1700 tokens). Core architectural documentation; loads no executable runtime dependencies.
