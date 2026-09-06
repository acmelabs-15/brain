---
package: rjm
path: scripts/eval/eval-skill-overlap.py
type: script
bytes: 37191
unit: inv-rjm-233
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/eval/eval-skill-overlap.py, sha256: df7052dcf1361e8df552ea9c4a15a3f720e7a3f3576d24b4ddddb7628045d026}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/eval-skill-overlap.py

## Purpose — required, verbatim
> "Pairwise Skill Overlap Analysis: detect redundancy between two skills." — scripts/eval/eval-skill-overlap.py:2
> "This script fills that gap for the `.claude/skills/` catalog prune." — scripts/eval/eval-skill-overlap.py:6

## Design intent — required
Provides an automated, empirical evaluation harness for measuring redundancy between pairs of skills in `.claude/skills/` during catalog pruning. While single-skill evaluators (such as `eval-knowledge-integration.py`) determine whether an individual skill outperforms the baseline LLM on its native domain, they cannot determine whether two skills with overlapping scopes duplicate each other's capabilities. By running three parallel conditions (baseline prompt, prompt with Skill A context, prompt with Skill B context) across both skills' native test prompts and scoring outputs using an LLM judge on a 1–5 scale, this tool computes cross-prompt deltas to classify pairs as DISTINCT (keep both), OVERLAP (symmetric mutual help, fold candidate), or SUBSUMED (asymmetric one-way coverage, prune candidate). Without this tool, catalog maintenance and skill pruning decisions would rely on subjective developer intuition, risking accidental retention of redundant skills or unwarranted deletion of distinct capabilities.

## Phase — required
none

## Inputs — required
- Command-line arguments:
  - `--pairs`: "Path to cluster.json with 'pairs' and 'prompts' (explicit pair list)." — scripts/eval/eval-skill-overlap.py:982
  - `--model`: "Model id for generation and judge." — scripts/eval/eval-skill-overlap.py:984
  - `--dry-run`: "Validate inputs and print the cost estimate without calling the API." — scripts/eval/eval-skill-overlap.py:988
  - `--run-id`: "Override the generated run id (used for the report directory name)." — scripts/eval/eval-skill-overlap.py:993
- Files read from disk:
  - Cluster JSON pairs file specified by `--pairs` containing `pairs` (list of two-element skill name lists) and `prompts` (mapping of skill name to prompt objects with `prompt` and `expected` fields) — scripts/eval/eval-skill-overlap.py:30-40, 433-505
  - Skill definitions and reference files under `.claude/skills/<skill>/`:
    - `SKILL.md` for each skill in a pair — scripts/eval/eval-skill-overlap.py:563-565
    - All files in `references/` subdirectory for each skill in a pair — scripts/eval/eval-skill-overlap.py:566-572
  - Machine-readable evaluation report `matrix.json` when validating retirement claims via `validate_retirement_claim` — scripts/eval/eval-skill-overlap.py:366
- Environment variables / configuration:
  - `load_api_key_for_selected_provider` — scripts/eval/eval-skill-overlap.py:68 (loading ANTHROPIC_API_KEY from environment or repo root .env)

## Outputs — required
- Machine-readable evaluation matrix JSON:
  `matrix.json` written to `evals/reports/overlap-<run_id>/matrix.json` containing `run_id`, `model`, `generated_at`, and `pairs` list with per-pair verdicts, recommendations, condition score breakdowns (`a_on_a`, `b_on_b`), and API call counts — scripts/eval/eval-skill-overlap.py:768-798, 863
- Human-facing evaluation report Markdown:
  `REPORT.md` written to `evals/reports/overlap-<run_id>/REPORT.md` containing summary table and per-pair detail sections — scripts/eval/eval-skill-overlap.py:802-841, 864
- Standard output and standard error:
  - Cost estimate rendered to stderr: "Cost estimate: {self.api_calls} API calls, " — scripts/eval/eval-skill-overlap.py:122
  - Dry run summary printed to stderr: "Dry run: {len(config.pairs)} pair(s) validated, no API calls made." — scripts/eval/eval-skill-overlap.py:952
  - Live progress printed to stderr: "Evaluating pair: {skill_a} vs {skill_b}" — scripts/eval/eval-skill-overlap.py:896
  - Report location printed to stderr: "Report written to {out_dir}" — scripts/eval/eval-skill-overlap.py:971
- Exit codes (ADR-035):
  - 0: success (analysis completed; verdicts written; dry run completed) — scripts/eval/eval-skill-overlap.py:43, 955, 972
  - 1: logic error (pair references a non-existent skill directory) — scripts/eval/eval-skill-overlap.py:44, 909, 941
  - 2: config error (malformed pairs file, missing prompts, bad CLI usage) — scripts/eval/eval-skill-overlap.py:45, 930, 936, 947
  - 3: external error (Anthropic API failure during a live run, invalid judge response payload) — scripts/eval/eval-skill-overlap.py:46, 915, 920, 961

## Invokes — required
- script _anthropic_api — scripts/eval/eval-skill-overlap.py:67
- script _eval_common — scripts/eval/eval-skill-overlap.py:69

