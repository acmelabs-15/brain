---
package: rjm
path: .claude/skills/ai-agents-architecture-contract/SKILL.md
type: skill
bytes: 21555
unit: inv-rjm-80
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-architecture-contract/SKILL.md, sha256: 81d3e63637b711e878b4208ad67e95930dfefd38410fa5add64f8b2fb59b9f70}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-architecture-contract/SKILL.md

## Purpose — required, verbatim
> "Load-bearing design decisions for this repo as a contract you check before changing anything. Covers the asymmetric generation seam, source-of-truth per tree, hook runtime failure policy, memory tiers, plugin surfaces, invariants, and known-weak points." — .claude/skills/ai-agents-architecture-contract/SKILL.md:3

## Design intent — required
Functions as the core architectural contract and governance blueprint for the repository before any file modification across trees is performed. Formally defines the asymmetric generation seam (templates generate Copilot CLI and VS Code agents; `.claude/` is canonical for rules, skills, commands, and hooks; `src/claude/*.md` is hand-written canonical requiring manual dual-edits), establishes strict no-write invariants preventing generators from modifying `.claude/` (REQ-003-010), catalogs hook failure policies per family, outlines memory tiers, and mandates that rules without automated verification gates are non-enforceable.

## Phase — required
cross-phase

## Inputs — required
Repository structure across multiple trees, generator configurations in `build/scripts/build_all.py`, platform templates in `templates/platforms/*.yaml`, ADR status files under `.agents/architecture/`, hook configurations in `.claude/settings.json`, `.claude/hooks/hooks.json`, and `src/copilot-cli/hooks/hooks.json`.

## Outputs — required
Architectural assessments, source-of-truth designations, invariant compliance checks, and direction-of-edit decisions before touching source or generated trees.

## Invokes — required
- skill ai-agents-failure-archaeology — .claude/skills/ai-agents-architecture-contract/SKILL.md:44
- skill ai-agents-change-control — .claude/skills/ai-agents-architecture-contract/SKILL.md:70
- skill agent-harness-reference — .claude/skills/ai-agents-architecture-contract/SKILL.md:87
- reference references/hook-runtime.md — .claude/skills/ai-agents-architecture-contract/SKILL.md:91
- skill ai-agents-generation-and-release — .claude/skills/ai-agents-architecture-contract/SKILL.md:121
- reference references/weak-points.md — .claude/skills/ai-agents-architecture-contract/SKILL.md:138
- skill ai-agents-validation-and-qa — .claude/skills/ai-agents-architecture-contract/SKILL.md:144
- reference references/provenance.md — .claude/skills/ai-agents-architecture-contract/SKILL.md:171
- skill ai-agents-debugging-playbook — .claude/skills/ai-agents-architecture-contract/SKILL.md:173
- skill ai-agents-config-catalog — .claude/skills/ai-agents-architecture-contract/SKILL.md:173

## Invoked by — required
- skill ai-agents-change-control — .claude/skills/ai-agents-change-control/SKILL.md:56
- skill ai-agents-generation-and-release — .claude/skills/ai-agents-generation-and-release/SKILL.md:3
- skill ai-agents-failure-archaeology — .claude/skills/ai-agents-failure-archaeology/SKILL.md:137
- skill ai-agents-config-catalog — .claude/skills/ai-agents-config-catalog/SKILL.md:18

