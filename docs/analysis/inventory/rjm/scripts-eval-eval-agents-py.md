---
package: rjm
path: scripts/eval/eval-agents.py
type: script
bytes: 59882
unit: inv-rjm-227
in_scope_via: scripts/eval/eval-suite.py
aliases: []
memo_inputs:
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# scripts/eval/eval-agents.py

## Purpose — required, verbatim
> "Agent Definition Quality Assessment: Measure agent prompt quality against role expectations." — scripts/eval/eval-agents.py:2

## Design intent — required
Provides a standalone quality assessment harness for evaluating agent definition files (`.claude/agents/*.md`) against role expectations as-is, without requiring before/after prompt delta comparisons. Unlike comparative evaluators (such as `eval-prompt-change.py` under ADR-057), this evaluator measures absolute prompt quality across four orthogonal dimensions: role adherence, actionability, quality signals, and appropriateness. It incorporates Cynefin complexity framing (`clear`, `complicated`, `complex`, `chaotic`) to grade whether an agent matches its conversational behavior to problem uncertainty—penalizing excessive questioning on clear problems and rewarding proactive exploration on complex problems. Without this tool, prompt authors and lifecycle designers would lack a quantitative, automated mechanism to detect prompt bloat, style guide violations, out-of-role drift, or behavior-complexity mismatches in agent definitions.

## Phase — required
none

## Inputs — required
- Command-line arguments:
  - `--agent`: Assess a single agent instead of all — scripts/eval/eval-agents.py:902
  - `--prompts-file`: Load custom prompts from JSON — scripts/eval/eval-agents.py:903
  - `--model`: Model to use for assessment (default: `DEFAULT_MODEL` / `claude-sonnet-4-6`) — scripts/eval/eval-agents.py:905
  - `--dry-run`: Print prompts without calling the API — scripts/eval/eval-agents.py:908
  - `--runs`: Number of runs per scenario for flakiness detection (ADR-057) (default: 1) — scripts/eval/eval-agents.py:911
  - `--output`: Write results to file — scripts/eval/eval-agents.py:916
- Files read from disk:
  - Agent markdown definitions: `.claude/agents/*.md` loaded from `AGENTS_DIR` — scripts/eval/eval-agents.py:65, 90
  - Custom prompts file (optional): JSON file loaded via `load_custom_prompts` — scripts/eval/eval-agents.py:947
- Environment variables:
  - `ANTHROPIC_API_KEY`: API key loaded via `_load_api_key_for_selected_provider()` (or repo-root `.env`) — scripts/eval/eval-agents.py:51, 923
- Built-in prompt catalog:
  - `PROMPTS` mapping defining 4 test prompts each across 22 agent keys with prompt text, expected output description, and Cynefin complexity — scripts/eval/eval-agents.py:127

## Outputs — required
- Standard output:
  - JSON assessment summary containing `assessment_type`, `model`, `agents_assessed`, `total_prompts`, `dimensions`, `dry_run`, and per-agent `results` dictionary — scripts/eval/eval-agents.py:981
- Files written:
  - Optional JSON results file specified via `--output` argument — scripts/eval/eval-agents.py:916
- Standard error:
  - Progress logs indicating agent name, prompt count, context character size, and estimated cost / API calls — scripts/eval/eval-agents.py:782, 865
  - Results summary table: formatted table reporting `Role`, `Action`, `Qual`, `Approp`, and `Overall` scores per agent — scripts/eval/eval-agents.py:1018, 1035
  - Below-threshold warnings: reports agents scoring below 3.5 under `BELOW THRESHOLD (<3.5):` — scripts/eval/eval-agents.py:1050
  - Flakiness reports: reports scenarios where `flaky` flag is set when `--runs` > 1 under `FLAKY SCENARIOS` — scripts/eval/eval-agents.py:1062
  - Dry-run verdict: `DRY-RUN OK` or `DRY-RUN CONFIG ERROR` message — scripts/eval/eval-agents.py:1012
