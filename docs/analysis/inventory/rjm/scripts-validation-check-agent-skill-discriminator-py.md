---
package: rjm
path: scripts/validation/check_agent_skill_discriminator.py
type: script
bytes: 34655
unit: inv-rjm-276
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_agent_skill_discriminator.py, sha256: fb835dbd3148f58de0a6befdf83d9365975869f178def8624ab3e2b1832db6ce}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_agent_skill_discriminator.py

## Purpose — required, verbatim
> "Phase 3 CI check: detect new agents added in skill shape (Issue #2008)." — scripts/validation/check_agent_skill_discriminator.py:2

## Design intent — required
Prevents architectural misclassification debt by stopping new or modified prompts that are structured-reference catalogs from being implemented as heavy subagents rather than modular, lightweight skills. Grounded in the 2026-05-10 agent-skill classification audit (`.agents/audits/2026-05-10-agent-skill-classification-audit.md`) and ADR-030 (Skills Pattern Superiority), the script scores agents across three objective criteria: invocation via `Task(subagent_type="<name>")` in slash commands (c1), whether at least 70% of content lines comprise structured-reference formats like tables, schema specs, or decision trees (c2), and whether sibling pipeline artifacts are already skills while the agent spans fewer than 3 distinct command pipelines (c3). Scoring 2 or more flags an agent as a candidate for refactoring into a skill unless exempted by explicit frontmatter (`isolation_required: true`), a PR-description override token (`[skill-discriminator: <rationale>]`), or a recorded baseline score ratchet (`--baseline`). Without this check, prompt sprawl and agent misallocation would degrade model context utilization and subagent orchestration efficiency across the lifecycle.

## Phase — required
rjm:test

## Inputs — required
- CLI options and flags parsed via `build_parser()`:
  - `--repo-root`: Repository root path (default: `.` or env `REPO_ROOT` — scripts/validation/check_agent_skill_discriminator.py:587)
  - `--changed-files`: Explicit list of changed agent file paths (scripts/validation/check_agent_skill_discriminator.py:591)
  - `--all`: Flag to score every tracked agent at HEAD (scripts/validation/check_agent_skill_discriminator.py:597)
  - `--pr-body`: PR description text scanned for override token (default: env `PR_BODY` — scripts/validation/check_agent_skill_discriminator.py:605)
  - `--baseline`: Path to skill-discriminator baseline JSON ratchet file (scripts/validation/check_agent_skill_discriminator.py:609)
  - `--update-baseline`: Flag to record current scores across all tracked agents to baseline JSON (scripts/validation/check_agent_skill_discriminator.py:627)
  - `--allow-baseline-shrink`: Flag permitting baseline updates that lower recorded scores (scripts/validation/check_agent_skill_discriminator.py:635)
- Environment variables:
  - `REPO_ROOT` (scripts/validation/check_agent_skill_discriminator.py:587)
  - `PR_BODY` (scripts/validation/check_agent_skill_discriminator.py:605)
  - `CHANGED_FILES` (scripts/validation/check_agent_skill_discriminator.py:851)
- On-disk source files:
  - Slash-command definitions under `.claude/commands/*.md` and `templates/commands/*.md` scanned for `Task()` and `Skill()` calls via `build_pipeline_index` (scripts/validation/check_agent_skill_discriminator.py:324, 350)
  - Agent definitions under `.claude/agents/*.md` and `templates/agents/*.shared.md` read and parsed via `score_agent` (scripts/validation/check_agent_skill_discriminator.py:386, 389, 401)
  - Optional baseline JSON file read via `load_baseline` and `validate_baseline_scores` (scripts/validation/check_agent_skill_discriminator.py:879, 880)
- Git repository state:
  - Commit tree at HEAD inspected via `full_corpus_agent_paths` when in `--all` or `--update-baseline` mode (scripts/validation/check_agent_skill_discriminator.py:699)

