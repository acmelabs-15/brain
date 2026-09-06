---
package: rjm
path: scripts/validation/ruleset_params_baseline.json
type: script
bytes: 236
unit: inv-rjm-302
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/ruleset_params_baseline.json, sha256: 02f34be33d286be3183642951eefeebfeebbdb6490b05ea7c8d45767393b7e91}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/validation/ruleset_params_baseline.json

## Purpose — required, verbatim
> "{" — scripts/validation/ruleset_params_baseline.json:1 (no explicit purpose statement)

## Design intent — required
Stores the locally recorded baseline parameters for GitHub repository branch protection rulesets on branch `main` (ruleset ID `11104075`). Consumed by `scripts/validation/check_ruleset_params_drift.py` to detect unauthorized out-of-band modifications made to repository rulesets in the GitHub web interface. By recording parameters (`strict_required_status_checks_policy: false`, `required_review_thread_resolution: true`, `required_approving_review_count: 0`) and the date measured (`2026-08-14`), it provides an authoritative baseline against which live GitHub API responses are compared.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- script check_ruleset_params_drift — scripts/validation/check_ruleset_params_drift.py:34

## Concepts named — required, verbatim
- `ruleset_id` — scripts/validation/ruleset_params_baseline.json:2 — defined here
- `ref` — scripts/validation/ruleset_params_baseline.json:3 — defined here
- `parameters` — scripts/validation/ruleset_params_baseline.json:4 — defined here
- `strict_required_status_checks_policy` — scripts/validation/ruleset_params_baseline.json:5 — defined here
- `required_review_thread_resolution` — scripts/validation/ruleset_params_baseline.json:6 — defined here
- `required_approving_review_count` — scripts/validation/ruleset_params_baseline.json:7 — defined here
- `measured` — scripts/validation/ruleset_params_baseline.json:9 — defined here
- `main` — scripts/validation/ruleset_params_baseline.json:3 — used here

## Structure
- Ruleset identification — scripts/validation/ruleset_params_baseline.json:2
- Branch protection parameters — scripts/validation/ruleset_params_baseline.json:4
- Measurement timestamp — scripts/validation/ruleset_params_baseline.json:9

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/ruleset_params_baseline.json`, language: JSON, lines: 11
- documented invocation: none (static configuration baseline)
- executed: yes
- actual command run: `python3 -m json.tool scripts/validation/ruleset_params_baseline.json` and `python3 scripts/validation/check_ruleset_params_drift.py --offline`
- abridged stdout:
```
SKIP: --offline flag set, no live check performed.
```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - Documented: none (data file)
  - Actual: N/A (static JSON configuration)
- for validators/gates:
  - Can exit non-zero: N/A (data configuration consumed by `scripts/validation/check_ruleset_params_drift.py`)
  - Does it fail on the source repo's default branch: no, valid JSON; consumed cleanly by validator in offline mode.
- does the output match what the documentation claims: yes, valid JSON schema with recorded ruleset parameters.

## Defects — required
none

## Observations
- Classifies type as `script` per manifest partition table for `scripts/validation/` files.
- Records parameters for ruleset ID 11104075 on branch `main` as measured on 2026-08-14.

## Context cost
236 bytes, 11 lines, ~60 tokens.
