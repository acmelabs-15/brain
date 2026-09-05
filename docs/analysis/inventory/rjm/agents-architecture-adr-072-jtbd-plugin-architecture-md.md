---
package: rjm
path: .agents/architecture/ADR-072-jtbd-plugin-architecture.md
type: agent
bytes: 10206
unit: inv-rjm-29
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-072-jtbd-plugin-architecture.md, sha256: dd3585a127093a7612362aaf1737c13379ef32d464af6f14b6151f87364c8052}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-072-jtbd-plugin-architecture.md

## Purpose — required, verbatim
> "this ADR re-expresses those boundaries in job-to-be-done terms and adds per-harness emission for the non-agent artifact classes." — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:40-42

## Design intent — required
Architecture decision record defining a reorganization of plugin boundaries for an organizational distribution consumed by ~400 engineers across multiple harnesses (Claude Code, GitHub Copilot CLI, VS Code, Codex CLI, Cursor). Instead of structuring plugins according to internal file directory paths, it maps plugin boundaries to user jobs-to-be-done (`dev-lifecycle`, `quality-gates`, `session-protocol`, `agent-team`, and meta-plugin `project-toolkit`). Crucially, it preserves the existing asymmetric generator seam (`templates/agents` for agents, `.claude/` for commands/rules/hooks), mandates per-harness emission for missing targets (Codex, Cursor) with drift checks, and requires declared `dependencies` in `plugin.json` to prevent partial-install failures. Without this decision, consumers face harness coverage gaps, an unintuitive directory-shaped install menu, and silent failures from interdependent components.

## Phase — required
none

## Inputs — required
- Issue #1774 (parent epic #1072, v0.4.0 Framework Extraction) — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:19-20
- Plugin taxonomy of ADR-045 (`core-agents`, `framework-skills`, `session-protocol`, `quality-gates`) — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:20-21, 39-40
- Interdependence analysis from issue #1148 and issue #1773 decision D3 — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:109-111, 199
- Canonical sources in `.claude/` (`.claude/rules/*.md`, `.claude/commands/*.md`, `.claude/hooks/*.py`) — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:62-63
- Canonical agent templates in `templates/agents/*.shared.md` — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:57
- Platform mapping configuration in `templates/platforms/copilot-cli.yaml` — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:66
- Marketplace manifest in `.claude-plugin/marketplace.json` — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:200

## Outputs — required
- Five-plugin capability taxonomy: `dev-lifecycle`, `quality-gates`, `session-protocol`, `agent-team`, `project-toolkit` — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:83-89
- Per-harness emitters and drift checks for Codex (`AGENTS.md` fragments) and Cursor (`.cursor/rules/*.mdc`) — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:98-100
- Capability plugin manifests declaring dependencies in `plugin.json` — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:112
- Marketplace aliases and migration path for legacy directory-named plugins (`claude-agents`, `project-toolkit`) — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:32, 124-125, 186-188

## Invokes — required
- agent ADR-045 — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:20
- agent ADR-002 — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:197
- agent ADR-042 — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:197
- agent ADR-006 — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:197
- script build/generate_agents.py — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:58
- script build/scripts/generate_commands.py — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:61
- script generate_rules.py — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:61
- script generate_hooks.py — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:61
- script build/scripts/build_all.py — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:62
- config templates/platforms/copilot-cli.yaml — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:66
- config .claude-plugin/marketplace.json — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:200

## Invoked by — required
- doc README.md — .agents/architecture/README.md:177

## Concepts named — required, verbatim
- `JTBD-Based Plugin Architecture` — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:12 — defined here
- `Per-Harness Emission` — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:12 — defined here
- `Framework Extraction` — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:19-20 — used here
- `job-to-be-done` — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:41 — used here
- `asymmetric` — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:51 — defined here
- `dev-lifecycle` — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:85 — defined here
- `quality-gates` — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:86 — defined here
- `session-protocol` — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:87 — defined here
- `agent-team` — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:88 — defined here
- `project-toolkit` — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:89 — defined here
- `drift check` — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:99 — used here
- `Definition-of-Ready` — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:144 — used here
- `Vendor Lock-in` — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:182 — used here

## Structure
- # ADR-072: JTBD-Based Plugin Architecture with Per-Harness Emission
- ## Status
- ## Date
- ## Distribution context
- ## Context
- ### Current generation model (corrected; the seam is asymmetric)
- ## Decision
- ### 1. Slice plugins by job-to-be-done (capability)
- ### 2. Reuse the existing source seam; do NOT relocate canonical sources
- ### 3. Declare cross-plugin dependencies so a partial install cannot break
- ### 4. Milestoned, with M5 as the contract-breaking step
- ## Conditions to reach Accepted (architect review, APPROVE WITH CHANGES)
- ## Consequences
- ### Positive
- ### Negative / Costs
- ### Tracked follow-ups (not silent deferrals)
- ## Alternatives Considered
- ## Reversibility and Vendor Lock-in
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .agents/architecture/ADR-072-jtbd-plugin-architecture.md:48 · Mentions Cursor rules at `.cursor/rules/*.mdc` which do not exist in the repository because the record is proposed and unimplemented (`implemented: false`).

## Observations
- Demonstrates how architecture decision records in rjm capture conditional governance states ("Proposed... MUST clear the five approval conditions before moving to Accepted"). ADR-073 and `ADR-TEMPLATE.md` both cite ADR-072 as the motivating exemplar for preserving nuance in human-readable `## Status` prose alongside machine-readable frontmatter.
- Formulates the "asymmetric seam" architecture of the rjm repository: agents use dual frontmatter templates under `templates/agents/*.shared.md`, whereas commands, rules, and hooks use `.claude/` as canonical source and generate outward to other harness formats.

## Context cost
10206 bytes (~2500 tokens). Architecture decision record specifying JTBD-based plugin architecture.
