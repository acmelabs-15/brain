---
package: rjm
path: scripts/ci/build_retrospective_prompt.py
type: script
bytes: 2952
unit: inv-rjm-199
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/build_retrospective_prompt.py, sha256: 5fd8c35a806317288379ba87cb12a2e2e18e4bdc0ed1d6c07a3d9daba80170ef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/build_retrospective_prompt.py

## Purpose — required, verbatim
> "Render the post-PR retrospective prompt and publish it as a step output." — scripts/ci/build_retrospective_prompt.py:1

## Design intent — required
Substitutes workflow runtime variables (`PR_NUMBER`, `MERGED`, `ESCALATE`) into the prompt template file (`.github/prompts/post-pr-retrospective.md`) and exports the rendered prompt as a multiline step output via `GITHUB_OUTPUT`, eliminating hazardous bash heredoc backtick escaping in workflow YAML. Without it, retrospective prompt rendering in workflow YAML would be prone to command substitution bugs or malformed placeholders.

## Phase — required
none

## Inputs — required
- CLI option `--template` (default `".github/prompts/post-pr-retrospective.md"`) — scripts/ci/build_retrospective_prompt.py:55
- Environment variable `GITHUB_OUTPUT` — output parameter file path — scripts/ci/build_retrospective_prompt.py:59
- Environment variable `PR_NUMBER` — pull request number — scripts/ci/build_retrospective_prompt.py:24
- Environment variable `MERGED` — merge status string — scripts/ci/build_retrospective_prompt.py:24
- Environment variable `ESCALATE` — escalation indicator — scripts/ci/build_retrospective_prompt.py:24
- Template file on disk located at path specified by `--template` argument (resolved at line 64)

## Outputs — required
- Multiline step output `PROMPT` appended to output path — scripts/ci/build_retrospective_prompt.py:76

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `EXIT_OK` — scripts/ci/build_retrospective_prompt.py:19 — defined here
- `EXIT_CONFIG` — scripts/ci/build_retrospective_prompt.py:20 — defined here
- `TEMPLATE_PATH` — scripts/ci/build_retrospective_prompt.py:22 — defined here
- `DELIMITER` — scripts/ci/build_retrospective_prompt.py:23 — defined here
- `PLACEHOLDERS` — scripts/ci/build_retrospective_prompt.py:24 — defined here
- `render` — scripts/ci/build_retrospective_prompt.py:27 — defined here
- `string.Template` — scripts/ci/build_retrospective_prompt.py:34 — used here
- `append_multiline_output` — scripts/ci/build_retrospective_prompt.py:37 — defined here
- `main` — scripts/ci/build_retrospective_prompt.py:53 — defined here

## Structure
- Module docstring (lines 1-8)
- Imports and exit code constants (lines 10-25)
- `render` placeholder substitution function (lines 27-34)
- `append_multiline_output` heredoc output writer with delimiter guard (lines 37-51)
- `main` argument parsing, environment resolution, and template rendering (lines 53-78)
- `__main__` caller (lines 80-82)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/build_retrospective_prompt.py`
- **language:** Python 3
- **lines:** 82
- **documented invocation:**
  > "parser.add_argument(\"--template\", default=str(TEMPLATE_PATH))" — scripts/ci/build_retrospective_prompt.py:55
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/ci/build_retrospective_prompt.py`
- **stdout:**
  ```text
  ::error::GITHUB_OUTPUT is required
  ```
- **actual exit code:** 2
- **documented exit codes:**
  - `> "EXIT_OK = 0" — scripts/ci/build_retrospective_prompt.py:19`
  - `> "EXIT_CONFIG = 2" — scripts/ci/build_retrospective_prompt.py:20`
- **actual exit paths:**
  - `return EXIT_CONFIG` — scripts/ci/build_retrospective_prompt.py:62
  - `return EXIT_CONFIG` — scripts/ci/build_retrospective_prompt.py:67
  - `return EXIT_CONFIG` — scripts/ci/build_retrospective_prompt.py:74
  - `return EXIT_OK` — scripts/ci/build_retrospective_prompt.py:77
  - `raise SystemExit(main())` — scripts/ci/build_retrospective_prompt.py:81
- **for validators/gates:** Can exit non-zero (exits 2 when `GITHUB_OUTPUT` is missing, template file is not found, or template contains unknown placeholders). On default branch without arguments, exits 2 (`::error::GITHUB_OUTPUT is required`). When executed with valid inputs and template, exits 0.
- **output matches documentation:** yes, safely renders template using `string.Template` and appends delimited output to `GITHUB_OUTPUT`.

## Defects — required
none

## Observations
Guards against heredoc delimiter collision: raises `ValueError` if the rendered prompt contains the delimiter string `RETRO_EOF` on its own line (lines 43-44). Uses strict substitution via `string.Template.substitute` so any undeclared placeholder raises `KeyError` and fails with `EXIT_CONFIG` rather than emitting raw unexpanded variables to downstream agents.

## Context cost
2952 bytes source. Reads `.github/prompts/post-pr-retrospective.md` (3048 bytes). Total context cost: 6000 bytes (~1500 tokens).
