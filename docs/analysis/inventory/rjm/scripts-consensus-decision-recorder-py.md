---
package: rjm
path: scripts/consensus/decision_recorder.py
type: script
bytes: 6436
unit: inv-rjm-212
in_scope_via: scripts/README.md
aliases: []
memo_inputs:
  - {path: scripts/consensus/decision_recorder.py, sha256: 685928c8108ab34bd2097a05886f27a74381a4291bd8bfd53b93ff4395ea72e3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/consensus/decision_recorder.py

## Purpose — required, verbatim
> "Decision recording and storage for multi-agent consensus." — scripts/consensus/decision_recorder.py:1

## Design intent — required
Provides persistent storage and retrieval for multi-agent consensus decisions as structured JSON files on disk. Without it, the deliberations, voting records, rationale, confidence scores, and escalation history of multi-agent debates would be lost once the agent session terminates, destroying traceability and auditability for architectural decisions.

## Phase — required
cross-phase

## Inputs — required
- Programmatic method arguments:
  - `record_decision`: `topic`, `context`, `votes`, `result`, `escalated`, `escalation_rationale` — scripts/consensus/decision_recorder.py:61-68
  - `get_decision`: `decision_id` string — scripts/consensus/decision_recorder.py:115
  - `list_decisions`: optional `limit` integer and `topic_filter` substring — scripts/consensus/decision_recorder.py:130-132
- Stored decision records read from disk:
  - JSON files located under `.agents/decisions/` directory — scripts/consensus/decision_recorder.py:4

## Outputs — required
- Stored decision records written to disk as `{decision_id}.json` files under `.agents/decisions/` — scripts/consensus/decision_recorder.py:4
- Retrieved `Decision` dataclass objects or lists of `Decision` objects returned by query methods — scripts/consensus/decision_recorder.py:115, 132

## Invokes — required
- script scripts.consensus.algorithms — scripts/consensus/decision_recorder.py:17

## Invoked by — required
- script scripts.consensus.decision_recorder — scripts/consensus/__init__.py:27

## Concepts named — required, verbatim
- `Decision recording and storage for multi-agent consensus` — scripts/consensus/decision_recorder.py:1 — defined here
- `Decision` — scripts/consensus/decision_recorder.py:21 — defined here
- `DecisionRecorder` — scripts/consensus/decision_recorder.py:45 — defined here
- `record_decision` — scripts/consensus/decision_recorder.py:60 — defined here
- `get_decision` — scripts/consensus/decision_recorder.py:115 — defined here
- `list_decisions` — scripts/consensus/decision_recorder.py:130 — defined here
- `_load_decision_file` — scripts/consensus/decision_recorder.py:174 — defined here
- `_generate_id` — scripts/consensus/decision_recorder.py:187 — defined here
- `ConsensusResult` — scripts/consensus/decision_recorder.py:17 — used here
- `Vote` — scripts/consensus/decision_recorder.py:17 — used here

## Structure
- class Decision — scripts/consensus/decision_recorder.py:21
- class DecisionRecorder — scripts/consensus/decision_recorder.py:45
  - def __init__(self, decisions_dir: Path | None = None) -> None — scripts/consensus/decision_recorder.py:48
  - def record_decision — scripts/consensus/decision_recorder.py:60
  - def get_decision(self, decision_id: str) -> Decision | None — scripts/consensus/decision_recorder.py:115
  - def list_decisions(self, limit: int | None = None, topic_filter: str | None = None) -> list[Decision] — scripts/consensus/decision_recorder.py:130
  - def _load_decision_file(self, filepath: Path) -> Decision | None — scripts/consensus/decision_recorder.py:174
  - def _generate_id(self, timestamp: str) -> str — scripts/consensus/decision_recorder.py:187

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/consensus/decision_recorder.py`, language: Python, lines: 200
- documented invocation: none (pure persistence utility class, no standalone CLI interface)
- executed: yes
- actual command run: `python3 scripts/consensus/decision_recorder.py`
- abridged stdout: (no output)
- actual exit code: 0
- test suite execution: `uv run pytest tests/test_consensus.py -k TestDecisionRecorder`
- abridged stdout:
```
tests/test_consensus.py .............. [100%]
14 passed in 0.04s
```
- actual exit code: 0
- documented exit codes vs actual exit paths:
  - documented: none
  - actual exit paths: none (persistence library class; raises `ValueError` on limit < 1; gracefully skips corrupt JSON files in `_load_decision_file`)
- for validators/gates: not a validator or gate
- does the output match what the documentation claims? Yes, records and retrieves structured decision objects from JSON files in the specified directory.

## Defects — required
none

## Observations
- Storage defaults to `.agents/decisions/` (`scripts/consensus/decision_recorder.py:56`), automatically creating parent directories with `self.decisions_dir.mkdir(parents=True, exist_ok=True)` (`scripts/consensus/decision_recorder.py:58`).
- Fault-tolerant error handling in `_load_decision_file` (`scripts/consensus/decision_recorder.py:174-185`) catches `json.JSONDecodeError`, `OSError`, `TypeError`, and `UnicodeDecodeError`, logs a warning to `sys.stderr`, and returns `None` rather than crashing on malformed files.
- Generates filesystem-safe decision identifiers via `_generate_id` (`scripts/consensus/decision_recorder.py:187-199`) by replacing `:` and `.` with `-`.

## Context cost
6,436 bytes (~1,610 tokens). Minimal runtime overhead; imports `ConsensusResult` and `Vote` under `TYPE_CHECKING` only (`scripts/consensus/decision_recorder.py:16-17`).
