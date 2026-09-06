---
package: rjm
path: .claude/skills/chaos-experiment/SKILL.md
type: skill
bytes: 13080
unit: inv-rjm-98
in_scope_via: .claude/skills/review/references/reliability.md
aliases: []
memo_inputs:
  - {path: .claude/skills/chaos-experiment/SKILL.md, sha256: 3bebfe39adb559c75a55a96b2ecebb91143bfb2522de30fc96b12606ca2aba03}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/chaos-experiment/SKILL.md

## Purpose — required, verbatim
> "Design and document chaos engineering experiments. Guide steady state baseline, hypothesis formation, failure injection plans, and results analysis." — .claude/skills/chaos-experiment/SKILL.md:4

## Design intent — required
Provides an end-to-end guided workflow for designing, executing, and analyzing chaos engineering experiments to build confidence in system resilience. Structured around six explicit phases (Scope, Baseline, Hypothesis, Injection, Execute, Analyze), it defines falsifiable hypothesis construction, steady-state baseline thresholds (Green/Yellow/Red), blast radius containment practices, observation logging, and verdict determinations (VALIDATED, INVALIDATED, INCONCLUSIVE) with prioritized remediation action items.

## Phase — required
rjm:review

## Inputs — required
- System architecture details, component dependencies, and historical incident data
- Steady-state baseline metrics collected over 7-30 days (throughput, error rates, latency percentiles, resource utilization, business metrics)
- Failure injection parameters, target environment, and stakeholder approvals

## Outputs — required
- Experiment specification document saved to `.agents/chaos/YYYY-MM-DD-experiment-name.md`
- Experiment results analysis document saved to `.agents/chaos/YYYY-MM-DD-experiment-name-results.md`

## Invokes — required
- skill ../threat-modeling/SKILL.md — .claude/skills/chaos-experiment/SKILL.md:54
- skill ../pre-mortem/SKILL.md — .claude/skills/chaos-experiment/SKILL.md:59
- script scripts/generate_experiment.py — .claude/skills/chaos-experiment/SKILL.md:266
- script scripts/validate_experiment.py — .claude/skills/chaos-experiment/SKILL.md:267
- template templates/experiment-template.md — .claude/skills/chaos-experiment/SKILL.md:302
- reference references/chaos-engineering-principles.md — .claude/skills/chaos-experiment/SKILL.md:341
- reference references/slo-sli-sla-reference.md — .claude/skills/chaos-experiment/SKILL.md:342
- skill ../security-scan/SKILL.md — .claude/skills/chaos-experiment/SKILL.md:356
- skill ../slo-designer/SKILL.md — .claude/skills/chaos-experiment/SKILL.md:359

## Invoked by — required
- reference reliability.md — .claude/skills/review/references/reliability.md:52
- skill slo-designer — .claude/skills/slo-designer/SKILL.md:33

## Concepts named — required, verbatim
- `chaos-experiment` — .claude/skills/chaos-experiment/SKILL.md:2 — defined here
- `Chaos Experiment Designer` — .claude/skills/chaos-experiment/SKILL.md:11 — defined here
- `Scope Definition` — .claude/skills/chaos-experiment/SKILL.md:79 — defined here
- `Establish Baseline` — .claude/skills/chaos-experiment/SKILL.md:95 — defined here
- `Form Hypothesis` — .claude/skills/chaos-experiment/SKILL.md:117 — defined here
- `Design Injection Plan` — .claude/skills/chaos-experiment/SKILL.md:147 — defined here
- `Execute Experiment` — .claude/skills/chaos-experiment/SKILL.md:184 — defined here
- `Analyze Results` — .claude/skills/chaos-experiment/SKILL.md:224 — defined here
- `Steady State Focus` — .claude/skills/chaos-experiment/SKILL.md:256 — defined here
- `Real-World Variables` — .claude/skills/chaos-experiment/SKILL.md:257 — defined here
- `Production Testing` — .claude/skills/chaos-experiment/SKILL.md:258 — defined here
- `Continuous Automation` — .claude/skills/chaos-experiment/SKILL.md:259 — defined here
- `Blast Radius Containment` — .claude/skills/chaos-experiment/SKILL.md:260 — defined here
- `Verification Checklist` — .claude/skills/chaos-experiment/SKILL.md:312 — defined here
- `threat-modeling` — .claude/skills/chaos-experiment/SKILL.md:4 — used here
- `pre-mortem` — .claude/skills/chaos-experiment/SKILL.md:4 — used here
- `security-scan` — .claude/skills/chaos-experiment/SKILL.md:356 — used here
- `slo-designer` — .claude/skills/chaos-experiment/SKILL.md:359 — used here