- Exit codes:
  - 0: All agents score >= 3.5 threshold, or dry-run preflight successfully classified agents — scripts/eval/eval-agents.py:722, 745, 1014, 1072
  - 1: Assessment runtime failure, missing API key, agent definition not found, empty dry-run target, or weak agents below 3.5 threshold — scripts/eval/eval-agents.py:716, 740, 897, 926, 939, 1014, 1072
  - 2: Requested model verification failed via `verify_model_available` — scripts/eval/eval-agents.py:929

## Invokes — required
- script _anthropic_api — scripts/eval/eval-agents.py:49
- script _eval_common — scripts/eval/eval-agents.py:52

## Invoked by — required
- script eval-suite.py — scripts/eval/eval-suite.py:325
- doc README.md — scripts/eval/README.md:19
- script _anthropic_api.py — scripts/eval/_anthropic_api.py:5
- script _eval_common.py — scripts/eval/_eval_common.py:3

## Concepts named — required, verbatim
- `ADR-057` — scripts/eval/eval-agents.py:6 — used here
- `eval-prompt-change.py` — scripts/eval/eval-agents.py:6 — used here
- `eval-suite.py` — scripts/eval/eval-agents.py:7 — used here
- `Role adherence` — scripts/eval/eval-agents.py:11 — defined here
- `Actionability` — scripts/eval/eval-agents.py:12 — defined here
- `Quality signals` — scripts/eval/eval-agents.py:13 — defined here
- `Appropriateness` — scripts/eval/eval-agents.py:14 — defined here
- `Cynefin` — scripts/eval/eval-agents.py:14 — used here
- `clear` — scripts/eval/eval-agents.py:22 — defined here
- `complicated` — scripts/eval/eval-agents.py:23 — defined here
- `complex` — scripts/eval/eval-agents.py:24 — defined here
- `chaotic` — scripts/eval/eval-agents.py:26 — defined here
- `DEFAULT_MODEL` — scripts/eval/eval-agents.py:49 — used here
- `load_custom_prompts` — scripts/eval/eval-agents.py:49 — used here
- `verify_model_available` — scripts/eval/eval-agents.py:49 — used here
- `call_api` — scripts/eval/eval-agents.py:50 — used here
- `load_api_key_for_selected_provider` — scripts/eval/eval-agents.py:51 — used here
- `EST_TOKENS_PER_CALL` — scripts/eval/eval-agents.py:53 — used here
- `MalformedProviderMetadataError` — scripts/eval/eval-agents.py:54 — used here
- `aggregate_multi_run_scores` — scripts/eval/eval-agents.py:55 — used here
- `RATE_LIMIT_SLEEP_SEC` — scripts/eval/eval-agents.py:62 — defined here
- `AGENTS_DIR` — scripts/eval/eval-agents.py:65 — defined here
- `list_agents` — scripts/eval/eval-agents.py:72 — defined here
- `load_agent_context` — scripts/eval/eval-agents.py:88 — defined here
- `extract_agent_meta` — scripts/eval/eval-agents.py:96 — defined here
- `PROMPTS` — scripts/eval/eval-agents.py:127 — defined here
- `Gall's Law` — scripts/eval/eval-agents.py:161 — used here
- `Conway's Law` — scripts/eval/eval-agents.py:161 — used here
- `Outbox pattern` — scripts/eval/eval-agents.py:165 — used here
- `Pre-mortem` — scripts/eval/eval-agents.py:181 — used here
- `STRIDE` — scripts/eval/eval-agents.py:211 — used here
- `OWASP` — scripts/eval/eval-agents.py:219 — used here
- `WCAG` — scripts/eval/eval-agents.py:259 — used here
- `INVEST` — scripts/eval/eval-agents.py:265 — used here
- `RICE` — scripts/eval/eval-agents.py:349 — used here
- `KANO` — scripts/eval/eval-agents.py:349 — used here
- `Sunk cost fallacy` — scripts/eval/eval-agents.py:379 — used here
- `Strangler fig` — scripts/eval/eval-agents.py:379 — used here
- `EARS` — scripts/eval/eval-agents.py:407 — used here
- `Five Whys` — scripts/eval/eval-agents.py:455 — used here
- `Strategy pattern` — scripts/eval/eval-agents.py:476 — used here
- `_AGENT_MAX_TOKENS` — scripts/eval/eval-agents.py:560 — defined here
- `_call_api_for_agents` — scripts/eval/eval-agents.py:563 — defined here
- `COMPLEXITY_BEHAVIOR` — scripts/eval/eval-agents.py:573 — defined here
- `score_agent_response` — scripts/eval/eval-agents.py:599 — defined here
- `DIMENSIONS` — scripts/eval/eval-agents.py:661 — defined here
- `_avg_scores` — scripts/eval/eval-agents.py:664 — defined here
- `_aggregate_multi_run_scores` — scripts/eval/eval-agents.py:683 — defined here
- `decide_dry_run_exit` — scripts/eval/eval-agents.py:689 — defined here
- `run_assessment` — scripts/eval/eval-agents.py:748 — defined here
- `_run_assessment_or_exit` — scripts/eval/eval-agents.py:875 — defined here
- `main` — scripts/eval/eval-agents.py:900 — defined here