## Invoked by — required
- doc README.md — scripts/eval/README.md:29

## Concepts named — required, verbatim
- `Pairwise Skill Overlap Analysis` — scripts/eval/eval-skill-overlap.py:2 — defined here
- `eval-knowledge-integration.py` — scripts/eval/eval-skill-overlap.py:4 — used here
- `catalog prune` — scripts/eval/eval-skill-overlap.py:6 — used here
- `baseline` — scripts/eval/eval-skill-overlap.py:9 — defined here
- `expected answer` — scripts/eval/eval-skill-overlap.py:13 — used here
- `LLM judge` — scripts/eval/eval-skill-overlap.py:14 — used here
- `DISTINCT` — scripts/eval/eval-skill-overlap.py:15 — defined here
- `OVERLAP` — scripts/eval/eval-skill-overlap.py:16 — defined here
- `SUBSUMED` — scripts/eval/eval-skill-overlap.py:17 — defined here
- `Issue #1932` — scripts/eval/eval-skill-overlap.py:19 — used here
- `cluster.json` — scripts/eval/eval-skill-overlap.py:19 — used here
- `ADR-035` — scripts/eval/eval-skill-overlap.py:42 — used here
- `EST_TOKENS_PER_CALL` — scripts/eval/eval-skill-overlap.py:70 — used here
- `MODEL_PRICING_RATES_USD_PER_1K_TOKENS` — scripts/eval/eval-skill-overlap.py:71 — used here
- `PRICING_RATE_AS_OF` — scripts/eval/eval-skill-overlap.py:72 — used here
- `MalformedProviderMetadataError` — scripts/eval/eval-skill-overlap.py:73 — used here
- `EXIT_OK` — scripts/eval/eval-skill-overlap.py:80 — defined here
- `EXIT_LOGIC` — scripts/eval/eval-skill-overlap.py:81 — defined here
- `EXIT_CONFIG` — scripts/eval/eval-skill-overlap.py:82 — defined here
- `EXIT_EXTERNAL` — scripts/eval/eval-skill-overlap.py:83 — defined here
- `DEFAULT_MODEL` — scripts/eval/eval-skill-overlap.py:96 — defined here
- `RATE_LIMIT_SLEEP_SEC` — scripts/eval/eval-skill-overlap.py:97 — defined here
- `DELTA_HELP_THRESHOLD` — scripts/eval/eval-skill-overlap.py:102 — defined here
- `OverlapVerdict` — scripts/eval/eval-skill-overlap.py:104 — defined here
- `CostEstimate` — scripts/eval/eval-skill-overlap.py:113 — defined here
- `PricingError` — scripts/eval/eval-skill-overlap.py:128 — defined here
- `DirectionScores` — scripts/eval/eval-skill-overlap.py:172 — defined here
- `own_delta` — scripts/eval/eval-skill-overlap.py:186 — defined here
- `other_delta` — scripts/eval/eval-skill-overlap.py:190 — defined here
- `recommend_action` — scripts/eval/eval-skill-overlap.py:244 — defined here
- `Retirement-claim guard` — scripts/eval/eval-skill-overlap.py:261 — defined here
- `Issue #2676` — scripts/eval/eval-skill-overlap.py:261 — used here
- `ReportRef` — scripts/eval/eval-skill-overlap.py:274 — defined here
- `ReportVerdictError` — scripts/eval/eval-skill-overlap.py:277 — defined here
- `RETIREMENT_VERDICTS` — scripts/eval/eval-skill-overlap.py:322 — defined here
- `PairsFileError` — scripts/eval/eval-skill-overlap.py:423 — defined here
- `PairsConfig` — scripts/eval/eval-skill-overlap.py:428 — defined here
- `MissingSkillError` — scripts/eval/eval-skill-overlap.py:527 — defined here
- `CWE-22` — scripts/eval/eval-skill-overlap.py:534 — used here
- `ResponseFn` — scripts/eval/eval-skill-overlap.py:581 — defined here
- `JudgeFn` — scripts/eval/eval-skill-overlap.py:583 — defined here
- `JudgeScoreError` — scripts/eval/eval-skill-overlap.py:614 — defined here
- `PairResult` — scripts/eval/eval-skill-overlap.py:663 — defined here
- `matrix.json` — scripts/eval/eval-skill-overlap.py:768 — defined here
- `REPORT.md` — scripts/eval/eval-skill-overlap.py:802 — defined here
- `Prune / Fold Table` — scripts/eval/eval-skill-overlap.py:811 — defined here

## Structure
none (python script; functions and definitions: CostEstimate, PricingError, estimate_cost, _blended_rate_for_model, DirectionScores, classify_overlap, _covers, recommend_action, ReportRef, ReportVerdictError, _coerce_report_payload, is_retirement_verdict, load_report_verdicts, report_verdict_for_pair, validate_retirement_claim, emit_retirement_claim, PairsFileError, PairsConfig, load_pairs_file, _validate_prompts, _require_prompts_for_pairs, MissingSkillError, require_skill_dir, _validate_pair_skill_dirs, load_skill_context, ResponseFn, JudgeFn, make_response_fn, make_judge_fn, JudgeScoreError, _parse_judge_score, _first_json_object, PairResult, _score_prompt_set, _system_for, _avg, evaluate_pair, build_matrix, build_report_md, _render_pair_detail, write_reports, _make_run_id, _validate_run_id, _evaluate_pairs, run, build_parser, main)

