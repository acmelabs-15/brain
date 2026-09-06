---
package: rjm
path: scripts/validation/check_rule_activation_coverage.py
type: script
bytes: 20391
unit: inv-rjm-283
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_rule_activation_coverage.py, sha256: c96ae7b997afbdf46f31e2f2a2eff29415af0f5694b3719d32d6afe0a576dab2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_rule_activation_coverage.py

## Purpose — required, verbatim
> "Static coverage ratchet for rule and skill activation measurement." — scripts/validation/check_rule_activation_coverage.py:2

## Design intent — required
Implements an automated static coverage ratchet to prevent test coverage regressions across all prompt rules and agent skills without incurring LLM API costs. In earlier revisions (issue #3457), dynamic activation evaluations only executed scenarios explicitly specified on the command line, permitting dozens of rules and skills to remain unmeasured and unvalidated while CI suites reported green. This validator closes that fail-open gap by discovering all rule definitions (`.claude/rules/*.md`) and skill definitions (`.claude/skills/*/SKILL.md`), resolving each to corresponding test scenario JSON objects under `tests/evals/rule-scenarios/` and `tests/evals/skill-scenarios/`, and enforcing that the set of uncovered artifacts does not expand beyond a committed baseline (`scripts/validation/rule_activation_coverage_baseline.json`).

## Phase — required
cross-phase

## Inputs — required
- CLI options (scripts/validation/check_rule_activation_coverage.py:468-476):
  - `--repo-root`: path to repository root (defaults to walking up parent directories for `.claude/rules`)
  - `--baseline`: path to coverage baseline JSON file (defaults to `scripts/validation/rule_activation_coverage_baseline.json`)
  - `--update-baseline`: flag to rewrite baseline JSON with the current uncovered artifact set
- Filesystem directories and artifacts:
  - Rules directory: `.claude/rules/*.md` (scripts/validation/check_rule_activation_coverage.py:78, 106-108)
  - Skills directory: `.claude/skills/*/SKILL.md` (scripts/validation/check_rule_activation_coverage.py:79, 117-119)
  - Rule scenario directory: `tests/evals/rule-scenarios/*.json` (scripts/validation/check_rule_activation_coverage.py:80, 245)
  - Skill scenario directory: `tests/evals/skill-scenarios/*.json` (scripts/validation/check_rule_activation_coverage.py:81, 250)
  - Baseline configuration file: `scripts/validation/rule_activation_coverage_baseline.json` (scripts/validation/check_rule_activation_coverage.py:82, 318)

## Outputs — required
- Standard output:
  - Ratchet pass summary: `OK: <n> uncovered rule(s) and <m> uncovered skill(s), all within the baseline.` (scripts/validation/check_rule_activation_coverage.py:449-451)
  - Coverage improvement notice recommending `--update-baseline` when artifacts gain new scenarios (scripts/validation/check_rule_activation_coverage.py:429-433)
  - Failure report listing regressed rules and skills missing activation scenarios (scripts/validation/check_rule_activation_coverage.py:436-445)
  - Baseline update message when `--update-baseline` writes a new baseline file (scripts/validation/check_rule_activation_coverage.py:418-421)
- Standard error:
  - Structural error details on `CoverageConfigError`: `ERROR: <message>` (scripts/validation/check_rule_activation_coverage.py:487)
- Process exit codes: 0 (coverage within baseline or baseline updated), 1 (coverage regression detected), 2 (structural or configuration error) (scripts/validation/check_rule_activation_coverage.py:19-22, 89-91)

## Invokes — required
- script portability_baseline — scripts/validation/check_rule_activation_coverage.py:72

## Invoked by — required
- script checks_spec — scripts/validation/checks_spec.py:145
- reference rule-audit-procedure — .claude/skills/context-optimizer/references/rule-audit-procedure.md:463

## Concepts named — required, verbatim
- `eval-rule-activation.py` — scripts/validation/check_rule_activation_coverage.py:4 — used here
- `ADR-088` — scripts/validation/check_rule_activation_coverage.py:35 — used here
- `RULES_SUBDIR` — scripts/validation/check_rule_activation_coverage.py:78 — defined here
- `SKILLS_SUBDIR` — scripts/validation/check_rule_activation_coverage.py:79 — defined here
- `RULE_SCENARIOS_SUBDIR` — scripts/validation/check_rule_activation_coverage.py:80 — defined here
- `SKILL_SCENARIOS_SUBDIR` — scripts/validation/check_rule_activation_coverage.py:81 — defined here
- `DEFAULT_BASELINE_NAME` — scripts/validation/check_rule_activation_coverage.py:82 — defined here
- `BASELINE_RULE_KEY` — scripts/validation/check_rule_activation_coverage.py:84 — defined here
- `BASELINE_SKILL_KEY` — scripts/validation/check_rule_activation_coverage.py:85 — defined here
- `NEGATIVE_GATE` — scripts/validation/check_rule_activation_coverage.py:87 — defined here
- `EXIT_OK` — scripts/validation/check_rule_activation_coverage.py:89 — defined here
- `EXIT_RATCHET` — scripts/validation/check_rule_activation_coverage.py:90 — defined here
- `EXIT_CONFIG` — scripts/validation/check_rule_activation_coverage.py:91 — defined here
- `CoverageConfigError` — scripts/validation/check_rule_activation_coverage.py:94 — defined here
- `discover_rules` — scripts/validation/check_rule_activation_coverage.py:103 — defined here
- `discover_skills` — scripts/validation/check_rule_activation_coverage.py:114 — defined here
- `_read_scenario_json` — scripts/validation/check_rule_activation_coverage.py:125 — defined here
- `_validate_scenarios_measure` — scripts/validation/check_rule_activation_coverage.py:140 — defined here
- `_resolve_target` — scripts/validation/check_rule_activation_coverage.py:167 — defined here
- `_is_reference_scenario` — scripts/validation/check_rule_activation_coverage.py:202 — defined here
- `covered_ids` — scripts/validation/check_rule_activation_coverage.py:237 — defined here
- `_load_id_list` — scripts/validation/check_rule_activation_coverage.py:295 — defined here
- `load_baseline` — scripts/validation/check_rule_activation_coverage.py:316 — defined here
- `diff_uncovered` — scripts/validation/check_rule_activation_coverage.py:333 — defined here
- `build_baseline_payload` — scripts/validation/check_rule_activation_coverage.py:344 — defined here
- `write_baseline` — scripts/validation/check_rule_activation_coverage.py:362 — defined here
- `compute_uncovered` — scripts/validation/check_rule_activation_coverage.py:378 — defined here
- `run` — scripts/validation/check_rule_activation_coverage.py:403 — defined here
- `main` — scripts/validation/check_rule_activation_coverage.py:466 — defined here

## Structure
- Module docstring with gate specification, exit codes, and 13 fail-open refusal vectors (scripts/validation/check_rule_activation_coverage.py:1-46)
- Standard library imports and path initialization (scripts/validation/check_rule_activation_coverage.py:48-71)
- Baseline guard imports from portability_baseline (scripts/validation/check_rule_activation_coverage.py:72-76)
- Directory paths, keys, and exit code constants (scripts/validation/check_rule_activation_coverage.py:78-91)
- `CoverageConfigError` exception class (scripts/validation/check_rule_activation_coverage.py:94-96)
- Artifact and scenario discovery routines (scripts/validation/check_rule_activation_coverage.py:98-288)
- Baseline loading, diffing, payload building, and serialization (scripts/validation/check_rule_activation_coverage.py:290-371)
- Orchestration, regression formatting, and root resolution (scripts/validation/check_rule_activation_coverage.py:373-464)
- `main` CLI parser and execution handler (scripts/validation/check_rule_activation_coverage.py:466-490)
- Process exit invocation (scripts/validation/check_rule_activation_coverage.py:492-493)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validation/check_rule_activation_coverage.py`
- **language:** Python (python3)
- **lines:** 493
- **documented invocation:**
  - `check_rule_activation_coverage.py` — .claude/skills/context-optimizer/references/rule-audit-procedure.md:463
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/validation/check_rule_activation_coverage.py`
- **abridged stdout:**
```
OK: 19 uncovered rule(s) and 91 uncovered skill(s), all within the baseline.
```
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "0  uncovered set is within the baseline, or --update-baseline rewrote it." — scripts/validation/check_rule_activation_coverage.py:19
    - "1  ratchet regression: a rule or skill is uncovered now but not allowed by" — scripts/validation/check_rule_activation_coverage.py:20
    - "2  config or structural error (see the enumeration below)." — scripts/validation/check_rule_activation_coverage.py:22
  - Actual exit paths:
    - `return EXIT_OK` — scripts/validation/check_rule_activation_coverage.py:422
    - `return EXIT_OK` — scripts/validation/check_rule_activation_coverage.py:452
    - `return EXIT_RATCHET` — scripts/validation/check_rule_activation_coverage.py:446
    - `return EXIT_CONFIG` — scripts/validation/check_rule_activation_coverage.py:408
    - `return EXIT_CONFIG` — scripts/validation/check_rule_activation_coverage.py:410
    - `return EXIT_CONFIG` — scripts/validation/check_rule_activation_coverage.py:412
    - `return EXIT_CONFIG` — scripts/validation/check_rule_activation_coverage.py:488
    - `sys.exit(main())` — scripts/validation/check_rule_activation_coverage.py:492
- **for validators/gates:**
  - can it exit non-zero: yes, exits 1 on coverage regression and 2 on structural/config error.
  - does it fail on source repo's default branch: no, exits 0 (19 uncovered rules and 91 uncovered skills, all permitted by baseline).
- **does the output match what the documentation claims:** yes, confirms all uncovered rules and skills match baseline values.

## Defects — required
none

## Observations
- Enumerates and rejects 13 specific fail-open vectors (empty scenario lists, orphan target paths, directory traversal escapes, missing baseline keys, duplicate baseline entries).
- Incorporates ADR-088 progressive disclosure support: rule-directory scenarios targeting skill references via `reference_path` are validated for target existence and positive test cases but excluded from the rule ratchet universe.
- Integrates baseline tamper protection by importing guards from `portability_baseline` (`refuse_symlinked_baseline`, `refuse_undiffable_baseline`, `refuse_oversized_baseline`).

## Context cost
20391 bytes, 493 lines, ~5100 tokens (plus imported `portability_baseline.py` 7311 bytes, 194 lines, ~1800 tokens). Total: ~27702 bytes, ~6900 tokens.
