---
package: rjm
path: .claude/skills/ai-agents-change-control/SKILL.md
type: skill
bytes: 15510
unit: inv-rjm-81
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/SKILL.md, sha256: f8f0c4123832af7d146b3fd9b057b5886f1eb103bbaa48514c118bf478b9bcb2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-change-control/SKILL.md

## Purpose — required, verbatim
> "Change control for this repo. Classify a change (docs-only, investigation-only, code, plugin content, hook, workflow, ADR governance), map each class to the gates it triggers, and hold the non-negotiables with the incident behind each rule. Use when you say `classify this change`, `what gates does this change trigger`, `which rules are non-negotiable`. Do NOT use for producing test evidence (use `ai-agents-validation-and-qa`) or incident history (use `ai-agents-failure-archaeology`)." — .claude/skills/ai-agents-change-control/SKILL.md:3

## Design intent — required
Establishes the governance, classification, and gate-triggering policy for all modifications across the repository. It classifies every change into one or more categories (docs-only, investigation-only, code, plugin content, git hook config, Claude lifecycle hook, workflow, ADR/governance, or canonical-source edit), pairs each class with its triggered automated gates, sequences local-to-CI gate execution via a 4-rung ladder, and enforces 12 non-negotiable repository rules grounded in specific historical failures. Without it, contributors and agents would lack clear gate obligations, risk bypassing critical verification steps, or re-introduce failure modes previously eliminated by ADRs.

## Phase — required
cross-phase

## Inputs — required
- Staged files and git working tree diff.
- Classification category definitions (Phase 1).
- Single source of truth investigation allowlist from `scripts/modules/investigation_allowlist.py`.
- Pre-commit/pre-push/CI configuration from `lefthook.yml` and `.github/workflows/`.
- Non-negotiables table (Phase 4) and cited ADRs/incident retros.

## Outputs — required
none

## Invokes — required
- skill ai-agents-validation-and-qa — .claude/skills/ai-agents-change-control/SKILL.md:3
- skill ai-agents-failure-archaeology — .claude/skills/ai-agents-change-control/SKILL.md:3
- doc .agents/governance/TESTING-RIGOR.md — .claude/skills/ai-agents-change-control/SKILL.md:34
- script scripts/modules/investigation_allowlist.py — .claude/skills/ai-agents-change-control/SKILL.md:41
- doc .agents/architecture/ADR-034-investigation-session-qa-exemption.md — .claude/skills/ai-agents-change-control/SKILL.md:52
- skill ai-agents-generation-and-release — .claude/skills/ai-agents-change-control/SKILL.md:56
- skill ai-agents-architecture-contract — .claude/skills/ai-agents-change-control/SKILL.md:56
- script build/scripts/build_all.py — .claude/skills/ai-agents-change-control/SKILL.md:56
- script build/scripts/validate_plugin_version_bump.py — .claude/skills/ai-agents-change-control/SKILL.md:65
- skill ai-agents-config-catalog — .claude/skills/ai-agents-change-control/SKILL.md:67
- script build/generate_agents.py — .claude/skills/ai-agents-change-control/SKILL.md:69
- reference references/incident-history.md — .claude/skills/ai-agents-change-control/SKILL.md:71
- script scripts/validation/pre_pr.py — .claude/skills/ai-agents-change-control/SKILL.md:75
- reference references/gate-ladder.md — .claude/skills/ai-agents-change-control/SKILL.md:77
- doc .claude/rules/universal.md — .claude/skills/ai-agents-change-control/SKILL.md:85
- doc .agents/governance/PROJECT-CONSTRAINTS.md — .claude/skills/ai-agents-change-control/SKILL.md:88
- doc .claude/rules/canonical-source-mirror.md — .claude/skills/ai-agents-change-control/SKILL.md:93
- doc .agents/governance/FAILURE-MODES.md — .claude/skills/ai-agents-change-control/SKILL.md:94
- reference references/provenance.md — .claude/skills/ai-agents-change-control/SKILL.md:130

