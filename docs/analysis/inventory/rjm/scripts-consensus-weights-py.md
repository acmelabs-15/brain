---
package: rjm
path: scripts/consensus/weights.py
type: script
bytes: 2603
unit: inv-rjm-212
in_scope_via: scripts/README.md
aliases: []
memo_inputs:
  - {path: scripts/consensus/weights.py, sha256: 22b10a8b11a55f0c1b7e739cc87d38639b97623b5f2e345ad1dcf30642f5ae89}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/consensus/weights.py

## Purpose — required, verbatim
> "Agent expertise weights for weighted consensus voting." — scripts/consensus/weights.py:1

## Design intent — required
Defines domain-specific expertise weightings for specialist agents across seven decision domains (architecture, security, implementation, testing, operations, documentation, and breaking changes). Without it, weighted consensus voting would treat all agent opinions as equally authoritative regardless of subject domain, defeating the specialization model of the agent system.

## Phase — required
cross-phase

## Inputs — required
Function parameters:
- `agent: str` agent name identifier — scripts/consensus/weights.py:83
- `domain: DecisionDomain` target decision domain (`architecture`, `security`, `implementation`, `testing`, `operations`, `documentation`, or `breaking_change`) — scripts/consensus/weights.py:83, 96

## Outputs — required
- Numeric expertise weight (float from 0.5 to 2.0, default 1.0) returned by `get_agent_weight` — scripts/consensus/weights.py:83-93
- Copy of dictionary mapping agent names to expertise weights returned by `get_all_weights` — scripts/consensus/weights.py:96-107

## Invokes — required
none

## Invoked by — required
- script scripts.consensus.weights — scripts/consensus/__init__.py:28

## Concepts named — required, verbatim
- `Agent expertise weights for weighted consensus voting` — scripts/consensus/weights.py:1 — defined here
- `DecisionDomain` — scripts/consensus/weights.py:12 — defined here
- `AGENT_WEIGHTS` — scripts/consensus/weights.py:24 — defined here
- `get_agent_weight` — scripts/consensus/weights.py:83 — defined here
- `get_all_weights` — scripts/consensus/weights.py:96 — defined here

## Structure
- DecisionDomain = Literal[...] — scripts/consensus/weights.py:12
- AGENT_WEIGHTS: dict[DecisionDomain, dict[str, float]] — scripts/consensus/weights.py:24
- def get_agent_weight(agent: str, domain: DecisionDomain) -> float — scripts/consensus/weights.py:83
- def get_all_weights(domain: DecisionDomain) -> dict[str, float] — scripts/consensus/weights.py:96

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/consensus/weights.py`, language: Python, lines: 108
- documented invocation: none (pure configuration and lookup library module, no standalone CLI interface)
- executed: yes
- actual command run: `python3 scripts/consensus/weights.py`
- abridged stdout: (no output)
- actual exit code: 0
- test suite execution: `uv run pytest tests/test_consensus.py -k TestAgentWeights`
- abridged stdout:
```
tests/test_consensus.py ..... [100%]
5 passed in 0.03s
```
- actual exit code: 0
- documented exit codes vs actual exit paths:
  - documented: none
  - actual exit paths: none (pure configuration and mapping module; exits 0 on load)
- for validators/gates: not a validator or gate
- does the output match what the documentation claims? Yes, returns specified agent weights and defensive copies of domain weight mappings.

## Defects — required
none

## Observations
- Weight values scale between 0.5 (low expertise) and 2.0 (high expertise), falling back to 1.0 for unspecified agents in a domain.
- `get_all_weights` defensive design: explicitly invokes `dict(AGENT_WEIGHTS.get(domain, {}))` (`scripts/consensus/weights.py:107`) to prevent external caller mutation of the module-level `AGENT_WEIGHTS` table.
- References core specialist roles from rjm architecture: `architect`, `independent-thinker`, `high-level-advisor`, `analyst`, `implementer`, `security`, `devops`, `qa`, and `explainer`.

## Context cost
2,603 bytes (~650 tokens). Pure data tables and retrieval functions with standard library typing imports only (`typing.Literal`).
