---
package: rjm
path: scripts/ci/load_ai_review_prompt.py
type: script
bytes: 2645
unit: inv-rjm-204
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/load_ai_review_prompt.py, sha256: 5b7992a516e98e447bf020615ea72faa136a9dcaf75d08b425074c7fd937445f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/load_ai_review_prompt.py

## Purpose — required, verbatim
> "Load the ai-review prompt template and publish step outputs." — scripts/ci/load_ai_review_prompt.py:1

## Design intent — required
Resolves the prompt template for the AI review action using a three-tier fallback hierarchy: custom file path (`PROMPT_FILE`), default repository template (`.github/prompts/default-ai-review.md`), or built-in minimal fallback prompt. Writes the resolved prompt to `/tmp/ai-review-prompt.md` and exports `prompt_source`, `prompt_file`, and `prompt_template` to `GITHUB_OUTPUT`.

## Phase — required
rjm:review

## Inputs — required
- Environment variable `GITHUB_OUTPUT` — scripts/ci/load_ai_review_prompt.py:66
- Environment variable `PROMPT_FILE` — scripts/ci/load_ai_review_prompt.py:71
- Default template path `DEFAULT_PROMPT_PATH` (`.github/prompts/default-ai-review.md`) — scripts/ci/load_ai_review_prompt.py:13

## Outputs — required
- Output prompt file `PROMPT_OUTPUT_PATH` (`/tmp/ai-review-prompt.md`) — scripts/ci/load_ai_review_prompt.py:12
- Step output `prompt_source` appended to GitHub output — scripts/ci/load_ai_review_prompt.py:55
- Step output `prompt_file` appended to GitHub output — scripts/ci/load_ai_review_prompt.py:56
- Step output `prompt_template` appended to GitHub output — scripts/ci/load_ai_review_prompt.py:57

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ai-review` — scripts/ci/load_ai_review_prompt.py:1 — used here
- `EXIT_OK` — scripts/ci/load_ai_review_prompt.py:10 — defined here
- `EXIT_CONFIG` — scripts/ci/load_ai_review_prompt.py:11 — defined here
- `PROMPT_OUTPUT_PATH` — scripts/ci/load_ai_review_prompt.py:12 — defined here
- `DEFAULT_PROMPT_PATH` — scripts/ci/load_ai_review_prompt.py:13 — defined here
- `FALLBACK_PROMPT` — scripts/ci/load_ai_review_prompt.py:14 — defined here
- `append_line` — scripts/ci/load_ai_review_prompt.py:20 — defined here
- `append_multiline_output` — scripts/ci/load_ai_review_prompt.py:25 — defined here
- `load_prompt` — scripts/ci/load_ai_review_prompt.py:34 — defined here
- `main` — scripts/ci/load_ai_review_prompt.py:61 — defined here

## Structure
none (python script; functions: `append_line`, `append_multiline_output`, `load_prompt`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/load_ai_review_prompt.py`, language: Python 3, lines: 78
- documented invocation:
  - "Load the ai-review prompt template and publish step outputs." — scripts/ci/load_ai_review_prompt.py:1
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/ci/load_ai_review_prompt.py`
  abridged stdout: `(empty)`
  stderr: `error: GITHUB_OUTPUT is required`
  **actual exit code**: 2
- documented exit codes vs. actual exit paths:
  Documented exit codes: `EXIT_OK = 0` (scripts/ci/load_ai_review_prompt.py:10), `EXIT_CONFIG = 2` (scripts/ci/load_ai_review_prompt.py:11).
  Actual exit paths:
  - line 58: `return EXIT_OK` (0) on successful prompt resolution
  - line 64: `return EXIT_CONFIG` (2) when arguments are provided
  - line 69: `return EXIT_CONFIG` (2) when `GITHUB_OUTPUT` is missing
  - line 77: `raise SystemExit(main())`
- for validators/gates: can it exit non-zero? yes (exits 2 on configuration error). Does it fail on the source repo's own default branch? fails with exit code 2 when run without GITHUB_OUTPUT.
- does the output match what the documentation claims? yes, resolves prompt template with proper fallbacks and writes GITHUB_OUTPUT.

## Defects — required
- orphan · scripts/ci/load_ai_review_prompt.py:1 · Not invoked by any in-scope manifest file; called by out-of-scope .github/actions/ai-review/action.yml:227.

## Observations
- Emits hardcoded multiline delimiter `EOF_PROMPT` (line 57) unlike `invoke_copilot_cli.py` which dynamically generates collision-free delimiters.

## Context cost
2645 bytes (~661 tokens). Standard library only (`os`, `sys`, `pathlib`).
