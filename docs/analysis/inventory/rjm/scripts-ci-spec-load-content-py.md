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
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/spec_load_content.py

## Purpose — required, verbatim
> "Load spec content from files and linked GitHub issues." — scripts/ci/spec_load_content.py:2

## Design intent — required
Aggregates specification text from markdown files in `.agents/specs/` and linked GitHub issue titles and bodies via `gh issue view`. Replaces an inline bash block in `ai-spec-validation.yml` per ADR-006 and ADR-035. Combines all retrieved specification content into a unified markdown file for subsequent AI spec validation.

## Phase — required
none

## Inputs — required
- Environment variable `SPEC_REFS` — scripts/ci/spec_load_content.py:8
- Environment variable `ISSUE_REFS` — scripts/ci/spec_load_content.py:9
- Environment variable `GITHUB_REPOSITORY` — scripts/ci/spec_load_content.py:10
- Environment variable `RUNNER_TEMP` — scripts/ci/spec_load_content.py:11
- Environment variable `GITHUB_OUTPUT` — scripts/ci/spec_load_content.py:12
- Environment variable `GITHUB_RUN_ID` — scripts/ci/spec_load_content.py:164
- Spec markdown files in `.agents/specs` or specified file paths — scripts/ci/spec_load_content.py:87
- GitHub issue data retrieved via `gh` CLI — scripts/ci/spec_load_content.py:56

## Outputs — required
- Step output `spec_file` written to `GITHUB_OUTPUT` or stdout — scripts/ci/spec_load_content.py:15
- Generated temporary markdown file `spec-content-{GITHUB_RUN_ID}.md` in `RUNNER_TEMP` — scripts/ci/spec_load_content.py:164

## Invokes — required
- command gh — scripts/ci/spec_load_content.py:56

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ai-spec-validation.yml` — scripts/ci/spec_load_content.py:5 — used here
- `ADR-006` — scripts/ci/spec_load_content.py:5 — used here
- `SPEC_REFS` — scripts/ci/spec_load_content.py:8 — used here
- `ISSUE_REFS` — scripts/ci/spec_load_content.py:9 — used here
- `GITHUB_REPOSITORY` — scripts/ci/spec_load_content.py:10 — used here
- `RUNNER_TEMP` — scripts/ci/spec_load_content.py:11 — used here
- `GITHUB_OUTPUT` — scripts/ci/spec_load_content.py:12 — used here
- `spec_file` — scripts/ci/spec_load_content.py:15 — defined here
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
none (python script; functions: write_github_output, _gh_issue_body, _find_spec_by_id, _read_spec, _load_spec_refs, _load_issue_refs, run, main)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/spec_load_content.py`, language: Python 3, lines: 178
- documented invocation:
  "Load spec content from files and linked GitHub issues." — scripts/ci/spec_load_content.py:2
  (CLI command: `SPEC_REFS="<ref>" python3 scripts/ci/spec_load_content.py`)
- executed: yes
- actual command run: `SPEC_REFS=".agents/specs/agent-orchestration-mcp-spec.md" python3 scripts/ci/spec_load_content.py` (executed from `sources/rjm`)
  abridged stdout: `spec_file=spec-content-0.md`
  actual exit code: 0
- documented exit codes:
  `0 - content loaded` — scripts/ci/spec_load_content.py:18
  `2 - referenced spec content is missing` — scripts/ci/spec_load_content.py:19
  `3 - GitHub issue lookup failed` — scripts/ci/spec_load_content.py:20
  vs. actual exit paths in code:
  `scripts/ci/spec_load_content.py:75` (`return EXIT_EXTERNAL, ""`)
  `scripts/ci/spec_load_content.py:81` (`return EXIT_EXTERNAL, ""`)
  `scripts/ci/spec_load_content.py:102` (`return EXIT_CONFIG, ""`)
  `scripts/ci/spec_load_content.py:105` (`return EXIT_CONFIG, ""`)
  `scripts/ci/spec_load_content.py:117` (`return EXIT_CONFIG, []`)
  `scripts/ci/spec_load_content.py:162` (`return EXIT_CONFIG`)
  `scripts/ci/spec_load_content.py:168` (`return EXIT_OK`)
  `scripts/ci/spec_load_content.py:177` (`sys.exit(main())`)
- for validators/gates: can it exit non-zero? yes (exits 2 on missing/empty spec content or missing references, exits 3 on GitHub CLI lookup failure). does it fail on the source repo's own default branch? no when provided a valid spec ref; exits 2 when run with no references provided.
- does the output match what the documentation claims? yes (outputs path to generated `spec-content-{GITHUB_RUN_ID}.md` file and exits 0 when valid spec is loaded)

## Defects — required
- `orphan — scripts/ci/spec_load_content.py:4 — not invoked by any in-scope lifecycle file (replaces bash block in out-of-scope .github/workflows/ai-spec-validation.yml)`

## Observations
- Recursively searches `.agents/specs` using `specs_root.rglob(f"*{ref}*")` when reference does not end in `.md`, picking the first matching file in sorted order.
- Tested in repository by `tests/ci/test_spec_load_content.py`.

## Context cost
5,523 bytes (~1,381 tokens). Standard library only (`os`, `subprocess`, `sys`, `pathlib`).
