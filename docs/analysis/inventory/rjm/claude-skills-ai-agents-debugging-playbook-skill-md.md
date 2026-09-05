---
package: rjm
path: .claude/skills/ai-agents-debugging-playbook/SKILL.md
type: skill
bytes: 20656
unit: inv-rjm-82
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-debugging-playbook/SKILL.md, sha256: 6a89af761d6faee8cc94834dcbe783cacdb47279071838e83a0fa0416eb3da11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-debugging-playbook/SKILL.md

## Purpose — required, verbatim
> "Symptom-first triage for this repository's known failure modes. Every row below was earned by a real incident; the retro path is cited so you can read the full story. The playbook answers one question: given this symptom, what is the FIRST command to run, what experiment discriminates between causes, and what trap has already cost someone real time here?" — .claude/skills/ai-agents-debugging-playbook/SKILL.md:11

## Design intent — required
Symptom-first triage guide and discriminating playbook for the repository's recurring local hook blocks, CI gate failures, versioning violations, coverage pin trips, and Copilot CLI hook runtime errors. It provides deterministic first commands, discriminating experiments, canonical fix paths, and historical traps for each failure mode. Without this playbook, developers and autonomous agents waste significant effort shotgun-fixing symptoms, debugging PR changes when CI was already failing on main, editing generated trees instead of canonical sources during drift failures, or attempting to bypass guards rather than addressing root causes.

## Phase — required
cross-phase

## Inputs — required
- Symptoms from git push blocks, CI gate reds, lint errors, hook execution failures, or test crashes
- Process stderr JSON output (e.g. `EVENT={...}` or hook exit codes 2 vs 143)
- Staged git files via `git status` or commit counts via `git rev-list --count HEAD ^origin/main`
- CI workflow logs and failure lists from validation scripts (e.g. `scripts/validation/run_plugin_version_bump_ci.py`)
- Source trees (`templates/agents/*.shared.md`, `.claude/`) vs generated trees (`src/copilot-cli/`, `.github/instructions/`)
- User triggers: `triage this failure`, `why is my push blocked`, `debug this CI red`, `what does this gate failure mean`, `hook blocked my tool call`

## Outputs — required
- Triage verdicts discriminating whether an issue reproduces on main, whether a gate is functioning vs broken infrastructure, and which tree is canonical for drift failures
- Corrective actions and targeted remediation commands (e.g. scoped markdown linting, removing `version` field from plugin manifests, using module-name form for pytest-cov, converting dashes, redirecting git tests to temporary repositories)
- Verification proof: locally passing tests and sweep commands (`uv run python scripts/validation/pre_pr.py`) with negative control verification (defect injection)
- Commit discipline guidance: advisory notices for commit counts (thresholds at 10 and 15 commits, commit batches <= 5 files)

## Invokes — required
- skill ai-agents-failure-archaeology — .claude/skills/ai-agents-debugging-playbook/SKILL.md:27
- skill ai-agents-diagnostics-toolkit — .claude/skills/ai-agents-debugging-playbook/SKILL.md:28
- skill ai-agents-validation-and-qa — .claude/skills/ai-agents-debugging-playbook/SKILL.md:29
- skill ai-agents-config-catalog — .claude/skills/ai-agents-debugging-playbook/SKILL.md:30
- reference agent-harness-reference — .claude/skills/ai-agents-debugging-playbook/SKILL.md:31
- agent merge-resolver — .claude/skills/ai-agents-debugging-playbook/SKILL.md:33
- skill observability — .claude/skills/ai-agents-debugging-playbook/SKILL.md:34
- skill ai-agents-generation-and-release — .claude/skills/ai-agents-debugging-playbook/SKILL.md:56
- skill analyze — .claude/skills/ai-agents-debugging-playbook/SKILL.md:77
- skill stuck-detection — .claude/skills/ai-agents-debugging-playbook/SKILL.md:77
- script scripts/validation/pre_pr.py — .claude/skills/ai-agents-debugging-playbook/SKILL.md:84
- script build/scripts/validate_install_parity.py — .claude/skills/ai-agents-debugging-playbook/SKILL.md:146
- script scripts/validation/run_plugin_version_bump_ci.py — .claude/skills/ai-agents-debugging-playbook/SKILL.md:57
- script build/scripts/detect_agent_drift.py — .claude/skills/ai-agents-debugging-playbook/SKILL.md:147
- skill ai-agents-config-catalog — .claude/skills/ai-agents-debugging-playbook/SKILL.md:88
- skill ai-agents-failure-archaeology — .claude/skills/ai-agents-debugging-playbook/SKILL.md:104
- doc .agents/governance/FAILURE-MODES.md — .claude/skills/ai-agents-debugging-playbook/SKILL.md:104
- skill ai-agents-empirical-probe-toolkit — .claude/skills/ai-agents-debugging-playbook/SKILL.md:113

