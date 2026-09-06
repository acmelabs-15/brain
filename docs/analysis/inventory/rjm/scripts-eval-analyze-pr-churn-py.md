---
package: rjm
path: scripts/eval/analyze-pr-churn.py
type: script
bytes: 9633
unit: inv-rjm-224
in_scope_via: scripts/eval/README.md
aliases: []
memo_inputs:
  - {path: scripts/eval/analyze-pr-churn.py, sha256: caa76d02bf3e72c1e40110bd99569504f7e255f07b16ae36304f42a651c507e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/analyze-pr-churn.py

## Purpose — required, verbatim
> "Analyze commit churn across a PR cohort, to evaluate instruction changes." — scripts/eval/analyze-pr-churn.py:2

## Design intent — required
Provides a deterministic, LLM-free commit headline classification tool to measure and compare developer process thrash between degenerate PR cohorts (excessive commit counts) and control cohorts (low commit counts). By categorizing commit messages into categories like validation_protocol, review_response, and ci_fix, it quantifies thrash fractions to evaluate whether instruction and rule changes (such as AGENTS.md refinements) effectively reduce unproductive iteration cycles.

## Phase — required
none

## Inputs — required
- `--owner` CLI argument (repository owner, defaults to `rjmurillo`) — scripts/eval/analyze-pr-churn.py:197
- `--name` CLI argument (repository name, defaults to `ai-agents`) — scripts/eval/analyze-pr-churn.py:198
- `--prs` CLI argument (comma-separated PR numbers) — scripts/eval/analyze-pr-churn.py:199
- `--high` CLI argument (degenerate cohort commit threshold) — scripts/eval/analyze-pr-churn.py:200
- `--low` CLI argument (control cohort commit threshold) — scripts/eval/analyze-pr-churn.py:201
- `--output` CLI argument (path to write output JSON) — scripts/eval/analyze-pr-churn.py:202
- GitHub GraphQL API query responses for repository merged pull requests and commit message headlines — scripts/eval/analyze-pr-churn.py:48-71

## Outputs — required
- Cohort breakdown table printed to stdout displaying PR numbers, total commits, thrash fractions, top categories, and aggregate cohort percentages — scripts/eval/analyze-pr-churn.py:175-185
- JSON file written to `--output` path containing requested or degenerate/control cohort analysis results — scripts/eval/analyze-pr-churn.py:244-246

## Invokes — required
- script _pr_churn — scripts/eval/analyze-pr-churn.py:41

## Invoked by — required
- script README.md — scripts/eval/README.md:94
- doc evals/reports/rule-activation-conditional-loading-2026-06-06.md — evals/reports/rule-activation-conditional-loading-2026-06-06.md:78
- script tests/eval/test_analyze_pr_churn.py — tests/eval/test_analyze_pr_churn.py:11

## Concepts named — required, verbatim
- `commit churn` — scripts/eval/analyze-pr-churn.py:2 — defined here
- `degenerate PRs` — scripts/eval/analyze-pr-churn.py:4 — defined here
- `control cohort` — scripts/eval/analyze-pr-churn.py:5 — defined here
- `validation_protocol` — scripts/eval/analyze-pr-churn.py:7 — used here
- `review_response` — scripts/eval/analyze-pr-churn.py:7 — used here
- `ci_fix` — scripts/eval/analyze-pr-churn.py:7 — used here
- `ADR-035` — scripts/eval/analyze-pr-churn.py:23 — used here
- `thrash_fraction` — scripts/eval/analyze-pr-churn.py:44 — used here

## Structure
- Module docstring and CLI examples — scripts/eval/analyze-pr-churn.py:1-27
- Imports and sys.path setup — scripts/eval/analyze-pr-churn.py:29-45
- GraphQL queries — scripts/eval/analyze-pr-churn.py:48-71
- _graphql execution helper — scripts/eval/analyze-pr-churn.py:74-102
- fetch_distribution query runner — scripts/eval/analyze-pr-churn.py:105-129
- fetch_headlines query runner — scripts/eval/analyze-pr-churn.py:131-152
- analyze_pr single PR classification — scripts/eval/analyze-pr-churn.py:154-164
- _aggregate cohort aggregation helper — scripts/eval/analyze-pr-churn.py:167-173
- _print_cohort formatting and display — scripts/eval/analyze-pr-churn.py:175-185
- _parse_pr_list CLI argument parsing — scripts/eval/analyze-pr-churn.py:187-193
- main entry point and argument configuration — scripts/eval/analyze-pr-churn.py:195-248
- Script execution guard — scripts/eval/analyze-pr-churn.py:250-251

## Scripts — required if type is script or the skill ships scripts
For each script:
- path, language, lines: `scripts/eval/analyze-pr-churn.py`, Python, 252 lines
- documented invocation (verbatim, path:line):
`python3 scripts/eval/analyze-pr-churn.py --prs 1013,1763,955` — scripts/eval/analyze-pr-churn.py:20
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
Command: `python3 scripts/eval/analyze-pr-churn.py --prs 1013,1763,955`
Abridged stdout:
```
=== requested PRs (3 PRs) ===
#1013   total=250  thrash=0.992 validation_protocol=244 progress=2 ci_fix=1 merge_rebase=1
#1763   total=80   thrash=0.988 validation_protocol=52 test_fix=6 merge_rebase=6 review_response=6
#955    total=88   thrash=0.864 validation_protocol=46 other=16 progress=12 merge_rebase=4
-- aggregate over requested PRs --
   validation_protocol      342 (82%)
   other                     22 (5%)
   progress                  15 (4%)
   merge_rebase              11 (3%)
   review_response           10 (2%)
   test_fix                   9 (2%)
   ci_fix                     6 (1%)
   lint_format                3 (1%)
```
Actual exit code: 0
- documented exit codes (verbatim) vs. actual exit paths in code:
Documented in docstring:
`0 success` — scripts/eval/analyze-pr-churn.py:24
`2 configuration error (bad arguments)` — scripts/eval/analyze-pr-churn.py:25
`3 external error (gh / GraphQL failure)` — scripts/eval/analyze-pr-churn.py:26
Actual exit paths:
- `raise SystemExit(3) from exc` — scripts/eval/analyze-pr-churn.py:90
- `raise SystemExit(3)` — scripts/eval/analyze-pr-churn.py:93
- `raise SystemExit(3) from exc` — scripts/eval/analyze-pr-churn.py:98
- `raise SystemExit(3)` — scripts/eval/analyze-pr-churn.py:101
- `raise SystemExit(3)` — scripts/eval/analyze-pr-churn.py:116
- `raise SystemExit(3)` — scripts/eval/analyze-pr-churn.py:142
- `raise SystemExit(3)` — scripts/eval/analyze-pr-churn.py:146
- `raise SystemExit(2) from None` — scripts/eval/analyze-pr-churn.py:192
- `return 2` — scripts/eval/analyze-pr-churn.py:207
- `return 2` — scripts/eval/analyze-pr-churn.py:210
- `return 2` — scripts/eval/analyze-pr-churn.py:214
- `return 2` — scripts/eval/analyze-pr-churn.py:217
- `return 0` — scripts/eval/analyze-pr-churn.py:247
- `raise SystemExit(main())` — scripts/eval/analyze-pr-churn.py:251
- for validators/gates: Not a gate or validator. Can exit non-zero (exits 2 on invalid arguments, 3 on gh GraphQL failure).
- does the output match what the documentation claims? Yes, classifies commit headlines deterministically into churn buckets across PRs and calculates thrash fraction.

## Defects — required
none

## Observations
Uses the GitHub CLI (`gh api graphql`) directly via subprocess with query variables to avoid string interpolation injection, and handles pagination over PRs and commits. Classification is deterministic and delegates headline parsing to sibling helper module `_pr_churn.py`.

## Context cost
File is 9,633 bytes (252 lines). Sibling helper `_pr_churn.py` is 4,842 bytes (133 lines). Total source is 14,475 bytes (~3,600 tokens).
