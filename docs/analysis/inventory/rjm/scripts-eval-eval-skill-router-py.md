---
package: rjm
path: scripts/eval/eval_skill_router.py
type: script
bytes: 23269
unit: inv-rjm-225
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/eval/eval_skill_router.py, sha256: 3aa5d1334db711e7d16cda841dd34bdde659def740f1f217a3ee4055d8a30b70}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/eval_skill_router.py

## Purpose — required, verbatim
> "Skill-Router Eval: measure whether SKIP-clause descriptions improve sibling disambiguation." — scripts/eval/eval_skill_router.py:2

## Design intent — required
Empirical offline evaluation harness designed to objectively measure whether adding trigger phrases and reciprocal SKIP clauses ("Do NOT use for X; use <sibling> instead.") to skill and agent frontmatter descriptions improves sibling disambiguation by LLM routers. By comparing routing decisions on verbatim user queries across frozen pre-change git states (`BEFORE_REF`) and current working-tree descriptions (`after`) using Claude Sonnet at temperature 0, it replaces subjective developer intuition with quantitative accuracy metrics. Without this eval, prompt engineers and skill authors would lack empirical evidence that description modifications actually resolve routing collisions between adjacent skills, risking regressions in agent intent matching.

## Phase — required
none

## Inputs — required
- CLI positional/flag argument `--fixtures`: path to JSON array of disambiguation fixtures with `id`, `query`, `candidates`, and `correct` fields — scripts/eval/eval_skill_router.py:470
- CLI flag argument `--repo-root`: repository root path holding `.claude/` and git history (default: `.`) — scripts/eval/eval_skill_router.py:474
- CLI flag argument `--limit`: optional positive integer limiting the number of fixtures evaluated — scripts/eval/eval_skill_router.py:479
- CLI flag argument `--dry-run`: flag to build prompts and validate descriptions without API calls — scripts/eval/eval_skill_router.py:482
- Historical git commit tree at `BEFORE_REF` — scripts/eval/eval_skill_router.py:80 (accessed via `git show` subprocess: scripts/eval/eval_skill_router.py:240)
- Working-tree candidate skill (`.claude/skills/<name>/SKILL.md`) or agent (`.claude/agents/<name>.md`) frontmatter markdown files — scripts/eval/eval_skill_router.py:186, scripts/eval/eval_skill_router.py:187, scripts/eval/eval_skill_router.py:260-264
- Environment variable `ANTHROPIC_API_KEY` or repo-root `.env` file for API authentication — scripts/eval/eval_skill_router.py:565-568

## Outputs — required
- JSON summary to stdout containing `accuracy_before`, `accuracy_after`, fixture count `n`, and detailed `per_fixture` comparison records (`id`, `before_pick`, `after_pick`, `correct`, `before_ok`, `after_ok`) — scripts/eval/eval_skill_router.py:27-34, scripts/eval/eval_skill_router.py:451-456, scripts/eval/eval_skill_router.py:582
- JSON summary in `--dry-run` mode reporting `dry_run`, `fixtures` count, `variants`, `planned_api_calls`, `model`, and `before_ref` — scripts/eval/eval_skill_router.py:550-560
- Progress, diagnostics, warning notices, and error logs to stderr — scripts/eval/eval_skill_router.py:430, scripts/eval/eval_skill_router.py:500, scripts/eval/eval_skill_router.py:506-508, scripts/eval/eval_skill_router.py:536-542
- Process exit code: 0 on success/dry-run, 1 on identical-arms across all candidates, 2 on configuration/validation error or missing API key, 3 on external API failure — scripts/eval/eval_skill_router.py:50-58

