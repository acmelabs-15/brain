---
package: rjm
path: templates/agents/debug.shared.md
type: agent
bytes: 3032
unit: inv-rjm-315
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: templates/agents/debug.shared.md, sha256: efd8f04f4ef4c478b8d44833ef5850ac72e9121fddea1bfdbca8e6238c40cd2d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/debug.shared.md

## Purpose — required, verbatim
> "**Systematic Bug Hunter** for identifying, analyzing, and resolving application bugs. Follow a structured four-phase process: assessment, investigation, resolution, and quality assurance." — templates/agents/debug.shared.md:38

## Design intent — required
A disciplined, execution-focused debugging specialist that diagnoses and resolves application bugs through an explicit four-phase methodology: problem assessment, investigation, resolution, and quality assurance. It demands clear reproduction steps before attempting any code fix, enforces incremental changes, and mandates regression test authoring. Without it, debugging devolves into trial-and-error patching that fails to address true root causes and risks introducing secondary defects.

## Phase — required
rjm:test

## Inputs — required
- Bug description, error message, or unexpected behavior provided via `argument-hint` ("Describe the bug, error message, or unexpected behavior to investigate") — templates/agents/debug.shared.md:4.
- Stack traces, failure reports, codebase structure, and recent changes gathered during assessment — templates/agents/debug.shared.md:42.
- Execution paths, variable states, data flows, and control logic traced during investigation — templates/agents/debug.shared.md:48.

## Outputs — required
- Targeted, minimal code fix adhering to existing code patterns — templates/agents/debug.shared.md:54.
- New or updated automated tests preventing regression — templates/agents/debug.shared.md:60.
- Final debug report summarizing root cause, fix implementation, and preventive measures — templates/agents/debug.shared.md:62.

## Invokes — required
- agent implementer — templates/agents/debug.shared.md:77
- agent analyst — templates/agents/debug.shared.md:78
- agent qa — templates/agents/debug.shared.md:79
- agent security — templates/agents/debug.shared.md:80

## Invoked by — required
- agent debug — docs/agent-catalog.md:23
- agent debug — templates/agents/orchestrator.shared.md:97

## Concepts named — required, verbatim
- `executor` — templates/agents/debug.shared.md:2 — used here
- `Debug Agent` — templates/agents/debug.shared.md:17 — defined here
- `Style Guide Compliance` — templates/agents/debug.shared.md:19 — defined here
- `Core Identity` — templates/agents/debug.shared.md:36 — defined here
- `Systematic Bug Hunter` — templates/agents/debug.shared.md:38 — defined here
- `Problem Assessment` — templates/agents/debug.shared.md:40 — defined here
- `Investigation` — templates/agents/debug.shared.md:46 — defined here
- `Resolution` — templates/agents/debug.shared.md:52 — defined here
- `Quality Assurance` — templates/agents/debug.shared.md:58 — defined here
- `Debugging Guidelines` — templates/agents/debug.shared.md:64 — defined here
- `Handoff Options` — templates/agents/debug.shared.md:73 — defined here
- `implementer` — templates/agents/debug.shared.md:77 — used here
- `analyst` — templates/agents/debug.shared.md:78 — used here
- `qa` — templates/agents/debug.shared.md:79 — used here
- `security` — templates/agents/debug.shared.md:80 — used here

## Structure
- # Debug Agent — templates/agents/debug.shared.md:17
- ## Style Guide Compliance — templates/agents/debug.shared.md:19
- ## Core Identity — templates/agents/debug.shared.md:36
- ## Phase 1: Problem Assessment — templates/agents/debug.shared.md:40
- ## Phase 2: Investigation — templates/agents/debug.shared.md:46
- ## Phase 3: Resolution — templates/agents/debug.shared.md:52
- ## Phase 4: Quality Assurance — templates/agents/debug.shared.md:58
- ## Debugging Guidelines — templates/agents/debug.shared.md:64
- ## Handoff Options — templates/agents/debug.shared.md:73

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Compact execution template: 81 lines defining a lean four-phase protocol without multi-platform MCP overhead.
- Variant relationship: shares 88% of distinct lines with `.claude/agents/debug.md` (ledger id V17; divergence card `docs/analysis/inventory/rjm/_divergence/claude-agents-debug-md--templates-agents-debug-shared-md.md`).
- Concise handoff routing: clear trigger table dispatching complex fixes to implementer, deep research to analyst, verification to qa, and vulnerabilities to security.

## Context cost
3032 bytes (approx. 758 tokens).
