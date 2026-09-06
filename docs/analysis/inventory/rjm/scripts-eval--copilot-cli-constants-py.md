---
package: rjm
path: scripts/eval/_copilot_cli_constants.py
type: script
bytes: 570
unit: inv-rjm-215
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_copilot_cli_constants.py, sha256: f9b2ba5ce05a132735fe5fb3f29fb101ec98771dc18d6a3ef6e9fc9920ac6c0c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_copilot_cli_constants.py

## Purpose — required, verbatim
> "Constants shared by the Copilot CLI eval transport." — scripts/eval/_copilot_cli_constants.py:1

## Design intent — required
Defines canonical regex patterns, footer parsing dimensions, environment variable names, provider identification strings, and CLI trace character prefixes shared across the Copilot CLI evaluation transport modules (`_copilot_cli.py`, `_copilot_cli_transcript.py`, `eval_runtime_parity.py`). Solves the problem of maintaining a single source of truth for protocol-level parsing constants—such as terminal UI footer markers (`Changes`, `AI Credits`, `Tokens`, `Resume`, `Total duration`, `Wall time`) and CLI trace line prefix symbols (`●`, `│`, `├`, `└`) used to detect and prevent raw terminal formatting from contaminating evaluated model answers. Without it, string literals and regex patterns would be duplicated across multiple evaluation files, leading to parsing discrepancies, regex drift, and brittle terminal output sanitization.

## Phase — required
none

## Inputs — required
none

## Outputs — required
- Exported constants in module namespace: "PROVIDER_LABEL" — scripts/eval/_copilot_cli_constants.py:7-16

## Invokes — required
none

## Invoked by — required
- script _copilot_cli_constants — scripts/eval/_copilot_cli.py:27

## Concepts named — required, verbatim
- `FOOTER_LABEL_RE` — scripts/eval/_copilot_cli_constants.py:7 — defined here
- `FOOTER_COLUMN` — scripts/eval/_copilot_cli_constants.py:10 — defined here
- `FOOTER_VALUE_MAX_WORDS` — scripts/eval/_copilot_cli_constants.py:11 — defined here
- `FOOTER_PROSE_ENDINGS` — scripts/eval/_copilot_cli_constants.py:12 — defined here
- `SESSION_STATE_ENV` — scripts/eval/_copilot_cli_constants.py:13 — defined here
- `COPILOT_SESSION_STATE_DIR` — scripts/eval/_copilot_cli_constants.py:13 — used here
- `UNVERIFIED_MODEL_ENV` — scripts/eval/_copilot_cli_constants.py:14 — defined here
- `EVAL_COPILOT_ALLOW_UNVERIFIED_MODEL` — scripts/eval/_copilot_cli_constants.py:14 — used here
- `TRACE_LINE_PREFIXES` — scripts/eval/_copilot_cli_constants.py:15 — defined here
- `PROVIDER_LABEL` — scripts/eval/_copilot_cli_constants.py:16 — defined here
- `Copilot CLI` — scripts/eval/_copilot_cli_constants.py:16 — used here

## Structure
none (python constants module; exports FOOTER_LABEL_RE, FOOTER_COLUMN, FOOTER_VALUE_MAX_WORDS, FOOTER_PROSE_ENDINGS, SESSION_STATE_ENV, UNVERIFIED_MODEL_ENV, TRACE_LINE_PREFIXES, PROVIDER_LABEL)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_copilot_cli_constants.py`, language: Python, lines: 17
- documented invocation:
  - `"Constants shared by the Copilot CLI eval transport." — scripts/eval/_copilot_cli_constants.py:1`
  - `"from _copilot_cli_constants import (" — scripts/eval/_copilot_cli.py:27`
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - Direct execution:
    `python3 sources/rjm/scripts/eval/_copilot_cli_constants.py`
    stdout: `` (empty)
    **actual exit code**: 0
  - Import verification:
    `python3 -c "import sys; sys.path.insert(0, 'sources/rjm/scripts/eval'); import _copilot_cli_constants; print(_copilot_cli_constants.PROVIDER_LABEL)"`
    stdout: `Copilot CLI`
    **actual exit code**: 0
  - Test suite verification:
    `uv run pytest tests/eval/test_providers.py -k "TracePrefixes or footer or trace"` (executed in `sources/rjm`)
    stdout: `8 passed, 184 deselected in 0.44s`
    **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  No process exit calls or exit paths in module body (pure constants file).
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Not a validator or gate.
- does the output match what the documentation claims? yes, defines and exports the shared constants cleanly.

## Defects — required
none

## Observations
- `TRACE_LINE_PREFIXES = ("\u25cf", "\u2502", "\u251c", "\u2514")`: encapsulates the Unicode box-drawing prefixes used by Copilot CLI's interactive spinner and tool call trees. Centralizing this tuple allows fallback answer parsers to immediately detect when output scraped from stdout is corrupted by UI rendering rather than clean model completion text.

## Context cost
570 bytes (~150 tokens). Negligible context cost.