## Invokes — required
- script _anthropic_api — scripts/eval/eval_skill_router.py:70
- script _eval_common — scripts/eval/eval_skill_router.py:71

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Skill-Router Eval` — scripts/eval/eval_skill_router.py:2 — defined here
- `SKIP-clause` — scripts/eval/eval_skill_router.py:2 — used here
- `description-matching router` — scripts/eval/eval_skill_router.py:6 — used here
- `VARIANT` — scripts/eval/eval_skill_router.py:11 — used here
- `claude-sonnet-4-6` — scripts/eval/eval_skill_router.py:19 — used here
- `ADR-035` — scripts/eval/eval_skill_router.py:56 — used here
- `call_api` — scripts/eval/eval_skill_router.py:70 — used here
- `load_api_key_for_selected_provider` — scripts/eval/eval_skill_router.py:70 — used here
- `MalformedProviderMetadataError` — scripts/eval/eval_skill_router.py:71 — used here
- `MODEL` — scripts/eval/eval_skill_router.py:73 — defined here
- `BEFORE_REF` — scripts/eval/eval_skill_router.py:80 — defined here
- `MAX_TOKENS` — scripts/eval/eval_skill_router.py:81 — defined here
- `REQUIRED_FIXTURE_FIELDS` — scripts/eval/eval_skill_router.py:83 — defined here
- `load_fixtures` — scripts/eval/eval_skill_router.py:91 — defined here
- `_validate_fixture` — scripts/eval/eval_skill_router.py:123 — defined here
- `_validate_candidates` — scripts/eval/eval_skill_router.py:149 — defined here
- `resolve_candidate_path` — scripts/eval/eval_skill_router.py:177 — defined here
- `extract_description` — scripts/eval/eval_skill_router.py:203 — defined here
- `load_description_before` — scripts/eval/eval_skill_router.py:236 — defined here
- `load_description_after` — scripts/eval/eval_skill_router.py:259 — defined here
- `build_router_prompt` — scripts/eval/eval_skill_router.py:272 — defined here
- `resolve_variant_descriptions` — scripts/eval/eval_skill_router.py:299 — defined here
- `parse_pick` — scripts/eval/eval_skill_router.py:312 — defined here
- `PARSE_ERROR` — scripts/eval/eval_skill_router.py:331 — defined here
- `call_router` — scripts/eval/eval_skill_router.py:339 — defined here
- `build_plan` — scripts/eval/eval_skill_router.py:371 — defined here
- `check_identical_arms` — scripts/eval/eval_skill_router.py:401 — defined here
- `run_eval` — scripts/eval/eval_skill_router.py:419 — defined here
- `_parse_args` — scripts/eval/eval_skill_router.py:464 — defined here
- `main` — scripts/eval/eval_skill_router.py:492 — defined here

## Structure
none (python script; comment sections and top-level functions in order: Fixture loading and validation, Candidate resolution: name -> repo-relative path, Description extraction, Prompt construction, Response parsing, API call (live path only; lazily imports the SDK), Eval execution, Main)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/eval_skill_router.py`, language: Python 3, lines: 588
- documented invocation:
  - "python3 scripts/eval/eval_skill_router.py" — scripts/eval/eval_skill_router.py:38
  - "python3 scripts/eval/eval_skill_router.py" — scripts/eval/eval_skill_router.py:43
  - "python3 scripts/eval/eval_skill_router.py" — scripts/eval/eval_skill_router.py:47
- executed: yes
- actual command run: `uv run python scripts/eval/eval_skill_router.py --fixtures evals/skill-router-spike/fixtures.json --dry-run`
  abridged stdout:
  ```json
  {
    "dry_run": true,
    "fixtures": 29,
    "variants": [
      "before",
      "after"
    ],
    "planned_api_calls": 58,
    "model": "claude-sonnet-4-6",
    "before_ref": "fd379f0a85e0dc4362c3960a84a7ad5632270239"
  }
  ```
  actual exit code: 0
