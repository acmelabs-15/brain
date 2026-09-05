---
package: rjm
path: .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md
type: skill
bytes: 10614
unit: inv-rjm-82
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md, sha256: e828ecf0ae117cb6cce4e44b70d490dee5da7418f2129f6801e9f6e9f9513d71}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md

## Purpose — required, verbatim
> "Measure instead of eyeball. Every instrument below is a read-only command that turns a vague worry ("are skills getting bloated?", "did generation drift?") into a number you can compare against a baseline. The Instrument Index gives you, per instrument, the question it answers and the exact command; [`references/instrument-guides.md`](references/instrument-guides.md) gives the healthy and unhealthy reading, the current repo baseline (as of 2026-07-29), and the trap that has already cost someone time." — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:11

## Design intent — required
Measurement toolkit and instrument catalog for the repository, transforming subjective intuitions about codebase bloat or drift into objective, reproducible, read-only numeric readings compared against established baselines. It defines an Instrument Index covering skill description budgets, SKILL.md line lengths, orphan reference detection, golden principles AST rules, drift detection across three surfaces, test coverage pins, behavioral eval harnesses, and advisory commit counts. Without this skill, contributors and agents would lack standardized commands to quantify repository state, risking uncalibrated interventions, premature refactorings, or confusion over pre-existing baseline failures on main.

## Phase — required
cross-phase

## Inputs — required
- Diagnostic triggers: `measure this`, `read the drift signal`, `check skill budgets`, `interpret this scan output`
- Repository artifacts: tracked files, commit history, AST, test suites, and documentation references
- Outputs and machine exit codes from read-only diagnostic scripts and tools

## Outputs — required
- Quantitative diagnostic measurements and delta evaluations against main baselines
- Triage handoffs: routing to `ai-agents-debugging-playbook` for fix paths, `ai-agents-validation-and-qa` for evidence standards, `ai-agents-empirical-probe-toolkit` for empirical probes, and `ai-agents-generation-and-release` for code generation
- PR annotations documenting identified baseline variations without expanding change scope

## Invokes — required
- reference references/instrument-guides.md — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:11
- script ./scripts/skill_description_budget.py — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:26
- script ./scripts/validation/skill_size.py — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:27
- script scan.py — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:28
- script scan_principles.py — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:29
- script build/generate_agents.py — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:30
- script build/scripts/build_all.py — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:31
- script ./scripts/sync_plugin_lib.py — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:32
- script ./scripts/eval/eval-prompt-change.py — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:34
- skill ai-agents-debugging-playbook — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:45
- skill ai-agents-validation-and-qa — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:46
- skill ai-agents-empirical-probe-toolkit — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:47
- skill ai-agents-generation-and-release — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:48
- skill observability — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:49
- skill metrics — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:50
- reference references/instrument-guides.md — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:56
- reference references/instrument-guides.md — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:68
- reference references/instrument-guides.md — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:76
- skill ai-agents-research-methodology — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:88
- reference references/instrument-guides.md — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:96

## Invoked by — required
- skill ai-agents-debugging-playbook — .claude/skills/ai-agents-debugging-playbook/SKILL.md:28
- skill ai-agents-validation-and-qa — .claude/skills/ai-agents-validation-and-qa/SKILL.md:27
- skill ai-agents-research-methodology — .claude/skills/ai-agents-research-methodology/SKILL.md:95
- reference instrument-guides.md — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:3

## Concepts named — required, verbatim
- `instrument` — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:13 — defined here
- `drift gate` — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:13 — defined here
- `baseline` — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:13 — defined here
- `Instrument Index` — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:22 — defined here
- `Description budget` — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:26 — used here
- `Skill size` — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:27 — used here
- `Orphan refs` — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:28 — used here
- `Golden principles` — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:29 — used here
- `Agent drift` — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:30 — used here
- `Mirror drift` — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:31 — used here
- `Lib drift` — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:32 — used here
- `Coverage` — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:33 — used here
- `Eval A/B` — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:34 — used here
- `Commit count` — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:35 — used here
- `Phase 1: Pick the instrument` — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:39 — defined here
- `Phase 2: Run it correctly` — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:52 — defined here
- `Phase 3: Read the number against the baseline` — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:66 — defined here
- `Phase 4: Act on the reading` — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:70 — defined here

## Structure
- frontmatter — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:1
- # ai-agents Diagnostics Toolkit — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:8
- ## Triggers — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:15
- ## Instrument Index — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:22
- ## Process — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:37
- ### Phase 1: Pick the instrument — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:39
- ### Phase 2: Run it correctly — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:52
- ### Phase 3: Read the number against the baseline — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:66
- ### Phase 4: Act on the reading — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:70
- ## Instrument Guides — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:74
- ## Anti-Patterns — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:78
- ## Verification — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:91
- ## Provenance and Maintenance — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:100

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- unfailable-gate — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:61 — skill_size.py prints FAIL lines but exits 0 unless the --ci flag is passed.
- other — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:64 — scan_principles.py exits with code 10 on violations instead of standard ADR-035 exit codes.

## Observations
- Rigorously divides responsibilities: measurement is owned by the diagnostics toolkit, while fixing/remediation is explicitly delegated to `ai-agents-debugging-playbook`.
- Enforces `uv run python` across all invocations to ensure proper virtual environment interpreter resolution, avoiding `ModuleNotFoundError: No module named 'yaml'`.
- Clarifies that build_all.py --check is read-only despite logging Mode: Generate due to snapshot/restore (#2440).

## Context cost
10614 bytes (~2653 tokens) for SKILL.md; when combined with its referenced instrument guides (12160 bytes / ~3040 tokens), total context cost is 22774 bytes (~5693 tokens).
