---
package: rjm
path: scripts/eval/eval-rule-activation.py
type: script
bytes: 110937
unit: inv-rjm-232
in_scope_via: .claude/skills/context-optimizer/references/rule-audit-procedure.md
aliases: []
memo_inputs:
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/eval-rule-activation.py

## Purpose — required, verbatim
> "Rule Activation Eval: measure whether rules and skill references actually fire." — scripts/eval/eval-rule-activation.py:5

## Design intent — required
Empirical evaluation CLI designed to measure whether project rules (`.claude/rules/*.md`) and progressive-disclosure skill references (`.claude/skills/*/references/*.md`) actually activate and alter agent behavior when relevant, while measuring restraint on negative cases where the rule should not fire. By evaluating target prompts across three loading mechanisms (`baseline` control with no rule context, `description` front door or router on demand, and `full` diagnostic ceiling with injected rule body), and scoring responses across three dimensions (`activation_score`, `citation_score`, and `behavior_score`) using repeated LLM judge calls reduced by median or mean, it provides an objective, gated pass/fail verdict (`MIN_ACTIVATION_SCORE = 3.5`, `MIN_DELTA_VS_BASELINE = 0.5`, `MIN_RESTRAINT_SCORE = 3.5`). Without this eval harness, rule authors and lifecycle designers would have no empirical evidence that context additions or rule instructions meaningfully change model decisions or refrain from over-activating, risking context bloat and unverified steering.

## Phase — required
none

## Inputs — required
- Command-line arguments:
  - `--scenarios`: One or more scenario JSON fixture paths (`tests/evals/rule-scenarios/*.json`) — scripts/eval/eval-rule-activation.py:1945
  - `--model`: Model identifier (default: `DEFAULT_MODEL` / `claude-sonnet-4-6`) — scripts/eval/eval-rule-activation.py:1950
  - `--output`: Optional path to write detailed JSON results — scripts/eval/eval-rule-activation.py:1951
  - `--seed`: Optional integer seed forwarded to OpenAI-compatible providers (default: `DEFAULT_SEED` / 0) — scripts/eval/eval-rule-activation.py:1953
  - `--dry-run`: Flag to skip API calls and print execution plan and cost estimates — scripts/eval/eval-rule-activation.py:1959
  - `--judge-repeats`: Integer number of judge samples per response (default: `DEFAULT_JUDGE_REPEATS` / 3) — scripts/eval/eval-rule-activation.py:1964
  - `--judge-reducer`: Reducer function name for repeated judge samples (`mean`, `min`, `max`, `median`; default: `DEFAULT_JUDGE_REDUCER` / `median`) — scripts/eval/eval-rule-activation.py:1970
- Scenario fixture JSON files:
  - JSON objects defining rule_path or skill_path and list of `scenarios` — scripts/eval/eval-rule-activation.py:2081
- Rule and skill markdown files:
  - Rule files verified under `.claude/rules/` — scripts/eval/eval-rule-activation.py:2113
  - Skill front door files verified as `SKILL.md` — scripts/eval/eval-rule-activation.py:2147
  - Skill reference files verified under `references/` — scripts/eval/eval-rule-activation.py:2180
- Environment variables:
  - `ANTHROPIC_API_KEY`: API key for Anthropic provider authentication (or repo-root `.env` file) — scripts/eval/eval-rule-activation.py:44, scripts/eval/eval-rule-activation.py:2406
  - `EVAL_PROVIDER`: Optional provider routing override (default: `anthropic`) — scripts/eval/eval-rule-activation.py:2386
- System Git state:
  - Git commit hash via `git rev-parse HEAD` subprocess for run provenance — scripts/eval/eval-rule-activation.py:2361

## Outputs — required
- Formatted console summary table on stdout rendered by `render_table`:
  - Rule identifier, verdict, best mechanism, negative-case restraint score and floor comparison, caveat disclosures, and ASCII markdown table with columns `Mechanism`, `Pos avg`, `Neg avg`, `Δ vs baseline`, `Pos graded`, `Neg graded` — scripts/eval/eval-rule-activation.py:1910
- Dry-run execution plan on stdout:
  - Total planned API calls, estimated tokens, and estimated monetary cost or request meter basis — scripts/eval/eval-rule-activation.py:2313, scripts/eval/eval-rule-activation.py:2520
- Detailed JSON results file written when `--output` is specified:
  - Schema version (`schema_version: 1`), run provenance metadata (`provider`, `requested_model`, `timestamp_utc`, `git_commit`, `scenario_hash`), `model_id`, `seed`, and nested `rules` dictionary with per-mechanism summaries and scenario samples — scripts/eval/eval-rule-activation.py:2424, scripts/eval/eval-rule-activation.py:2450
