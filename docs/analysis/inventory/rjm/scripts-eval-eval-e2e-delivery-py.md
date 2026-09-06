---
package: rjm
path: scripts/eval/eval-e2e-delivery.py
type: script
bytes: 8656
unit: inv-rjm-228
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/eval/eval-e2e-delivery.py, sha256: def5027d65244270d65f2bd9e0329765678c2808d15206622d8ee4c791c3b064}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/eval-e2e-delivery.py

## Purpose — required, verbatim
> "End-to-end delivery eval: plan-rubric proxy (issue #2859)." — scripts/eval/eval-e2e-delivery.py:2

## Design intent — required
Evaluates whether an autonomous coding agent can carry an intentionally vague, under-specified request toward a complete engineering delivery plan rather than merely selecting the right routing lane. By taking a deliberately vague task germ, capturing the emitted plan, and having an LLM judge score that plan against hidden acceptance criteria derived from real merged pull requests across five rubric axes (scope, completeness, process_gates, decomposition, correct_stop; maximum 11 points), the harness provides a lightweight proxy for delivery quality without requiring live code execution or test runs.

## Phase — required
none

## Inputs — required
- Hidden acceptance criteria and task prompts loaded from fixtures file via `--fixtures` — scripts/eval/eval-e2e-delivery.py:148
- Agent identifiers specified via `--agents` (defaults to "orchestrator,autoplan") — scripts/eval/eval-e2e-delivery.py:150-153
- LLM model identifier specified via `--model` (defaults to DEFAULT_MODEL) — scripts/eval/eval-e2e-delivery.py:154
- Number of evaluation runs per cell specified via `--runs` (default 3) — scripts/eval/eval-e2e-delivery.py:155
- Git ref specified via `--ref` for resolving agent prompts from repository history — scripts/eval/eval-e2e-delivery.py:156
- Fixture count cap specified via `--limit` — scripts/eval/eval-e2e-delivery.py:157
- Validation flag `--dry-run` to validate fixtures and resolve prompts without API calls — scripts/eval/eval-e2e-delivery.py:160-161
- Output destination file path specified via `--output` — scripts/eval/eval-e2e-delivery.py:163
- Agent prompt system definition for orchestrator: `.claude/agents/orchestrator.md` — scripts/eval/eval-e2e-delivery.py:68
- Agent prompt system definition for autoplan: `.claude/skills/autoplan/SKILL.md` — scripts/eval/eval-e2e-delivery.py:69
- Anthropic API key loaded via `load_api_key_for_selected_provider` — scripts/eval/eval-e2e-delivery.py:204

## Outputs — required
- Aggregated benchmark report containing per-agent means, per-fixture means, deltas, and run records printed to stdout — scripts/eval/eval-e2e-delivery.py:237, 242
- JSON report file written to disk when `--output` is provided — scripts/eval/eval-e2e-delivery.py:241
- Dry-run JSON payload printed to stdout when `--dry-run` is active — scripts/eval/eval-e2e-delivery.py:185-201

## Invokes — required
- script _anthropic_api — scripts/eval/eval-e2e-delivery.py:44
- script _e2e_delivery_core — scripts/eval/eval-e2e-delivery.py:50
- agent orchestrator — scripts/eval/eval-e2e-delivery.py:68
- skill autoplan — scripts/eval/eval-e2e-delivery.py:69

## Invoked by — required
- doc README — scripts/eval/README.md:96
- script _e2e_delivery_core — scripts/eval/_e2e_delivery_core.py:13

## Concepts named — required, verbatim
- `End-to-end delivery eval` — scripts/eval/eval-e2e-delivery.py:2 — defined here
- `plan-rubric proxy` — scripts/eval/eval-e2e-delivery.py:2 — defined here
- `flakiness protocol` — scripts/eval/eval-e2e-delivery.py:19 — used here
- `Ground-truth discipline` — scripts/eval/eval-e2e-delivery.py:24 — defined here
- `DEFAULT_MODEL` — scripts/eval/eval-e2e-delivery.py:45 — used here
- `MAX_SCORE` — scripts/eval/eval-e2e-delivery.py:51 — used here
- `AGENT_REGISTRY` — scripts/eval/eval-e2e-delivery.py:67 — defined here
- `orchestrator` — scripts/eval/eval-e2e-delivery.py:68 — used here
- `autoplan` — scripts/eval/eval-e2e-delivery.py:69 — used here
- `--dry-run` — scripts/eval/eval-e2e-delivery.py:159 — defined here
- `runs_per_cell` — scripts/eval/eval-e2e-delivery.py:192 — defined here
- `planned_api_calls` — scripts/eval/eval-e2e-delivery.py:193 — defined here

