---
package: rjm
path: scripts/consensus/__init__.py
type: script
bytes: 1164
unit: inv-rjm-212
in_scope_via: scripts/README.md
aliases: []
memo_inputs:
  - {path: scripts/consensus/__init__.py, sha256: 9a6da91444611b98e86735832d13ec1f06cbad95954428945e540ca5bea930df}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/consensus/__init__.py

## Purpose — required, verbatim
> "Consensus mechanisms for multi-agent decision making." — scripts/consensus/__init__.py:1

## Design intent — required
Serves as the public package interface for the multi-agent consensus subsystem, exposing consensus algorithms (majority, weighted, quorum, unanimous), vote data structures, decision recording facilities, and agent expertise weighting. Without it, callers would need to import directly from internal modules (`algorithms`, `decision_recorder`, `weights`), increasing coupling across multi-agent decision workflows.

## Phase — required
cross-phase

## Inputs — required
Imports and re-exports symbols from internal consensus submodules:
- `scripts.consensus.algorithms` — scripts/consensus/__init__.py:18
- `scripts.consensus.decision_recorder` — scripts/consensus/__init__.py:27
- `scripts.consensus.weights` — scripts/consensus/__init__.py:28

## Outputs — required
Package namespace exporting public API symbols listed in `__all__` — scripts/consensus/__init__.py:30-41

## Invokes — required
- script algorithms — scripts/consensus/__init__.py:18
- script decision_recorder — scripts/consensus/__init__.py:27
- script weights — scripts/consensus/__init__.py:28
- doc .agents/analysis/claude-flow-architecture-analysis.md — scripts/consensus/__init__.py:13

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `majority` — scripts/consensus/__init__.py:7 — defined here
- `weighted` — scripts/consensus/__init__.py:8 — defined here
- `quorum` — scripts/consensus/__init__.py:9 — defined here
- `unanimous` — scripts/consensus/__init__.py:10 — defined here
- `claude-flow's Consensus and Decision Making (wiki 8.4)` — scripts/consensus/__init__.py:12 — used here
- `ConsensusAlgorithm` — scripts/consensus/__init__.py:19 — used here
- `ConsensusResult` — scripts/consensus/__init__.py:20 — used here
- `Vote` — scripts/consensus/__init__.py:21 — used here
- `majority_consensus` — scripts/consensus/__init__.py:22 — used here
- `quorum_consensus` — scripts/consensus/__init__.py:23 — used here
- `unanimous_consensus` — scripts/consensus/__init__.py:24 — used here
- `weighted_consensus` — scripts/consensus/__init__.py:25 — used here
- `DecisionRecorder` — scripts/consensus/__init__.py:27 — used here
- `get_agent_weight` — scripts/consensus/__init__.py:28 — used here
- `get_all_weights` — scripts/consensus/__init__.py:28 — used here

## Structure
- Module docstring — scripts/consensus/__init__.py:1-14
- Submodule imports from algorithms — scripts/consensus/__init__.py:18-26
- Import of DecisionRecorder — scripts/consensus/__init__.py:27
- Import of weight functions — scripts/consensus/__init__.py:28
- Definition of `__all__` — scripts/consensus/__init__.py:30-41

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/consensus/__init__.py`, language: Python, lines: 42
- documented invocation: none (pure library package initialization module, no standalone CLI usage documented)
- executed: yes
- actual command run: `python3 -m scripts.consensus.__init__` (from repository root `sources/rjm`)
- abridged stdout: (no output)
- actual exit code: 0
- direct execution test: `python3 scripts/consensus/__init__.py`
- abridged stdout:
```
ModuleNotFoundError: No module named 'scripts'
```
- actual exit code: 1
- documented exit codes vs actual exit paths:
  - documented: none
  - actual exit paths: none (module definition file; exits 0 on successful module import; fails with exit 1 and `ModuleNotFoundError` when executed directly due to absolute imports requiring `sources/rjm` in `sys.path`)
- for validators/gates: not a validator or gate
- does the output match what the documentation claims? Yes, defines the package namespace and re-exports all consensus algorithms, data structures, and utilities as described in docstring.

## Defects — required
- `orphan` · scripts/consensus/__init__.py:1 · Package module is not invoked or imported by any in-scope lifecycle entry point, command, or skill; it is tested only by out-of-scope test suites.
- `script-bug` · scripts/consensus/__init__.py:18 · Absolute import `"from scripts.consensus.algorithms import ("` fails with `ModuleNotFoundError` when the file is run directly via `python3 scripts/consensus/__init__.py` rather than as a module with the repository root in `PYTHONPATH`.

## Observations
- Documents architectural provenance from Claude-Flow: `"Reference: claude-flow's Consensus and Decision Making (wiki 8.4)"` (`scripts/consensus/__init__.py:12`) and links to local architecture analysis (`.agents/analysis/claude-flow-architecture-analysis.md` at line 13).
- Uses `from __future__ import annotations` and strict `__all__` list for explicit symbol exposure.

## Context cost
1,164 bytes (~290 tokens). Aggregate package size including all three submodules (`algorithms.py` 9,895 bytes, `decision_recorder.py` 6,436 bytes, `weights.py` 2,603 bytes) is 20,098 bytes (~5,025 tokens).
