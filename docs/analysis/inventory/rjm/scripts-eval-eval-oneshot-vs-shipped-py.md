---
package: rjm
path: scripts/eval/eval-oneshot-vs-shipped.py
type: script
bytes: 11170
unit: inv-rjm-229
in_scope_via: scripts/eval/README.md
aliases: []
memo_inputs:
  - {path: scripts/eval/eval-oneshot-vs-shipped.py, sha256: 62ac458c5ee7b965983f33a0e1e246f63f3ad282ba8d2094dcb67e825c4e5f52}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/eval-oneshot-vs-shipped.py

## Purpose — required, verbatim
> "One-shot-vs-shipped benchmark CLI (issue #2788)." — scripts/eval/eval-oneshot-vs-shipped.py:2

## Design intent — required
Provides a CLI benchmark harness evaluating agent reasoning by presenting closed historical bug reports and issue discussions while withholding the actual merged fix, requiring the agent to propose a fix and its own acceptance criteria, and grading the proposed fix against what actually shipped using an LLM judge. The script manages CLI options, directory path resolution preventing path traversal, API communication via Anthropic endpoints, dry-run plan inspection with zero spend, and JSON/human summary reporting. Without this harness, benchmark evaluations comparing agent problem-solving against real-world shipped fixes would require manual prompt construction and subjective evaluation rather than automated, calibrated LLM judging against released fixes.

## Phase — required
none

## Inputs — required
- CLI argument `--fixtures` — directory of fixture JSON files (default `"evals/oneshot-vs-shipped/corpus"`) — scripts/eval/eval-oneshot-vs-shipped.py:71,220
- CLI argument `--hardest-n` — optional integer filtering benchmark to run only N hardest fixtures — scripts/eval/eval-oneshot-vs-shipped.py:225
- CLI argument `--model` — model identifier for agent and judge calls (default `"claude-sonnet-4-6"`) — scripts/eval/eval-oneshot-vs-shipped.py:68,229
- CLI argument `--dry-run` — validate fixtures and output planned API calls without spending tokens — scripts/eval/eval-oneshot-vs-shipped.py:233
- CLI argument `--report` — optional destination Path for JSON summary artifact — scripts/eval/eval-oneshot-vs-shipped.py:239
- CLI argument `--output-format` — output presentation format (`"human"` or `"json"`, default `"human"`) — scripts/eval/eval-oneshot-vs-shipped.py:243
- Credential `ANTHROPIC_API_KEY` — scripts/eval/eval-oneshot-vs-shipped.py:12
- API key helper `_load_api_key_for_selected_provider` — scripts/eval/eval-oneshot-vs-shipped.py:47
- Fixture loader `load_fixtures` — scripts/eval/eval-oneshot-vs-shipped.py:41
- Fixture filter `select_hardest` — scripts/eval/eval-oneshot-vs-shipped.py:43

## Outputs — required
- Formatted benchmark summary rendered to stdout in human text or JSON format — scripts/eval/eval-oneshot-vs-shipped.py:295,297
- Dry-run call plan printed to stdout via `_dry_run_report` — scripts/eval/eval-oneshot-vs-shipped.py:269
- JSON evaluation report artifact saved to path specified by `--report` — scripts/eval/eval-oneshot-vs-shipped.py:237

## Invokes — required
- script _anthropic_api — scripts/eval/eval-oneshot-vs-shipped.py:30
- script _eval_common — scripts/eval/eval-oneshot-vs-shipped.py:31
- script _oneshot_bench_core — scripts/eval/eval-oneshot-vs-shipped.py:32

## Invoked by — required
- script _oneshot_bench_core.py — scripts/eval/_oneshot_bench_core.py:10

