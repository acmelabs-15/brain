---
package: rjm
path: scripts/ci/detect_human_changes_requested.py
type: script
bytes: 2466
unit: inv-rjm-202
in_scope_via: .agents/architecture/ADR-006-thin-workflows-testable-modules.md
aliases: []
memo_inputs:
  - {path: scripts/ci/detect_human_changes_requested.py, sha256: 54c20c8899411a5c94c089ced5574b0ca47d2597c231025d1edcc08f894bdab1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/detect_human_changes_requested.py

## Purpose — required, verbatim
> "Detect human CHANGES_REQUESTED reviews on a PR." — scripts/ci/detect_human_changes_requested.py:1

## Design intent — required
Replaces an inline PowerShell block in `.github/workflows/pr-maintenance.yml` with a standalone, testable Python script conforming to ADR-006 (thin workflows, testable modules) and ADR-035 (standardized exit codes). It queries the GitHub CLI (`gh pr view`) to inspect Pull Request review states, filters out automated review bots (`coderabbitai[bot]`, `github-actions[bot]`, `copilot-swe-agent[bot]`, `gemini-code-assist[bot]`, `rjmurillo-bot`), and emits `human_changes_requested=true` or `false` into `GITHUB_OUTPUT`. Without it, bot automations responding to PR reviews could treat automated bot reviews as human instructions, or human change requests would be silently swallowed or handled through untestable platform-dependent inline CI scripts. Network or GitHub CLI query failures are gracefully handled by setting `human_changes_requested=false` and logging a workflow warning, preventing CI pipeline crashes while alerting maintainers.

## Phase — required
cross-phase

## Inputs — required
- Environment variable `GITHUB_OUTPUT` — scripts/ci/detect_human_changes_requested.py:34 (path to GitHub Actions output file)
- Environment variable `PR_NUMBER` — scripts/ci/detect_human_changes_requested.py:39 (target pull request number)
- Environment variable `GITHUB_REPOSITORY` — scripts/ci/detect_human_changes_requested.py:40 (repository name in owner/repo format)
- External JSON review payload retrieved via `gh pr view` subprocess execution (`subprocess.run` — scripts/ci/detect_human_changes_requested.py:42)

## Outputs — required
- Appends to output file: `human_changes_requested=false` — scripts/ci/detect_human_changes_requested.py:66, 90 or `human_changes_requested=true` — scripts/ci/detect_human_changes_requested.py:88
- Error message printed to `sys.stderr`: `ERROR: GITHUB_OUTPUT not set` — scripts/ci/detect_human_changes_requested.py:36
- Workflow warning printed to stdout on `gh` failure: `::warning::Failed to fetch PR review data; proceeding without human-changes detection` — scripts/ci/detect_human_changes_requested.py:63
- Workflow warning printed to stdout when human changes are requested: `::warning::PR #{pr_number}: Human CHANGES_REQUESTED present;` — scripts/ci/detect_human_changes_requested.py:85
- Standardized exit codes (ADR-035): 0 (`EXIT_SUCCESS` — scripts/ci/detect_human_changes_requested.py:19) on success or gracefully handled `gh` error, 2 (`EXIT_CONFIG` — scripts/ci/detect_human_changes_requested.py:20) on missing `GITHUB_OUTPUT` (line 35)

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `CHANGES_REQUESTED` — scripts/ci/detect_human_changes_requested.py:1 — used here
- `ADR-006` — scripts/ci/detect_human_changes_requested.py:3 — used here
- `pr-maintenance.yml` — scripts/ci/detect_human_changes_requested.py:3 — used here
- `GITHUB_OUTPUT` — scripts/ci/detect_human_changes_requested.py:5 — used here
- `ADR-035` — scripts/ci/detect_human_changes_requested.py:7 — used here
- `EXIT_SUCCESS` — scripts/ci/detect_human_changes_requested.py:19 — defined here
- `EXIT_CONFIG` — scripts/ci/detect_human_changes_requested.py:20 — defined here
- `_BOT_AUTHORS` — scripts/ci/detect_human_changes_requested.py:22 — defined here
- `main` — scripts/ci/detect_human_changes_requested.py:33 — defined here

## Structure
- `_BOT_AUTHORS = frozenset(...)`
- `def main() -> int`
- `if __name__ == "__main__":`

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/detect_human_changes_requested.py`, Python 3, 97 lines
- documented invocation:
  "Replaces the inline PowerShell block in pr-maintenance.yml (ADR-006)." — scripts/ci/detect_human_changes_requested.py:3
  Workflow invocation: `python3 scripts/ci/detect_human_changes_requested.py`
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/ci/detect_human_changes_requested.py`
  abridged stdout: (empty; stderr: `ERROR: GITHUB_OUTPUT not set`)
  **actual exit code:** 2
  Secondary test with mock output: `TMP_OUT=$(mktemp); GITHUB_OUTPUT="$TMP_OUT" PR_NUMBER=999999 GITHUB_REPOSITORY=dummy/repo python3 sources/rjm/scripts/ci/detect_human_changes_requested.py`
  abridged stdout: `::warning::Failed to fetch PR review data; proceeding without human-changes detection`
  **actual exit code:** 0 (wrote `human_changes_requested=false\n` to `$TMP_OUT`)
  Unit tests: `uv run --directory sources/rjm pytest tests/ci/test_detect_human_changes_requested.py`
  abridged stdout: `6 passed in 0.10s`
  **actual exit code:** 0
- documented exit codes:
  "0 - Success (includes gh failure gracefully handled as false)" — scripts/ci/detect_human_changes_requested.py:8
  "2 - Configuration error (GITHUB_OUTPUT not set)" — scripts/ci/detect_human_changes_requested.py:9
  Actual exit paths in code:
  - `scripts/ci/detect_human_changes_requested.py:37`: `return EXIT_CONFIG`
  - `scripts/ci/detect_human_changes_requested.py:67`: `return EXIT_SUCCESS`
  - `scripts/ci/detect_human_changes_requested.py:92`: `return EXIT_SUCCESS`
  - `scripts/ci/detect_human_changes_requested.py:96`: `sys.exit(main())`
- for validators/gates: can it exit non-zero? Yes, returns 2 (`EXIT_CONFIG`) if `GITHUB_OUTPUT` is unset. Does it fail on the source repo's own default branch? No, all test suite unit tests pass on default branch.
- does the output match what the documentation claims? Yes, writes `human_changes_requested=true` or `false` to `$GITHUB_OUTPUT` and logs warnings as documented.

## Defects — required
- `orphan` · scripts/ci/detect_human_changes_requested.py:3 · Invoked by `.github/workflows/pr-maintenance.yml:217` which is outside the lifecycle manifest scope; no in-scope manifest file invokes this script.

## Observations
Exemplar of ADR-006 module extraction and ADR-035 exit code standardization: encapsulates PR inspection logic into a testable script with frozen bot author filtering (`_BOT_AUTHORS`), avoiding brittle multiline shell scripts in GitHub Actions workflows while guaranteeing graceful degradation upon GitHub CLI failure.

## Context cost
2466 bytes (approximately 616 tokens). Isolated stdlib-only implementation; loads no external or project modules.
