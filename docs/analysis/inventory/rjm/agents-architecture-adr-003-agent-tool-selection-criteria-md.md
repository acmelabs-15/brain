---
package: rjm
path: .agents/architecture/ADR-003-agent-tool-selection-criteria.md
type: agent
bytes: 18191
unit: inv-rjm-4
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-003-agent-tool-selection-criteria.md, sha256: eb69d15e1f13b544dc745b96fd311e222031e297014656e59f6323d68592a395}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-003-agent-tool-selection-criteria.md

## Purpose — required, verbatim
> "Each agent receives a curated set of tools aligned with their core responsibilities." — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:50

## Design intent — required
Replaces blanket ~58 tool allocation across all agent personas with curated 4-20 role-specific tools, enforcing the principle of least privilege, reducing context token overhead, clarifying agent boundaries, and preventing risky access (such as shell command execution or subagent orchestration) from non-implementation roles.

## Phase — required
cross-phase

## Inputs — required
- "The multi-agent system originally allocated ~58 tools to all agents via blanket permissions." — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:22
- "The GitHub MCP Server provides ~59 tools." — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:111

## Outputs — required
- "Each agent receives a curated set of tools aligned with their core responsibilities." — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:50
- "Explicit `tools:` frontmatter with 4-20 entries" — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:77
- "## Complete Tool Allocations" — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:200

## Invokes — required
none

## Invoked by — required
- doc ADR-003 — .agents/architecture/README.md:96

## Concepts named — required, verbatim
`Role-Specific Tool Allocation` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:18 — defined here
`principle of least privilege` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:27 — defined here
`context efficiency` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:35 — defined here
`Core Operations` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:82 — defined here
`Memory Systems` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:91 — defined here
`Research Tools` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:100 — defined here
`GitHub Toolset Definitions` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:113 — defined here
`Agent Orchestration` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:141 — defined here
`Blanket tool allocation` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:43 — used here
`Tiered tool allocation` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:45 — used here
`Dynamic tool loading` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:46 — used here
`Anti-Patterns` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:273 — defined here

## Structure
# ADR-003: Role-Specific Tool Allocation for Multi-Agent System — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:18
## Context and Problem Statement — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:20
## Decision Drivers — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:32
## Considered Options — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:41
## Decision Outcome — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:48
### Consequences — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:52
### Confirmation — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:74
## Tool Categories — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:80
### Category 1: Core Operations — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:82
### Category 2: Memory Systems (Universal) — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:91
### Category 3: Research Tools — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:100
### Category 4: GitHub Integration — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:109
#### GitHub Toolset Definitions — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:113
#### Role-Specific GitHub Tool Allocation — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:127
### Category 5: Agent Orchestration — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:141
## Decision Matrix — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:149
### Core Operations by Role — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:151
### Specialty Tools by Role — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:176
## Complete Tool Allocations — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:200
## Pros and Cons of the Options — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:230
### Option 1: Blanket Tool Allocation — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:232
### Option 2: Role-Specific Tool Allocation (Chosen) — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:243
### Option 3: Tiered Tool Allocation — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:254
### Option 4: Dynamic Tool Loading — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:263
## Anti-Patterns — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:273
### ❌ DO NOT: Grant execute to non-implementation agents — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:275
### ⚠️ CLARIFICATION: Edit for handoff artifacts vs source code — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:281
### ❌ DO NOT: Give all agents research tools — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:296
### ❌ DO NOT: Grant agent orchestration tools widely — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:302
### ❌ DO NOT: Skip memory tools — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:308
### ❌ DO NOT: Add tools "just in case" — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:312
### ❌ DO NOT: Use blanket github/* allocation — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:318
## Implementation Notes — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:326
### Adding a New Tool — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:328
### Adding a New Agent — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:336
### Tool Allocation Review Triggers — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:343
## Related Decisions — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:350
## More Information — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:354

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Makes a crucial architectural distinction between write permissions for agent handoff artifacts (`.agents/analysis/`, `.agents/critique/`, `.agents/retrospective/`) and source code write permissions (`src/`, `tests/`). Formulates explicit anti-patterns preventing `execute` in non-implementation roles and prohibiting uncurated `github/*` MCP allocations.

## Context cost
18191 bytes, approximately 4550 tokens.
