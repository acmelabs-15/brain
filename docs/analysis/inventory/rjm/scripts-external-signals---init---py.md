---
package: rjm
path: scripts/external_signals/__init__.py
type: script
bytes: 559
unit: inv-rjm-238
in_scope_via: scripts/quality_gate/spec_external_signal_gate.py
aliases: []
memo_inputs:
  - {path: scripts/external_signals/__init__.py, sha256: 5a166b38cfca8b73e0d5f6c531345bdf1466bc01eaf5d61acd3b2d85adbf1447}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/external_signals/__init__.py

## Purpose — required, verbatim
> "Externally-grounded gate signals." — scripts/external_signals/__init__.py:1

## Design intent — required
Package initialization module and architectural manifest defining the contract for deterministic, non-LLM quality gate signals within rjm's CI pipeline. It documents the core design rule introduced by issue #1855: while LLM judgments may enrich gate reports, they must never serve as the sole decider for whether gates (such as `ai-spec-validation.yml`) pass. Without this package doctrine and its helper utilities, automated validation gates would risk closed-loop failure modes where LLMs unreliably approve their own generated outputs without objective external grounding.

## Phase — required
rjm:spec

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- script scripts.external_signals — scripts/quality_gate/external_signal_gate.py:61
- script scripts.external_signals — scripts/quality_gate/spec_external_signal_gate.py:68

## Concepts named — required, verbatim
- `Externally-grounded gate signals` — scripts/external_signals/__init__.py:1 — defined here
- `issue #1855` — scripts/external_signals/__init__.py:5 — used here
- `ai-spec-validation.yml` — scripts/external_signals/__init__.py:6 — used here
- `ai-pr-quality-gate.yml` — scripts/external_signals/__init__.py:7 — used here
- `docs/design/external-signal-gating.md` — scripts/external_signals/__init__.py:10 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/external_signals/__init__.py`, language: Python, lines: 13
- documented invocation: none
- **executed:** yes
- actual command run: `python3 -c "import scripts.external_signals"`
  abridged stdout: `(empty)`
  **actual exit code:** 0
- documented exit codes: none documented; imports cleanly with exit code 0
- for validators/gates: package initialization module; not a standalone failable gate CLI
- does the output match what the documentation claims? yes, package imports cleanly without error

## Defects — required
none

## Observations
- Documents the historical retirement of `ai-pr-quality-gate.yml` (the 10-agent quality gate workflow), noting that it was deleted rather than rewired to adhere to the external signal mandate.
- References `docs/design/external-signal-gating.md` as the architectural specification governing workflow wiring and gate aggregation.

## Context cost
559 bytes (13 lines), approximately 140 tokens. Isolated module with no external imports.
