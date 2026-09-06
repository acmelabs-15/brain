---
package: rjm
path: scripts/validation/check_ruleset_params_drift.py
type: script
bytes: 4341
unit: inv-rjm-283
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_ruleset_params_drift.py, sha256: f0bfa925f0d2aa397f3f5aefe435c5b1fecdb0fcce928444332a4fbcb8b93c56}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_ruleset_params_drift.py

## Purpose — required, verbatim
> "Check recorded ruleset parameters against the live GitHub API." — scripts/validation/check_ruleset_params_drift.py:2

## Design intent — required
Prevents out-of-band drift in GitHub repository branch protection rulesets. Branch rulesets configured through the GitHub web UI can be modified without appearing in repository commit history, creating discrepancies between declared engineering policies and actual enforcement. This script compares locally recorded baseline parameters in `ruleset_params_baseline.json` against live ruleset metadata retrieved via the GitHub CLI (`gh api repos/rjmurillo/ai-agents/rulesets/<ruleset_id>`), failing with exit code 1 if any discrepancy is detected. It provides an `--offline` bypass flag for execution in environments without network connectivity or GitHub credentials.

## Phase — required
cross-phase

## Inputs — required
- CLI arguments: optional `--offline` flag to skip live API queries (scripts/validation/check_ruleset_params_drift.py:11, 114)
- Baseline configuration file: `ruleset_params_baseline.json` (scripts/validation/check_ruleset_params_drift.py:34, 40-53)
- Live GitHub API responses via `gh api repos/rjmurillo/ai-agents/rulesets/{ruleset_id}` (scripts/validation/check_ruleset_params_drift.py:60)

## Outputs — required
- Standard output:
  - Offline skip notification: `SKIP: --offline flag set, no live check performed.` (scripts/validation/check_ruleset_params_drift.py:115)
  - Parameter match confirmation: `OK: all recorded ruleset parameters match live values.` (scripts/validation/check_ruleset_params_drift.py:136)
  - Drift detection summary with itemized differences: `DRIFT DETECTED between baseline and live ruleset:` (scripts/validation/check_ruleset_params_drift.py:128)
- Standard error:
  - Diagnostics for missing baseline, invalid JSON, missing parameters key, or missing gh CLI / API errors (scripts/validation/check_ruleset_params_drift.py:41, 48, 51, 67, 72-75, 81, 121)