## Structure
- Docstring and module imports — scripts/eval/eval-e2e-delivery.py:1-58
- Agent prompt registry and loading helpers (`_load_prompt`, `_resolve_agents`) — scripts/eval/eval-e2e-delivery.py:67-107
- Evaluation execution helper (`_run_cell`) — scripts/eval/eval-e2e-delivery.py:110-141
- Command-line argument parsing (`_parse_args`) and caveat constant (`_CAVEAT`) — scripts/eval/eval-e2e-delivery.py:144-172
- Main orchestrator (`main`) and entrypoint guard — scripts/eval/eval-e2e-delivery.py:175-248

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/eval-e2e-delivery.py`
- language: Python
- lines: 248
- documented invocation:
> "python scripts/eval/eval-e2e-delivery.py" — scripts/eval/eval-e2e-delivery.py:16
- **executed:** yes
- actual command run: `python3 scripts/eval/eval-e2e-delivery.py --fixtures scripts/eval/examples/e2e-delivery-fixtures.json --dry-run`
- abridged stdout:
```json
{
  "dry_run": true,
  "caveat": "PROXY EVAL: scores plan quality, not delivered code. Criteria come from real merged PRs (independent of the agent prompts) but are single-author curated, so absolute scores are directional; trust deltas that clear the run-to-run noise band. Same-family judge. See issue #2859.",
  "max_score": 11,
  "fixtures": [
    "F1-wrapped-setup",
    "F2-simple-lambda",
    "F3-null-guard",
    "F4-codefix-null-guard",
    "A1-vague-retry",
    "A2-vague-faster",
    "M1-multi-domain-migration"
  ],
  "agents": [
    "orchestrator",
    "autoplan"
  ],
  "runs_per_cell": 3,
  "planned_api_calls": 84,
  "model": "claude-sonnet-4-6"
}
```
- **actual exit code:** 0
- documented exit codes vs. actual exit paths:
No exit codes are explicitly documented in docstrings. Actual exit paths: returns 0 on dry-run completion (scripts/eval/eval-e2e-delivery.py:202) and successful live evaluation completion (scripts/eval/eval-e2e-delivery.py:243), passed to `SystemExit` (scripts/eval/eval-e2e-delivery.py:247). Argparse exits 2 on missing `--fixtures` or invalid parameters (scripts/eval/eval-e2e-delivery.py:145). `_load_prompt` and `_resolve_agents` raise `RuntimeError` on git show failures, missing prompt files, or unknown agent names (scripts/eval/eval-e2e-delivery.py:89, 95, 105).
- for validators/gates: Not a failable gate script itself; proxy benchmark harness that generates and evaluates plans.
- does the output match what the documentation claims: Yes, `--dry-run` successfully loads fixtures, verifies prompt paths, calculates planned API calls, and outputs JSON configuration without initiating network requests.

## Defects — required
none

## Observations
- Ground-truth discipline is enforced by basing fixture criteria on real merged pull requests, keeping acceptance criteria independent of agent prompt wording.
- Incorporates `--ref` parameter to inspect agent prompts from git branches or historical refs via `git show`, enabling comparative benchmarking of prompt revisions.
- Explicitly flags itself as a proxy evaluation (#2859 shape 2) measuring plan formulation quality rather than delivered code correctness or test compilation.

## Context cost
File size: 8,656 bytes (~2,164 tokens).
Loaded context when executed:
- `scripts/eval/_anthropic_api.py` (8,116 bytes)
- `scripts/eval/_e2e_delivery_core.py` (13,923 bytes)
- `.claude/agents/orchestrator.md` (28,813 bytes)
- `.claude/skills/autoplan/SKILL.md` (11,922 bytes)
Total context cost: ~71,430 bytes (~17,858 tokens).
