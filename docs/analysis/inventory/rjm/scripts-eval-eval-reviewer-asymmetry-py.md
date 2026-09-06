---
package: rjm
path: scripts/eval/eval-reviewer-asymmetry.py
type: script
bytes: 23467
unit: inv-rjm-231
in_scope_via: scripts/eval/README.md
aliases: []
memo_inputs:
  - {path: scripts/eval/eval-reviewer-asymmetry.py, sha256: c7751b7daf8566fcc141421c962287c577ed89966f15bf95cb39ac32b26ced9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# scripts/eval/eval-reviewer-asymmetry.py

## Purpose — required, verbatim
> "Reviewer-asymmetry behavioral evaluator." — scripts/eval/eval-reviewer-asymmetry.py:2

## Design intent — required
Provides an automated, reproducible, and statistically rigorous evaluation harness to measure whether the reviewer-asymmetry framing introduced into core agent system prompts (`templates/agents/{critic,qa,implementer}.shared.md`) produces a statistically significant behavioral delta compared to the baseline `main` branch control templates. Without this script, alterations to reviewer instructions—such as adversarial boundary checklists, finding count floors, and reader-aware documentation mandates—could only be evaluated through uncontrolled anecdotal impressions rather than formal hypothesis tests (one-sided Fisher's exact test on verdict pass rates and one-sided Mann-Whitney U test on findings count distributions with alpha=0.05).

## Phase — required
none

## Inputs — required
- Command-line arguments:
  - `--fixtures`: Directory of `F*.json` fixtures (default: `evals/reviewer-asymmetry-spike/fixtures`) (scripts/eval/eval-reviewer-asymmetry.py:472-476)
  - `--trials`: Trials per fixture per condition (default: 5) (scripts/eval/eval-reviewer-asymmetry.py:478-482)
  - `--model`: Model identifier (default: `claude-sonnet-4-5`) (scripts/eval/eval-reviewer-asymmetry.py:484-488)
  - `--base-ref`: Git ref for control templates (default: `main`) (scripts/eval/eval-reviewer-asymmetry.py:490-494)
  - `--output`: Optional path to write JSON results (scripts/eval/eval-reviewer-asymmetry.py:496-500)
  - `--dry-run`: Boolean flag to validate inputs and templates without making API calls (scripts/eval/eval-reviewer-asymmetry.py:502-505)
- Fixture files:
  - JSON fixtures matching `F*.json` in fixture directory, each defining `id`, `agent`, `input`, `expected_verdict`, `verdict_options`, and optional `expected_reason_contains` and `min_findings_count` (scripts/eval/eval-reviewer-asymmetry.py:69-82, 122, 155)
- Agent template markdown files:
  - `templates/agents/critic.shared.md` (scripts/eval/eval-reviewer-asymmetry.py:58)
  - `templates/agents/qa.shared.md` (scripts/eval/eval-reviewer-asymmetry.py:59)
  - `templates/agents/implementer.shared.md` (scripts/eval/eval-reviewer-asymmetry.py:60)
  - Control templates loaded via `git show {base_ref}:{rel_path}`; treatment templates loaded from working tree (scripts/eval/eval-reviewer-asymmetry.py:90-106)
- API credentials / Environment variables:
  - `ANTHROPIC_API_KEY` loaded via `load_api_key_for_selected_provider()` (scripts/eval/eval-reviewer-asymmetry.py:47, 583)

## Outputs — required
- Dry-run summary JSON printed to stdout when `--dry-run` is active: includes `dry_run`, `fixtures`, `trials`, `estimated_api_calls`, and `agents` list (scripts/eval/eval-reviewer-asymmetry.py:568-579)
- Full evaluation results JSON written to `--output <path>` or printed to stdout: records `model`, `base_ref`, `trials_per_fixture`, `alpha`, `api_calls`, `fixtures`, `by_agent` statistical metrics, `overall` statistics, and `findings_count_stats` (scripts/eval/eval-reviewer-asymmetry.py:452-461, 598-604)
- Human-readable summary printed to stderr: overall and per-agent pass rates, Fisher's exact test one-sided p-values, two-proportion z-scores, Cohen's h effect sizes, Mann-Whitney U findings-count statistics, and significance determinations (scripts/eval/eval-reviewer-asymmetry.py:608-670)
- Process exit codes: 0 (significance achieved or dry-run validation passed), 1 (no significant delta), 2 (configuration/fixtures invalid or API key missing), 3 (external API failure) (scripts/eval/eval-reviewer-asymmetry.py:25-30, 530, 535, 555, 580, 586, 596, 671)

## Invokes — required
- script _anthropic_api — scripts/eval/eval-reviewer-asymmetry.py:47
- script _eval_common — scripts/eval/eval-reviewer-asymmetry.py:48
- template templates/agents/critic.shared.md — scripts/eval/eval-reviewer-asymmetry.py:58
- template templates/agents/qa.shared.md — scripts/eval/eval-reviewer-asymmetry.py:59
- template templates/agents/implementer.shared.md — scripts/eval/eval-reviewer-asymmetry.py:60

## Invoked by — required
- doc README.md — scripts/eval/README.md:95, 183

## Concepts named — required, verbatim
- `reviewer-asymmetry` — scripts/eval/eval-reviewer-asymmetry.py:2 — defined here
- `critic` — scripts/eval/eval-reviewer-asymmetry.py:9 — used here
- `qa` — scripts/eval/eval-reviewer-asymmetry.py:9 — used here
- `implementer` — scripts/eval/eval-reviewer-asymmetry.py:9 — used here
- `expected_verdict` — scripts/eval/eval-reviewer-asymmetry.py:11 — used here
- `verdict_options` — scripts/eval/eval-reviewer-asymmetry.py:11 — used here
- `expected_reason_contains` — scripts/eval/eval-reviewer-asymmetry.py:15 — used here
- `Fisher's exact test` — scripts/eval/eval-reviewer-asymmetry.py:17 — used here
- `two-proportion z-test` — scripts/eval/eval-reviewer-asymmetry.py:18 — used here
- `_anthropic_api` — scripts/eval/eval-reviewer-asymmetry.py:47 — used here
- `_eval_common` — scripts/eval/eval-reviewer-asymmetry.py:48 — used here
- `MalformedProviderMetadataError` — scripts/eval/eval-reviewer-asymmetry.py:48 — used here
- `DEFAULT_MODEL` — scripts/eval/eval-reviewer-asymmetry.py:50 — defined here
- `DEFAULT_TRIALS` — scripts/eval/eval-reviewer-asymmetry.py:51 — defined here
- `ALPHA` — scripts/eval/eval-reviewer-asymmetry.py:52 — defined here
- `BASE_REF` — scripts/eval/eval-reviewer-asymmetry.py:53 — defined here
- `RATE_LIMIT_SLEEP_SEC` — scripts/eval/eval-reviewer-asymmetry.py:54 — defined here
- `TEMPLATES` — scripts/eval/eval-reviewer-asymmetry.py:57 — defined here
- `min_findings_count` — scripts/eval/eval-reviewer-asymmetry.py:122 — used here
- `fishers_exact_one_sided` — scripts/eval/eval-reviewer-asymmetry.py:204 — defined here
- `two_proportion_z` — scripts/eval/eval-reviewer-asymmetry.py:242 — defined here
- `cohen_h` — scripts/eval/eval-reviewer-asymmetry.py:267 — defined here
- `mann_whitney_u` — scripts/eval/eval-reviewer-asymmetry.py:277 — defined here
- `run_eval` — scripts/eval/eval-reviewer-asymmetry.py:318 — defined here

## Structure
- `Fixture loading` — scripts/eval/eval-reviewer-asymmetry.py:65
- `Template loading (control = origin/main, treatment = working copy)` — scripts/eval/eval-reviewer-asymmetry.py:86
- `Trial: run one fixture against one template, return (passed, raw verdict)` — scripts/eval/eval-reviewer-asymmetry.py:110
- `Statistical tests` — scripts/eval/eval-reviewer-asymmetry.py:200
- `Main eval loop` — scripts/eval/eval-reviewer-asymmetry.py:314
- `CLI` — scripts/eval/eval-reviewer-asymmetry.py:465

## Scripts — required if type is script or the skill ships scripts
For each script:
- path: scripts/eval/eval-reviewer-asymmetry.py, language: Python 3, lines: 676
- documented invocation:
  "python3 scripts/eval/eval-reviewer-asymmetry.py --dry-run" — evals/reviewer-asymmetry-spike/README.md:71
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `python3 sources/rjm/scripts/eval/eval-reviewer-asymmetry.py --dry-run`
  Abridged stdout:
  ```json
  {
    "dry_run": true,
    "fixtures": 7,
    "trials": 5,
    "estimated_api_calls": 70,
    "agents": [
      "critic",
      "implementer",
      "qa"
    ]
  }
  ```
  **actual exit code**: 0
  Additional test runs verified:
  - Help text: `python3 sources/rjm/scripts/eval/eval-reviewer-asymmetry.py --help` (exit code: 0)
  - Missing API key: `python3 sources/rjm/scripts/eval/eval-reviewer-asymmetry.py` (exit code: 2, `ERROR loading API key: ANTHROPIC_API_KEY not found in environment...`)
  - Missing fixtures: `python3 sources/rjm/scripts/eval/eval-reviewer-asymmetry.py --fixtures non_existent_dir` (exit code: 2, `ERROR: fixture dir not found...`)
  - Invalid git base ref: `python3 sources/rjm/scripts/eval/eval-reviewer-asymmetry.py --base-ref invalid_ref_does_not_exist` (exit code: 2, `ERROR loading template for critic...`)
- documented exit codes vs actual exit paths in code:
  - "0 - significance achieved (p < ALPHA AND treatment > control)" — scripts/eval/eval-reviewer-asymmetry.py:26:
    `return 0` — scripts/eval/eval-reviewer-asymmetry.py:580
    `return 0` — scripts/eval/eval-reviewer-asymmetry.py:671
  - "1 - no significant delta (treatment did not beat control reliably)" — scripts/eval/eval-reviewer-asymmetry.py:27:
    `else 1` — scripts/eval/eval-reviewer-asymmetry.py:671
  - "2 - config / fixture invalid / API not configured" — scripts/eval/eval-reviewer-asymmetry.py:28:
    `return 2` — scripts/eval/eval-reviewer-asymmetry.py:530
    `return 2` — scripts/eval/eval-reviewer-asymmetry.py:535
    `return 2` — scripts/eval/eval-reviewer-asymmetry.py:555
    `return 2` — scripts/eval/eval-reviewer-asymmetry.py:586
  - "3 - external (API) failure" — scripts/eval/eval-reviewer-asymmetry.py:29:
    `return 3` — scripts/eval/eval-reviewer-asymmetry.py:596
  - Top-level process termination:
    "sys.exit(main())" — scripts/eval/eval-reviewer-asymmetry.py:675
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Yes, exits 1 when treatment does not achieve statistical significance over control, exits 2 on configuration or auth failure, and exits 3 on API failure. On the source repo default branch where control and treatment templates are identical, a live run detects zero delta and exits 1 (or exits 2 if run without an API key).
- does the output match what the documentation claims?
  Yes, JSON structure and statistical summary match documentation, aside from a minor drift in fixture count (7 fixtures present vs 6 documented).

## Defects — required
- doc-drift · scripts/eval/eval-reviewer-asymmetry.py:21 · Docstring asserts "Default: 6 fixtures * 5 trials * 2 conditions = 60 calls", but evals/reviewer-asymmetry-spike/fixtures contains 7 fixtures (F001 through F007), executing 70 calls by default.
- doc-drift · scripts/eval/eval-reviewer-asymmetry.py:26 · Docstring describes exit code 0 as significance achieved (p < ALPHA AND treatment > control), omitting the per-agent significance check enforced at line 671 (sig_per_agent_count == len(result["by_agent"])).
- doc-drift · scripts/eval/README.md:199 · Documentation notes cost as 10 trials × 6 fixtures × 2 conditions = 120 calls, drifting from the 7 fixtures present in the directory.

## Observations
- Implements self-contained statistical calculations using the standard library `math` module (binomial combinations for Fisher's exact test, erf-based CDF for two-proportion z-test, and Mann-Whitney U test with tie correction), avoiding scientific computing dependencies like SciPy.
- Uses `git show {base_ref}:{rel_path}` with UTF-8 decoding and `errors="replace"` to dynamically read baseline control templates from git history, while reading treatment templates directly from the working filesystem.
- Uses direct structured JSON extraction (`_parse_verdict`) with markdown code block unwrapping, eliminating the need for a separate LLM judge pass.

## Context cost
File size: 23,467 bytes (~5,867 tokens). Runtime imports `_anthropic_api.py` (16,054 bytes) and `_eval_common.py` (8,094 bytes), loads 3 agent templates (`critic.shared.md`, `qa.shared.md`, `implementer.shared.md` totaling 90,874 bytes), and loads 7 fixture files (16,400 bytes). Total static context cost is ~154,889 bytes (~38,700 tokens).