## Structure
- # Chaos Experiment Designer — .claude/skills/chaos-experiment/SKILL.md:11
- ## Quick Start — .claude/skills/chaos-experiment/SKILL.md:15
- ## Triggers — .claude/skills/chaos-experiment/SKILL.md:26
- ## Quick Reference — .claude/skills/chaos-experiment/SKILL.md:34
- ## When to Use — .claude/skills/chaos-experiment/SKILL.md:45
- ## Process Overview — .claude/skills/chaos-experiment/SKILL.md:64
- ## Process — .claude/skills/chaos-experiment/SKILL.md:77
- ### Phase 1: Scope Definition — .claude/skills/chaos-experiment/SKILL.md:79
- ### Phase 2: Establish Baseline — .claude/skills/chaos-experiment/SKILL.md:95
- ### Phase 3: Form Hypothesis — .claude/skills/chaos-experiment/SKILL.md:117
- ### Phase 4: Design Injection Plan — .claude/skills/chaos-experiment/SKILL.md:147
- ### Phase 5: Execute Experiment — .claude/skills/chaos-experiment/SKILL.md:184
- ### Phase 6: Analyze Results — .claude/skills/chaos-experiment/SKILL.md:224
- ## Core Principles — .claude/skills/chaos-experiment/SKILL.md:254
- ## Scripts — .claude/skills/chaos-experiment/SKILL.md:262
- ### Exit Codes — .claude/skills/chaos-experiment/SKILL.md:269
- ## Output Directory — .claude/skills/chaos-experiment/SKILL.md:278
- ## Anti-Patterns — .claude/skills/chaos-experiment/SKILL.md:288
- ## Templates — .claude/skills/chaos-experiment/SKILL.md:300
- ## Verification Checklist — .claude/skills/chaos-experiment/SKILL.md:312
- ## Extension Points — .claude/skills/chaos-experiment/SKILL.md:327
- ## References — .claude/skills/chaos-experiment/SKILL.md:335
- ## Related Resources — .claude/skills/chaos-experiment/SKILL.md:344
- ## Related Skills — .claude/skills/chaos-experiment/SKILL.md:352

## Scripts — required if type is script or the skill ships scripts
The skill ships two Python scripts:
1. `scripts/generate_experiment.py`:
   - path, language, lines: `.claude/skills/chaos-experiment/scripts/generate_experiment.py`, Python 3, 299 lines
   - documented invocation: "python scripts/generate_experiment.py --name \"API Gateway Resilience\"" — .claude/skills/chaos-experiment/SKILL.md:266
   - **executed:** yes (command: `python3 sources/rjm/.claude/skills/chaos-experiment/scripts/generate_experiment.py --name "API Gateway Resilience" --dry-run`, exit code 0)
   - documented exit codes vs. actual exit paths: documented in SKILL.md:270-277 as 0, 1, 2, 10; in code exits 0 or 1 (or 2 via argparse), code 10 is not reachable in this script.
   - for validators/gates: not a validator
   - does the output match what the documentation claims: yes, renders populated experiment document.

2. `scripts/validate_experiment.py`:
   - path, language, lines: `.claude/skills/chaos-experiment/scripts/validate_experiment.py`, Python 3, 422 lines
   - documented invocation: "python scripts/validate_experiment.py path/to/experiment.md" — .claude/skills/chaos-experiment/SKILL.md:267
   - **executed:** yes (command: `python3 sources/rjm/.claude/skills/chaos-experiment/scripts/validate_experiment.py sources/rjm/.claude/skills/chaos-experiment/templates/experiment-template.md`, exit code 0)
   - documented exit codes vs. actual exit paths: documented in SKILL.md:270-277 as 0, 1, 2, 10; actual exit code paths are 0, 10, and 2, with exit code 1 ("General failure") being unreachable dead code.
   - for validators/gates: exits 0 when valid, exits 10 on missing required sections or with `--strict` on incomplete placeholders.
   - does the output match what the documentation claims: yes, reports validation verdict, breakdown, and score.

## Defects — required
- `doc-drift` · .claude/skills/chaos-experiment/SKILL.md:276 · Exit Codes table documents exit code 10 ("Validation failure (missing required sections)") under the general scripts section, but it only applies to `validate_experiment.py`, not `generate_experiment.py`.
- `exit-code-mismatch` · .claude/skills/chaos-experiment/SKILL.md:274 · Table documents exit code 1 ("General failure"), but in `validate_experiment.py` the return path for exit code 1 is unreachable dead code.

## Observations
- Declares vendor-portability comment on line 361 (`Issue #2050`), noting that in vendored installations without `.agents/chaos/`, the directory is created lazily rather than failing silently.
- Differentiates scope clearly from `threat-modeling` (security vs. resilience) and `pre-mortem` (project risks before system exists vs. infrastructure/software failure injection).

## Context cost
13080 bytes. Plus references (4816 bytes), template (7127 bytes), and scripts (21095 bytes) = 46118 bytes total. Approximately 11,500 tokens.