## Concepts named — required, verbatim
- `issue #2788` — scripts/eval/eval-oneshot-vs-shipped.py:2 — used here
- `_oneshot_bench_core` — scripts/eval/eval-oneshot-vs-shipped.py:7 — used here
- `ANTHROPIC_API_KEY` — scripts/eval/eval-oneshot-vs-shipped.py:12 — used here
- `AGENTS.md` — scripts/eval/eval-oneshot-vs-shipped.py:14 — used here
- `_anthropic_api` — scripts/eval/eval-oneshot-vs-shipped.py:30,48 — used here
- `_call_api` — scripts/eval/eval-oneshot-vs-shipped.py:30 — used here
- `MalformedProviderMetadataError` — scripts/eval/eval-oneshot-vs-shipped.py:31 — used here
- `BenchmarkSummary` — scripts/eval/eval-oneshot-vs-shipped.py:33 — used here
- `Fixture` — scripts/eval/eval-oneshot-vs-shipped.py:34 — used here
- `FixtureError` — scripts/eval/eval-oneshot-vs-shipped.py:35 — used here
- `FixtureResult` — scripts/eval/eval-oneshot-vs-shipped.py:36 — used here
- `JudgeVerdict` — scripts/eval/eval-oneshot-vs-shipped.py:37 — used here
- `aggregate` — scripts/eval/eval-oneshot-vs-shipped.py:38 — used here
- `build_agent_prompt` — scripts/eval/eval-oneshot-vs-shipped.py:39 — used here
- `build_judge_prompt` — scripts/eval/eval-oneshot-vs-shipped.py:40 — used here
- `load_fixtures` — scripts/eval/eval-oneshot-vs-shipped.py:41 — used here
- `parse_judge_response` — scripts/eval/eval-oneshot-vs-shipped.py:42 — used here
- `select_hardest` — scripts/eval/eval-oneshot-vs-shipped.py:43 — used here
- `_load_api_key_for_selected_provider` — scripts/eval/eval-oneshot-vs-shipped.py:47 — defined here
- `_api_error_verdict` — scripts/eval/eval-oneshot-vs-shipped.py:53 — defined here
- `EXIT_OK` — scripts/eval/eval-oneshot-vs-shipped.py:64 — defined here
- `EXIT_CONFIG` — scripts/eval/eval-oneshot-vs-shipped.py:65 — defined here
- `EXIT_EXTERNAL` — scripts/eval/eval-oneshot-vs-shipped.py:66 — defined here
- `DEFAULT_MODEL` — scripts/eval/eval-oneshot-vs-shipped.py:68 — defined here
- `_AGENT_MAX_TOKENS` — scripts/eval/eval-oneshot-vs-shipped.py:69 — defined here
- `_JUDGE_MAX_TOKENS` — scripts/eval/eval-oneshot-vs-shipped.py:70 — defined here
- `_DEFAULT_FIXTURES` — scripts/eval/eval-oneshot-vs-shipped.py:71 — defined here
- `_resolve_repo_child` — scripts/eval/eval-oneshot-vs-shipped.py:74 — defined here
- `grade_fixture` — scripts/eval/eval-oneshot-vs-shipped.py:89 — defined here
- `run_live` — scripts/eval/eval-oneshot-vs-shipped.py:141 — defined here
- `summary_to_json` — scripts/eval/eval-oneshot-vs-shipped.py:146 — defined here
- `summary_to_human` — scripts/eval/eval-oneshot-vs-shipped.py:176 — defined here
- `_dry_run_report` — scripts/eval/eval-oneshot-vs-shipped.py:195 — defined here
- `_parse_args` — scripts/eval/eval-oneshot-vs-shipped.py:209 — defined here
- `main` — scripts/eval/eval-oneshot-vs-shipped.py:251 — defined here