## Structure
- `# API utilities (shared module)` — scripts/eval/eval-agents.py:47
- `# Agent context loading` — scripts/eval/eval-agents.py:59
- `# Built-in prompts: 4 prompts per agent, targeting stated capabilities` — scripts/eval/eval-agents.py:124
- `# Anthropic API interaction (uses shared module with agent-specific max_tokens)` — scripts/eval/eval-agents.py:556
- `# Assessment runner` — scripts/eval/eval-agents.py:658
- `# Main` — scripts/eval/eval-agents.py:871

## Scripts — required if type is script or the skill ships scripts
For each script:
- path: `scripts/eval/eval-agents.py`, language: Python 3, lines: 1077
- documented invocation:
  "python3 scripts/eval/eval-agents.py" — scripts/eval/eval-agents.py:29
  "python3 scripts/eval/eval-agents.py --agent analyst" — scripts/eval/eval-agents.py:30
  "python3 scripts/eval/eval-agents.py --prompts-file custom-agent-prompts.json" — scripts/eval/eval-agents.py:31
  "python3 scripts/eval/eval-agents.py --dry-run" — scripts/eval/eval-agents.py:32
  "python3 scripts/eval/eval-agents.py --output results.json" — scripts/eval/eval-agents.py:33
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `python3 scripts/eval/eval-agents.py --agent analyst --dry-run`
  Abridged stdout:
  ```
  Agents: ['analyst']
  Prompts: 4, API calls: 0

  ============================================================
    Agent: analyst (model: sonnet, 4 prompts, context: 14835 chars, runs: 1)
  ============================================================
    [1/4] (complicated) A deployment pipeline started failing intermittently 3 days ...
    [2/4] (complicated) Product wants to add real-time notifications. We currently u...
    [3/4] (complicated) We have 3 microservices that each maintain their own user ca...
    [4/4] (complex) A feature request asks for 'AI-powered search'. Before anyon...

    Cost estimate: 0 API calls, ~0 tokens

    DRY-RUN OK: Dry-run preflight OK: classified 1 agent(s) (analyst). No API calls made; placeholder zero scores are expected and not evaluated against the weak-spot threshold.
  ```
  **actual exit code**: 0
  Additional executions verified:
  - `python3 scripts/eval/eval-agents.py --dry-run`: runs all 18 configured agents across 72 prompts with zero API calls (exit code: 0)
  - `python3 scripts/eval/eval-agents.py`: live run without API key prints `ERROR: ANTHROPIC_API_KEY not found in environment or repo-root .env file.` (exit code: 1)
  - `python3 scripts/eval/eval-agents.py --help`: prints CLI argument parser options (exit code: 0)