- additional execution tests:
  - `python3 scripts/eval/eval_skill_router.py --help` (exit code: 0)
  - `uv run python scripts/eval/eval_skill_router.py --fixtures evals/skill-router-spike/fixtures.json --limit 5 --dry-run` (exit code: 0)
  - `uv run python scripts/eval/eval_skill_router.py --fixtures evals/skill-router-spike/fixtures.json --limit 1` (missing ANTHROPIC_API_KEY; exit code: 2)
  - `uv run python scripts/eval/eval_skill_router.py --fixtures nonexistent.json --dry-run` (missing fixtures file; exit code: 2)
  - `python3 scripts/eval/eval_skill_router.py --fixtures evals/skill-router-spike/fixtures.json --dry-run` (system python lacking PyYAML; exit code: 2)
- documented exit codes vs. actual exit paths in code:
  - "0 ok" — scripts/eval/eval_skill_router.py:51: returned at scripts/eval/eval_skill_router.py:562 (`--dry-run`), scripts/eval/eval_skill_router.py:583 (live eval completion), exiting via scripts/eval/eval_skill_router.py:587 (`sys.exit(main())`)
  - "1 identical-arms" — scripts/eval/eval_skill_router.py:52: returned at scripts/eval/eval_skill_router.py:534 when `check_identical_arms()` detects before and after descriptions are byte-identical for all candidates across all fixtures
  - "2 config" — scripts/eval/eval_skill_router.py:55: returned at scripts/eval/eval_skill_router.py:489 (argparse validation error), scripts/eval/eval_skill_router.py:501 (`load_fixtures` error), scripts/eval/eval_skill_router.py:516 (`build_plan` resolution error), scripts/eval/eval_skill_router.py:572 (missing `ANTHROPIC_API_KEY` per ADR-035)
  - "3 external" — scripts/eval/eval_skill_router.py:57: returned at scripts/eval/eval_skill_router.py:580 when Anthropic API call raises RuntimeError
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Evaluation harness, not an automated gating hook or pre-commit validator. Deterministically exits non-zero on configuration errors (exit 2), missing environment credentials (exit 2), identical comparison arms (exit 1), and API transport errors (exit 3). Exits 0 on the source repo's default branch in `--dry-run` mode with valid fixtures.
- does the output match what the documentation claims?
  Yes, stdout prints formatted JSON matching the documented output schema for dry-run and live evaluation modes.

## Defects — required
- doc-drift — scripts/eval/eval_skill_router.py:237 — docstring references "(origin/main)" as the before git ref, but lines 80 and 240 bind and query an immutable commit SHA (BEFORE_REF = "fd379f0a85e0dc4362c3960a84a7ad5632270239") to prevent moving-ref drift.
- orphan — scripts/eval/eval_skill_router.py:1 — not invoked or imported by any in-scope command, skill, or agent; evaluated standalone or referenced from excluded evals/ and tests/ directories.

## Observations
- Protects against deceptive null findings (issue #4304) by pinning an immutable git commit (`BEFORE_REF = "fd379f0a85e0dc4362c3960a84a7ad5632270239"`) representing the state immediately preceding merge commit `817e466f8`, and detecting identical before/after descriptions via `check_identical_arms`.
- Candidate resolution handles both skills (`.claude/skills/<name>/SKILL.md`) and agents (`.claude/agents/<name>.md`), supporting both folded YAML scalars (skills) and plain string scalars (agents).
- The response parser sorts candidate names in descending order of string length (`sorted(candidates, key=len, reverse=True)`) before checking regex matches, preventing shorter substring candidate names from inadvertently shadowing longer sibling names.
- Leverages the repository's internal urllib-based transport `_anthropic_api.call_api` rather than external vendor SDKs, minimizing dependencies.

## Context cost
- File size: 23,269 bytes (~5,817 tokens).
- Imported local dependencies: `_anthropic_api.py` (16,054 bytes, ~4,013 tokens), `_eval_common.py` (8,094 bytes, ~2,023 tokens).
- Total runtime context cost: 47,417 bytes (~11,853 tokens).
