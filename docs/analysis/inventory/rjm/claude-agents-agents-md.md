---
package: rjm
path: .claude/agents/AGENTS.md
type: agent
bytes: 11687
unit: inv-rjm-63
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/agents/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/AGENTS.md

## Purpose — required, verbatim
> "This document describes the 19 AI agents defined for Claude Code CLI and the critical workflow rules for maintaining them." — .claude/agents/AGENTS.md:3

## Design intent — required
Defines the authoritative architectural taxonomy, synchronization protocols, catalog of 19 specialized subagents, and file structural rules for Claude Code agents in `ai-agents`. It establishes the relationship between hand-maintained sources (`src/claude/`), runtime installed copies (`.claude/agents/`), and cross-platform shared templates (`templates/agents/`), enforcing bidirectional synchronization procedures (ADR-036 / ADR-052) and automated CI drift detection (80% similarity threshold) so that improvements and security gates are preserved across Claude, VS Code, and Copilot CLI platforms without manual omission or desynchronization.

## Phase — required
cross-phase

## Inputs — required
- Hand-maintained Claude agent definitions in `src/claude/*.md` — .claude/agents/AGENTS.md:20
- Runtime installed agent definitions in `.claude/agents/*.md` — .claude/agents/AGENTS.md:26
- Platform-agnostic shared templates in `templates/agents/` — .claude/agents/AGENTS.md:36
- Procedural governance from `ADR-036` and `ADR-052` — .claude/agents/AGENTS.md:15

## Outputs — required
- Synchronized agent definitions in `src/claude/{agent}.md` — .claude/agents/AGENTS.md:40
- Generated agent definitions in `src/vs-code-agents/*.agent.md` and `src/copilot-cli/agents/*.agent.md` — .claude/agents/AGENTS.md:122
- Drift detection issues created on GitHub by CI workflow — .claude/agents/AGENTS.md:89
- Installed runtime agent copies in `.claude/agents/` — .claude/agents/AGENTS.md:35

## Invokes — required
- script generate_agents.py — .claude/agents/AGENTS.md:67
- script detect_agent_drift.py — .claude/agents/AGENTS.md:316
- doc installation.md — .claude/agents/AGENTS.md:43
- agent analyst — .claude/agents/AGENTS.md:219
- agent implementer — .claude/agents/AGENTS.md:220
- agent orchestrator — .claude/agents/AGENTS.md:221
- doc AGENTS.md — .claude/agents/AGENTS.md:357

## Invoked by — required
none

## Concepts named — required, verbatim
- `Claude Code Agents` — .claude/agents/AGENTS.md:1 — defined here
- `Two-Source Agent Template Architecture` — .claude/agents/AGENTS.md:15 — used here
- `Bidirectional Synchronization` — .claude/agents/AGENTS.md:49 — defined here
- `Drift Detection` — .claude/agents/AGENTS.md:84 — defined here
- `File Naming` — .claude/agents/AGENTS.md:92 — defined here
- `Coordination Agents` — .claude/agents/AGENTS.md:137 — defined here
- `Analysis Agents` — .claude/agents/AGENTS.md:146 — defined here
- `Implementation Agents` — .claude/agents/AGENTS.md:154 — defined here
- `Strategic Agents` — .claude/agents/AGENTS.md:164 — defined here
- `Support Agents` — .claude/agents/AGENTS.md:172 — defined here
- `Activation Profile` — .claude/agents/AGENTS.md:203 — defined here
- `Memory Protocol` — .claude/agents/AGENTS.md:208 — defined here
- `Handoff Options` — .claude/agents/AGENTS.md:209 — defined here
- `Task Tool` — .claude/agents/AGENTS.md:216 — used here
- `Feature Development` — .claude/agents/AGENTS.md:227 — defined here
- `Quick Fix` — .claude/agents/AGENTS.md:230 — defined here
- `Strategic Decision` — .claude/agents/AGENTS.md:233 — defined here
- `PR Review` — .claude/agents/AGENTS.md:236 — defined here
- `Memory Router` — .claude/agents/AGENTS.md:249 — used here

## Structure
- `# Claude Code Agents` — .claude/agents/AGENTS.md:1
- `## Overview` — .claude/agents/AGENTS.md:5
- `## Source vs Installation Relationship` — .claude/agents/AGENTS.md:17
- `## Critical Workflow Rules` — .claude/agents/AGENTS.md:47
- `### Rule 1: Bidirectional Synchronization (CRITICAL - ADR-036)` — .claude/agents/AGENTS.md:49
- `### Rule 2: Drift Detection` — .claude/agents/AGENTS.md:84
- `### Rule 3: File Naming` — .claude/agents/AGENTS.md:92
- `## Architecture` — .claude/agents/AGENTS.md:103
- `## Agent Catalog` — .claude/agents/AGENTS.md:135
- `### Coordination Agents` — .claude/agents/AGENTS.md:137
- `### Analysis Agents` — .claude/agents/AGENTS.md:146
- `### Implementation Agents` — .claude/agents/AGENTS.md:154
- `### Strategic Agents` — .claude/agents/AGENTS.md:164
- `### Support Agents` — .claude/agents/AGENTS.md:172
- `## Agent File Structure` — .claude/agents/AGENTS.md:183
- `### Frontmatter` — .claude/agents/AGENTS.md:187
- `### Required Sections` — .claude/agents/AGENTS.md:198
- `## Invocation` — .claude/agents/AGENTS.md:214
- `### Via Task Tool` — .claude/agents/AGENTS.md:216
- `### Standard Workflows` — .claude/agents/AGENTS.md:224
- `## Claude-Specific Features` — .claude/agents/AGENTS.md:242
- `### Tool Syntax` — .claude/agents/AGENTS.md:244
- `### GitHub Skill Integration` — .claude/agents/AGENTS.md:264
- `## Maintenance Procedures` — .claude/agents/AGENTS.md:280
- `### Adding a New Agent` — .claude/agents/AGENTS.md:282
- `### Modifying an Existing Agent` — .claude/agents/AGENTS.md:291
- `### Validating Changes` — .claude/agents/AGENTS.md:309
- `## Error Handling` — .claude/agents/AGENTS.md:324
- `## Security Considerations` — .claude/agents/AGENTS.md:332
- `## Monitoring` — .claude/agents/AGENTS.md:341
- `## Related Documentation` — .claude/agents/AGENTS.md:351

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- internal-contradiction · .claude/agents/AGENTS.md:111 · Architecture diagram notes 3 named agents plus '... 15 more agents' (total 18), contradicting line 3 and the catalog table which define 19 agents.
- missing-path · .claude/agents/AGENTS.md:361 · References Serena memory file `.serena/memories/usage-mandatory.md` which is excluded from repository scope.

## Observations
- Exact duplicate of `src/claude/AGENTS.md` (identified in duplication ledger `docs/analysis/manifest/rjm-duplicates.md` EXACT row 4).
- Establishes two-source synchronization rules: `src/claude/` is hand-maintained for Claude Code CLI, while `templates/agents/` is the template source for VS Code and Copilot CLI.
- Defines standard multi-agent workflows: Feature Development (orchestrator -> analyst -> architect -> milestone-planner -> critic -> implementer -> qa -> retrospective), Quick Fix (implementer -> qa), Strategic Decision (independent-thinker -> high-level-advisor -> task-decomposer), and PR Review.
- Sets an 80% similarity threshold for weekly CI drift detection (`drift-detection.yml`) between Claude agents and VS Code agents.

## Context cost
11687 bytes (~2920 tokens).