- documented exit codes vs actual exit paths in code:
  - "exit 0 with dry-run-ok reason" — scripts/eval/eval-agents.py:700:
    "Dry-run preflight OK: classified" — scripts/eval/eval-agents.py:724
    `sys.exit(exit_code)` — scripts/eval/eval-agents.py:1014
  - "exit 0 with all-pass reason" — scripts/eval/eval-agents.py:704:
    `return (0, f"All {len(results)} agent(s) above 3.5 threshold.")` — scripts/eval/eval-agents.py:745
    `sys.exit(exit_code)` — scripts/eval/eval-agents.py:1072
  - "exit 1 with config-error reason" — scripts/eval/eval-agents.py:698:
    "Dry-run config error: agents_assessed is empty." — scripts/eval/eval-agents.py:718
    `sys.exit(exit_code)` — scripts/eval/eval-agents.py:1014
  - "exit 1 with weak-spots reason" — scripts/eval/eval-agents.py:702:
    "Weak agents below 3.5 threshold:" — scripts/eval/eval-agents.py:743
    `sys.exit(exit_code)` — scripts/eval/eval-agents.py:1072
  - Runtime exception exit:
    `sys.exit(1)` — scripts/eval/eval-agents.py:897
  - Missing API key exit:
    `sys.exit(1)` — scripts/eval/eval-agents.py:926
  - Missing agent definition file exit:
    `sys.exit(1)` — scripts/eval/eval-agents.py:939
  - Model verification failure exit:
    `sys.exit(2)` — scripts/eval/eval-agents.py:932
- for validators/gates: can it exit non-zero? Yes, exits non-zero on missing API key (1), missing agent definition file (1), weak agent performance below 3.5 threshold (1), empty dry-run target (1), or unavailable model (2). Does it fail on the source repo's own default branch? In `--dry-run` mode with valid repo agents, it succeeds with exit code 0. In live mode without `ANTHROPIC_API_KEY` set, it cleanly exits 1.
- does the output match what the documentation claims? Yes, stdout outputs formatted JSON assessment records, and stderr outputs progress, cost estimates, and tabular score summaries matching docstrings.

## Defects — required
- missing-path · scripts/eval/eval-agents.py:404 — `PROMPTS` defines test prompts for agent `spec-generator`, but `.claude/agents/spec-generator.md` does not exist in the repository (only `.claude/skills/spec-generator/` exists), causing `--agent spec-generator` to fail with exit code 1.
- missing-path · scripts/eval/eval-agents.py:480 — `PROMPTS` defines test prompts for agent `adr-generator`, but `.claude/agents/adr-generator.md` does not exist in the repository (only `.claude/skills/adr-generator/` exists), causing `--agent adr-generator` to fail with exit code 1.
- missing-path · scripts/eval/eval-agents.py:534 — `PROMPTS` defines test prompts for agent `context-retrieval`, but `.claude/agents/context-retrieval.md` does not exist in the repository, causing `--agent context-retrieval` to fail with exit code 1.

## Observations
- Cynefin Complexity Framing: Each test prompt is explicitly tagged with a Cynefin complexity classification (`clear`, `complicated`, `complex`, `chaotic`) in `PROMPTS` with corresponding behavioral expectations defined in `COMPLEXITY_BEHAVIOR` (e.g., clear problems require direct output without unnecessary questions, while complex problems expect clarifying questions exploring unknowns).
- Standalone Quality Evaluation vs Delta Validator: Unlike comparative prompt diff validators (such as `eval-prompt-change.py` under ADR-057), this script evaluates absolute agent prompt capabilities as-is across four orthogonal dimensions (`role_adherence`, `actionability`, `quality`, `appropriateness`).
- Dry-Run Preflight Semantics: Addresses issue #2441 via `decide_dry_run_exit()`, decoupling the weak-spot failure threshold (`overall < 3.5`) from dry-run placeholder zeros so CI preflight exits 0 rather than falsely failing.
- Flakiness Handling: Implements multi-run repetition (`--runs N`, default 1) with variance tracking and `_aggregate_multi_run_scores()` per ADR-057 flakiness detection protocol.

## Context cost
59,882 bytes (1,077 lines) for `eval-agents.py`. Combined with imported shared modules (`_anthropic_api.py` at 16,054 bytes and `_eval_common.py` at 8,094 bytes, totalling 24,148 bytes), total loaded script context is 84,030 bytes (~20,500 tokens). Runtime execution also loads agent definition files (`.claude/agents/{agent}.md`, typically 4,000 to 47,000 bytes).