## Structure
- Module docstring describing benchmark concept, spend boundary, and exit code contract (lines 1-17)
- Imports and evaluation path configuration (lines 18-45)
- Provider API key loader: `_load_api_key_for_selected_provider` (lines 47-51)
- Transport error verdict factory: `_api_error_verdict` (lines 53-62)
- Exit constants and default token / model / fixture configurations (lines 64-72)
- Path traversal guard: `_resolve_repo_child` (lines 74-87)
- Live grading runner: `grade_fixture`, `run_live` (lines 89-144)
- Serialization and reporting helpers: `summary_to_json`, `summary_to_human`, `_dry_run_report` (lines 146-207)
- CLI argument specification: `_parse_args` (lines 209-249)
- Entry point: `main` and execution runner (lines 251-307)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/eval/eval-oneshot-vs-shipped.py`
- **language:** Python 3
- **lines:** 307
- **documented invocation:**
  > "Spend boundary: `--dry-run` validates fixtures and prints the call plan with" — scripts/eval/eval-oneshot-vs-shipped.py:10
  > "ZERO API spend, mirroring the main harness's no-spend path. A live run calls the" — scripts/eval/eval-oneshot-vs-shipped.py:11
  > "uv run python scripts/eval/eval-oneshot-vs-shipped.py --dry-run" — evals/oneshot-vs-shipped/README.md:11
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/eval/eval-oneshot-vs-shipped.py --hardest-n 2 --dry-run`
- **stdout:**
  ```text
  DRY RUN (claude-sonnet-4-6): 2 fixture(s), 4 planned API call(s), ZERO spend.
    - moq1002-1241 (difficulty 5, rjmurillo/moq.analyzers#1241): 4 named edge(s)
    - moq1200-1264 (difficulty 5, rjmurillo/moq.analyzers#1264): 4 named edge(s)
  ```
- **actual exit code:** 0
- **documented exit codes:**
  > "Exit codes (AGENTS.md): 0 ok, 2 config (bad path, malformed fixture, missing" — scripts/eval/eval-oneshot-vs-shipped.py:14
  > "credentials, report write failure), 3 external (API failure during a live run)." — scripts/eval/eval-oneshot-vs-shipped.py:15
- **actual exit paths:**
  - `return EXIT_CONFIG` — scripts/eval/eval-oneshot-vs-shipped.py:257
  - `return EXIT_CONFIG` — scripts/eval/eval-oneshot-vs-shipped.py:262
  - `return EXIT_CONFIG` — scripts/eval/eval-oneshot-vs-shipped.py:266
  - `return EXIT_OK` — scripts/eval/eval-oneshot-vs-shipped.py:270
  - `return EXIT_CONFIG` — scripts/eval/eval-oneshot-vs-shipped.py:276
  - `return EXIT_CONFIG` — scripts/eval/eval-oneshot-vs-shipped.py:284
  - `return EXIT_CONFIG` — scripts/eval/eval-oneshot-vs-shipped.py:293
  - `return EXIT_EXTERNAL if inconclusive else EXIT_OK` — scripts/eval/eval-oneshot-vs-shipped.py:302
  - `raise SystemExit(main())` — scripts/eval/eval-oneshot-vs-shipped.py:306
- **for validators/gates:** Non-zero exits occur on invalid configuration, missing fixtures directory, or missing API credentials (exit 2), or when any live run suffers API transport errors or judge-parsing failures (exit 3, preventing inconclusive runs from passing CI gates).
- **output matches documentation:** yes, dry-run verifies fixture loading and plans 2 API calls per fixture without spend.

## Defects — required
none

## Observations
Includes `_resolve_repo_child` which explicitly guards against directory traversal attacks by requiring candidate paths to resolve within the repository root boundary (`is_relative_to(repo_root)`). Separates transport failures from judge evaluation failures (`_api_error_verdict` sets `judge_failed=False`) to avoid double-counting transport errors in aggregate metrics.

## Context cost
11170 bytes, ~2790 tokens. Loads `_anthropic_api.py` (16054 bytes), `_eval_common.py` (26483 bytes), and `_oneshot_bench_core.py` (11629 bytes). Total context cost: ~65336 bytes (~16330 tokens).