- Progress and error diagnostics to stderr:
  - Per-scenario execution progress logs and error messages on configuration or authentication failure — scripts/eval/eval-rule-activation.py:1987, scripts/eval/eval-rule-activation.py:2326, scripts/eval/eval-rule-activation.py:2408
- Process exit codes:
  - "0 ok" — scripts/eval/eval-rule-activation.py:40
  - "1 logic (one or more rules failed activation gate)" — scripts/eval/eval-rule-activation.py:41
  - "2 config (missing rule, scenarios file invalid)" — scripts/eval/eval-rule-activation.py:42
  - "3 external (API failure)" — scripts/eval/eval-rule-activation.py:43
  - "4 auth (missing ANTHROPIC_API_KEY)" — scripts/eval/eval-rule-activation.py:44

## Invokes — required
- script _anthropic_api — scripts/eval/eval-rule-activation.py:65
- script _eval_common — scripts/eval/eval-rule-activation.py:70

## Invoked by — required
- reference rule-audit-procedure.md — .claude/skills/context-optimizer/references/rule-audit-procedure.md:131
- skill ai-agents-research-frontier — .claude/skills/ai-agents-research-frontier/SKILL.md:33
- skill ai-agents-research-methodology — .claude/skills/ai-agents-research-methodology/SKILL.md:92
- reference rule-audit-instrument.md — .claude/skills/context-optimizer/references/rule-audit-instrument.md:309
- doc README.md — scripts/eval/README.md:25

## Concepts named — required, verbatim
- `Rule Activation Eval` — scripts/eval/eval-rule-activation.py:5 — defined here
- `baseline` — scripts/eval/eval-rule-activation.py:8 — defined here
- `description` — scripts/eval/eval-rule-activation.py:9 — defined here
- `full` — scripts/eval/eval-rule-activation.py:11 — defined here
- `activation_score` — scripts/eval/eval-rule-activation.py:15 — defined here
- `citation_score` — scripts/eval/eval-rule-activation.py:16 — defined here
- `behavior_score` — scripts/eval/eval-rule-activation.py:17 — defined here
- `ANTHROPIC_API_KEY` — scripts/eval/eval-rule-activation.py:44 — used here
- `DEFAULT_MODEL` — scripts/eval/eval-rule-activation.py:65 — used here
- `verify_model_available` — scripts/eval/eval-rule-activation.py:65 — used here
- `call_api` — scripts/eval/eval-rule-activation.py:66 — used here
- `load_api_key_for_selected_provider` — scripts/eval/eval-rule-activation.py:68 — used here
- `EST_TOKENS_PER_CALL` — scripts/eval/eval-rule-activation.py:71 — used here
- `MalformedProviderMetadataError` — scripts/eval/eval-rule-activation.py:72 — used here
- `cost_basis` — scripts/eval/eval-rule-activation.py:73 — used here
- `require_str_or_none` — scripts/eval/eval-rule-activation.py:74 — used here
- `REPO_ROOT` — scripts/eval/eval-rule-activation.py:81 — defined here
- `RATE_LIMIT_SLEEP_SEC` — scripts/eval/eval-rule-activation.py:82 — defined here
- `MECHANISMS` — scripts/eval/eval-rule-activation.py:83 — defined here
- `MIN_ACTIVATION_SCORE` — scripts/eval/eval-rule-activation.py:88 — defined here
- `MIN_DELTA_VS_BASELINE` — scripts/eval/eval-rule-activation.py:89 — defined here
- `MIN_RESTRAINT_SCORE` — scripts/eval/eval-rule-activation.py:95 — defined here
- `MIN_RUBRIC_SCORE` — scripts/eval/eval-rule-activation.py:100 — defined here
- `MAX_RUBRIC_SCORE` — scripts/eval/eval-rule-activation.py:101 — defined here
- `DEFAULT_SEED` — scripts/eval/eval-rule-activation.py:102 — defined here
- `DEFAULT_JUDGE_REPEATS` — scripts/eval/eval-rule-activation.py:103 — defined here
- `DEFAULT_JUDGE_REDUCER` — scripts/eval/eval-rule-activation.py:104 — defined here
- `RESULTS_SCHEMA_VERSION` — scripts/eval/eval-rule-activation.py:105 — defined here
- `MAX_JUDGE_EVIDENCE_CHARS` — scripts/eval/eval-rule-activation.py:106 — defined here
- `parse_rule` — scripts/eval/eval-rule-activation.py:121 — defined here
- `parse_skill_reference` — scripts/eval/eval-rule-activation.py:146 — defined here
- `build_system_prompt` — scripts/eval/eval-rule-activation.py:171 — defined here
- `NEGATIVE_GATE` — scripts/eval/eval-rule-activation.py:203 — defined here
- `skip-rule-not-applicable` — scripts/eval/eval-rule-activation.py:203 — defined here
- `build_skill_route_prompt` — scripts/eval/eval-rule-activation.py:280 — defined here
- `score_response` — scripts/eval/eval-rule-activation.py:417 — defined here
- `eval_one_scenario` — scripts/eval/eval-rule-activation.py:1039 — defined here
- `aggregate` — scripts/eval/eval-rule-activation.py:1384 — defined here
- `FAIL_THRESHOLD` — scripts/eval/eval-rule-activation.py:1711 — defined here
- `FAIL_NO_DELTA` — scripts/eval/eval-rule-activation.py:1717 — defined here
- `PASS` — scripts/eval/eval-rule-activation.py:1718 — defined here
- `FAIL_JUDGE_ERRORS` — scripts/eval/eval-rule-activation.py:1738 — defined here
- `FAIL_OVER_ACTIVATION` — scripts/eval/eval-rule-activation.py:1745 — defined here
- `FAIL_NEGATIVE_INCOMPLETE` — scripts/eval/eval-rule-activation.py:1750 — defined here
- `NO_POSITIVE_CASES` — scripts/eval/eval-rule-activation.py:1752 — defined here
- `FAIL_POSITIVE_INCOMPLETE` — scripts/eval/eval-rule-activation.py:1756 — defined here
- `FAIL_ROUTE_MISSED_TARGET` — scripts/eval/eval-rule-activation.py:1764 — defined here
- `NO_NEGATIVE_CASES` — scripts/eval/eval-rule-activation.py:1776 — defined here
- `render_table` — scripts/eval/eval-rule-activation.py:1850 — defined here
- `RULES_DIR` — scripts/eval/eval-rule-activation.py:1978 — defined here
- `SKILLS_DIR` — scripts/eval/eval-rule-activation.py:1979 — defined here
- `_RunState` — scripts/eval/eval-rule-activation.py:2457 — defined here
- `_classify_verdict` — scripts/eval/eval-rule-activation.py:2494 — defined here

