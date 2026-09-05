---
package: rjm
path: .claude/skills/ai-agents-change-control/references/provenance.md
type: reference
bytes: 4253
unit: inv-rjm-81
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/references/provenance.md, sha256: 04ccff20a5972dda6a64eea54b0e39b152b0c950046a9924e4f23d856a453cb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-change-control/references/provenance.md

## Purpose — required, verbatim
> "A selected index of the drift-prone volatile facts for `ai-agents-change-control`. SKILL.md keeps the maintenance rule and the verified date; the per-fact re-verify commands live here because they are consulted only when editing the skill, not when using it to classify a change." — .claude/skills/ai-agents-change-control/references/provenance.md:3

## Design intent — required
Maintains an index of 13 volatile facts cited by `ai-agents-change-control` along with precise shell re-verification one-liners. By isolating verification commands and source line references into a dedicated table, it prevents documentation drift and ensures contributors can rapidly confirm or update line numbers and ADR statuses whenever underlying source files change.

## Phase — required
cross-phase

## Inputs — required
- Cited source files, scripts, ADRs, workflows, and governance documents across the repository.

## Outputs — required
none

## Invokes — required
- skill SKILL.md — .claude/skills/ai-agents-change-control/references/provenance.md:3
- script scripts/modules/investigation_allowlist.py — .claude/skills/ai-agents-change-control/references/provenance.md:11
- doc .agents/architecture/ADR-034-investigation-session-qa-exemption.md — .claude/skills/ai-agents-change-control/references/provenance.md:11
- script build/scripts/build_all.py — .claude/skills/ai-agents-change-control/references/provenance.md:12
- script scripts/validation/pr_commit_count.py — .claude/skills/ai-agents-change-control/references/provenance.md:13
- script scripts/ci/enforce_pr_validation.py — .claude/skills/ai-agents-change-control/references/provenance.md:13
- config lefthook.yml — .claude/skills/ai-agents-change-control/references/provenance.md:14
- script build/scripts/validate_plugin_version_bump.py — .claude/skills/ai-agents-change-control/references/provenance.md:15
- doc .agents/governance/PROJECT-CONSTRAINTS.md — .claude/skills/ai-agents-change-control/references/provenance.md:17
- doc .agents/governance/golden-principles.md — .claude/skills/ai-agents-change-control/references/provenance.md:17
- doc .agents/architecture/ADR-066-hook-fail-open-reconciliation.md — .claude/skills/ai-agents-change-control/references/provenance.md:18
- doc .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md — .claude/skills/ai-agents-change-control/references/provenance.md:18
- doc .agents/governance/FAILURE-MODES.md — .claude/skills/ai-agents-change-control/references/provenance.md:19
- config .github/workflows/agent-drift-detection.yml — .claude/skills/ai-agents-change-control/references/provenance.md:21
- script scripts/ci/ruleset_required_contexts.py — .claude/skills/ai-agents-change-control/references/provenance.md:22
- doc .agents/architecture/ADR-006-thin-workflows-testable-modules.md — .claude/skills/ai-agents-change-control/references/provenance.md:23
- script scripts/validation/checks_plugin.py — .claude/skills/ai-agents-change-control/references/provenance.md:24

## Invoked by — required
- skill ai-agents-change-control — .claude/skills/ai-agents-change-control/SKILL.md:130

## Concepts named — required, verbatim
- `Provenance and Re-Verification Table` — .claude/skills/ai-agents-change-control/references/provenance.md:1 — defined here
- `Investigation allowlist` — .claude/skills/ai-agents-change-control/references/provenance.md:11 — used here
- `build_all no-claude-writes invariant` — .claude/skills/ai-agents-change-control/references/provenance.md:12 — defined here
- `Commit count` — .claude/skills/ai-agents-change-control/references/provenance.md:13 — used here
- `Git hook jobs` — .claude/skills/ai-agents-change-control/references/provenance.md:14 — used here
- `SHA-pin tension` — .claude/skills/ai-agents-change-control/references/provenance.md:17 — defined here
- `skip-drift-check` — .claude/skills/ai-agents-change-control/references/provenance.md:21 — used here
- `Pinned required contexts` — .claude/skills/ai-agents-change-control/references/provenance.md:22 — defined here
- `Maintenance rule` — .claude/skills/ai-agents-change-control/references/provenance.md:26 — defined here

## Structure
- `# Provenance and Re-Verification Table` — .claude/skills/ai-agents-change-control/references/provenance.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Line 26 defines the maintenance rule: "any edit to a cited source line number or ADR status invalidates the matching row. Re-run the re-verify command and update the row in the same commit."
- Reminds contributors that because manifests carry no version (ADR-092), editing plugin content requires regenerating the Copilot mirror (`uv run python build/scripts/build_all.py`) without bumping manifest versions.

## Context cost
4,253 bytes; ~1,050 tokens.
