---
package: rjm
path: scripts/eval/eval-agent-vs-baseline.py
type: script
bytes: 45289
unit: inv-rjm-226
in_scope_via: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md
aliases: []
memo_inputs:
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# scripts/eval/eval-agent-vs-baseline.py

## Purpose — required, verbatim
> "Eval Agent vs. Baseline runner." — scripts/eval/eval-agent-vs-baseline.py:2

## Design intent — required
Provides an automated, reproducible, and statistically rigorous evaluation harness to measure whether a specialized agent system prompt (and optionally an inline skill prompt) achieves a statistically significant recall improvement over an unspecialized, naive baseline prompt ("Review the following input."). Without this runner, agent prompt modifications cannot be empirically validated against regressions or hallucinations, leaving teams reliant on subjective inspection rather than deterministic assertion scoring, paired-bootstrap confidence intervals, and controlled cost and latency telemetry.

## Phase — required
none

## Inputs — required
- Command-line arguments:
  - `--agent` (required): Agent identifier allow-listed against `_AGENT_NAME_RE` (`^[a-z][a-z0-9_-]{0,30}$`) (scripts/eval/eval-agent-vs-baseline.py:128, 481-485)
  - `--fixtures` (required): Path to directory containing fixture JSON files (scripts/eval/eval-agent-vs-baseline.py:487-491)
  - `--n-runs`: Number of runs per fixture-variant pair (default: 3) (scripts/eval/eval-agent-vs-baseline.py:493-497)
  - `--model`: Foundation model identifier (default: `claude-sonnet-4-6`) (scripts/eval/eval-agent-vs-baseline.py:499-502)
  - `--dry-run`: Flag to validate fixtures and print execution plan without API calls (scripts/eval/eval-agent-vs-baseline.py:504-507)
  - `--include-skill`: Flag to add `skill` variant alongside agent and baseline (scripts/eval/eval-agent-vs-baseline.py:509-516)
  - `--skill-path`: Path to SKILL.md, default `.claude/skills/<agent>-review/SKILL.md` (scripts/eval/eval-agent-vs-baseline.py:518-526)
  - `--run-id`: Custom run identifier matching `_RUN_ID_RE` (scripts/eval/eval-agent-vs-baseline.py:528-532)
  - `--resume`: Run identifier of an interrupted run to resume (scripts/eval/eval-agent-vs-baseline.py:534-539)
  - `--provider`: Transport provider (anthropic, openai, codex, github, github-models, anthropic-sdk) (scripts/eval/eval-agent-vs-baseline.py:541-550)
  - `--seed`: Integer seed forwarded to OpenAI-compatible providers (default: 0) (scripts/eval/eval-agent-vs-baseline.py:552-559)
- Source files read:
  - Agent prompt template: `templates/agents/{agent}.shared.md` (scripts/eval/eval-agent-vs-baseline.py:107, 404-410)
  - Skill prompt markdown: `.claude/skills/{agent}-review/SKILL.md` or operator-specified `--skill-path` (scripts/eval/eval-agent-vs-baseline.py:113, 427-436)
  - Fixture JSON files: `<fixtures>/*.json` validated for `schemaVersion: 1`, `id`, `input`, `provenance`, `assertions`, and `tags` (scripts/eval/eval-agent-vs-baseline.py:226-250, 469)
  - Existing run records (when resuming): `evals/{agent}-spike/runs/{run_id}/runs.jsonl` (scripts/eval/eval-agent-vs-baseline.py:119, 743-745)
- Environment variables:
  - `EVAL_PROVIDER`: Provider routing override (scripts/eval/eval-agent-vs-baseline.py:958, 1163)
  - `ANTHROPIC_API_KEY`: API key for Anthropic transport adapter (scripts/eval/eval-agent-vs-baseline.py:834, 848)