## Outputs — required
- Standard output reports:
  - Suite header: "Agent-skill discriminator check (Issue #2008)" — scripts/validation/check_agent_skill_discriminator.py:495
  - Per-agent evaluation lines: `  [<status>] <name> (score <score>/3: c1=<Y/n> c2=<Y/n> c3=<Y/n>, pipelines=<count>, isolation_required=<yes/no>)<baseline_note>` with status `ok`, `CANDIDATE`, or `REGRESSION` (scripts/validation/check_agent_skill_discriminator.py:504)
  - Override token confirmation: `PR override present: <rationale>` (scripts/validation/check_agent_skill_discriminator.py:514)
  - Success summaries: `PASS: no agent regressed above its recorded baseline score (<scored> scored).` or `PASS: no agent fails the discriminator (<scored> scored).` (scripts/validation/check_agent_skill_discriminator.py:522, 526)
  - Failure summaries: `FAIL: the following agents fail the baseline ratchet (<len> of <scored> scored)...` or `FAIL: the following agents are skill-shape candidates (score 2+) (<len> of <scored> scored):` followed by candidate listings and remediation steps (scripts/validation/check_agent_skill_discriminator.py:534, 541, 551)
- Filesystem updates:
  - Serialized baseline JSON written to target path on `--update-baseline` via `write_baseline` (scripts/validation/check_agent_skill_discriminator.py:812)
- Standard error diagnostics:
  - Configuration errors for missing directories, unreadable baselines, untracked corpus, dirty working tree, or disallowed score increases (scripts/validation/check_agent_skill_discriminator.py:663, 673, 736, 786, 804, 838, 843, 863, 882)

## Invokes — required
- script agent_skill_discriminator_baseline — scripts/validation/check_agent_skill_discriminator.py:83
- script portability_common — scripts/validation/check_agent_skill_discriminator.py:93
- doc .agents/audits/2026-05-10-agent-skill-classification-audit.md — scripts/validation/check_agent_skill_discriminator.py:99
- doc .agents/architecture/ADR-030-skills-pattern-superiority.md — scripts/validation/check_agent_skill_discriminator.py:100

## Invoked by — required
- script scripts/validation/agent_skill_discriminator_baseline.py — scripts/validation/agent_skill_discriminator_baseline.py:3

## Concepts named — required, verbatim
- `agent` — scripts/validation/check_agent_skill_discriminator.py:2 — used here
- `Phase 3 CI check` — scripts/validation/check_agent_skill_discriminator.py:2 — used here
- `Discriminator` — scripts/validation/check_agent_skill_discriminator.py:8 — defined here
- `Task(subagent_type="<name>")` — scripts/validation/check_agent_skill_discriminator.py:15 — used here
- `Skill(skill="<name>")` — scripts/validation/check_agent_skill_discriminator.py:21 — used here
- `the 3-pipeline rule` — scripts/validation/check_agent_skill_discriminator.py:22 — defined here
- `isolation_required: true` — scripts/validation/check_agent_skill_discriminator.py:29 — used here
- `[skill-discriminator: <rationale>]` — scripts/validation/check_agent_skill_discriminator.py:31 — defined here
- `ADR-035` — scripts/validation/check_agent_skill_discriminator.py:47 — used here
- `ADR-006` — scripts/validation/check_agent_skill_discriminator.py:58 — used here
- `ADR-042` — scripts/validation/check_agent_skill_discriminator.py:58 — used here
- `ADR-030` — scripts/validation/check_agent_skill_discriminator.py:59 — used here
- `ADR-036` — scripts/validation/check_agent_skill_discriminator.py:59 — used here
- `C2_THRESHOLD` — scripts/validation/check_agent_skill_discriminator.py:107 — defined here
- `PIPELINE_RULE_LIMIT` — scripts/validation/check_agent_skill_discriminator.py:111 — defined here
- `AgentScore` — scripts/validation/check_agent_skill_discriminator.py:130 — defined here
- `CheckResult` — scripts/validation/check_agent_skill_discriminator.py:153 — defined here
- `split_frontmatter` — scripts/validation/check_agent_skill_discriminator.py:196 — defined here
- `has_isolation_required` — scripts/validation/check_agent_skill_discriminator.py:212 — defined here
- `_is_reference_line` — scripts/validation/check_agent_skill_discriminator.py:235 — defined here
- `_content_lines` — scripts/validation/check_agent_skill_discriminator.py:258 — defined here
- `score_c2` — scripts/validation/check_agent_skill_discriminator.py:279 — defined here
- `PipelineIndex` — scripts/validation/check_agent_skill_discriminator.py:332 — defined here
- `build_pipeline_index` — scripts/validation/check_agent_skill_discriminator.py:350 — defined here
- `agent_name_from_path` — scripts/validation/check_agent_skill_discriminator.py:367 — defined here
- `is_agent_path` — scripts/validation/check_agent_skill_discriminator.py:376 — defined here
- `score_agent` — scripts/validation/check_agent_skill_discriminator.py:401 — defined here
- `filter_agent_paths` — scripts/validation/check_agent_skill_discriminator.py:433 — defined here
- `run_check` — scripts/validation/check_agent_skill_discriminator.py:448 — defined here
- `print_report` — scripts/validation/check_agent_skill_discriminator.py:493 — defined here
- `build_parser` — scripts/validation/check_agent_skill_discriminator.py:581 — defined here
- `--repo-root` — scripts/validation/check_agent_skill_discriminator.py:586 — defined here
- `--changed-files` — scripts/validation/check_agent_skill_discriminator.py:591 — defined here
- `--all` — scripts/validation/check_agent_skill_discriminator.py:597 — defined here
- `--pr-body` — scripts/validation/check_agent_skill_discriminator.py:604 — defined here
- `--baseline` — scripts/validation/check_agent_skill_discriminator.py:609 — defined here
- `--update-baseline` — scripts/validation/check_agent_skill_discriminator.py:626 — defined here
- `--allow-baseline-shrink` — scripts/validation/check_agent_skill_discriminator.py:635 — defined here

