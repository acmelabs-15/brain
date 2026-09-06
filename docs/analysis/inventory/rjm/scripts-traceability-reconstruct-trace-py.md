---
package: rjm
path: scripts/traceability/reconstruct_trace.py
type: script
bytes: 7041
unit: inv-rjm-264
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/traceability/reconstruct_trace.py, sha256: ca583e5d73a03980877473ec231b4879af5011e2718eb188e5eded7369b9f081}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/traceability/reconstruct_trace.py

## Purpose — required, verbatim
> "Reconstruct multi-agent call graphs from session log trace IDs." — scripts/traceability/reconstruct_trace.py:2

## Design intent — required
Analyzes and reconstructs hierarchical multi-agent delegation trees from distributed session logs. In multi-agent orchestration, parent agents dispatch subagent tasks across separate sessions; each session log in `.agents/sessions/*.json` records correlation metadata including `traceId` and `parentSessionId`. `reconstruct_trace.py` parses these log files, links child sessions to parents, builds directed acyclic call trees, and formats them as indented text trees, JSON structures, or Mermaid flowcharts. Without this tool, developers and orchestrators would have no automated means of visualizing parent-child delegation chains or debugging complex multi-agent interactions across disconnected session files.

## Phase — required
cross-phase

## Inputs — required
- Session log files in `.agents/sessions/` directory (`_SESSIONS_DIR` — scripts/traceability/reconstruct_trace.py:26)
- Trace correlation fields in session JSON (`traceId` — scripts/traceability/reconstruct_trace.py:5; `parentSessionId` — scripts/traceability/reconstruct_trace.py:5)
- CLI argument for trace ID filter (`--trace-id` — scripts/traceability/reconstruct_trace.py:181)
- CLI argument for output format (`--format` — scripts/traceability/reconstruct_trace.py:186)
- CLI argument for custom sessions directory (`--sessions-dir` — scripts/traceability/reconstruct_trace.py:192)

## Outputs — required
- Formatted delegation call graphs emitted to stdout in text, json, or mermaid formats (`FORMATTERS` — scripts/traceability/reconstruct_trace.py:168)
- Diagnostic error messages emitted to stderr on missing directory or unknown trace ID
- Process exit codes conforming to ADR-035 (0 for success, 1 for not found, 2 for I/O error)

## Invokes — required
none

## Invoked by — required
- doc scripts/README.md — scripts/README.md:228

## Concepts named — required, verbatim
- `traceId` — scripts/traceability/reconstruct_trace.py:5 — used here
- `parentSessionId` — scripts/traceability/reconstruct_trace.py:5 — used here
- `ADR-035` — scripts/traceability/reconstruct_trace.py:9 — used here
- `SessionNode` — scripts/traceability/reconstruct_trace.py:30 — defined here
- `FORMATTERS` — scripts/traceability/reconstruct_trace.py:168 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
The file is an executable CLI script:
- path: `scripts/traceability/reconstruct_trace.py`, language: Python, lines: 242
- documented invocation:
  `"uv run python scripts/traceability/reconstruct_trace.py --help" — scripts/README.md:228`
- **executed:** yes
- actual command run:
  ```bash
  python3 scripts/traceability/reconstruct_trace.py --sessions-dir sources/rjm/.agents/sessions
  ```
- actual stdout (abridged):
  ```text
  Trace: 9b2d48cd-c86d-460e-aba6-dc0f9dcce1ff
  2026-08-10-session-10033-pr-4644-autofix: Autofix PR 4644 Validate PR QA evidence
  2026-08-10-session-10036-pr-4681-autofix: Add QA evidence required by Validate PR for PR 4681
  ```
- **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  Documented in docstring:
  - `"    0 - Success" — scripts/traceability/reconstruct_trace.py:10`
  - `"    1 - No matching sessions found or invalid arguments" — scripts/traceability/reconstruct_trace.py:11`
  - `"    2 - File I/O or config error" — scripts/traceability/reconstruct_trace.py:12`
  Actual exit paths in code:
  - `scripts/traceability/reconstruct_trace.py:214` — `return 2` if sessions directory not found or is not a directory
  - `scripts/traceability/reconstruct_trace.py:220` — `return 1` if no traced sessions found
  - `scripts/traceability/reconstruct_trace.py:228` — `return 1` if target trace ID not found
  - `scripts/traceability/reconstruct_trace.py:237` — `return 0` on successful graph rendering
- for validators/gates: not a validator/gate. Can exit non-zero (exits 1 on missing trace ID, exits 2 on invalid sessions directory).
- does the output match what the documentation claims? yes (reconstructs call tree and conforms to ADR-035 exit codes).

## Defects — required
none

## Observations
- Adheres to ADR-035 exit code standardization (0=success, 1=not found/invalid args, 2=I/O or config error).
- Includes Mermaid flowchart generation (`format_mermaid`) with label sanitization (stripping newlines and double quotes, truncating to 60 characters).
- Includes path security canonicalization (`resolved_sessions_dir = sessions_dir.resolve()`).

## Context cost
7,041 bytes (~1,760 tokens). Pure standard library.