## Concepts named — required, verbatim
`ai-agents-architecture-contract` — .claude/skills/ai-agents-architecture-contract/SKILL.md:2 — defined here
`asymmetric generation seam` — .claude/skills/ai-agents-architecture-contract/SKILL.md:3 — defined here
`source-of-truth` — .claude/skills/ai-agents-architecture-contract/SKILL.md:3 — defined here
`hook runtime failure policy` — .claude/skills/ai-agents-architecture-contract/SKILL.md:3 — defined here
`memory tiers` — .claude/skills/ai-agents-architecture-contract/SKILL.md:3 — defined here
`known-weak points` — .claude/skills/ai-agents-architecture-contract/SKILL.md:3 — defined here
`observable evidence` — .claude/skills/ai-agents-architecture-contract/SKILL.md:11 — used here
`ASYMMETRIC` — .claude/skills/ai-agents-architecture-contract/SKILL.md:25 — defined here
`Source-of-truth table` — .claude/skills/ai-agents-architecture-contract/SKILL.md:30 — defined here
`Canonical source` — .claude/skills/ai-agents-architecture-contract/SKILL.md:32 — defined here
`Generated or mirrored output` — .claude/skills/ai-agents-architecture-contract/SKILL.md:32 — defined here
`MANUAL dual edit` — .claude/skills/ai-agents-architecture-contract/SKILL.md:35 — used here
`REQ-003-010` — .claude/skills/ai-agents-architecture-contract/SKILL.md:44 — used here
`no-write invariant` — .claude/skills/ai-agents-architecture-contract/SKILL.md:44 — defined here
`drift check` — .claude/skills/ai-agents-architecture-contract/SKILL.md:44 — used here
`detect_agent_drift.py` — .claude/skills/ai-agents-architecture-contract/SKILL.md:46 — used here
`Memory-first` — .claude/skills/ai-agents-architecture-contract/SKILL.md:52 — used here
`Distributed handoffs` — .claude/skills/ai-agents-architecture-contract/SKILL.md:53 — used here
`Two-source agent templates` — .claude/skills/ai-agents-architecture-contract/SKILL.md:54 — used here
`Claude-first template strategy` — .claude/skills/ai-agents-architecture-contract/SKILL.md:55 — used here
`Skill-first over subagent dispatch` — .claude/skills/ai-agents-architecture-contract/SKILL.md:57 — used here
`Tier 1 semantic` — .claude/skills/ai-agents-architecture-contract/SKILL.md:58 — used here
`Tier 2 episodic` — .claude/skills/ai-agents-architecture-contract/SKILL.md:58 — used here
`Tier 3 causal graph` — .claude/skills/ai-agents-architecture-contract/SKILL.md:58 — used here
`prevention-first, fail-closed-and-loud` — .claude/skills/ai-agents-architecture-contract/SKILL.md:59 — used here
`Plugin hook runtime-contract verification` — .claude/skills/ai-agents-architecture-contract/SKILL.md:60 — used here
`Consolidated per-event hook dispatcher` — .claude/skills/ai-agents-architecture-contract/SKILL.md:61 — used here
`JTBD plugin slicing` — .claude/skills/ai-agents-architecture-contract/SKILL.md:62 — used here
`LSP-first navigation` — .claude/skills/ai-agents-architecture-contract/SKILL.md:64 — used here
`Name-based dispatch everywhere` — .claude/skills/ai-agents-architecture-contract/SKILL.md:68 — defined here
`Verification-based governance` — .claude/skills/ai-agents-architecture-contract/SKILL.md:70 — defined here
`plugin.json` — .claude/skills/ai-agents-architecture-contract/SKILL.md:103 — used here
`invariants table` — .claude/skills/ai-agents-architecture-contract/SKILL.md:123 — defined here
`universal.md` — .claude/skills/ai-agents-architecture-contract/SKILL.md:132 — used here
`Maintenance rule` — .claude/skills/ai-agents-architecture-contract/SKILL.md:173 — defined here

## Structure
# AI Agents Architecture Contract — .claude/skills/ai-agents-architecture-contract/SKILL.md:8
## Triggers — .claude/skills/ai-agents-architecture-contract/SKILL.md:13
## Process — .claude/skills/ai-agents-architecture-contract/SKILL.md:21
### Phase 1: Locate the source of truth before touching any file — .claude/skills/ai-agents-architecture-contract/SKILL.md:23
### Phase 2: Load the load-bearing decisions — .claude/skills/ai-agents-architecture-contract/SKILL.md:48
### Phase 3: Understand the hook runtime and its failure policy — .claude/skills/ai-agents-architecture-contract/SKILL.md:72
### Phase 4: Understand the memory architecture — .claude/skills/ai-agents-architecture-contract/SKILL.md:93
### Phase 5: Know the plugin and product surfaces — .claude/skills/ai-agents-architecture-contract/SKILL.md:101
### Phase 6: Check the invariants table before you change anything — .claude/skills/ai-agents-architecture-contract/SKILL.md:123
### Phase 7: Account for the known-weak points — .claude/skills/ai-agents-architecture-contract/SKILL.md:136
## Anti-Patterns — .claude/skills/ai-agents-architecture-contract/SKILL.md:149
## Verification — .claude/skills/ai-agents-architecture-contract/SKILL.md:159
## Provenance and Maintenance — .claude/skills/ai-agents-architecture-contract/SKILL.md:169

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/ai-agents-architecture-contract/SKILL.md:97 · Guard test `tests/build_scripts/test_copilot_dispatcher_artifact.py` cited in the Phase 4 observation loop does not exist in the repository.

## Observations
The central architectural authority for `rjm`. Articulates the asymmetric generation model (templates for Copilot CLI / VS Code agents; `.claude/` canonical for rules/skills/commands/hooks; `src/claude/*.md` manual dual edit). Enforces that generators NEVER write to `.claude/` (REQ-003-010, exit code 2). Explicitly describes why plugins omit version numbers (favouring git commit SHA freshness resolution over manual version bumping).

## Context cost
33194 bytes, ~8300 tokens (including loaded references hook-runtime.md, provenance.md, and weak-points.md).