## Invoked by — required
- skill ai-agents-architecture-contract — .claude/skills/ai-agents-architecture-contract/SKILL.md:70
- skill ai-agents-validation-and-qa — .claude/skills/ai-agents-validation-and-qa/SKILL.md:29
- skill ai-agents-failure-archaeology — .claude/skills/ai-agents-failure-archaeology/SKILL.md:59
- skill ai-agents-config-catalog — .claude/skills/ai-agents-config-catalog/SKILL.md:3
- skill ai-agents-build-and-env — .claude/skills/ai-agents-build-and-env/SKILL.md:212
- skill ai-agents-generation-and-release — .claude/skills/ai-agents-generation-and-release/SKILL.md:35
- skill ai-agents-research-frontier — .claude/skills/ai-agents-research-frontier/SKILL.md:75
- skill ai-agents-research-methodology — .claude/skills/ai-agents-research-methodology/SKILL.md:148

## Concepts named — required, verbatim
- `Change control` — .claude/skills/ai-agents-change-control/SKILL.md:3 — defined here
- `verification-based enforcement` — .claude/skills/ai-agents-change-control/SKILL.md:12 — defined here
- `gate` — .claude/skills/ai-agents-change-control/SKILL.md:15 — defined here
- `drift gate` — .claude/skills/ai-agents-change-control/SKILL.md:15 — defined here
- `canonical source` — .claude/skills/ai-agents-change-control/SKILL.md:15 — defined here
- `Docs-only` — .claude/skills/ai-agents-change-control/SKILL.md:32 — defined here
- `Investigation-only` — .claude/skills/ai-agents-change-control/SKILL.md:33 — defined here
- `Code` — .claude/skills/ai-agents-change-control/SKILL.md:34 — defined here
- `Plugin content` — .claude/skills/ai-agents-change-control/SKILL.md:35 — defined here
- `Git hook configuration` — .claude/skills/ai-agents-change-control/SKILL.md:36 — defined here
- `Claude lifecycle hook` — .claude/skills/ai-agents-change-control/SKILL.md:37 — defined here
- `Workflow` — .claude/skills/ai-agents-change-control/SKILL.md:38 — defined here
- `ADR / governance` — .claude/skills/ai-agents-change-control/SKILL.md:39 — defined here
- `investigation-only allowlist` — .claude/skills/ai-agents-change-control/SKILL.md:41 — defined here
- `generated trees` — .claude/skills/ai-agents-change-control/SKILL.md:56 — defined here
- `skip-drift-check` — .claude/skills/ai-agents-change-control/SKILL.md:71 — used here
- `gate ladder` — .claude/skills/ai-agents-change-control/SKILL.md:75 — used here
- `non-negotiables` — .claude/skills/ai-agents-change-control/SKILL.md:79 — defined here

## Structure
- `# AI Agents Change Control` — .claude/skills/ai-agents-change-control/SKILL.md:8
- `## Triggers` — .claude/skills/ai-agents-change-control/SKILL.md:17
- `## Process` — .claude/skills/ai-agents-change-control/SKILL.md:24
- `### Phase 1: Classify the change` — .claude/skills/ai-agents-change-control/SKILL.md:26
- `### Phase 2: Map the class to its triggered gates` — .claude/skills/ai-agents-change-control/SKILL.md:58
- `### Phase 3: Run the gates, local to CI` — .claude/skills/ai-agents-change-control/SKILL.md:73
- `### Phase 4: Hold the non-negotiables` — .claude/skills/ai-agents-change-control/SKILL.md:79
- `## Anti-Patterns` — .claude/skills/ai-agents-change-control/SKILL.md:102
- `## Verification` — .claude/skills/ai-agents-change-control/SKILL.md:115
- `## Provenance and Maintenance` — .claude/skills/ai-agents-change-control/SKILL.md:128

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Defines three core lifecycle terms in a single sentence/paragraph (line 15): a "gate" blocks progress until satisfied, a "drift gate" compares generated trees against sources, and a "canonical source" is the single editable tree.
- Enforces an automated directional invariant in generation (line 56): `build/scripts/build_all.py:962-967` fails if any generator writes into `.claude/` (canonical source). Highlights that drift output indicates difference, not editing direction.
- Prohibits em and en dashes in authored text (line 87), citing issue #1923 where bot reviewers opened threads on every PR.

## Context cost
15,510 bytes (skill body) + 4,213 bytes (gate-ladder.md) + 5,344 bytes (incident-history.md) + 4,253 bytes (provenance.md) = 29,320 bytes total; ~7,300 tokens.
