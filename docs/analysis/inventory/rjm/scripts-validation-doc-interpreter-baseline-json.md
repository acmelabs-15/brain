---
package: rjm
path: scripts/validation/doc_interpreter_baseline.json
type: script
bytes: 18
unit: inv-rjm-294
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/doc_interpreter_baseline.json, sha256: 62b405d88881f963e77d8b9452f6bd6de13151d866f980edd90e394f0ababe27}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/doc_interpreter_baseline.json

## Purpose — required, verbatim
> "{" — scripts/validation/doc_interpreter_baseline.json:1 (no explicit purpose statement)

## Design intent — required
Serves as the grandfathered baseline data store for the documented interpreter portability ratchet gate (`check_doc_interpreter_portability.py`). The gate enforces that documentation commands and scripts launch Python exclusively through portable invocations (such as `python3` or `uv run`) rather than hardcoded environment-specific interpreters, while tracking and ratcheting grandfathered infractions. An empty `"files": {}` mapping indicates that zero non-portable interpreter invocations are grandfathered across the repository, holding all documentation to zero portability defects. Without this baseline file, the ratchet validator would fail to initialize or would require hardcoding baseline state in executable code.

## Phase — required
rjm:test

## Inputs — required
- Read by `check_doc_interpreter_portability.py` via `json.loads` (lines 125, 494).

## Outputs — required
- JSON object mapping file paths to grandfathered interpreter count records (`{"files": {}}`).

## Invokes — required
none

## Invoked by — required
- script doc_interpreter_baseline.json — scripts/validation/check_doc_interpreter_portability.py:125

## Concepts named — required, verbatim
- `files` — scripts/validation/doc_interpreter_baseline.json:2 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/doc_interpreter_baseline.json`, language: JSON, lines: 4
- documented invocation: none (JSON baseline data file; not an executable script, though categorized as script in the inventory manifest)
- **executed:** yes
- actual command run: `python3 -m json.tool sources/rjm/scripts/validation/doc_interpreter_baseline.json`, abridged stdout: `{\n    "files": {}\n}`, **actual exit code**: 0
- documented exit codes: none (data configuration file; no exit codes or executable logic) vs. actual exit paths in code: none (no exit paths in file)
- for validators/gates: can it exit non-zero? N/A (JSON baseline data file; consumed by `check_doc_interpreter_portability.py`). does it fail on the source repo's own default branch? no (valid JSON syntax).
- does the output match what the documentation claims? yes (parses cleanly as valid JSON).

## Defects — required
none

## Observations
- The baseline dictionary is empty (`"files": {}`), confirming that the repository currently permits zero grandfathered doc interpreter portability violations.
- Categorized as type `script` in the manifest and dispatch mapping table despite containing only JSON configuration/baseline data.

## Context cost
File: 18 bytes (~5 tokens). Standalone data file.
