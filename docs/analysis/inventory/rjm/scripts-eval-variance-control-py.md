---
package: rjm
path: scripts/eval/variance-control.py
type: script
bytes: 22951
unit: inv-rjm-238
in_scope_via: .claude/skills/ai-agents-research-frontier/SKILL.md
aliases: []
memo_inputs:
  - {path: scripts/eval/variance-control.py, sha256: 1d714bacc4692f831c8bc76888ce6339cc62588a7b6fe7b76649725096c6d369}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/variance-control.py

## Purpose — required, verbatim
> "Variance-control harness for the security-spike eval (issue #1877)." — scripts/eval/variance-control.py:2

## Design intent — required
Quantifies whether the Anthropic API behaves deterministically on long-context evaluations by running identical `(fixture, agent)` prompts N times (default: 20) at `temperature=0`. It extracts verdicts using the canonical regex from `_scoring_engine`, computes string edit distance (Levenshtein and normalized Levenshtein) and text variance across consecutive responses, computes verdict distributions and pass-rate variances, and classifies empirical findings into one of six categories (`insufficient-data`, `high-error-rate`, `verdicts-unparseable`, `responses-bit-identical`, `text-varies-verdict-stable`, `verdicts-vary`). Without this harness, eval authors could not distinguish between LLM non-determinism, scorer fragility, or fixture mutation when observing fluctuating pass rates across eval runs.

## Phase — required
none

## Inputs — required
- CLI arguments parsed by `build_parser`:
  - `--fixture`: fixture id (default: "F002") — scripts/eval/variance-control.py:444
  - `--agent`: agent name (default: "security") — scripts/eval/variance-control.py:447
  - `--reps`: repetition count (default: 20, minimum: 2) — scripts/eval/variance-control.py:450, 468
  - `--model`: model identifier (default: "claude-sonnet-4-6") — scripts/eval/variance-control.py:454
  - `--run-id`: run identifier (default: generated UTC timestamp + uuid token) — scripts/eval/variance-control.py:457
  - `--dry-run`: flag to validate inputs and print execution plan without API calls — scripts/eval/variance-control.py:460
- Fixture JSON file: `evals/security-spike/fixtures/{fixture_id}.json` containing input string and assertions list with verdict expectation — scripts/eval/variance-control.py:58, 396
- Agent system prompt: `templates/agents/{agent}.shared.md` read as UTF-8 string — scripts/eval/variance-control.py:432
- Environment variable `ANTHROPIC_API_KEY` loaded by AnthropicAPIAdapter — scripts/eval/variance-control.py:14

## Outputs — required
- Console stdout:
  - Dry-run plan output when `--dry-run` is active — scripts/eval/variance-control.py:515
  - Markdown report rendered by `build_report_md` and completion message — scripts/eval/variance-control.py:575-576
- Files written atomically via temporary files into `evals/security-spike/control/{run_id}/`:
  - `raw.jsonl`: newline-delimited JSON of all `RepRecord` instances — scripts/eval/variance-control.py:547
  - `summary.json`: JSON summary payload with text_variance, verdict_variance, pass_rate_variance, and finding — scripts/eval/variance-control.py:548
  - `REPORT.md`: Markdown summary report with finding, verdict variance, and response-text variance — scripts/eval/variance-control.py:549
- Console stderr: diagnostic error messages on configuration or runtime failure — scripts/eval/variance-control.py:469, 535, 581
- Exit codes:
  - 0: success (measurement complete or dry-run complete) — scripts/eval/variance-control.py:518, 586
  - 2: configuration/usage/file error (reps < 2, missing fixture, bad args, existing run directory, write error) — scripts/eval/variance-control.py:470, 478, 493, 506, 511, 574
  - 3: external failure (fewer than 2 reps answered, invalid measurement) — scripts/eval/variance-control.py:585
  - 4: auth failure (missing or invalid `ANTHROPIC_API_KEY`) — scripts/eval/variance-control.py:537

## Invokes — required
- script _eval_api_adapter — scripts/eval/variance-control.py:39
- script _scoring_engine — scripts/eval/variance-control.py:40

## Invoked by — required
- skill .claude/skills/ai-agents-research-frontier — .claude/skills/ai-agents-research-frontier/SKILL.md:136

