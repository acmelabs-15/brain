---
package: rjm
path: .claude/skills/benchmark-models/scripts/model_benchmark.py
type: script
bytes: 28434
unit: inv-rjm-91
in_scope_via: .claude/skills/benchmark-models/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/benchmark-models/scripts/model_benchmark.py, sha256: 24e47a99f562f4b01c686d57d77933618fb77c91b85adab2f43f2a59770df0bc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/benchmark-models/scripts/model_benchmark.py

## Purpose — required, verbatim
> "model_benchmark.py - run one prompt across Claude, GPT, and Gemini and compare." — .claude/skills/benchmark-models/scripts/model_benchmark.py:2

## Design intent — required
Standalone cross-model benchmarking engine ported from gstack to Python standard library with zero external runtime dependencies. Evaluates arbitrary prompts across Claude, GPT (Codex CLI), and Gemini simultaneously to capture quantitative execution metrics (latency, input/output/cached token usage, USD cost estimation, tool invocation count) and qualitative evaluation via an Anthropic API judge. It prevents speculative model selection by providing empirical, reproducible comparison data while strictly enforcing read-only execution for GPT (`-s read-only`) and allowed root constraints for local prompt files.

## Phase — required
rjm:test

## Inputs — required
- Positional prompt file path:
  "model_benchmark.py <prompt-file> [options]" — .claude/skills/benchmark-models/scripts/model_benchmark.py:25
- Inline prompt text:
  "model_benchmark.py --prompt" — .claude/skills/benchmark-models/scripts/model_benchmark.py:26
- CLI options:
  "Providers (default: claude)" — .claude/skills/benchmark-models/scripts/model_benchmark.py:29
  "Inline prompt instead of a file" — .claude/skills/benchmark-models/scripts/model_benchmark.py:30
  "Working dir for each CLI (default: cwd)" — .claude/skills/benchmark-models/scripts/model_benchmark.py:31
  "Per-provider timeout (default: 300000)" — .claude/skills/benchmark-models/scripts/model_benchmark.py:32
  "Output format (default: table)" — .claude/skills/benchmark-models/scripts/model_benchmark.py:33
  "Drop providers that fail the auth check" — .claude/skills/benchmark-models/scripts/model_benchmark.py:34
  "Score outputs with an Anthropic-API judge" — .claude/skills/benchmark-models/scripts/model_benchmark.py:35
  "Validate flags + auth, do not invoke providers" — .claude/skills/benchmark-models/scripts/model_benchmark.py:37
- Environment variables:
  "x-api-key": os.environ["ANTHROPIC_API_KEY"], — .claude/skills/benchmark-models/scripts/model_benchmark.py:438
  `DEFAULT_SKILL_ROOT_ENV` — .claude/skills/benchmark-models/scripts/model_benchmark.py:58 — defined here
  " or export GOOGLE_API_KEY.\"" — .claude/skills/benchmark-models/scripts/model_benchmark.py:287

## Outputs — required
- Stdout formatted table, json, or markdown reports:
  "Output format (default: table)" — .claude/skills/benchmark-models/scripts/model_benchmark.py:33
- Dry-run validation output:
  "== model_benchmark --dry-run ==" — .claude/skills/benchmark-models/scripts/model_benchmark.py:646
- Standard exit codes:
  "Exit codes (ADR-035): 0 ok, 1 logic/runtime error, 2 config/usage error," — .claude/skills/benchmark-models/scripts/model_benchmark.py:39
  "3 external dependency failure, 4 authentication or authorization failure." — .claude/skills/benchmark-models/scripts/model_benchmark.py:40

## Invokes — required
none

## Invoked by — required
- skill benchmark-models — .claude/skills/benchmark-models/SKILL.md:20

## Concepts named — required, verbatim
`ADR-035` — .claude/skills/benchmark-models/scripts/model_benchmark.py:39 — used here
`gstack-model-benchmark` — .claude/skills/benchmark-models/scripts/model_benchmark.py:9 — used here
`garrytan/gstack` — .claude/skills/benchmark-models/scripts/model_benchmark.py:10 — used here
`Anthropic-API judge` — .claude/skills/benchmark-models/scripts/model_benchmark.py:35 — used here
`MODEL_BENCHMARK_SKILL_ROOTS` — .claude/skills/benchmark-models/scripts/model_benchmark.py:58 — defined here
`PRICING` — .claude/skills/benchmark-models/scripts/model_benchmark.py:69 — defined here
`RunResult` — .claude/skills/benchmark-models/scripts/model_benchmark.py:108 — defined here
`Entry` — .claude/skills/benchmark-models/scripts/model_benchmark.py:118 — defined here
`ClaudeAdapter` — .claude/skills/benchmark-models/scripts/model_benchmark.py:180 — defined here
`GptAdapter` — .claude/skills/benchmark-models/scripts/model_benchmark.py:223 — defined here
`GeminiAdapter` — .claude/skills/benchmark-models/scripts/model_benchmark.py:277 — defined here
`JUDGE_MODEL` — .claude/skills/benchmark-models/scripts/model_benchmark.py:373 — defined here

