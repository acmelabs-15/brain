---
package: rjm
path: scripts/validation/ruleset_params_baseline.json
type: script
bytes: 236
unit: inv-rjm-302
in_scope_via: scripts/validation/check_ruleset_params_drift.py
aliases: []
memo_inputs:
  - {path: scripts/validation/ruleset_params_baseline.json, sha256: 02f34be33d286be3183642951eefeebfeebbdb6490b05ea7c8d45767393b7e91}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/ruleset_params_baseline.json

## Purpose — required, verbatim
> "11104075" — scripts/validation/ruleset_params_baseline.json:2
(no explicit purpose statement)

## Design intent — required
Stores the baseline configuration parameters for the repository's GitHub branch ruleset governing `main` (ruleset ID `11104075`, measured on `2026-08-14`). Because GitHub branch protection and repository rulesets are configured through GitHub web settings and APIs rather than version-controlled files in the repository tree, changes to ruleset policies risk occurring silently without an audit trail. This baseline records the expected ruleset state (`strict_required_status_checks_policy: false`, `required_review_thread_resolution: true`, `required_approving_review_count: 0`). The validation gate `scripts/validation/check_ruleset_params_drift.py` loads this file and queries the live GitHub API via `gh api` to verify that repository ruleset parameters have not drifted from their agreed baseline settings.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- script check_ruleset_params_drift.py — scripts/validation/check_ruleset_params_drift.py:34

## Concepts named — required, verbatim
- `ruleset_id` — scripts/validation/ruleset_params_baseline.json:2 — defined here
- `ref` — scripts/validation/ruleset_params_baseline.json:3 — defined here
- `parameters` — scripts/validation/ruleset_params_baseline.json:4 — defined here
- `strict_required_status_checks_policy` — scripts/validation/ruleset_params_baseline.json:5 — defined here
- `required_review_thread_resolution` — scripts/validation/ruleset_params_baseline.json:6 — defined here
- `required_approving_review_count` — scripts/validation/ruleset_params_baseline.json:7 — defined here
- `measured` — scripts/validation/ruleset_params_baseline.json:9 — defined here

## Structure
- Ruleset identification and branch reference — scripts/validation/ruleset_params_baseline.json:2-3
- Ruleset configuration parameters mapping — scripts/validation/ruleset_params_baseline.json:4-8
- Baseline measurement date — scripts/validation/ruleset_params_baseline.json:9

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/ruleset_params_baseline.json`, language: JSON, lines: 11
- documented invocation:
  - "ruleset_params_baseline.json" — scripts/validation/check_ruleset_params_drift.py:4
- executed: yes
- actual command run: `python3 -m json.tool scripts/validation/ruleset_params_baseline.json` (and `python3 scripts/validation/check_ruleset_params_drift.py`)
- abridged stdout:
```
OK: all recorded ruleset parameters match live values.
```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - Documented: none (static JSON configuration)
  - Actual: N/A (static data file; consumer `check_ruleset_params_drift.py` exits 0 on match)
- for validators/gates:
  - Can it exit non-zero: N/A (static JSON configuration)
  - Does it fail on the source repo's own default branch: no, valid JSON matching live repository ruleset parameters on `main`
- does output match what the documentation claims: yes, JSON parses without errors and validator confirms parameters match live settings on main.

## Defects — required
none

## Observations
- Captures expected configuration for GitHub ruleset ID 11104075 on branch `main`.
- Parameters recorded: `strict_required_status_checks_policy: false`, `required_review_thread_resolution: true`, `required_approving_review_count: 0`.
- Measurement date: `2026-08-14`.

## Context cost
236 bytes, 11 lines, ~60 tokens.