## Structure
- `# Config` — scripts/eval/eval-rule-activation.py:78
- `# Rule loading` — scripts/eval/eval-rule-activation.py:117
- `# Eval driver` — scripts/eval/eval-rule-activation.py:948
- `# CLI` — scripts/eval/eval-rule-activation.py:1781

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/eval-rule-activation.py`, language: Python 3, lines: 2540
- documented invocation:
  - "python3 scripts/eval/eval-rule-activation.py \" — scripts/eval/eval-rule-activation.py:23
  - "python3 scripts/eval/eval-rule-activation.py \" — scripts/eval/eval-rule-activation.py:27
  - "python3 scripts/eval/eval-rule-activation.py \" — scripts/eval/eval-rule-activation.py:31
  - "python3 scripts/eval/eval-rule-activation.py \" — scripts/eval/eval-rule-activation.py:35
- executed: yes
- actual command run: `python3 scripts/eval/eval-rule-activation.py --scenarios tests/evals/rule-scenarios/working-with-legacy-code.json --dry-run`
  abridged stdout:
  ```
  [DRY-RUN] working-with-legacy-code: 4 scenarios x 3 mechanisms x 4 (call + judges) + 4 route calls = 52 calls
    description present: True
    body chars: 17978

  Total calls planned: 52
  Estimated tokens: ~182,000 (~$0.55 sonnet input rate)
  ```
  actual exit code: 0
- additional execution tests:
  - `python3 scripts/eval/eval-rule-activation.py --help` (actual exit code: 0)
  - `python3 scripts/eval/eval-rule-activation.py --scenarios tests/evals/rule-scenarios/working-with-legacy-code.json` (actual exit code: 4, missing ANTHROPIC_API_KEY)
  - `python3 scripts/eval/eval-rule-activation.py --scenarios nonexistent.json --dry-run` (actual exit code: 2, scenario file not found)
- documented exit codes vs. actual exit paths in code:
  - "0 ok" — scripts/eval/eval-rule-activation.py:40: returned from main at scripts/eval/eval-rule-activation.py:2448 (`--dry-run`), scripts/eval/eval-rule-activation.py:2454 (`all_results` completed with `PASS` verdict, where `_classify_verdict("PASS") == 0` at scripts/eval/eval-rule-activation.py:2512), exiting via `sys.exit(main())` at scripts/eval/eval-rule-activation.py:2539
  - "1 logic (one or more rules failed activation gate)" — scripts/eval/eval-rule-activation.py:41: returned from main at scripts/eval/eval-rule-activation.py:2454 via `_classify_verdict` at scripts/eval/eval-rule-activation.py:2517 for activation failures (`FAIL_THRESHOLD`, `FAIL_NO_DELTA`, `FAIL_OVER_ACTIVATION`, `FAIL_NEGATIVE_INCOMPLETE`, `FAIL_POSITIVE_INCOMPLETE`, `FAIL_ROUTE_MISSED_TARGET`)
  - "2 config (missing rule, scenarios file invalid)" — scripts/eval/eval-rule-activation.py:42: returned from main at scripts/eval/eval-rule-activation.py:1988, scripts/eval/eval-rule-activation.py:1993, scripts/eval/eval-rule-activation.py:1999, scripts/eval/eval-rule-activation.py:2019, scripts/eval/eval-rule-activation.py:2030, scripts/eval/eval-rule-activation.py:2051, scripts/eval/eval-rule-activation.py:2066, scripts/eval/eval-rule-activation.py:2075, scripts/eval/eval-rule-activation.py:2084, scripts/eval/eval-rule-activation.py:2091, scripts/eval/eval-rule-activation.py:2102, scripts/eval/eval-rule-activation.py:2115, scripts/eval/eval-rule-activation.py:2121, scripts/eval/eval-rule-activation.py:2125, scripts/eval/eval-rule-activation.py:2143, scripts/eval/eval-rule-activation.py:2150, scripts/eval/eval-rule-activation.py:2154, scripts/eval/eval-rule-activation.py:2170, scripts/eval/eval-rule-activation.py:2174, scripts/eval/eval-rule-activation.py:2182, scripts/eval/eval-rule-activation.py:2189, scripts/eval/eval-rule-activation.py:2212, scripts/eval/eval-rule-activation.py:2253, scripts/eval/eval-rule-activation.py:2273, scripts/eval/eval-rule-activation.py:2400, scripts/eval/eval-rule-activation.py:2415, and via `_classify_verdict` at scripts/eval/eval-rule-activation.py:2516 (`NO_POSITIVE_CASES`, `NO_NEGATIVE_CASES`)
  - "3 external (API failure)" — scripts/eval/eval-rule-activation.py:43: returned from main at scripts/eval/eval-rule-activation.py:2454 via `_classify_verdict` at scripts/eval/eval-rule-activation.py:2514 (`FAIL_JUDGE_ERRORS`)
  - "4 auth (missing ANTHROPIC_API_KEY)" — scripts/eval/eval-rule-activation.py:44: returned at scripts/eval/eval-rule-activation.py:2409 when `_load_api_key()` raises `RuntimeError`
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Evaluation harness and empirical activation gate; it deterministically exits 1 on rule activation failure (threshold, delta, or negative restraint floor violation), 2 on scenario configuration errors, 3 on external API/judge failure, and 4 on missing authentication credentials. Exits 0 on the source repo's default branch in `--dry-run` mode with valid scenarios.
- does the output match what the documentation claims?
  Yes, stdout matches the documented CLI dry-run plan format and exit codes match the docstring specification exactly.

## Defects — required
- doc-drift — scripts/eval/eval-rule-activation.py:85 — comment states the gate passes when the "single best non-baseline mechanism" averages >= 3.5 and beats baseline by >= 0.5, but implementation at line 1712-1713 evaluates only description (desc_avg) against baseline.

## Observations
- Robust multi-round defense against judge manipulation and ambiguous verdicts: `_strict_json_loads` rejects duplicate JSON keys (line 410) and non-finite numbers (line 411); `_parsed_names_two_verdicts` and `_string_contradicts_filed_scores` peel up to 8 layers of JSON/unicode escape sequences to prevent competing verdicts hidden inside string values or keys (lines 741-889).
- Two-hop progressive disclosure support: when evaluating skill references (`parse_skill_reference`), the description mechanism uses a two-hop route prompt (`build_skill_route_prompt`) where the model first selects a skill and reference before the reference body is injected, verifying that progressive disclosure works end-to-end.
- Symmetrical restraint scoring on negative cases: negative test scenarios use `NEGATIVE_GATE = "skip-rule-not-applicable"` and grade model restraint on an inverted rubric where 5 indicates the model correctly refrained from activating the rule. The verdict enforces `MIN_RESTRAINT_SCORE = 3.5` and fails on `FAIL_OVER_ACTIVATION` before checking positive activation.
- Exact precision gate vs. display rounding: tracks `avg_score_exact` alongside 2-decimal rounded `avg_score` and explicitly discloses in `_render_caveats` when rounding would change the verdict or causes delta disagreements.

## Context cost
- File size: 110,937 bytes (~27,734 tokens).
- Imported internal dependencies: `_anthropic_api.py` (16,054 bytes, ~4,013 tokens), `_eval_common.py` (8,094 bytes, ~2,023 tokens).
- Total runtime context cost: 135,085 bytes (~33,770 tokens).