## Outputs — required
- Dry-run plan output on stdout: execution plan with `planned_calls`, `estimated_tokens_in`, `estimated_tokens_out`, and `cost_estimate_usd` (scripts/eval/eval-agent-vs-baseline.py:564-565, 1201)
- Run persistence directory: `evals/{agent}-spike/runs/{run_id}/` (scripts/eval/eval-agent-vs-baseline.py:119, 739)
- Run records file: `evals/{agent}-spike/runs/{run_id}/runs.jsonl` (scripts/eval/eval-agent-vs-baseline.py:866)
- Aggregate JSON report: `evals/{agent}-spike/reports/{run_id}.json` (scripts/eval/eval-agent-vs-baseline.py:120, 999, 1043)
- Aggregate Markdown report: `evals/{agent}-spike/reports/{run_id}.md` (scripts/eval/eval-agent-vs-baseline.py:120, 999, 1043)
- Structured JSON log events on stderr: `resume_skip`, `resume_skip_summary`, `auth_failure`, `flaky_halt_threshold_crossed`, error halts, and completion summary (scripts/eval/eval-agent-vs-baseline.py:795, 836, 853, 881, 903, 973, 988, 1024, 1058, 1095, 1113)
- Process exit codes: 0 (success), 1 (logic error / flakiness halt), 2 (config / fixture invalid), 3 (external failure), 4 (auth failure) (scripts/eval/eval-agent-vs-baseline.py:68-72)

## Invokes — required
- script _eval_agent_types — scripts/eval/eval-agent-vs-baseline.py:36
- script _eval_api_adapter — scripts/eval/eval-agent-vs-baseline.py:48
- script _eval_common — scripts/eval/eval-agent-vs-baseline.py:49
- script _plan_runner — scripts/eval/eval-agent-vs-baseline.py:50
- script _report_aggregator — scripts/eval/eval-agent-vs-baseline.py:57
- script _report_writer — scripts/eval/eval-agent-vs-baseline.py:58
- script _run_persistence — scripts/eval/eval-agent-vs-baseline.py:59
- script _scoring_engine — scripts/eval/eval-agent-vs-baseline.py:66
- template templates/agents/{agent}.shared.md — scripts/eval/eval-agent-vs-baseline.py:107
- template .claude/skills/{agent}-review/SKILL.md — scripts/eval/eval-agent-vs-baseline.py:113

## Invoked by — required
- doc ADR-058-agent-eval-discipline.md — .agents/architecture/ADR-058-agent-eval-discipline.md:78
- doc DESIGN-004-agent-eval-harness-spike.md — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:28
- skill ai-agents-empirical-probe-toolkit — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:99
- skill security-review — .claude/skills/security-review/SKILL.md:50
- script eval-model-panel.py — scripts/eval/eval-model-panel.py:52
- script eval-model-sweep.py — scripts/eval/eval-model-sweep.py:64

