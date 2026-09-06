---
package: rjm
path: scripts/ci/spec_load_content.py
type: script
bytes: 5523
unit: inv-rjm-208
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/spec_load_content.py, sha256: 6dafe22d03081ee7038326083af675e4e75eb8f3d8db3165a2cc6b466442665c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/spec_load_content.py

## Purpose — required, verbatim
> "Load spec content from files and linked GitHub issues." — scripts/ci/spec_load_content.py:2

## Design intent — required
Consolidates specification content referenced in a pull request into a single markdown file for downstream AI spec validation steps. It reads local markdown specification files by path or searches recursively for requirement, design, and task IDs under `.agents/specs/`, and fetches issue titles and bodies from GitHub via `gh issue view`, concatenating all resolved sources into a single markdown artifact.

## Phase — required
rjm:spec

## Inputs — required
- Environment variable `SPEC_REFS` (line 8)
- Environment variable `ISSUE_REFS` (line 9)
- Environment variable `GITHUB_REPOSITORY` (line 10)
- Environment variable `RUNNER_TEMP` (line 11)
- Environment variable `GITHUB_OUTPUT` (line 12)
- Specification files referenced under `.agents/specs` or paths ending in `.md` (lines 85-94, 113)

## Outputs — required
- GitHub step output `spec_file` specifying absolute path to the generated spec content markdown file (line 15, 166)
- Temporary markdown file `spec-content-<RUN_ID>.md` written to `RUNNER_TEMP` (line 164)

## Invokes — required
- script gh — scripts/ci/spec_load_content.py:56

## Invoked by — required
- doc src/copilot-cli/instructions/ci-scripts.instructions.md — src/copilot-cli/instructions/ci-scripts.instructions.md:43
- script tests/ci/test_spec_load_content.py — tests/ci/test_spec_load_content.py:1

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/spec_load_content.py:5 — used here
- `ADR-035` — scripts/ci/spec_load_content.py:17 — used here
- `EXIT_OK` — scripts/ci/spec_load_content.py:30 — defined here
- `EXIT_CONFIG` — scripts/ci/spec_load_content.py:31 — defined here
- `EXIT_EXTERNAL` — scripts/ci/spec_load_content.py:32 — defined here
- `write_github_output` — scripts/ci/spec_load_content.py:35 — defined here
- `_gh_issue_body` — scripts/ci/spec_load_content.py:45 — defined here
- `_find_spec_by_id` — scripts/ci/spec_load_content.py:85 — defined here
- `_read_spec` — scripts/ci/spec_load_content.py:96 — defined here
- `_load_spec_refs` — scripts/ci/spec_load_content.py:109 — defined here
- `_load_issue_refs` — scripts/ci/spec_load_content.py:125 — defined here
- `run` — scripts/ci/spec_load_content.py:138 — defined here
- `main` — scripts/ci/spec_load_content.py:171 — defined here

## Structure
- `def write_github_output` — scripts/ci/spec_load_content.py:35
- `def _gh_issue_body` — scripts/ci/spec_load_content.py:45
- `def _find_spec_by_id` — scripts/ci/spec_load_content.py:85
- `def _read_spec` — scripts/ci/spec_load_content.py:96
- `def _load_spec_refs` — scripts/ci/spec_load_content.py:109
- `def _load_issue_refs` — scripts/ci/spec_load_content.py:125
- `def run` — scripts/ci/spec_load_content.py:138
- `def main` — scripts/ci/spec_load_content.py:171

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/spec_load_content.py`, language: Python, lines: 178
- documented invocation:
  - "Load spec content from files and linked GitHub issues." — scripts/ci/spec_load_content.py:2
  - "spec_load_content.py" — src/copilot-cli/instructions/ci-scripts.instructions.md:43
- **executed:** yes
- actual command run: `SPEC_REFS="REQ-003" python3 scripts/ci/spec_load_content.py`, abridged stdout:
  ```
  spec_file=spec-content-0.md
  ```
  **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented:
    - "0 - content loaded" — scripts/ci/spec_load_content.py:18
    - "2 - referenced spec content is missing" — scripts/ci/spec_load_content.py:19
    - "3 - GitHub issue lookup failed" — scripts/ci/spec_load_content.py:20
  - actual exit paths:
    - `return EXIT_EXTERNAL, ""` — scripts/ci/spec_load_content.py:75
    - `return EXIT_EXTERNAL, ""` — scripts/ci/spec_load_content.py:81
    - `return EXIT_CONFIG, ""` — scripts/ci/spec_load_content.py:102
    - `return EXIT_CONFIG, ""` — scripts/ci/spec_load_content.py:105
    - `return EXIT_CONFIG, []` — scripts/ci/spec_load_content.py:117
    - `return exit_code, []` — scripts/ci/spec_load_content.py:120
    - `return exit_code, []` — scripts/ci/spec_load_content.py:131
    - `return exit_code` — scripts/ci/spec_load_content.py:150
    - `return exit_code` — scripts/ci/spec_load_content.py:153
    - `return EXIT_CONFIG` — scripts/ci/spec_load_content.py:162
    - `return EXIT_OK` — scripts/ci/spec_load_content.py:168
    - `return run()` — scripts/ci/spec_load_content.py:173
    - `sys.exit(main())` — scripts/ci/spec_load_content.py:177
- for validators/gates: can exit non-zero (exits 2 when spec references are missing or empty, exits 3 when gh issue retrieval fails). When executed with no environment variables or spec references, exits 2 with `::error::no spec content found for references:  `.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
Exclusively uses Python stdlib to guarantee compatibility on GitHub Actions runners without pre-installed packages. Recursively scans `.agents/specs` via `rglob` when given a requirement identifier such as `REQ-003`.

## Context cost
5523 bytes, approximately 1380 tokens.