- Process exit codes: 0 (clean match or offline skip), 1 (drift detected), 2 (configuration error), 3 (external / gh failure), 4 (authentication failure) (scripts/validation/check_ruleset_params_drift.py:13-18, 28-33)

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ruleset_params_baseline.json` — scripts/validation/check_ruleset_params_drift.py:4 — used here
- `gh api` — scripts/validation/check_ruleset_params_drift.py:5 — used here
- `ADR-035` — scripts/validation/check_ruleset_params_drift.py:13 — used here
- `EXIT_OK` — scripts/validation/check_ruleset_params_drift.py:28 — defined here
- `EXIT_DRIFT` — scripts/validation/check_ruleset_params_drift.py:29 — defined here
- `EXIT_CONFIG` — scripts/validation/check_ruleset_params_drift.py:30 — defined here
- `EXIT_EXTERNAL` — scripts/validation/check_ruleset_params_drift.py:31 — defined here
- `EXIT_AUTH` — scripts/validation/check_ruleset_params_drift.py:32 — defined here
- `BASELINE_PATH` — scripts/validation/check_ruleset_params_drift.py:34 — defined here
- `REPO` — scripts/validation/check_ruleset_params_drift.py:35 — defined here
- `load_baseline` — scripts/validation/check_ruleset_params_drift.py:38 — defined here
- `fetch_live_params` — scripts/validation/check_ruleset_params_drift.py:56 — defined here
- `check_drift` — scripts/validation/check_ruleset_params_drift.py:92 — defined here
- `main` — scripts/validation/check_ruleset_params_drift.py:110 — defined here

## Structure
- Module docstring with usage examples and exit code specifications (scripts/validation/check_ruleset_params_drift.py:1-18)
- Imports and exit code constant definitions (scripts/validation/check_ruleset_params_drift.py:20-35)
- `load_baseline`: reads and parses baseline JSON (scripts/validation/check_ruleset_params_drift.py:38-54)
- `fetch_live_params`: invokes gh CLI and parses ruleset rules (scripts/validation/check_ruleset_params_drift.py:56-89)
- `check_drift`: compares baseline parameters against live API values (scripts/validation/check_ruleset_params_drift.py:92-107)
- `main`: entry point orchestrating offline checks and drift validation (scripts/validation/check_ruleset_params_drift.py:110-138)
- Execution guard invoking `main` via `SystemExit` (scripts/validation/check_ruleset_params_drift.py:140-142)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validation/check_ruleset_params_drift.py`
- **language:** Python (python3)
- **lines:** 142
- **documented invocation:**
  - `python scripts/validation/check_ruleset_params_drift.py` — scripts/validation/check_ruleset_params_drift.py:8
  - `python scripts/validation/check_ruleset_params_drift.py --offline` — scripts/validation/check_ruleset_params_drift.py:11
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/validation/check_ruleset_params_drift.py --offline`
- **abridged stdout:**
```
SKIP: --offline flag set, no live check performed.
```
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "0 - all parameters match or --offline skipped the live check" — scripts/validation/check_ruleset_params_drift.py:14
    - "1 - drift detected" — scripts/validation/check_ruleset_params_drift.py:15
    - "2 - configuration error (missing baseline, bad JSON)" — scripts/validation/check_ruleset_params_drift.py:16
    - "3 - external error (gh CLI unavailable, API failure)" — scripts/validation/check_ruleset_params_drift.py:17
  - Actual exit paths:
    - `return EXIT_OK` — scripts/validation/check_ruleset_params_drift.py:116
    - `return EXIT_OK` — scripts/validation/check_ruleset_params_drift.py:137
    - `return EXIT_DRIFT` — scripts/validation/check_ruleset_params_drift.py:134
    - `sys.exit(EXIT_CONFIG)` — scripts/validation/check_ruleset_params_drift.py:42
    - `sys.exit(EXIT_CONFIG)` — scripts/validation/check_ruleset_params_drift.py:49
    - `sys.exit(EXIT_CONFIG)` — scripts/validation/check_ruleset_params_drift.py:52
    - `sys.exit(EXIT_CONFIG)` — scripts/validation/check_ruleset_params_drift.py:122
    - `sys.exit(EXIT_EXTERNAL)` — scripts/validation/check_ruleset_params_drift.py:68
    - `sys.exit(exit_code)` — scripts/validation/check_ruleset_params_drift.py:76
    - `sys.exit(EXIT_EXTERNAL)` — scripts/validation/check_ruleset_params_drift.py:82
    - `raise SystemExit(main())` — scripts/validation/check_ruleset_params_drift.py:141
- **for validators/gates:**
  - can it exit non-zero: yes, exits 1 on parameter drift, 2 on missing/invalid baseline, 3 on external API/CLI error, 4 on auth error.
  - does it fail on source repo's default branch: no, exits 0 (both with `--offline` and against live GitHub API).
- **does the output match what the documentation claims:** yes, `--offline` skips live API queries and exits 0 as documented.

## Defects — required
- exit-code-mismatch · scripts/validation/check_ruleset_params_drift.py:14-17 · Docstring lists exit codes 0 (match/skip), 1 (drift), 2 (config), and 3 (external), but code defines `EXIT_AUTH = 4` at line 32 and exits with 4 on authentication failure at line 76 without documenting exit code 4 in the header.
- orphan · scripts/validation/check_ruleset_params_drift.py:1 · Not invoked or referenced by any CI workflow, pre-pr hook, lefthook job, or command file in the repository.

## Observations
- Directly shells out to `gh api repos/rjmurillo/ai-agents/rulesets/<ruleset_id>` using a hardcoded repository slug `REPO = "rjmurillo/ai-agents"`.
- Distinguishes auth errors (`"auth"` in `stderr.lower()`) by setting `exit_code = EXIT_AUTH` (4), although this exit code is omitted from the module docstring summary.

## Context cost
4341 bytes, 142 lines, ~1100 tokens (plus baseline `ruleset_params_baseline.json` 236 bytes, 10 lines, ~60 tokens). Total: ~4577 bytes, ~1200 tokens.