## Concepts named — required, verbatim
- `DESIGN-004` — scripts/eval/eval-agent-vs-baseline.py:4 — used here
- `FixtureValidator` — scripts/eval/eval-agent-vs-baseline.py:6 — defined here
- `PlanRunner` — scripts/eval/eval-agent-vs-baseline.py:6 — used here
- `AnthropicAPIAdapter` — scripts/eval/eval-agent-vs-baseline.py:9 — used here
- `ScoringEngine` — scripts/eval/eval-agent-vs-baseline.py:9 — used here
- `RunPersistence` — scripts/eval/eval-agent-vs-baseline.py:9 — used here
- `AGENTS.md` — scripts/eval/eval-agent-vs-baseline.py:15 — used here
- `SCHEMA_VERSION` — scripts/eval/eval-agent-vs-baseline.py:37 — used here
- `Assertion` — scripts/eval/eval-agent-vs-baseline.py:38 — used here
- `AssertionKind` — scripts/eval/eval-agent-vs-baseline.py:39 — used here
- `AssertionResult` — scripts/eval/eval-agent-vs-baseline.py:40 — used here
- `Fixture` — scripts/eval/eval-agent-vs-baseline.py:41 — used here
- `FixtureValidationError` — scripts/eval/eval-agent-vs-baseline.py:42 — used here
- `ProvenanceLiteral` — scripts/eval/eval-agent-vs-baseline.py:43 — used here
- `RunRecord` — scripts/eval/eval-agent-vs-baseline.py:44 — used here
- `SchemaVersionError` — scripts/eval/eval-agent-vs-baseline.py:45 — used here
- `VariantLiteral` — scripts/eval/eval-agent-vs-baseline.py:46 — used here
- `APICallResult` — scripts/eval/eval-agent-vs-baseline.py:48 — used here
- `MalformedProviderMetadataError` — scripts/eval/eval-agent-vs-baseline.py:49 — used here
- `FORM_FACTOR_VARIANTS` — scripts/eval/eval-agent-vs-baseline.py:51 — used here
- `VARIANTS` — scripts/eval/eval-agent-vs-baseline.py:52 — used here
- `ExecutionPlan` — scripts/eval/eval-agent-vs-baseline.py:53 — used here
- `UnsupportedModelError` — scripts/eval/eval-agent-vs-baseline.py:55 — used here
- `EmptyRunError` — scripts/eval/eval-agent-vs-baseline.py:57 — used here
- `ReportAggregator` — scripts/eval/eval-agent-vs-baseline.py:57 — used here
- `compute_form_factor` — scripts/eval/eval-agent-vs-baseline.py:57 — used here
- `ReportWriter` — scripts/eval/eval-agent-vs-baseline.py:58 — used here
- `DuplicateRunError` — scripts/eval/eval-agent-vs-baseline.py:60 — used here
- `MalformedRunRecordError` — scripts/eval/eval-agent-vs-baseline.py:61 — used here
- `RunDirectoryNotFreshError` — scripts/eval/eval-agent-vs-baseline.py:62 — used here
- `RunSeedMismatchError` — scripts/eval/eval-agent-vs-baseline.py:64 — used here
- `build_default_engine` — scripts/eval/eval-agent-vs-baseline.py:66 — used here
- `EXIT_OK` — scripts/eval/eval-agent-vs-baseline.py:68 — defined here
- `EXIT_LOGIC` — scripts/eval/eval-agent-vs-baseline.py:69 — defined here
- `EXIT_CONFIG` — scripts/eval/eval-agent-vs-baseline.py:70 — defined here
- `EXIT_EXTERNAL` — scripts/eval/eval-agent-vs-baseline.py:71 — defined here
- `EXIT_AUTH` — scripts/eval/eval-agent-vs-baseline.py:72 — defined here
- `DEFAULT_MODEL` — scripts/eval/eval-agent-vs-baseline.py:74 — defined here
- `DEFAULT_N_RUNS` — scripts/eval/eval-agent-vs-baseline.py:75 — defined here
- `DEFAULT_SEED` — scripts/eval/eval-agent-vs-baseline.py:76 — defined here
- `ALLOWED_PROVENANCE` — scripts/eval/eval-agent-vs-baseline.py:77 — defined here
- `TAG_RE` — scripts/eval/eval-agent-vs-baseline.py:80 — defined here
- `SPIKE-1854` — scripts/eval/eval-agent-vs-baseline.py:89 — used here
- `BASELINE_PROMPT` — scripts/eval/eval-agent-vs-baseline.py:90 — defined here
- `BASELINE_PROMPT_REF` — scripts/eval/eval-agent-vs-baseline.py:91 — defined here
- `OUTPUT_SHAPE_SUFFIX` — scripts/eval/eval-agent-vs-baseline.py:99 — defined here
- `OUTPUT_SHAPE_SUFFIX_REF` — scripts/eval/eval-agent-vs-baseline.py:103 — defined here
- `AGENT_PROMPT_REF_TEMPLATE` — scripts/eval/eval-agent-vs-baseline.py:107 — defined here
- `SKILL_PROMPT_REF_TEMPLATE` — scripts/eval/eval-agent-vs-baseline.py:113 — defined here
- `REQ-004` — scripts/eval/eval-agent-vs-baseline.py:115 — used here
- `MAX_ERROR_RATE` — scripts/eval/eval-agent-vs-baseline.py:117 — defined here
- `RUNS_DIR_TEMPLATE` — scripts/eval/eval-agent-vs-baseline.py:119 — defined here
- `REPORTS_DIR_TEMPLATE` — scripts/eval/eval-agent-vs-baseline.py:120 — defined here
- `CWE-22` — scripts/eval/eval-agent-vs-baseline.py:122 — used here
- `REPO_ROOT` — scripts/eval/eval-agent-vs-baseline.py:82 — defined here
- `ADR-058` — scripts/eval/eval-agent-vs-baseline.py:548 — used here

