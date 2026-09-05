---
package: rjm
path: .claude/skills/ai-agents-architecture-contract/references/provenance.md
type: reference
bytes: 5887
unit: inv-rjm-80
in_scope_via: .claude/skills/ai-agents-architecture-contract/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-architecture-contract/references/provenance.md, sha256: 46ce7d8ca0b042ae17a0fc7c55b6d3f24de0edf5b2645e84ea6a8bbc2ba425d5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-architecture-contract/references/provenance.md

## Purpose — required, verbatim
> "The drift-prone volatile facts behind `ai-agents-architecture-contract`. SKILL.md keeps the maintenance rule, the verified date, and the sibling map; the per-fact sources and re-verify commands live here because they are consulted only when editing or auditing the skill, not when using it to answer \"which tree is canonical\"." — .claude/skills/ai-agents-architecture-contract/references/provenance.md:3

## Design intent — required
Provides a centralized, reproducible audit table pairing every volatile architectural claim in `ai-agents-architecture-contract` with its authoritative source file, line reference, and executable one-liner verification command. Without this reference, volatile facts across the codebase (such as generator counts, hook registration numbers, and test exclusions) would silently drift without an auditable verification trail.

## Phase — required
cross-phase

## Inputs — required
Source files and configurations cited across the claims table: `.agents/architecture/ADR-*.md`, `build/scripts/build_all.py`, `.agents/governance/GENERATOR-FILES.md`, `templates/README.md`, `scripts/sync_plugin_lib.py`, `.claude/settings.json`, `.claude/hooks/hooks.json`, `src/copilot-cli/hooks/hooks.json`, `.claude-plugin/plugin.json`, `CONTRIBUTING.md`, `.github/workflows/pytest.yml`, `pyproject.toml`, and git object database.

## Outputs — required
none

## Invokes — required
- skill agent-harness-reference — .claude/skills/ai-agents-architecture-contract/references/provenance.md:18

## Invoked by — required
- skill ai-agents-architecture-contract — .claude/skills/ai-agents-architecture-contract/SKILL.md:171

## Concepts named — required, verbatim
`Provenance and Re-Verification Table` — .claude/skills/ai-agents-architecture-contract/references/provenance.md:1 — defined here
`volatile facts` — .claude/skills/ai-agents-architecture-contract/references/provenance.md:3 — used here
`maintenance rule` — .claude/skills/ai-agents-architecture-contract/references/provenance.md:3 — used here
`test_operational_skills_match_current_hook_registration_counts` — .claude/skills/ai-agents-architecture-contract/references/provenance.md:7 — used here
`Asymmetric seam` — .claude/skills/ai-agents-architecture-contract/references/provenance.md:12 — used here
`no-write invariant` — .claude/skills/ai-agents-architecture-contract/references/provenance.md:14 — used here
`manual sync` — .claude/skills/ai-agents-architecture-contract/references/provenance.md:15 — used here
`SYNC_PAIRS` — .claude/skills/ai-agents-architecture-contract/references/provenance.md:16 — used here
`tool-call hook` — .claude/skills/ai-agents-architecture-contract/references/provenance.md:17 — used here
`hook failure policy` — .claude/skills/ai-agents-architecture-contract/references/provenance.md:18 — used here
`Fail-closed reversal` — .claude/skills/ai-agents-architecture-contract/references/provenance.md:19 — used here
`Dispatcher modes` — .claude/skills/ai-agents-architecture-contract/references/provenance.md:20 — used here
`Memory sync direction` — .claude/skills/ai-agents-architecture-contract/references/provenance.md:22 — used here
`Ruff changed-file and whole-tree count ratchets` — .claude/skills/ai-agents-architecture-contract/references/provenance.md:26 — used here
`Observable-evidence enforcement doctrine` — .claude/skills/ai-agents-architecture-contract/references/provenance.md:28 — defined here
`verification-based governance` — .claude/skills/ai-agents-architecture-contract/references/provenance.md:28 — used here

## Structure
# Provenance and Re-Verification Table — .claude/skills/ai-agents-architecture-contract/references/provenance.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/ai-agents-architecture-contract/references/provenance.md:23 · Re-verification command cites test file tests/build_scripts/test_copilot_dispatcher_artifact.py, which does not exist in the repository.

## Observations
Exemplary pattern for living documentation: pairs each substantive factual claim with an exact line-level source and a re-verification command. Documents the doctrine transition from "verification-based enforcement" to "observable-evidence enforcement doctrine" under PR #5135 following the deletion of SESSION-PROTOCOL.md.

## Context cost
5887 bytes, ~1500 tokens.
