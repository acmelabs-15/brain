---
package: rjm
path: scripts/ci/write_copilot_synthesis_summary.py
type: script
bytes: 1609
unit: inv-rjm-211
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/write_copilot_synthesis_summary.py, sha256: 66e561aabde64519c36ba45cf72ea182d9ddaa490d07dbed619e75d1cae541f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/write_copilot_synthesis_summary.py

## Purpose — required, verbatim
> "Write the Copilot context synthesis job summary to GITHUB_STEP_SUMMARY." — scripts/ci/write_copilot_synthesis_summary.py:2

## Design intent — required
CI reporting utility that formats the Copilot context synthesis job summary and writes it to `$GITHUB_STEP_SUMMARY` (or stdout when running locally). It replaces an inline workflow step in `copilot-context-synthesis.yml` as part of ADR-006 logic-burn-down, enforcing clean separation between workflow orchestration and formatting script code.

## Phase — required
cross-phase

## Inputs — required
- Environment variable `ISSUE_NUMBER` — scripts/ci/write_copilot_synthesis_summary.py:40
- Environment variable `GITHUB_STEP_SUMMARY` specifying the destination file path — scripts/ci/write_copilot_synthesis_summary.py:46

## Outputs — required
- Markdown summary appended to `$GITHUB_STEP_SUMMARY` or printed to stdout — scripts/ci/write_copilot_synthesis_summary.py:5,51
- Error message to stderr when `ISSUE_NUMBER` is omitted — scripts/ci/write_copilot_synthesis_summary.py:42
- Process exit code: 0 on success, 2 on usage error — scripts/ci/write_copilot_synthesis_summary.py:10-11

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `copilot-context-synthesis.yml` — scripts/ci/write_copilot_synthesis_summary.py:6 — used here
- `ADR-006` — scripts/ci/write_copilot_synthesis_summary.py:7 — used here
- `ADR-035` — scripts/ci/write_copilot_synthesis_summary.py:9 — used here
- `EXIT_OK` — scripts/ci/write_copilot_synthesis_summary.py:19 — defined here
- `EXIT_USAGE` — scripts/ci/write_copilot_synthesis_summary.py:20 — defined here
- `copilot-swe-agent` — scripts/ci/write_copilot_synthesis_summary.py:32 — used here
- `copilot-ready` — scripts/ci/write_copilot_synthesis_summary.py:33 — used here

## Structure
- _build_summary(issue_number: str) -> str
- main() -> int

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/write_copilot_synthesis_summary.py`, Python 3, 58 lines
- **documented invocation:**
  > "Reads ISSUE_NUMBER from the environment and writes a markdown summary" — scripts/ci/write_copilot_synthesis_summary.py:4
- **executed:** yes
- **actual command run:** `ISSUE_NUMBER=42 python3 sources/rjm/scripts/ci/write_copilot_synthesis_summary.py`
- **actual exit code:** 0
- **abridged stdout:**
```
## Copilot Context Synthesis Complete :robot:

**Issue**: #42

### Actions Taken
- Synthesized context from trusted sources
- Posted/updated synthesis comment with @copilot mention
- Assigned copilot-swe-agent to the issue
- Removed copilot-ready label (processing complete)

Copilot will now create a PR based on the synthesized context.
```
- **documented exit codes:**
  > "0  - Summary written to GITHUB_STEP_SUMMARY, or printed to stdout when unset" — scripts/ci/write_copilot_synthesis_summary.py:10
  > "2  - Usage error (ISSUE_NUMBER not set)" — scripts/ci/write_copilot_synthesis_summary.py:11
  vs. actual exit paths:
  - `scripts/ci/write_copilot_synthesis_summary.py:43`: `return EXIT_USAGE` (when `ISSUE_NUMBER` is missing or empty)
  - `scripts/ci/write_copilot_synthesis_summary.py:53`: `return EXIT_OK` (when summary successfully generated)
  - `scripts/ci/write_copilot_synthesis_summary.py:57`: `sys.exit(main())`
- **validators/gates:** can exit non-zero: yes (exits 2 when `ISSUE_NUMBER` is not set). Fails on source repo default branch: exits 2 when run without environment variables.
- **output match:** yes, renders markdown actions and issue link.

## Defects — required
none

## Observations
Simple template generator demonstrating the ADR-006 pattern: extract non-trivial shell and Python logic out of GitHub Actions workflow YAML files into testable standalone scripts.

## Context cost
File size: 1609 bytes (~400 tokens). Standard library only.