## Structure
- Module docstring detailing classification criteria, baseline ratchet, and exit codes: lines 1-60
- Imports and dynamic package path resolution: lines 62-97
- Constants, regexes, and thresholds (C2_THRESHOLD, PIPELINE_RULE_LIMIT): lines 99-127
- Data classes `AgentScore` and `CheckResult`: lines 130-190
- Frontmatter parsing and isolation detection: lines 196-228
- Criterion c2 structured-reference heuristics (`score_c2`): lines 235-287
- Criteria c1/c3 slash-command pipeline indexing (`PipelineIndex`): lines 294-360
- Agent path filtering and scoring orchestration: lines 367-461
- Report generation and CLI formatting: lines 469-565
- CLI argument parsing (`build_parser`): lines 572-644
- Baseline resolution, guard enforcement, and updating: lines 646-829
- Main entry point: lines 831-893

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_agent_skill_discriminator.py`, language: Python 3, lines: 893
- documented invocation:
  - `python3 scripts/validation/check_agent_skill_discriminator.py` — scripts/validation/check_agent_skill_discriminator.py:73
  - `--all` — scripts/validation/check_agent_skill_discriminator.py:597
  - `--baseline` — scripts/validation/check_agent_skill_discriminator.py:609
  - `--update-baseline` — scripts/validation/check_agent_skill_discriminator.py:626
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - `python3 scripts/validation/check_agent_skill_discriminator.py`
    - stdout:
      ```
      Agent-skill discriminator check (Issue #2008)
      ============================================================
      No changed agent definitions to score.
      ```
    - exit code: 0
  - `python3 scripts/validation/check_agent_skill_discriminator.py --all`
    - stdout:
      ```
      Agent-skill discriminator check (Issue #2008)
      ============================================================
        [ok] analyst (score 1/3: c1=Y c2=n c3=n, pipelines=3, isolation_required=no)
        [ok] architect (score 3/3: c1=Y c2=Y c3=Y, pipelines=1, isolation_required=yes)
        ...
      FAIL: the following agents are skill-shape candidates (score 2+) (10 of 62 scored):
        - critic (score 2/3: c1=Y c2=n c3=Y)
        - devops (score 3/3: c1=Y c2=Y c3=Y)
        - milestone-planner (score 3/3: c1=Y c2=Y c3=Y)
        - task-decomposer (score 3/3: c1=Y c2=Y c3=Y)
        - architect (score 3/3: c1=Y c2=Y c3=Y)
        - critic (score 2/3: c1=Y c2=n c3=Y)
        - devops (score 2/3: c1=Y c2=n c3=Y)
        - milestone-planner (score 3/3: c1=Y c2=Y c3=Y)
        - qa (score 2/3: c1=Y c2=n c3=Y)
        - task-decomposer (score 3/3: c1=Y c2=Y c3=Y)
      ```
    - exit code: 1
  - `python3 scripts/validation/check_agent_skill_discriminator.py --all --baseline scripts/validation/agent_skill_discriminator_baseline.json`
    - stderr: `Could not read baseline .../scripts/validation/agent_skill_discriminator_baseline.json: Baseline file not found: .../scripts/validation/agent_skill_discriminator_baseline.json`
    - exit code: 2
- documented exit codes vs. actual exit paths in code:
  - Documented:
    - `0 - Success: no changed agent fails the discriminator (or escape hatch set)` — scripts/validation/check_agent_skill_discriminator.py:48
    - `1 - Error: one or more changed agents fail the gate. Without ``--baseline``` — scripts/validation/check_agent_skill_discriminator.py:49
    - `2 - Config error: repo root, commands directory, or baseline not found;` — scripts/validation/check_agent_skill_discriminator.py:52
  - Actual exit paths:
    - Exit 0: `return 0` on successful write during `--update-baseline` (scripts/validation/check_agent_skill_discriminator.py:632) and when `not result.failing` (scripts/validation/check_agent_skill_discriminator.py:888)
    - Exit 1: `return 1` when `result.failing` is non-empty (scripts/validation/check_agent_skill_discriminator.py:888)
    - Exit 2: `return 2` on missing repo root (scripts/validation/check_agent_skill_discriminator.py:839), missing commands dir (scripts/validation/check_agent_skill_discriminator.py:848), scope resolution failure (scripts/validation/check_agent_skill_discriminator.py:856), caught exception (scripts/validation/check_agent_skill_discriminator.py:864), or unreadable baseline (scripts/validation/check_agent_skill_discriminator.py:883)
  - Result: Documented exit codes match actual code exit paths per ADR-035.
- for validators/gates:
  - can it exit non-zero? Yes, exits 1 when un-exempted candidates score >= 2 or exceed baseline ratchet, and exits 2 on configuration errors.
  - does it fail on the source repo's own default branch? In default change-triggered mode, exits 0 when no agent files are changed. In `--all` full-corpus mode without a baseline, it catches 10 pre-existing skill-shaped agent candidates on the default branch and exits 1.
- does the output match what the documentation claims? Yes, correctly scores criteria c1/c2/c3, applies pipeline limit rules, respects overrides and isolation flags, and prints diagnostic breakdown.

## Defects — required
- `missing-path` — `scripts/validation/check_agent_skill_discriminator.py:621` — Default baseline JSON `agent_skill_discriminator_baseline.json` documented by `--baseline` is absent from the repository; invoking `--baseline scripts/validation/agent_skill_discriminator_baseline.json` exits with code 2 (Baseline file not found).
- `other` — `scripts/validation/check_agent_skill_discriminator.py:893` — Script length (893 lines) exceeds the repository's 500-line ceiling mandated by `.claude/rules/code-quality.md`, despite extraction of baseline helpers to `agent_skill_discriminator_baseline.py`.

## Observations
- In full-corpus mode (`--all`), the script scores 62 files across `.claude/agents/` and `templates/agents/`. Because `templates/agents/*.shared.md` agents are mirrors of `.claude/agents/*.md`, candidates such as `critic`, `devops`, `milestone-planner`, and `task-decomposer` appear twice in the failure list.
- Furthermore, `qa` and `architect` have `isolation_required: yes` in `.claude/agents/` frontmatter (passing as `[ok]`), but lack `isolation_required: true` in `templates/agents/*.shared.md` (flagged as `[CANDIDATE]`), demonstrating divergence between agent templates and Claude Code manifests.

## Context cost
34,655 bytes, 893 lines (~7,800 tokens). Loads `scripts/validation/agent_skill_discriminator_baseline.py` (12,142 bytes) and `scripts/validation/portability_common.py` (10,958 bytes). Total loaded size ~57,755 bytes (~13,000 tokens).
