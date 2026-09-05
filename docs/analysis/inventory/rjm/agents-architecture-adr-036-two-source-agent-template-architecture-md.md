---
package: rjm
path: .agents/architecture/ADR-036-two-source-agent-template-architecture.md
type: agent
bytes: 13002
unit: inv-rjm-14
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-036-two-source-agent-template-architecture.md, sha256: b3e971d5b084d026cc3d84d44c0a28f05a39b97de272200ba3f3ef611343e274}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-036-two-source-agent-template-architecture.md

## Purpose — required, verbatim
> "Adopt a **two-source architecture**:" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:50 (no explicit purpose statement)

## Design intent — required
Documents the architecture decision to maintain two distinct source trees for multi-platform agents: hand-maintained Claude Code prompts with platform-specific features (`src/claude/*.md`) and shared template prompts (`templates/agents/*.shared.md`) that automatically generate Copilot CLI and VS Code Copilot agent files via build scripts. Captures the accepted trade-off of manual bidirectional synchronization toil across both source trees for shared governance sections, which is preserved as operative procedure pending migration to ADR-052.

## Phase — required
none

## Inputs — required
- Three-platform deployment targets: `Claude Code` (`src/claude/*.md`), `GitHub Copilot CLI` (`src/copilot-cli/agents/*.agent.md`), and `VS Code Copilot` (`src/vs-code-agents/*.md`) — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:28-30
- Strategic decision issue: `Issue #124` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:226
- Historical retrospectives and debate logs: `PR #715` learnings — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:267, 272; and 6-agent debate log `.agents/critique/ADR-052-debate-log.md` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:16, 242

## Outputs — required
- Architectural decision: `Adopt a **two-source architecture**:` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:50
- Generation mapping: `templates/agents/*.shared.md` generates `src/copilot-cli/agents/*.agent.md` and `src/vs-code-agents/*.md` via `build/generate_agents.py` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:66
- Catalog generation: `build/generate_agent_catalog.py` treats `templates/agents/` as system of record for `docs/agent-catalog.md` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:18
- Synchronization requirement: `When adding content that applies to ALL platforms (like the Traceability Validation section), you MUST update BOTH sources:` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:70

## Invokes — required
- doc ADR-052 — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:7
- script build/generate_agents.py — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:18
- script build/generate_agent_catalog.py — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:18
- script build/scripts/build_all.py — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:18
- script scripts/validation/git_hook_policy.py — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:162
- config lefthook.yml — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:18
- doc .agents/critique/ADR-052-debate-log.md — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:16
- doc ADR-029 — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:233
- doc ADR-086 — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:234

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:203
- doc templates/AGENTS.md — templates/AGENTS.md:15
- doc templates/README.md — templates/README.md:5

## Concepts named — required, verbatim
- `Two-Source Agent Template Architecture` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:12 — defined here
- `two-source architecture` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:50 — defined here
- `ADR-052` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:7, 16, 232 — used here
- `adr-review` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:16 — used here
- `Claude Code` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:28, 54 — used here
- `GitHub Copilot CLI` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:29 — used here
- `Copilot CLI` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:62, 186 — used here
- `VS Code Copilot` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:30, 186 — used here
- `single-source architecture` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:38 — used here
- `three-source architecture` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:43 — used here
- `MCP tools` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:34, 56, 91 — used here
- `Serena integration` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:34, 56 — used here
- `handoff protocols` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:56 — used here
- `Shared Templates` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:60 — defined here
- `Synchronization Requirement` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:68 — defined here
- `Traceability Validation` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:70 — used here
- `Lefthook` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:154, 157 — used here
- `Platform Capability Matrix` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:18, 180 — defined here
- `GitHub Copilot (Web)` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:186 — used here
- `Multi-Agent Orchestration` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:190 — used here
- `Agent Skills` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:191 — used here
- `Persistent Memory` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:195 — used here
- `Intentional Divergence` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:18, 215 — defined here
- `ADR-029` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:233 — used here
- `ADR-086` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:234 — used here

## Structure
- ## Status — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:14
- ## Date — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:20
- ## Context — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:24
- ## Decision — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:48
- ### Source 1: Claude-Specific (`src/claude/*.md`) — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:52
- ### Source 2: Shared Templates (`templates/agents/*.shared.md`) — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:60
- ### Synchronization Requirement — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:68
- ## Rationale — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:77
- ### Alternatives Considered — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:79
- ### Trade-offs — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:87
- ## Consequences — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:96
- ### Positive — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:98
- ### Negative — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:105
- ### Neutral — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:111
- ## Implementation Notes — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:116
- ### Directory Structure — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:118
- ### Synchronization Procedure — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:140
- ### Lefthook Pre-Commit Behavior — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:157
- ### Common Mistake — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:167
- ## Platform Capability Matrix — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:180
- ### Key Platform Constraints (GitHub Copilot Web) — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:197
- ### Sources — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:208
- ### Intentional Divergence — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:215
- ## Strategic Dependency — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:224
- ## Related Decisions — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:230
- ## References — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:236
- ### Implementation Artifacts — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:238
- ### Planning & Design Documents — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:244
- ### Session Documentation — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:252
- ### Serena Memories (Cross-Session Context) — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:257
- ### Related Pull Requests — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:265

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-036-two-source-agent-template-architecture.md:249 · References `.agents/architecture/2-variant-consolidation-review.md` which does not exist at that path (actual file is at `.agents/critique/2-variant-consolidation-review.md`).
- missing-path · .agents/architecture/ADR-036-two-source-agent-template-architecture.md:254 · References `.agents/sessions/2025-12-27-session-68-template-sync-check-analysis.md` which does not exist at that path (the file is archived at `.agents/archive/sessions/2025-12-27-session-68-template-sync-check-analysis.md`).
- internal-contradiction · .agents/architecture/ADR-036-two-source-agent-template-architecture.md:18, 44, 122 · Operative procedure preamble cites 31 `templates/agents/*.shared.md` files while decision context and directory structure describe 18 agent files and 18 template files (total 36 source files).

## Observations
Documents the operational reality of dual-source multi-platform agent engineering in rjm: Claude Code's extensive native tool and prompt features required hand-crafted prompts, while Copilot CLI and VS Code could share templated prompts. The manual synchronization toil identified in PR #715 led to the superseding decision ADR-052 (single template source with platform compiler), but ADR-036 remained operative procedure until ADR-052 migration completed.

## Context cost
13002 bytes, ~3250 tokens. Loads no external files.