## Structure
- `FixtureValidator (DESIGN-004 §5.2, REQ-004 AC-4)` — scripts/eval/eval-agent-vs-baseline.py:200
- `Helpers shared by run loop and report (T4-3 will reuse).` — scripts/eval/eval-agent-vs-baseline.py:370
- `CLI` — scripts/eval/eval-agent-vs-baseline.py:462

## Scripts — required if type is script or the skill ships scripts
For each script:
- path: `scripts/eval/eval-agent-vs-baseline.py`, language: Python 3, lines: 1214
- documented invocation:
  "python3 scripts/eval/eval-agent-vs-baseline.py \" — evals/analyst-spike/README.md:31
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `python3 scripts/eval/eval-agent-vs-baseline.py --agent analyst --fixtures evals/analyst-spike/fixtures --dry-run`
  Abridged stdout:
  ```
  planned_calls=144
  estimated_tokens_in=352800
  estimated_tokens_out=151200
  cost_estimate_usd=3.33 rate_as_of=2026-08-01
  ```
  **actual exit code**: 0
  Additional test runs verified:
  - Dry run with security fixtures: `python3 scripts/eval/eval-agent-vs-baseline.py --agent security --fixtures evals/security-spike/fixtures --dry-run` (exit code: 0)
  - Dry run with include-skill: `python3 scripts/eval/eval-agent-vs-baseline.py --agent security --fixtures evals/security-spike/fixtures --include-skill --dry-run` (exit code: 0)
  - Auth failure handling without key: `env -u ANTHROPIC_API_KEY python3 scripts/eval/eval-agent-vs-baseline.py --agent security --fixtures evals/security-spike/fixtures --run-id test-auth-check` (exit code: 4)
  - Config failure handling: `python3 scripts/eval/eval-agent-vs-baseline.py --agent security --fixtures nonexistent --dry-run` (exit code: 2)
  - Test suite: `uv run pytest tests/evals/test_eval_agent_vs_baseline.py` (265 passed, exit code: 0)
