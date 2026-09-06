---
package: rjm
path: scripts/ci/retrospective_gate.py
type: script
bytes: 4571
unit: inv-rjm-206
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/retrospective_gate.py, sha256: 81a59bf6bd1a29a33873685f2678ff5147cf806feea4bfbbe919a68cb6e4ccc5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/retrospective_gate.py

## Purpose — required, verbatim
> "Decide whether a closed pull request gets a retrospective, and how deep." — scripts/ci/retrospective_gate.py:1

## Design intent — required
Evaluates closed pull request metadata to decide whether to trigger a retrospective analysis and whether to escalate the analysis depth in `.github/workflows/retrospective.yml`. Skips runs for automated bot accounts (dependabot, renovate, copilot, coderabbitai, github-actions) and fork pull requests (which lack repository secrets). Escalates to deeper framework analysis if the PR was closed unmerged, carries rework indicators in its title, or has 10 or more review comments. Passing metadata through environment variables prevents workflow injection vulnerabilities by construction.

## Phase — required
cross-phase

## Inputs — required
- Environment variables:
  - `GITHUB_OUTPUT`
  - `EVENT_NAME`
  - `PR_NUMBER`
  - `DISPATCH_ESCALATE`
  - `PR_AUTHOR`
  - `PR_HEAD_REPO`
  - `PR_BASE_REPO`
  - `PR_MERGED`
  - `PR_TITLE`
  - `REVIEW_COMMENTS`

## Outputs — required
- GitHub Actions outputs written to `GITHUB_OUTPUT`:
  - `should_run`: `true` | `false`
  - `pr_number`
  - `merged`
  - `escalate_depth`: `true` | `false`

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `EXIT_OK` — scripts/ci/retrospective_gate.py:19 — defined here
- `EXIT_CONFIG` — scripts/ci/retrospective_gate.py:20 — defined here
- `BOT_AUTHORS` — scripts/ci/retrospective_gate.py:22 — defined here
- `REWORK_TITLE_RE` — scripts/ci/retrospective_gate.py:32 — defined here
- `REVIEW_COMMENT_ESCALATION_THRESHOLD` — scripts/ci/retrospective_gate.py:34 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/retrospective_gate.py`, language: Python, lines: 142
- documented invocation:
  "Decide whether a closed pull request gets a retrospective, and how deep." — scripts/ci/retrospective_gate.py:1
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `python3 sources/rjm/scripts/ci/retrospective_gate.py --help`
    stdout: `usage: retrospective_gate.py [-h]`
    actual exit code: 0
  - Command: with missing `GITHUB_OUTPUT`: `python3 sources/rjm/scripts/ci/retrospective_gate.py`
    stdout: `::error::GITHUB_OUTPUT is required` (stderr)
    actual exit code: 2
- documented exit codes vs actual exit paths:
  - Documented: none explicitly enumerated in docstring (constants: `EXIT_OK = 0`, `EXIT_CONFIG = 2`)
  - Actual exit paths:
    - `return EXIT_CONFIG` on missing GITHUB_OUTPUT — scripts/ci/retrospective_gate.py:134
    - `return EXIT_OK` on success — scripts/ci/retrospective_gate.py:137
    - `raise SystemExit(main())` — scripts/ci/retrospective_gate.py:141
- for validators/gates: can it exit non-zero?
  Yes, exits 2 when `GITHUB_OUTPUT` is missing or empty.
  Does it fail on the source repo's own default branch?
  When run without `GITHUB_OUTPUT`, exits 2.
- does the output match what the documentation claims?
  Yes, emits `should_run`, `pr_number`, `merged`, and `escalate_depth` key-value pairs.

## Defects — required
- orphan — scripts/ci/retrospective_gate.py:1 — not referenced by any in-scope file (only referenced by out-of-scope .github/workflows/retrospective.yml).

## Observations
Uses regex `REWORK_TITLE_RE = re.compile(r"\b(rework|retry|fix-cycle|to.improve|hotfix)\b", re.IGNORECASE)` (line 32) to catch iterations and rework cycles automatically.

## Context cost
4571 bytes, 142 lines. Approximate tokens: ~1100.