## Invoked by — required
- skill ai-agents-diagnostics-toolkit — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:45
- skill ai-agents-validation-and-qa — .claude/skills/ai-agents-validation-and-qa/SKILL.md:26
- skill ai-agents-build-and-env — .claude/skills/ai-agents-build-and-env/SKILL.md:42
- skill ai-agents-config-catalog — .claude/skills/ai-agents-config-catalog/SKILL.md:18
- skill ai-agents-architecture-contract — .claude/skills/ai-agents-architecture-contract/SKILL.md:173
- skill ai-agents-empirical-probe-toolkit — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:33
- skill ai-agents-failure-archaeology — .claude/skills/ai-agents-failure-archaeology/SKILL.md:3
- skill ai-agents-generation-and-release — .claude/skills/ai-agents-generation-and-release/SKILL.md:34

## Concepts named — required, verbatim
- `guard` — .claude/skills/ai-agents-debugging-playbook/SKILL.md:13 — defined here
- `drift gate` — .claude/skills/ai-agents-debugging-playbook/SKILL.md:13 — defined here
- `discriminating experiment` — .claude/skills/ai-agents-debugging-playbook/SKILL.md:13 — defined here
- `PreToolUse` — .claude/skills/ai-agents-debugging-playbook/SKILL.md:13 — used here
- `SKIP_PREPUSH` — .claude/skills/ai-agents-debugging-playbook/SKILL.md:46 — used here
- `markdown-autofix` — .claude/skills/ai-agents-debugging-playbook/SKILL.md:48 — used here
- `markdown-check` — .claude/skills/ai-agents-debugging-playbook/SKILL.md:48 — used here
- `stuck-detection` — .claude/skills/ai-agents-debugging-playbook/SKILL.md:77 — used here
- `SECTIONS_TO_COMPARE` — .claude/skills/ai-agents-debugging-playbook/SKILL.md:86 — used here
- `needs-split` — .claude/skills/ai-agents-debugging-playbook/SKILL.md:87 — used here
- `[skip-drift-check]` — .claude/skills/ai-agents-debugging-playbook/SKILL.md:88 — used here
- `FAILURE-MODES.md` — .claude/skills/ai-agents-debugging-playbook/SKILL.md:104 — used here
- `empirical probe` — .claude/skills/ai-agents-debugging-playbook/SKILL.md:113 — used here

## Structure
- frontmatter — .claude/skills/ai-agents-debugging-playbook/SKILL.md:1
- # ai-agents Debugging Playbook — .claude/skills/ai-agents-debugging-playbook/SKILL.md:8
- ## Triggers — .claude/skills/ai-agents-debugging-playbook/SKILL.md:15
- ## When NOT To Use This Skill — .claude/skills/ai-agents-debugging-playbook/SKILL.md:23
- ## Process — .claude/skills/ai-agents-debugging-playbook/SKILL.md:36
- ### Phase 1: Match the symptom — .claude/skills/ai-agents-debugging-playbook/SKILL.md:38
- #### Local blocks (a hook stopped you) — .claude/skills/ai-agents-debugging-playbook/SKILL.md:42
- #### CI reds (a gate failed on the PR) — .claude/skills/ai-agents-debugging-playbook/SKILL.md:51
- #### Copilot CLI runtime failures — .claude/skills/ai-agents-debugging-playbook/SKILL.md:62
- ### Phase 2: Run the discriminating experiment — .claude/skills/ai-agents-debugging-playbook/SKILL.md:69
- ### Phase 3: Fix, then prove it locally — .claude/skills/ai-agents-debugging-playbook/SKILL.md:79
- ## Traps That Cost Real Time — .claude/skills/ai-agents-debugging-playbook/SKILL.md:90
- ## Anti-Patterns — .claude/skills/ai-agents-debugging-playbook/SKILL.md:106
- ## Verification — .claude/skills/ai-agents-debugging-playbook/SKILL.md:116
- ## Provenance and Maintenance — .claude/skills/ai-agents-debugging-playbook/SKILL.md:127

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — .claude/skills/ai-agents-debugging-playbook/SKILL.md:46 — references .claude/hooks/PreToolUse/invoke_*_guard.py which were deleted under ADR-084 (issue #5154).
- unfailable-gate — .claude/skills/ai-agents-debugging-playbook/SKILL.md:86 — detect_agent_drift.py compares only 18 allowlisted sections at 80% similarity threshold and its exit code is captured and discarded in .github/workflows/drift-detection.yml:35-42, allowing agent capability discrepancies to pass undetected.

## Observations
- Demonstrates deep operational learning by pairing every documented failure symptom with an exact retro reference under `.agents/retrospective/` and `.serena/memories/`.
- Articulates critical operational traps: drift direction inversion (editing source instead of generated tree), unscoped markdown linting ballooning PRs, and confusing exit 2 (crash) with exit 143 (timeout) in Copilot CLI hooks.
- Highlights that `pre_pr.py` implements the ADR-035 exit code standard (0 ok, 1 logic, 2 config) and documents that commit count limits are advisory only (ADR-099).

## Context cost
20656 bytes (~5164 tokens). When invoked, external references are consulted via targeted skills rather than inlining large dependency trees.
