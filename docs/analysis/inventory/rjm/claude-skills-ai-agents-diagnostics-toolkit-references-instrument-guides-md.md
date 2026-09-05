---
package: rjm
path: .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md
type: reference
bytes: 12160
unit: inv-rjm-82
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md, sha256: be47542008b1aef449e2366ade2f13b336d8de6f05a426d4234572a8e97a6f7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md

## Purpose — required, verbatim
> "Per-instrument detail for `ai-agents-diagnostics-toolkit`: the exact commands, the current repo baseline (as of 2026-07-29), the healthy and unhealthy readings, and the trap each instrument has already cost someone. The SKILL.md Instrument Index routes you here; consult the matching section when you run an instrument." — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:3

## Design intent — required
Comprehensive operational reference manual for the repository's diagnostics toolkit, documenting the exact commands, calibration baselines (as of 2026-07-29), healthy versus unhealthy readings, and historical traps for nine instruments. It provides critical context to evaluate measurements against known baselines (such as recognizing that golden principles and description budget gate modes are already red on main), preventing developers from misattributing pre-existing repository conditions to their changes or attempting destructive, unscoped fixes across historical files.

## Phase — required
cross-phase

## Inputs — required
- Output and exit codes from diagnostic scripts (`scripts/skill_description_budget.py`, `scripts/validation/skill_size.py`, `scan.py`, `scan_principles.py`, `build_all.py --check`, `pytest --cov`, `eval-prompt-change.py`, `git rev-list`)
- Repository state: tracked files, PR diffs against main, commit history, AST, and documentation references

## Outputs — required
none

## Invokes — required
- script ./scripts/skill_description_budget.py — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:14
- file .claude/skills/skillforge/scripts/_constants.py — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:20
- script .claude/skills/skillforge/scripts/validate-skill.py — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:20
- script ./scripts/validation/skill_size.py — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:27
- file .claude/skills/skillforge/SKILL.md — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:33
- script scan.py — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:43
- doc .agents/governance/golden-principles.md — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:56
- script scan_principles.py — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:59
- script build/generate_agents.py — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:76
- script build/scripts/build_all.py — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:77
- script ./scripts/sync_plugin_lib.py — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:78
- doc .agents/governance/GENERATOR-FILES.md — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:81
- skill ai-agents-generation-and-release — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:81
- skill ai-agents-validation-and-qa — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:111
- script scripts/eval/_anthropic_api.py — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:115
- script ./scripts/eval/eval-prompt-change.py — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:118
- script ./scripts/eval/eval-agent-vs-baseline.py — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:119
- skill ai-agents-empirical-probe-toolkit — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:124
- script scripts/validation/pr_commit_count.py — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:133

## Invoked by — required
- skill ai-agents-diagnostics-toolkit — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:11
- skill ai-agents-diagnostics-toolkit — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:56
- skill ai-agents-diagnostics-toolkit — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:68
- skill ai-agents-diagnostics-toolkit — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:76
- skill ai-agents-diagnostics-toolkit — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:96
- skill ai-agents-diagnostics-toolkit — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:114

## Concepts named — required, verbatim
- `Description budget` — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:9 — defined here
- `DESCRIPTION_MAX_LENGTH` — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:20 — used here
- `Skill size` — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:24 — defined here
- `size-exception` — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:32 — used here
- `Orphan references` — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:38 — defined here
- `orphan-ref-ignore` — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:51 — used here
- `orphan-ref-ignore-file` — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:51 — used here
- `Golden principles` — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:54 — defined here
- `AGENT_REMEDIATION` — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:67 — used here
- `Drift gates as measurements` — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:70 — defined here
- `Guard telemetry and maturity tiers` — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:83 — defined here
- `Coverage measurement` — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:99 — defined here
- `Eval harness` — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:113 — defined here
- `Commit-count monitor` — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:127 — defined here
- `needs-split` — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:133 — used here

## Structure
- # Diagnostics Instrument Guides — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:1
- ## Instrument Guides — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:7
- ### Description budget — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:9
- ### Skill size — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:24
- ### Orphan references — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:38
- ### Golden principles — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:54
- ### Drift gates as measurements — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:70
- ### Guard telemetry and maturity tiers (retired) — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:83
- ### Coverage measurement — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:99
- ### Eval harness — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:113
- ### Commit-count monitor — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:127
- ## Current Baselines Summary (as of 2026-07-29) — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:135

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- unfailable-gate — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:36 — scripts/validation/skill_size.py prints FAIL output on violation but exits 0 unless the --ci flag is explicitly passed.
- other — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:64 — golden-principles scan exits with code 10 on violations, diverging from the repo ADR-035 standard exit codes (0 healthy, 1 logic finding, 2 config).

## Observations
- Documents exact snapshot baselines (as of 2026-07-29) for 8 active instruments, explicitly acknowledging that main is red on golden principles (exit 10, 109 errors) and description budget in gate mode (exit 1, over 8000 tokens), emphasizing measurement of branch delta rather than assuming a zero-defect main.
- Documents retirement of guard telemetry under ADR-084 (issue #5154) to prevent wasted effort seeking retired telemetry emitters.
- Clarifies that build_all.py --check logs Mode: Generate mid-run but operates strictly read-only via snapshot/restore (#2440).

## Context cost
12160 bytes (~3040 tokens). Loaded on demand as an operational reference.
