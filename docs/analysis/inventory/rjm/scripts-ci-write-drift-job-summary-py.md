---
package: rjm
path: scripts/ci/write_drift_job_summary.py
type: script
bytes: 2609
unit: inv-rjm-211
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/write_drift_job_summary.py, sha256: c3af8c3ae1447f5a6b6078b1a9a9cb4777f4aba378507fc35ac1f6614b9839fe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/write_drift_job_summary.py

## Purpose — required, verbatim
> "Write the agent drift detection job summary to GITHUB_STEP_SUMMARY." — scripts/ci/write_drift_job_summary.py:2

## Design intent — required
CI reporting script replacing an inline step in `agent-drift-detection.yml`. It aggregates conclusions from three upstream validation jobs (`VALIDATE_CONCLUSION`, `LIB_MIRROR_CONCLUSION`, and `MANIFEST_PARITY_CONCLUSION`), formatting a pass/fail markdown summary that lists monitored paths and provides remediation instructions (`build/generate_agents.py`) when drift is detected.

## Phase — required
rjm:test

## Inputs — required
- Environment variable `VALIDATE_CONCLUSION` — scripts/ci/write_drift_job_summary.py:67
- Environment variable `LIB_MIRROR_CONCLUSION` — scripts/ci/write_drift_job_summary.py:68
- Environment variable `MANIFEST_PARITY_CONCLUSION` — scripts/ci/write_drift_job_summary.py:69
- Environment variable `GITHUB_STEP_SUMMARY` destination path — scripts/ci/write_drift_job_summary.py:66

## Outputs — required
- Markdown summary appended to `$GITHUB_STEP_SUMMARY` or printed to stdout — scripts/ci/write_drift_job_summary.py:76,84
- Error message to stderr on file write failure — scripts/ci/write_drift_job_summary.py:79
- Process exit code: 0 on success, 1 on file write failure — scripts/ci/write_drift_job_summary.py:82,86

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `VALIDATE_CONCLUSION` — scripts/ci/write_drift_job_summary.py:4 — used here
- `LIB_MIRROR_CONCLUSION` — scripts/ci/write_drift_job_summary.py:4 — used here
- `MANIFEST_PARITY_CONCLUSION` — scripts/ci/write_drift_job_summary.py:5 — used here
- `agent-drift-detection.yml` — scripts/ci/write_drift_job_summary.py:7 — used here
- `ADR-035` — scripts/ci/write_drift_job_summary.py:9 — used here
- `EXIT_OK` — scripts/ci/write_drift_job_summary.py:19 — defined here
- `EXIT_ERROR` — scripts/ci/write_drift_job_summary.py:20 — defined here
- `EXIT_USAGE` — scripts/ci/write_drift_job_summary.py:21 — defined here

## Structure
- build_summary(validate_conclusion: str, lib_mirror_conclusion: str, manifest_parity_conclusion: str) -> str
- main(argv: list[str] | None = None) -> int

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/write_drift_job_summary.py`, Python 3, 91 lines
- **documented invocation:**
  > "Reads VALIDATE_CONCLUSION, LIB_MIRROR_CONCLUSION, and" — scripts/ci/write_drift_job_summary.py:4
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/ci/write_drift_job_summary.py`
- **actual exit code:** 0
- **abridged stdout:**
```
## Agent Drift Detection Failed

Generated agent files have drifted from their source templates.

### Fix
1. Edit the source template in `templates/agents/*.shared.md`
2. Run: `uv run python build/generate_agents.py`
3. Commit the regenerated files
### Monitored Paths
- `templates/` - source templates
- `src/vs-code-agents/` - generated VS Code agents
- `src/copilot-cli/` - generated Copilot CLI agents
```
- **documented exit codes:**
  > "0  - Summary written to GITHUB_STEP_SUMMARY, or printed to stdout when unset" — scripts/ci/write_drift_job_summary.py:10
  > "2  - Usage error" — scripts/ci/write_drift_job_summary.py:11
  vs. actual exit paths:
  - `scripts/ci/write_drift_job_summary.py:82`: `return EXIT_ERROR` (when writing to summary file raises OSError)
  - `scripts/ci/write_drift_job_summary.py:86`: `return EXIT_OK` (when summary is output)
  - `scripts/ci/write_drift_job_summary.py:90`: `sys.exit(main())`
- **validators/gates:** can exit non-zero: yes (exits 1 if summary file cannot be written). Fails on source repo default branch: no (exits 0 with failed status message when environment variables are empty).
- **output match:** yes, renders passed summary when all three conclusions equal "success" and failure summary with remediation instructions otherwise.

## Defects — required
- exit-code-mismatch · scripts/ci/write_drift_job_summary.py:9-12 · Docstring documents exit code 2 as "Usage error", but `EXIT_USAGE` (2) is never returned by `main()` because missing environment variables default to empty strings; conversely, file write errors return `EXIT_ERROR` (1), which is omitted from the docstring.

## Observations
Monitors three distinct target generations (`templates/`, `src/vs-code-agents/`, and `src/copilot-cli/`), enforcing consistency across Claude Code, VS Code, and Copilot CLI agent variants.

## Context cost
File size: 2609 bytes (~650 tokens). Standard library only.
