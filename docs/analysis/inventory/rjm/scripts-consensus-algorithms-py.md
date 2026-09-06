---
package: rjm
path: scripts/consensus/algorithms.py
type: script
bytes: 9895
unit: inv-rjm-212
in_scope_via: scripts/README.md
aliases: []
memo_inputs:
  - {path: scripts/consensus/algorithms.py, sha256: 1877d5ff7c79a0ac61b50a53c7740142fb86aedb4c5b1c5be53274ac1bf20f67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/consensus/algorithms.py

## Purpose — required, verbatim
> "Consensus algorithm implementations." — scripts/consensus/algorithms.py:1

## Design intent — required
Provides mathematical decision-making rules to resolve multi-agent disagreements deterministically. By formalizing four distinct voting algorithms (majority, weighted expertise, quorum gating, and unanimous consent) along with structured `Vote` and `ConsensusResult` types, it enables multi-agent pipelines (such as ADR reviews and architectural changes) to compute unambiguous decision outcomes and confidence scores rather than stalling in subjective deadlock.

## Phase — required
cross-phase

## Inputs — required
Function parameters passed at runtime:
- `votes: list[Vote]` — scripts/consensus/algorithms.py:75, 135, 209, 261
- `weights: dict[str, float]` mapping agent name to numeric weight — scripts/consensus/algorithms.py:135
- `quorum_threshold: float` minimum participation threshold (default `0.67`) — scripts/consensus/algorithms.py:209

## Outputs — required
In-memory `ConsensusResult` instances with decision (`approved`, `rejected`, or `no_consensus`), confidence score (0.0 to 1.0), vote counts, and summary string — scripts/consensus/algorithms.py:53-73

## Invokes — required
none

## Invoked by — required
- script scripts.consensus.algorithms — scripts/consensus/__init__.py:18
- script scripts.consensus.algorithms — scripts/consensus/decision_recorder.py:17

## Concepts named — required, verbatim
- `Consensus algorithm implementations` — scripts/consensus/algorithms.py:1 — defined here
- `DecisionOutcome` — scripts/consensus/algorithms.py:17 — defined here
- `ConsensusAlgorithm` — scripts/consensus/algorithms.py:20 — defined here
- `Vote` — scripts/consensus/algorithms.py:30 — defined here
- `ConsensusResult` — scripts/consensus/algorithms.py:53 — defined here
- `majority_consensus` — scripts/consensus/algorithms.py:75 — defined here
- `weighted_consensus` — scripts/consensus/algorithms.py:134 — defined here
- `quorum_consensus` — scripts/consensus/algorithms.py:208 — defined here
- `unanimous_consensus` — scripts/consensus/algorithms.py:261 — defined here

## Structure
- DecisionOutcome = Literal["approved", "rejected", "no_consensus"] — scripts/consensus/algorithms.py:17
- class ConsensusAlgorithm(StrEnum) — scripts/consensus/algorithms.py:20
- class Vote — scripts/consensus/algorithms.py:30
- class ConsensusResult — scripts/consensus/algorithms.py:53
- def majority_consensus(votes: list[Vote]) -> ConsensusResult — scripts/consensus/algorithms.py:75
- def weighted_consensus(votes: list[Vote], weights: dict[str, float]) -> ConsensusResult — scripts/consensus/algorithms.py:134
- def quorum_consensus(votes: list[Vote], quorum_threshold: float = 0.67) -> ConsensusResult — scripts/consensus/algorithms.py:208
- def unanimous_consensus(votes: list[Vote]) -> ConsensusResult — scripts/consensus/algorithms.py:261

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/consensus/algorithms.py`, language: Python, lines: 313
- documented invocation: none (pure computational library module, no standalone CLI interface)
- executed: yes
- actual command run: `python3 scripts/consensus/algorithms.py`
- abridged stdout: (no output)
- actual exit code: 0
- test suite execution: `uv run pytest tests/test_consensus.py`
- abridged stdout:
```
tests/test_consensus.py ...................................... [100%]
38 passed in 0.05s
```
- actual exit code: 0
- documented exit codes vs actual exit paths:
  - documented: none
  - actual exit paths: none (pure algorithmic library; raises `ValueError` on empty vote list or invalid threshold/confidence parameters)
- for validators/gates: not a validator or gate (pure consensus computation library)
- does the output match what the documentation claims? Yes, all voting algorithms compute consensus outcomes, vote tallies, and confidence scores as specified.

## Defects — required
none

## Observations
- `Vote` and `ConsensusResult` are implemented as frozen dataclasses (`@dataclass(frozen=True)`), preventing accidental in-place alteration of vote tallies or rationale after calculation.
- `Vote.__post_init__` enforces range validation `0.0 <= self.confidence <= 1.0`, raising a `ValueError` on out-of-range confidence scores.
- `quorum_consensus` requires a configurable fraction of eligible non-abstaining agents (defaulting to 2/3 or 0.67), returning `no_consensus` with 0.0 confidence when quorum is not achieved before delegating to majority voting.

## Context cost
9,895 bytes (~2,475 tokens). Self-contained library file with standard library imports only (`dataclasses`, `enum`, `typing`).