## Concepts named — required, verbatim
- `Variance-control harness` — scripts/eval/variance-control.py:2 — defined here
- `security-spike eval` — scripts/eval/variance-control.py:2 — used here
- `issue #1877` — scripts/eval/variance-control.py:2 — used here
- `AC-1` — scripts/eval/variance-control.py:10 — used here
- `AC-2` — scripts/eval/variance-control.py:12 — used here
- `AC-3` — scripts/eval/variance-control.py:12 — used here
- `AC-4` — scripts/eval/variance-control.py:13 — used here
- `ADR-058` — scripts/eval/variance-control.py:13 — used here
- `ANTHROPIC_API_KEY` — scripts/eval/variance-control.py:14 — used here
- `_scoring_engine._VERDICT_RE` — scripts/eval/variance-control.py:19 — used here
- `AnthropicAPIAdapter` — scripts/eval/variance-control.py:39 — used here
- `DEFAULT_MODEL` — scripts/eval/variance-control.py:42 — defined here
- `DEFAULT_REPS` — scripts/eval/variance-control.py:43 — defined here
- `OUTPUT_SHAPE_SUFFIX` — scripts/eval/variance-control.py:47 — defined here
- `eval-agent-vs-baseline.py` — scripts/eval/variance-control.py:45 — used here
- `CWE-22` — scripts/eval/variance-control.py:52 — used here
- `CONTROL_DIR_TEMPLATE` — scripts/eval/variance-control.py:57 — defined here
- `FIXTURES_DIR` — scripts/eval/variance-control.py:58 — defined here
- `extract_verdict` — scripts/eval/variance-control.py:66 — defined here
- `levenshtein` — scripts/eval/variance-control.py:83 — defined here
- `normalized_levenshtein` — scripts/eval/variance-control.py:106 — defined here
- `response_text_variance` — scripts/eval/variance-control.py:112 — defined here
- `verdict_distribution` — scripts/eval/variance-control.py:150 — defined here
- `pass_rate_variance` — scripts/eval/variance-control.py:163 — defined here
- `classify_finding` — scripts/eval/variance-control.py:183 — defined here
- `summarize_variance` — scripts/eval/variance-control.py:239 — defined here
- `RepRecord` — scripts/eval/variance-control.py:274 — defined here
- `run_reps` — scripts/eval/variance-control.py:285 — defined here
- `build_report_md` — scripts/eval/variance-control.py:324 — defined here
- `_assert_under_repo_root` — scripts/eval/variance-control.py:369 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/variance-control.py`, language: Python, lines: 602
- documented invocation: "uv run python scripts/eval/variance-control.py --fixture F002 --agent security --reps 20" — evals/security-spike/control/20260531T184905Z-60538bcf/FINDINGS.md:87
- **executed:** yes
- actual command run: `python3 scripts/eval/variance-control.py --fixture F002 --agent security --reps 20 --dry-run`
  abridged stdout:
  ```
  PLAN: 20 reps of fixture=F002 agent=security model=claude-sonnet-4-6 expected=IDENTIFY run_id=20260906T055230Z-0506392c (no API calls)
  ```
  **actual exit code:** 0
- documented exit codes:
  Documents exit code convention in code comments:
  "Honor the AGENTS.md eval exit-code contract (3=external, 4=auth)" — scripts/eval/variance-control.py:529
  Actual exit paths:
  - `raise SystemExit(main())` — scripts/eval/variance-control.py:601
  - `return 0` — scripts/eval/variance-control.py:518
  - `return 0` — scripts/eval/variance-control.py:586
  - `return 2` — scripts/eval/variance-control.py:470
  - `return 2` — scripts/eval/variance-control.py:478
  - `return 2` — scripts/eval/variance-control.py:493
  - `return 2` — scripts/eval/variance-control.py:506
  - `return 2` — scripts/eval/variance-control.py:511
  - `return 2` — scripts/eval/variance-control.py:574
  - `return 3` — scripts/eval/variance-control.py:585
  - `return 4` — scripts/eval/variance-control.py:537
- for validators/gates: not a binary gate, but exits non-zero on error (2, 3, 4). When tested with dry-run on default branch, it succeeds with exit code 0.
- does the output match what the documentation claims? yes, loads F002 fixture, validates against `security.shared.md`, and prints execution plan on dry run.

## Defects — required
none

## Observations
- Reuses `_VERDICT_RE` directly from `_scoring_engine.py` to ensure complete consistency between variance extraction and official eval scoring.
- Implements strict path sanitization via `_NAME_RE` and `_assert_under_repo_root` to protect against CWE-22 directory traversal on `--agent` and `--run-id` parameters.
- Uses atomic file writes (writes to `.tmp` files first, then renames) to prevent partial or corrupted artifacts if an error or interruption occurs.

## Context cost
22951 bytes (602 lines), approximately 5700 tokens. When following invoked scripts (`_eval_api_adapter.py` at 7401 bytes and `_scoring_engine.py` at 18041 bytes), transitive context is ~48KB (~12000 tokens).
