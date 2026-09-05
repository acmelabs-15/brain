---
package: rjm
path: .agents/architecture/ADR-003-agent-tool-selection-criteria.md
type: agent
bytes: 18191
unit: inv-rjm-4
deprecated: false
in_scope_via: inv-rjm-4
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-003-agent-tool-selection-criteria.md, sha256: eb69d15e1f13b544dc745b96fd311e222031e297014656e59f6323d68592a395}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/architecture/ADR-003-agent-tool-selection-criteria.md

## Purpose — required, verbatim
> "How should we allocate tools to agents to minimize context overhead while ensuring each agent has the capabilities required for its role?" — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:30

## Design intent — required
Defines the role-specific tool allocation architecture for the multi-agent system, moving from blanket permissions (~58 tools per agent) to curated sets of 4-20 tools per agent. Categorizes tools into Core Operations, Universal Memory Systems (cloudmcp-manager/*, serena/*), Research Tools, granular GitHub toolsets (rejecting blanket github/*), and Orchestration tools. Enforces strict anti-patterns such as restricting shell execution to implementation agents and restricting source code edits while granting artifact-only edit access to analysis agents writing to .agents/.

## Phase — required
cross-phase

## Inputs — required
Existing multi-agent system tool configurations (~58 tools per agent at line 22), role responsibilities for 18 agent definitions (lines 151-222), GitHub MCP Server tool catalog (~59 tools at lines 110-126), and memory system specifications (lines 91-98).

## Outputs — required
Curated tool allocations per agent documented in agent frontmatter (lines 76-79, 356), decision matrix mapping agents to core, research, GitHub, and orchestration tools (lines 151-222), and tool governance guidelines for adding new tools and agents (lines 328-349).

## Invokes — required
- doc ADR-002 — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:352

## Invoked by — required
- agent ADR-027 — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:381

## Concepts named — required, verbatim
- `ADR-003` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:18 — defined here
- `Role-Specific Tool Allocation` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:18 — defined here
- `Principle of least privilege` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:34 — used here
- `Context efficiency` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:35 — used here
- `Role clarity` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:36 — used here
- `Cross-session continuity` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:38 — used here
- `Semantic code understanding` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:39 — used here
- `Blanket tool allocation` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:43 — defined here
- `Tiered tool allocation` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:45 — defined here
- `Dynamic tool loading` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:46 — defined here
- `Core Operations` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:82 — defined here
- `Memory Systems` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:91 — defined here
- `Research Tools` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:100 — defined here
- `GitHub Integration` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:109 — defined here
- `Agent Orchestration` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:141 — defined here
- `Decision Matrix` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:149 — defined here
- `Anti-Patterns` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:273 — defined here
- `artifact-only edit scope` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:287 — defined here
- `Source code edit agents` — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:294 — defined here

## Structure
- # ADR-003: Role-Specific Tool Allocation for Multi-Agent System — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:18
- ## Context and Problem Statement — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:20
- ## Decision Drivers — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:32
- ## Considered Options — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:41
- ## Decision Outcome — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:48
- ### Consequences — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:52
- ### Confirmation — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:74
- ## Tool Categories — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:80
- ### Category 1: Core Operations — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:82
- ### Category 2: Memory Systems (Universal) — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:91
- ### Category 3: Research Tools — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:100
- ### Category 4: GitHub Integration — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:109
- #### GitHub Toolset Definitions — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:113
- #### Role-Specific GitHub Tool Allocation — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:127
- ### Category 5: Agent Orchestration — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:141
- ## Decision Matrix — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:149
- ### Core Operations by Role — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:151
- ### Specialty Tools by Role — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:176
- ## Complete Tool Allocations — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:200
- ## Pros and Cons of the Options — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:230
- ### Option 1: Blanket Tool Allocation — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:232
- ### Option 2: Role-Specific Tool Allocation (Chosen) — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:243
- ### Option 3: Tiered Tool Allocation — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:254
- ### Option 4: Dynamic Tool Loading — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:263
- ## Anti-Patterns — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:273
- ### ❌ DO NOT: Grant execute to non-implementation agents — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:275
- ### ⚠️ CLARIFICATION: Edit for handoff artifacts vs source code — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:281
- ### ❌ DO NOT: Give all agents research tools — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:296
- ### ❌ DO NOT: Grant agent orchestration tools widely — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:302
- ### ❌ DO NOT: Skip memory tools — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:308
- ### ❌ DO NOT: Add tools "just in case" — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:312
- "### ❌ DO NOT: Use blanket `github/*` allocation" — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:318
- ## Implementation Notes — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:326
- ### Adding a New Tool — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:328
- ### Adding a New Agent — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:336
- ### Tool Allocation Review Triggers — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:343
- ## Related Decisions — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:350
- ## More Information — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:354

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-003-agent-tool-selection-criteria.md:76 Cited path ".github/agents/*.agent.md" does not exist in repository (agent files located under src/copilot-cli/agents/ and src/vs-code-agents/).
- doc-drift · .agents/architecture/ADR-003-agent-tool-selection-criteria.md:352 Title cites "ADR-0002" with three leading zeros while referenced file and canonical ID is ADR-002.

## Observations
Provides a detailed and principled tool allocation taxonomy distinguishing shell execution (execute), general source code editing, and artifact-only editing restricted to .agents/ directories. Forbids blanket github/* inclusion in favor of functional toolsets (context, repos, issues, pull_requests, actions, code_security, secret_protection, dependabot).

## Context cost
18,191 bytes, ~4,500 tokens.
