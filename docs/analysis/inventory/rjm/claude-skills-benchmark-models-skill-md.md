---
package: rjm
path: .claude/skills/benchmark-models/SKILL.md
type: skill
bytes: 7979
unit: inv-rjm-91
in_scope_via: .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/benchmark-models/SKILL.md, sha256: e6dc6102a86bfc9ab6a5afd2e85fe024d3ed6b9f5f7862af1a9078ad8bc6b14d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/benchmark-models/SKILL.md

## Purpose — required, verbatim
> "Run the same prompt across providers and compare them on data, not vibes." — .claude/skills/benchmark-models/SKILL.md:19

## Design intent — required
Interactive workflow wrapper around `model_benchmark.py` designed to run cross-model shootouts without speculative claims. Guides an operator through driver resolution, prompt selection, zero-cost credential preview via dry-run, provider confirmation, optional opt-in for paid Anthropic-API judge quality scoring, and comparative result interpretation with baseline export for regression tracking. Solves the problem of picking AI models based on informal impressions rather than measured latency, token usage, cost, and output quality.

## Phase — required
rjm:test

## Inputs — required
- User trigger phrases:
  "benchmark models" — .claude/skills/benchmark-models/SKILL.md:36
  "compare models" — .claude/skills/benchmark-models/SKILL.md:37
  "model shootout" — .claude/skills/benchmark-models/SKILL.md:38
  "which model is best" — .claude/skills/benchmark-models/SKILL.md:39
  "cross-model comparison" — .claude/skills/benchmark-models/SKILL.md:40
- Preconditions:
  "At least one provider CLI installed and authenticated." — .claude/skills/benchmark-models/SKILL.md:46
  "adds ~$0.05/run" — .claude/skills/benchmark-models/SKILL.md:48
- Prompt sources: skill `SKILL.md` file, inline text via `--prompt`, or prompt file on disk
- Environment variables: `MODEL_BENCHMARK_SKILL_ROOTS`, `ANTHROPIC_API_KEY`

## Outputs — required
- Evaluative summary report:
  "fastest (latency), cheapest (cost), highest quality (if judged), and" — .claude/skills/benchmark-models/SKILL.md:109
- Optional JSON baseline file:
  "benchmark-$(date +%Y%m%d)-<slug>.json" — .claude/skills/benchmark-models/SKILL.md:115

## Invokes — required
- script model_benchmark.py — .claude/skills/benchmark-models/SKILL.md:20
- command claude — .claude/skills/benchmark-models/SKILL.md:28
- command codex — .claude/skills/benchmark-models/SKILL.md:29
- command gemini — .claude/skills/benchmark-models/SKILL.md:30

## Invoked by — required
- skill ai-agents-empirical-probe-toolkit — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:31

## Concepts named — required, verbatim
`model_benchmark.py` — .claude/skills/benchmark-models/SKILL.md:20 — used here
`Anthropic-API judge` — .claude/skills/benchmark-models/SKILL.md:4 — used here
`AskUserQuestion` — .claude/skills/benchmark-models/SKILL.md:56 — used here
`MODEL_BENCHMARK_SKILL_ROOTS` — .claude/skills/benchmark-models/SKILL.md:64 — used here
`ADR-035` — .claude/skills/benchmark-models/SKILL.md:130 — used here
`read-only` — .claude/skills/benchmark-models/SKILL.md:143 — used here
`--yolo` — .claude/skills/benchmark-models/SKILL.md:144 — used here
`PRICING` — .claude/skills/benchmark-models/SKILL.md:149 — used here

## Structure
# benchmark-models — .claude/skills/benchmark-models/SKILL.md:17
## Triggers — .claude/skills/benchmark-models/SKILL.md:32
## Preconditions — .claude/skills/benchmark-models/SKILL.md:44
## Process — .claude/skills/benchmark-models/SKILL.md:50
### Step 1: Pick a prompt and preview auth (dry-run) — .claude/skills/benchmark-models/SKILL.md:54
### Step 2: Confirm providers and judge — .claude/skills/benchmark-models/SKILL.md:85
### Step 3: Run — .claude/skills/benchmark-models/SKILL.md:94
### Step 4: Interpret and optionally save — .claude/skills/benchmark-models/SKILL.md:107
## Scripts — .claude/skills/benchmark-models/SKILL.md:118
### model_benchmark.py — .claude/skills/benchmark-models/SKILL.md:120
## Anti-Patterns — .claude/skills/benchmark-models/SKILL.md:152
## Verification — .claude/skills/benchmark-models/SKILL.md:162

## Scripts — required if type is script or the skill ships scripts
For `.claude/skills/benchmark-models/scripts/model_benchmark.py`:
- path: `.claude/skills/benchmark-models/scripts/model_benchmark.py`, language: Python 3 (stdlib), lines: 706
- documented invocation:
  "python3 \"$BENCH\" --prompt \"dry-run\" --models claude,gpt,gemini --dry-run" — .claude/skills/benchmark-models/SKILL.md:78
  "python3 \"$BENCH\" <prompt-spec> --models <picked> [--judge] --output table" — .claude/skills/benchmark-models/SKILL.md:97
  "python3 \"$BENCH\" <prompt-spec> --models <picked> [--judge] --output json > benchmark-$(date +%Y%m%d)-<slug>.json" — .claude/skills/benchmark-models/SKILL.md:115
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
- documented exit codes vs actual:
  Documented: "Exit codes (ADR-035): `0` success, `1` logic/runtime error, `2` config or usage" — .claude/skills/benchmark-models/SKILL.md:130 and "error, `3` external dependency failure, `4` authentication or authorization" — .claude/skills/benchmark-models/SKILL.md:131
  Actual exit paths: `0` (success/dry-run), `1` (runtime error), `2` (usage/config error), `3` (timeout/rate limit), `4` (auth error). Matches ADR-035.
- for validators/gates: exits non-zero on error (e.g. code 2 on missing prompt). Unit tests pass 100% (84 passed in pytest).
- output match: Yes, matches documented table/json output format and dry run block.

## Defects — required
none

## Observations
- Outlines clear anti-patterns: running benchmarks before dry-runs, auto-enabling `--judge` without user opt-in, benchmarking in live repositories with unsandboxed Gemini (`--yolo`), guessing unlisted model prices, or searching only `./` for candidate skills.
- Notes that prompts must not contain secrets because CLI arguments are visible in process listings and crash reports.

## Context cost
7979 bytes (skill) + 28434 bytes (driver script) = 36413 bytes, approximately 9100 tokens.
