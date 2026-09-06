---
package: rjm
path: scripts/eval/_eval_errors.py
type: script
bytes: 236
unit: inv-rjm-217
in_scope_via: .agents/architecture/ADR-081-confidence-elicitation-experiment.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_eval_errors.py, sha256: 4a9fd5efd9fcc6cea518d7abe5cf64c3dd31e1e0dabf0191d1ef00ed85a93dbf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_eval_errors.py

## Purpose — required, verbatim
> "Stable exception identities shared by script-style eval modules." — scripts/eval/_eval_errors.py:1

## Design intent — required
Provides dedicated, standalone exception definitions (specifically `MalformedProviderMetadataError`) whose class identities remain stable across module reloads. In test suites and evaluation harnesses that dynamically import or reload modules (such as `_eval_common.py`), defining exception classes in the reloaded module creates duplicate type identities that break exception catching (`except MalformedProviderMetadataError:` failing `isinstance` checks). Isolating this error class in `_eval_errors.py` guarantees type identity stability across test runners and eval scripts. Without this file, dynamic module reloading in evaluation pipelines would result in uncaught exception errors and brittle test execution.

## Phase — required
none

## Inputs — required
none

## Outputs — required
Exception class `MalformedProviderMetadataError(RuntimeError)`.

## Invokes — required
none

## Invoked by — required
- script _eval_errors — scripts/eval/_eval_common.py:12

## Concepts named — required, verbatim
- `MalformedProviderMetadataError` — scripts/eval/_eval_errors.py:6 — defined here

## Structure
none (Python module; defines MalformedProviderMetadataError exception class)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_eval_errors.py`, language: Python 3, lines: 8
- documented invocation: none (internal exception definition module)
- executed: yes
- actual command run, abridged stdout, actual exit code:
  `python3 sources/rjm/scripts/eval/_eval_errors.py`, stdout: `""` (empty), actual exit code: `0`
- documented exit codes vs actual exit paths:
  Documented exit codes: none (internal module). Actual exit paths in code: no `sys.exit()` calls; normal import returns 0.
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Not a validator or gate executable. Defines exception type `MalformedProviderMetadataError`.
- does the output match what the documentation claims?
  Yes, executes without output and imports cleanly.

## Defects — required
none

## Observations
- Deliberately factored out into an 8-line isolated file to prevent split exception identities when `_eval_common.py` is reloaded during script-style tests.

## Context cost
236 bytes for this file. No imports. Approximate tokens: ~60 tokens.
