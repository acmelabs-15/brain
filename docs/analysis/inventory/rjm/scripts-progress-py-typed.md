---
package: rjm
path: scripts/progress/py.typed
type: script
bytes: 0
unit: inv-rjm-255
in_scope_via: docs/workflow-commands.md
aliases:
  - scripts/maintenance/__init__.py
memo_inputs:
  - {path: scripts/progress/py.typed, sha256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/progress/py.typed

## Purpose — required, verbatim
(no explicit purpose statement; 0-byte PEP 561 marker file with no text content)

## Design intent — required
Marker file indicating to static type checkers (such as mypy and pyright) that the `scripts.progress` package distributes inline type annotations per PEP 561. It is an exact 0-byte duplicate of `scripts/maintenance/__init__.py` recorded in the duplication ledger.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
none

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/progress/py.typed`, language: typing marker / configuration, lines: 0
- documented invocation: none
- **executed:** no (0-byte marker file; non-executable)
- actual command run: none, abridged stdout: none, **actual exit code**: none
- documented exit codes: none vs. actual exit paths: none
- for validators/gates: not a validator or gate
- does the output match what the documentation claims? yes, empty marker file as expected for PEP 561

## Defects — required
none

## Observations
- Exact alias with `scripts/maintenance/__init__.py` per deduplication ledger row 6 (0 bytes, SHA256 `e3b0c44298fc1c14`). Satisfies manifest row for canonical path `scripts/progress/py.typed` and alias row `scripts/maintenance/__init__.py`.

## Context cost
0 bytes, 0 tokens.
