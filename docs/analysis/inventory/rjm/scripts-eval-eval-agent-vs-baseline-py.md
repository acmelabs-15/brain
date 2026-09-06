---
package: rjm
path: scripts/eval/eval-agent-vs-baseline.py
type: script
bytes: 45289
unit: inv-rjm-226
in_scope_via: scripts/eval/README.md
aliases: []
memo_inputs:
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/eval/eval-agent-vs-baseline.py

## Purpose — required, verbatim
> "Eval Agent vs. Baseline runner." — scripts/eval/eval-agent-vs-baseline.py:2

## Design intent — required
Provides an empirical evaluation harness to measure whether specialized agent system prompts (or inline skills) outperform a naive baseline prompt (`BASELINE_PROMPT = "Review the following input."`) on held-out test fixtures using statistical rigor (paired bootstrap confidence intervals, N-aware flakiness detection, recall deltas, cost and token tracking). Without this tool, prompt engineering and agent specialization would rely on subjective evaluation or test set overfitting, lacking empirical evidence that agent instructions actually improve recall over a generic baseline under identical output formatting constraints.

## Phase — required
none

## Inputs — required
CLI arguments: `--agent` (allow-listed agent name, e.g. `security`, `analyst`), `--fixtures` (directory of fixture JSON files), `--n-runs` (number of runs per fixture and variant, default 3), `--model` (model ID, default `claude-sonnet-4-6`), `--dry-run` (validation and plan calculation flag without API calls), `--include-skill` (flag adding inline `skill` variant), `--skill-path` (custom path to `SKILL.md`), `--run-id` (identifier for run persistence), `--resume` (run ID to resume skipping completed runs), `--provider` (model transport provider, e.g. `anthropic`, `openai`, `github`), `--seed` (integer seed, default 0).
Files consumed: fixture JSON files under `--fixtures` directory (schema version 1 with `id`, `input`, `provenance`, `assertions`, `tags`), agent prompt markdown at `templates/agents/{agent}.shared.md` (line 107), inline skill markdown at `.claude/skills/{agent}-review/SKILL.md` (line 113) or `--skill-path`, prior run records when resuming at `evals/{agent}-spike/runs/{run_id}/runs.jsonl` (line 119).
Environment variables: `ANTHROPIC_API_KEY` (line 834), `EVAL_PROVIDER` (line 958, 1163).

## Outputs — required
Stdout in `--dry-run` mode: planned call counts, input and output token estimates, cost estimate in USD, and pricing rate date (line 1201).
Per-run JSONL records: `evals/{agent}-spike/runs/{run_id}/runs.jsonl` (line 119, containing `RunRecord` entries with run outcome, latency, token counts, assertion scoring, and raw responses).
Aggregated JSON and Markdown reports: `evals/{agent}-spike/reports/` (line 120, written by `ReportWriter` with report JSON and Markdown containing recall deltas, bootstrap 95% confidence intervals, and recommendation).
Structured JSON logs on stderr: events for `resume_skip`, `auth_failure`, `resume_skip_summary`, `empty_run`, `unsupported_model`, `form_factor_invalid`, `flaky_halt_threshold_crossed`, and completion summary.
Exit codes: 0 (success), 1 (logic error / duplicate run / flakiness halt / error rate > 10%), 2 (config / fixture invalid), 3 (external API failure / malformed metadata), 4 (auth failure) (lines 15-21, 68-72).

## Invokes — required
- script _eval_agent_types — scripts/eval/eval-agent-vs-baseline.py:36
- script _eval_api_adapter — scripts/eval/eval-agent-vs-baseline.py:48
- script _eval_common — scripts/eval/eval-agent-vs-baseline.py:49
- script _plan_runner — scripts/eval/eval-agent-vs-baseline.py:50
- script _report_aggregator — scripts/eval/eval-agent-vs-baseline.py:57
- script _report_writer — scripts/eval/eval-agent-vs-baseline.py:58
- script _run_persistence — scripts/eval/eval-agent-vs-baseline.py:59
- script _scoring_engine — scripts/eval/eval-agent-vs-baseline.py:66

## Invoked by — required
- script eval-model-sweep.py — scripts/eval/eval-model-sweep.py:64
- script eval-model-panel.py — scripts/eval/eval-model-panel.py:52
- doc README.md — scripts/eval/README.md:390
- skill ai-agents-empirical-probe-toolkit — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:99
- reference instrument-guides.md — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:119

