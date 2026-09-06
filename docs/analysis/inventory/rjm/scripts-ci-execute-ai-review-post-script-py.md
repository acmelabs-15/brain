---
package: rjm
path: scripts/ci/execute_ai_review_post_script.py
type: script
bytes: 2813
unit: inv-rjm-203
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/execute_ai_review_post_script.py, sha256: b054d9d879990f9f217d6c35988afeffc153a412a657601f420cafb9a8d2102f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/execute_ai_review_post_script.py

## Purpose — required, verbatim
> "Execute the optional ai-review post-analysis script." — scripts/ci/execute_ai_review_post_script.py:1

## Design intent — required
Dispatches an optional post-analysis callback script following an AI review action. It inspects the configured script extension, constructing the appropriate invocation command for either Python 3 (`.py`) or PowerShell (`.ps1`) runtimes with standardized parameters (`--pr-number`, `--verdict`, and `--findings-json`), executing the subprocess and propagating its exit status.

## Phase — required
none

## Inputs — required
- Environment variable `EXECUTE_SCRIPT` — scripts/ci/execute_ai_review_post_script.py:64
- Environment variable `PR_NUMBER` — scripts/ci/execute_ai_review_post_script.py:65
- Environment variable `AI_VERDICT` — scripts/ci/execute_ai_review_post_script.py:66
- Environment variable `AI_FINDINGS` — scripts/ci/execute_ai_review_post_script.py:41,54
- Script file on disk at path specified by `execute_script` — scripts/ci/execute_ai_review_post_script.py:72

## Outputs — required
- Spawns child process via `python3` or `pwsh` with review verdict and findings — scripts/ci/execute_ai_review_post_script.py:34,45

## Invokes — required
- command python3 — scripts/ci/execute_ai_review_post_script.py:34
- command pwsh — scripts/ci/execute_ai_review_post_script.py:45

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ai-review` — scripts/ci/execute_ai_review_post_script.py:1 — used here
- `EXIT_OK` — scripts/ci/execute_ai_review_post_script.py:12 — defined here
- `EXIT_LOGIC` — scripts/ci/execute_ai_review_post_script.py:13 — defined here
- `EXIT_CONFIG` — scripts/ci/execute_ai_review_post_script.py:14 — defined here
- `CommandResult` — scripts/ci/execute_ai_review_post_script.py:18 — defined here
- `run_command` — scripts/ci/execute_ai_review_post_script.py:22 — defined here
- `build_command` — scripts/ci/execute_ai_review_post_script.py:31 — defined here
- `execute_post_script` — scripts/ci/execute_ai_review_post_script.py:59 — defined here
- `main` — scripts/ci/execute_ai_review_post_script.py:92 — defined here

## Structure
- Module docstring defining role in `ai-review` post-analysis (line 1)
- Return code constants `EXIT_OK`, `EXIT_LOGIC`, and `EXIT_CONFIG` (lines 12-14)
- Subprocess abstraction `CommandResult` and `run_command` (lines 17-29)
- Command builder `build_command` mapping `.py` and `.ps1` extensions (lines 31-56)
- Execution orchestrator `execute_post_script` (lines 59-89)
- Entry point `main` and invocation block (lines 92-101)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/execute_ai_review_post_script.py`
- **language:** Python 3
- **lines:** 101
- **documented invocation:** none explicit (executed in composite action step)
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/ci/execute_ai_review_post_script.py`
- **stdout:**
  ```text
  Executing post-analysis script: 
  PR Number: 
  AI Verdict: 
  ::error::Execute script not found: 
  ```
- **actual exit code:** 1
- **documented exit codes:**
  - `> "return EXIT_LOGIC" — scripts/ci/execute_ai_review_post_script.py:75`
  - `> "return EXIT_LOGIC" — scripts/ci/execute_ai_review_post_script.py:81`
  - `> "return result.returncode" — scripts/ci/execute_ai_review_post_script.py:86`
  - `> "return EXIT_OK" — scripts/ci/execute_ai_review_post_script.py:89`
  - `> "return EXIT_CONFIG" — scripts/ci/execute_ai_review_post_script.py:95`
- **actual exit paths:**
  - `return EXIT_LOGIC` — scripts/ci/execute_ai_review_post_script.py:75
  - `return EXIT_LOGIC` — scripts/ci/execute_ai_review_post_script.py:81
  - `return result.returncode` — scripts/ci/execute_ai_review_post_script.py:86
  - `return EXIT_OK` — scripts/ci/execute_ai_review_post_script.py:89
  - `return EXIT_CONFIG` — scripts/ci/execute_ai_review_post_script.py:95
  - `raise SystemExit(main())` — scripts/ci/execute_ai_review_post_script.py:100
- **for validators/gates:** Not a validator or gate; script dispatcher. Exits 1 (`EXIT_LOGIC`) if the target script is not found or has an unsupported extension, propagates the subprocess returncode if non-zero, exits 2 (`EXIT_CONFIG`) if CLI arguments are passed to `main(argv=...)`, and exits 0 on success.
- **output matches documentation:** yes, logs execution parameters and executes the configured callback.

## Defects — required
- orphan — scripts/ci/execute_ai_review_post_script.py:1 — not invoked by any in-scope file; intended for ai-review composite action in CI workflows
- script-bug — scripts/ci/execute_ai_review_post_script.py:100 — main() is called without sys.argv[1:], so command line arguments are not passed to argv parameter or validated against lines 93-95

## Observations
Supports cross-platform post-analysis scripts by providing runtime command dispatch for both Python 3 and PowerShell Core (`pwsh -NoProfile -File`).

## Context cost
2,813 bytes source (~700 tokens).