## Scripts — required if type is script or the skill ships scripts
- path: scripts/eval/eval-skill-overlap.py, language: Python 3, lines: 1006
- documented invocation:
  - "python3 scripts/eval/eval-skill-overlap.py --pairs cluster.json --dry-run" — scripts/eval/eval-skill-overlap.py:26
  - "python3 scripts/eval/eval-skill-overlap.py --pairs cluster.json" — scripts/eval/eval-skill-overlap.py:27
  - "python3 scripts/eval/eval-skill-overlap.py \" — scripts/eval/README.md:29
- **executed:** yes
- actual command run:
  `python3 scripts/eval/eval-skill-overlap.py --pairs scripts/eval/examples/example-overlap-pairs.json --dry-run`
  abridged stdout:
  ```
  Cost estimate: 48 API calls, ~168,000 tokens, ~$1.51 USD (pricing as of 2026-08-01)
  Dry run: 2 pair(s) validated, no API calls made.
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in script docstring:
  - "0  success (analysis completed; verdicts written)" — scripts/eval/eval-skill-overlap.py:43
  - "1  logic error (pair references a non-existent skill directory)" — scripts/eval/eval-skill-overlap.py:44
  - "2  config error (malformed pairs file, missing prompts, bad CLI usage)" — scripts/eval/eval-skill-overlap.py:45
  - "3  external error (Anthropic API failure during a live run)" — scripts/eval/eval-skill-overlap.py:46
  Actual exit paths in code:
  - `sys.exit(main())` — scripts/eval/eval-skill-overlap.py:1005
  - `return EXIT_OK` (0) on successful dry run (line 955) or after writing reports (line 972)
  - `return EXIT_LOGIC` (1) when `_validate_pair_skill_dirs` or `_evaluate_pairs` catches `MissingSkillError` (lines 909, 941)
  - `return EXIT_CONFIG` (2) when `load_pairs_file` raises `PairsFileError` (line 930), `_validate_run_id` raises `ValueError` (line 936), or `estimate_cost` raises `PricingError` (line 947)
  - `return EXIT_EXTERNAL` (3) when `_load_api_key_for_selected_provider` raises `RuntimeError` (line 961), or when `_evaluate_pairs` catches `JudgeScoreError` (line 915) or API `RuntimeError` (line 920)
- for validators/gates: can it exit non-zero? yes, exits 1 on missing skill directory, 2 on config/pricing error, and 3 on external API failure. Does it fail on the source repo's own default branch? Exits 0 on the source repository's default branch when run with `--pairs scripts/eval/examples/example-overlap-pairs.json --dry-run`.
- does the output match what the documentation claims? Yes, renders cost estimate, validates pairs and prompts, and in live mode writes `matrix.json` and `REPORT.md` under `evals/reports/overlap-<run_id>/` matching doc claims.

## Defects — required
- `doc-drift` · scripts/eval/eval-skill-overlap.py:21 · Script docstring calculates O(N^2) full sweep cost as `N*(N-1)/2 unordered pairs * prompts per pair * 6 calls per prompt (~145k calls for 70 skills)` while `scripts/eval/README.md:362-363` computes `(~36k calls for 70 skills)`.
- `other` · scripts/eval/eval-skill-overlap.py:916 · `_evaluate_pairs` catches `MalformedProviderMetadataError` and explicitly re-raises it (`raise` at line 917) instead of catching and returning `EXIT_EXTERNAL` or another clean exit code, causing an unhandled exception crash if provider metadata is corrupt.

## Observations
- CWE-22 Path Traversal Defenses: Validates both skill directory resolution (`require_skill_dir` at line 534-545 rejects names with slashes or `.`/`..` and ensures directory stays under `SKILLS_DIR`) and run ID / output directory resolution (`_validate_run_id` at line 880 enforces strict regex and `write_reports` at line 859 verifies path does not escape `REPORTS_DIR`).
- Retirement-Claim Guard (`emit_retirement_claim` at line 388): Implemented under Issue #2676 to prevent automated issue generators from hallucinating deletion or folding claims for skills scored as `DISTINCT` in evaluation reports; validates claimed verdict against machine-readable `matrix.json`.
- Order-Independent Pair Mapping: `load_report_verdicts` and `report_verdict_for_pair` index pairs using `frozenset({skill_a, skill_b})`, ensuring lookups succeed regardless of argument ordering.
- Asymmetry Classification: The `classify_overlap` logic correctly handles asymmetric superiority where an alternate skill performs better than the owning skill on its own prompts (`scores.own_delta - scores.other_delta <= threshold`).

## Context cost
37191 bytes (~9298 tokens). Evaluates context of referenced skills (`SKILL.md` + `references/`) and consumes ~3,500 tokens per API call across 6 calls per prompt in live evaluation.