- documented exit codes vs actual exit paths in code:
  - "0 = success" — scripts/eval/eval-agent-vs-baseline.py:16:
    `return EXIT_OK` — scripts/eval/eval-agent-vs-baseline.py:1128
    `return EXIT_OK` — scripts/eval/eval-agent-vs-baseline.py:1202
  - "1 = logic error / duplicate run / flakiness halt" — scripts/eval/eval-agent-vs-baseline.py:17:
    `return EXIT_LOGIC` — scripts/eval/eval-agent-vs-baseline.py:749
    `return EXIT_LOGIC` — scripts/eval/eval-agent-vs-baseline.py:753
    `return EXIT_LOGIC` — scripts/eval/eval-agent-vs-baseline.py:869
    `return EXIT_LOGIC` — scripts/eval/eval-agent-vs-baseline.py:919
    `return EXIT_LOGIC` — scripts/eval/eval-agent-vs-baseline.py:983
    `return EXIT_LOGIC` — scripts/eval/eval-agent-vs-baseline.py:1036
    `return EXIT_LOGIC` — scripts/eval/eval-agent-vs-baseline.py:1088
  - "2 = config / fixture invalid" — scripts/eval/eval-agent-vs-baseline.py:18:
    `return EXIT_CONFIG` — scripts/eval/eval-agent-vs-baseline.py:714
    `return EXIT_CONFIG` — scripts/eval/eval-agent-vs-baseline.py:728
    `return EXIT_CONFIG` — scripts/eval/eval-agent-vs-baseline.py:735
    `return EXIT_CONFIG` — scripts/eval/eval-agent-vs-baseline.py:760
    `return EXIT_CONFIG` — scripts/eval/eval-agent-vs-baseline.py:872
    `return EXIT_CONFIG` — scripts/eval/eval-agent-vs-baseline.py:996
    `return EXIT_CONFIG` — scripts/eval/eval-agent-vs-baseline.py:1169
    `return EXIT_CONFIG` — scripts/eval/eval-agent-vs-baseline.py:1175
    `return EXIT_CONFIG` — scripts/eval/eval-agent-vs-baseline.py:1191
    `return EXIT_CONFIG` — scripts/eval/eval-agent-vs-baseline.py:1198
  - "3 = external (API) failure" — scripts/eval/eval-agent-vs-baseline.py:19:
    `return EXIT_EXTERNAL` — scripts/eval/eval-agent-vs-baseline.py:1156
  - "4 = auth" — scripts/eval/eval-agent-vs-baseline.py:20:
    `return EXIT_AUTH` — scripts/eval/eval-agent-vs-baseline.py:845
    `return EXIT_AUTH` — scripts/eval/eval-agent-vs-baseline.py:864
  - `sys.exit(main())` — scripts/eval/eval-agent-vs-baseline.py:1213
- for validators/gates: can it exit non-zero? Yes, exits non-zero on logic errors (1), config errors (2), external provider errors (3), or auth errors (4). Does it fail on the source repo's own default branch? In `--dry-run` mode with valid repo fixtures (`evals/analyst-spike/fixtures` or `evals/security-spike/fixtures`), it succeeds with exit code 0. When invoked without `ANTHROPIC_API_KEY` in live mode, it cleanly exits with code 4.
- does the output match what the documentation claims? Yes, stdout outputs planned call count, token estimates, and cost estimates matching the plan format.

## Defects — required
none

## Observations
- CWE-22 Path Traversal Hardening: `--agent`, `--run-id`, `--resume`, and `--skill-path` arguments are validated with strict regex allow-lists, and target file paths are checked against repository root boundaries with `_assert_under_repo_root` before filesystem operations.
- Content-Control Normalization: `_strip_frontmatter` removes leading YAML frontmatter fences so that comparing an agent against an inline skill tests only prompt bodies, ensuring identical `prompt_sha` values when domain instructions are shared.
- Symmetric Output-Shape Constraint: Both baseline and agent variants receive identical user message suffixes (`OUTPUT_SHAPE_SUFFIX`) enforcing a unified verdict token (`IDENTIFY`, `OK`, `ESCALATE`) and an 80-word explanation ceiling, eliminating vocabulary mismatch as a confounding variable.
- Flakiness and Error Resilience: Implements a 10% per-fixture error ceiling (`MAX_ERROR_RATE`), a 30% flakiness halt gate with report emission prior to termination, and `--resume` support with atomic record deduplication.

## Context cost
45,289 bytes (1,214 lines) for `eval-agent-vs-baseline.py`. Combined with imported evaluation components (`_eval_agent_types.py`, `_eval_api_adapter.py`, `_eval_common.py`, `_plan_runner.py`, `_report_aggregator.py`, `_report_writer.py`, `_run_persistence.py`, `_scoring_engine.py` totalling 116,164 bytes), total loaded script context is 161,453 bytes (~39,500 tokens).