## Concepts named — required, verbatim
- `Eval Agent vs. Baseline` — scripts/eval/eval-agent-vs-baseline.py:2 — defined here
- `DESIGN-004` — scripts/eval/eval-agent-vs-baseline.py:4 — used here
- `FixtureValidator` — scripts/eval/eval-agent-vs-baseline.py:6 — defined here
- `PlanRunner` — scripts/eval/eval-agent-vs-baseline.py:6 — used here
- `AnthropicAPIAdapter` — scripts/eval/eval-agent-vs-baseline.py:9 — used here
- `ScoringEngine` — scripts/eval/eval-agent-vs-baseline.py:9 — used here
- `RunPersistence` — scripts/eval/eval-agent-vs-baseline.py:9 — used here
- `T4-1` — scripts/eval/eval-agent-vs-baseline.py:11 — used here
- `T4-2` — scripts/eval/eval-agent-vs-baseline.py:12 — used here
- `T4-3` — scripts/eval/eval-agent-vs-baseline.py:13 — used here
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
- `ALLOWED_PROVENANCE` — scripts/eval/eval-agent-vs-baseline.py:77 — defined here
- `synthetic` — scripts/eval/eval-agent-vs-baseline.py:78 — used here
- `public-cve` — scripts/eval/eval-agent-vs-baseline.py:78 — used here
- `paraphrased-from-public` — scripts/eval/eval-agent-vs-baseline.py:78 — used here
- `BASELINE_PROMPT` — scripts/eval/eval-agent-vs-baseline.py:90 — defined here
- `BASELINE_PROMPT_REF` — scripts/eval/eval-agent-vs-baseline.py:91 — defined here
- `OUTPUT_SHAPE_SUFFIX` — scripts/eval/eval-agent-vs-baseline.py:99 — defined here
- `IDENTIFY` — scripts/eval/eval-agent-vs-baseline.py:100 — used here
- `OK` — scripts/eval/eval-agent-vs-baseline.py:100 — used here
- `ESCALATE` — scripts/eval/eval-agent-vs-baseline.py:101 — used here
- `OUTPUT_SHAPE_SUFFIX_REF` — scripts/eval/eval-agent-vs-baseline.py:103 — defined here
- `AGENT_PROMPT_REF_TEMPLATE` — scripts/eval/eval-agent-vs-baseline.py:107 — defined here
- `SKILL_PROMPT_REF_TEMPLATE` — scripts/eval/eval-agent-vs-baseline.py:113 — defined here
- `MAX_ERROR_RATE` — scripts/eval/eval-agent-vs-baseline.py:117 — defined here
- `REQ-004` — scripts/eval/eval-agent-vs-baseline.py:115 — used here
- `AC-3` — scripts/eval/eval-agent-vs-baseline.py:115 — used here
- `CWE-22` — scripts/eval/eval-agent-vs-baseline.py:122 — used here
- `Issue #1875` — scripts/eval/eval-agent-vs-baseline.py:109 — used here
- `Issue #2936` — scripts/eval/eval-agent-vs-baseline.py:135 — used here
- `ADR-058` — scripts/eval/eval-agent-vs-baseline.py:548 — used here
- `SPIKE-1854-methodology-diagnosis.md` — scripts/eval/eval-agent-vs-baseline.py:89 — used here
- `form-factor-invalid` — scripts/eval/eval-agent-vs-baseline.py:1019 — defined here
- `halt-due-to-flakiness` — scripts/eval/eval-agent-vs-baseline.py:1052 — defined here
- `flaky_halt_threshold_crossed` — scripts/eval/eval-agent-vs-baseline.py:1089 — used here
- `AC-10` — scripts/eval/eval-agent-vs-baseline.py:1090 — used here