## Structure
# Pricing (USD per million tokens). Update from provider pricing pages: — .claude/skills/benchmark-models/scripts/model_benchmark.py:61
# Result shapes — .claude/skills/benchmark-models/scripts/model_benchmark.py:105
# Provider adapters — .claude/skills/benchmark-models/scripts/model_benchmark.py:163
# Runner — .claude/skills/benchmark-models/scripts/model_benchmark.py:332
# Judge (Anthropic API via stdlib http.client; no SDK dependency) — .claude/skills/benchmark-models/scripts/model_benchmark.py:369
# Formatters — .claude/skills/benchmark-models/scripts/model_benchmark.py:479
# CLI — .claude/skills/benchmark-models/scripts/model_benchmark.py:552

## Scripts — required if type is script or the skill ships scripts
For `.claude/skills/benchmark-models/scripts/model_benchmark.py`:
- path: `.claude/skills/benchmark-models/scripts/model_benchmark.py`, language: Python 3 (stdlib), lines: 706
- documented invocation:
  "model_benchmark.py <prompt-file> [options]" — .claude/skills/benchmark-models/scripts/model_benchmark.py:25
  "model_benchmark.py --prompt" — .claude/skills/benchmark-models/scripts/model_benchmark.py:26
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/benchmark-models/scripts/model_benchmark.py --prompt "dry-run" --models claude,gpt,gemini --dry-run`
- abridged stdout:
```
== model_benchmark --dry-run ==
  prompt:     dry-run
  providers:  claude, gpt, gemini
  workdir:    /Users/peterkloss/Dev/ACMElabs/brain-v2
  timeout_ms: 300000
  output:     table
  judge:      off

Adapter availability:
  claude: NOT READY - No Claude auth. Log in via `claude`, or export ANTHROPIC_API_KEY.
  gpt: NOT READY - codex CLI not found on PATH. Install: npm i -g @openai/codex
  gemini: NOT READY - No Gemini auth. Log in via `gemini login` or export GOOGLE_API_KEY.

(--dry-run - no prompts sent. 3 provider(s) unavailable.)
```
- **actual exit code:** 0
- documented exit codes vs actual exit paths:
  Documented: "Exit codes (ADR-035): 0 ok, 1 logic/runtime error, 2 config/usage error," — .claude/skills/benchmark-models/scripts/model_benchmark.py:39 and "3 external dependency failure, 4 authentication or authorization failure." — .claude/skills/benchmark-models/scripts/model_benchmark.py:40
  Actual exit paths:
  - `0`: `.claude/skills/benchmark-models/scripts/model_benchmark.py:689` (`return 0` on `--dry-run`), `.claude/skills/benchmark-models/scripts/model_benchmark.py:634` (`return 0` on report with no error codes)
  - `1`: `.claude/skills/benchmark-models/scripts/model_benchmark.py:639` (`return 1` on uncategorized logic/runtime error)
  - `2`: `.claude/skills/benchmark-models/scripts/model_benchmark.py:574` (`raise SystemExit(2)` when prompt missing), `.claude/skills/benchmark-models/scripts/model_benchmark.py:581` (`raise SystemExit(2)` when prompt file outside allowed roots), `.claude/skills/benchmark-models/scripts/model_benchmark.py:627` (`return 2` when no entries or results exist)
  - `3`: `.claude/skills/benchmark-models/scripts/model_benchmark.py:638` (`return 3` on `timeout` or `rate_limit` error codes)
  - `4`: `.claude/skills/benchmark-models/scripts/model_benchmark.py:636` (`return 4` on `auth` error codes)
- for validators/gates: can exit non-zero (exits 2 on missing prompt, verified with `python3 sources/rjm/.claude/skills/benchmark-models/scripts/model_benchmark.py`). Passes all 84 test cases in `.claude/skills/benchmark-models/tests/test_model_benchmark.py`.
- output match: Yes, stdout format matches documented dry-run specification.

## Defects — required
none

## Observations
- Ported from gstack (`garrytan/gstack`) TypeScript benchmark, dropping telemetry and artifact synchronization while preserving multi-model evaluation metrics.
- Enforces an execution safety asymmetry: `codex` is invoked with `-s read-only`, whereas `gemini` is passed `--yolo` without filesystem sandbox restrictions.
- Implements concurrency gating: only runs providers concurrently when all selected providers are `gpt` (`_providers_run_concurrently`); Claude and Gemini are run sequentially to prevent concurrent filesystem write collisions.
- Restricts prompt file locations to approved filesystem roots (`repo_root`, `cwd`, or paths listed in `MODEL_BENCHMARK_SKILL_ROOTS`) to mitigate unauthorized file read vectors.

## Context cost
28434 bytes, approximately 7100 tokens.