## Structure
- Module docstring with pipeline stages, task milestones, and AGENTS.md exit codes (lines 1-21)
- Imports, exit code definitions, and configuration defaults (lines 23-81)
- Prompt definitions, templates, and regex allowlists (lines 83-140)
- Argument validators and defense-in-depth repo root guard: `_agent_name_arg`, `_run_id_arg`, `_skill_path_arg`, `_assert_under_repo_root` (lines 143-197)
- FixtureValidator implementation: `validate_fixtures`, `_validate_one`, `_check_schema_version`, `_require_str`, `_require_provenance`, `_require_assertions`, `_validate_assertion`, `_validate_tags` (lines 204-367)
- Run loop and report helper functions: `_sha256_text`, `_strip_frontmatter`, `_read_agent_prompt`, `_read_skill_prompt`, `_fixture_sha`, `_fixture_set_sha`, `_generate_run_id` (lines 374-459)
- CLI argument parser and fixture path loader: `_load_fixture_paths`, `_build_arg_parser` (lines 466-560)
- Plan printing, prompt building, and single-run scoring helpers: `_print_plan`, `_build_prompt`, `_resolve_prompt_metadata`, `_execute_one`, `_make_failed_assertion_result` (lines 563-700)
- Live execution loop with retry, resume, and error rate gating: `_run_live` (lines 702-934)
- Report generation and flakiness halt enforcement: `_generate_report` (lines 936-1128)
- External metadata exception wrapper: `_run_live_with_metadata_exit` (lines 1131-1157)
- Entry point: `main` function and sys.exit invocation (lines 1159-1214)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/eval-agent-vs-baseline.py`
- language: Python
- lines: 1214
- documented invocation:
  > "python3 scripts/eval/eval-agent-vs-baseline.py" — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:99
  > "uv run python ./scripts/eval/eval-agent-vs-baseline.py --agent <name> --fixtures <dir> --dry-run" — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:119
- **executed:** yes
- actual command run: `python3 scripts/eval/eval-agent-vs-baseline.py --agent security --fixtures evals/security-spike/fixtures --dry-run`
- abridged stdout:
  ```
  planned_calls=96
  estimated_tokens_in=235199
  estimated_tokens_out=100801
  cost_estimate_usd=2.22 rate_as_of=2026-08-01
  ```
- **actual exit code:** 0
- documented exit codes:
  > "0 = success" — scripts/eval/eval-agent-vs-baseline.py:16
  > "1 = logic error / duplicate run / flakiness halt" — scripts/eval/eval-agent-vs-baseline.py:17
  > "2 = config / fixture invalid" — scripts/eval/eval-agent-vs-baseline.py:18
  > "3 = external (API) failure" — scripts/eval/eval-agent-vs-baseline.py:19
  > "4 = auth" — scripts/eval/eval-agent-vs-baseline.py:20
- actual exit paths in code:
  `sys.exit(main())` at scripts/eval/eval-agent-vs-baseline.py:1213; in `main`: return `EXIT_CONFIG` (2) at line 1170 (missing fixtures), line 1176 (fixture validation / schema version error), line 1191 (plan runner value or unsupported model error), line 1199 (missing skill prompt); return `EXIT_OK` (0) at line 1202 (dry run); in `_run_live_with_metadata_exit`: return `EXIT_EXTERNAL` (3) at line 1157 (`MalformedProviderMetadataError`); in `_run_live`: return `EXIT_CONFIG` (2) at line 714 (missing agent prompt), line 728 (missing skill prompt), line 735 (conflicting run-id and resume args), line 760 (schema version / malformed record / seed mismatch); return `EXIT_LOGIC` (1) at line 749 (run directory not fresh), line 753 (duplicate run error at init), line 869 (duplicate run error writing record), line 919 (fixture-level error rate > 10%); return `EXIT_AUTH` (4) at line 845 (API key runtime error), line 864 (adapter auth category); in `_generate_report`: return `EXIT_LOGIC` (1) at line 983 (empty run error), line 1036 (invalid form factor calculation), line 1088 (flakiness halt); return `EXIT_CONFIG` (2) at line 996 (unsupported model); return `EXIT_OK` (0) at line 1128 (successful report write).
- for validators/gates: can exit non-zero on logic, config, auth, or external errors; on the repo's default branch, running with valid fixtures in dry-run mode exits 0.
- does the output match what the documentation claims?
  Yes, outputs planned calls, token estimates, and cost estimates in dry-run mode, and writes JSONL run logs and aggregated reports in live mode.

## Defects — required
- `exit-code-mismatch` · scripts/eval/eval-agent-vs-baseline.py:919 · When external API calls fail and push the fixture-level error rate over MAX_ERROR_RATE (0.10), the runner returns EXIT_LOGIC (1) at line 919 rather than EXIT_EXTERNAL (3) documented at line 19; EXIT_EXTERNAL is only returned at line 1157 for MalformedProviderMetadataError.
- `script-bug` · scripts/eval/eval-agent-vs-baseline.py:1 · Filename contains hyphens (`eval-agent-vs-baseline.py`), preventing standard Python importing by consuming scripts and test suites, requiring sibling modules (`eval-model-sweep.py:66`) to duplicate constants and tests to construct custom dynamic loaders.

## Observations
- Rigorous statistical framework: combines deterministic dry-run cost planning with empirical execution, paired bootstrap 95% confidence intervals, and automated flakiness detection that halts when flaky fixtures exceed threshold.
- Content-control normalization: `_strip_frontmatter` removes YAML frontmatter from both agent prompts and inline skills so prompt body byte-equivalence is preserved, isolating form-factor from content differences (lines 378-395).
- Output shape normalization: `OUTPUT_SHAPE_SUFFIX` forces identical response format (`IDENTIFY, OK, or ESCALATE. Then briefly explain in <=80 words.`) across all variants to ensure fair scoring without structural bias (lines 99-102).
- Security path validation: strict regex allowlisting and canonical repo-root boundary enforcement via `_assert_under_repo_root` to prevent path traversal vulnerabilities from CLI arguments (lines 122-196).

## Context cost
File size: 45,289 bytes (1,214 lines). Total size with all 8 imported helper modules (`_eval_agent_types.py`, `_eval_api_adapter.py`, `_eval_common.py`, `_plan_runner.py`, `_report_aggregator.py`, `_report_writer.py`, `_run_persistence.py`, `_scoring_engine.py`): 161,453 bytes (~40,500 tokens).
