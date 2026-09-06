---
package: rjm
path: scripts/eval/_eval_agent_types.py
type: script
bytes: 7902
unit: inv-rjm-217
in_scope_via: .agents/architecture/ADR-081-confidence-elicitation-experiment.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_eval_agent_types.py, sha256: 30e28546d4d1e89c23a330e6abba1b6ce9dd302924e96cef1dc134516b3b163a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_eval_agent_types.py

## Purpose — required, verbatim
> "Dataclasses and exceptions for eval-agent-vs-baseline runner." — scripts/eval/_eval_agent_types.py:1

## Design intent — required
Defines strongly-typed data contracts, validation schemas, and versioned dataclasses used throughout the `eval-agent-vs-baseline` offline evaluation pipeline. It establishes explicit data structures for test fixtures (`Fixture`), scoring assertions (`Assertion`, `AssertionResult`), execution plans (`ExecutionPlan`), per-run result logs (`RunRecord`), and aggregate statistical reports (`Report`), enforcing schema versioning and strict constructor validation (such as ensuring regex assertions set only patterns and verdict assertions set only expected values). Without these centralized types, evaluation scripts and persistence stores would lack schema enforcement and type safety, leading to silent scoring bugs, malformed jsonl log serialization, and untracked schema drift across eval runs.

## Phase — required
none

## Inputs — required
Dataclass constructors and validation methods consume:
- Fixture definitions: string identifiers, prompts/inputs, provenance category literals (`synthetic`, `public-cve`, `paraphrased-from-public`), and tag lists.
- Assertion specifications: `AssertionKind` enums (`REGEX`, `VERDICT`), regex pattern strings, and expected verdict strings.
- Execution plan and run parameters: variant identifiers (`agent`, `baseline`, `skill`), run counts, model identifiers, token estimates, cost figures, and pricing timestamps.
- Evaluation run outcomes: raw model responses, assertion result lists, outcome status (`success`, `error`), latencies, token counts, error categories, attempt counts, random seeds, and system fingerprints.

## Outputs — required
Instantiated and validated data structures, enums, and exceptions:
- `AssertionKind` enum (`REGEX = "regex"`, `VERDICT = "verdict"`)
- `SchemaVersionError` and `FixtureValidationError` exception types
- `Assertion` and `AssertionResult` frozen dataclasses
- `Fixture`, `RunRecord`, `Report`, and `ExecutionPlan` dataclasses
- Schema version constants: `SCHEMA_VERSION = 1`, `RUN_RECORD_SCHEMA_VERSION = 2`, `REPORT_SCHEMA_VERSION = 2`

## Invokes — required
none

## Invoked by — required
- script _eval_agent_types — scripts/eval/_plan_runner.py:12
- script _eval_agent_types — scripts/eval/_report_aggregator.py:26
- script _eval_agent_types — scripts/eval/_report_writer.py:20
- script _eval_agent_types — scripts/eval/_run_persistence.py:48
- script _eval_agent_types — scripts/eval/_scoring_engine.py:13
- script _eval_agent_types — scripts/eval/eval-agent-vs-baseline.py:36

## Concepts named — required, verbatim
- `DESIGN-004` — scripts/eval/_eval_agent_types.py:3 — used here
- `REQ-004` — scripts/eval/_eval_agent_types.py:5 — used here
- `SCHEMA_VERSION` — scripts/eval/_eval_agent_types.py:14 — defined here
- `RUN_RECORD_SCHEMA_VERSION` — scripts/eval/_eval_agent_types.py:15 — defined here
- `REPORT_SCHEMA_VERSION` — scripts/eval/_eval_agent_types.py:16 — defined here
- `ProvenanceLiteral` — scripts/eval/_eval_agent_types.py:19 — defined here
- `ADR-058` — scripts/eval/_eval_agent_types.py:20 — used here
- `VariantLiteral` — scripts/eval/_eval_agent_types.py:26 — defined here
- `OutcomeLiteral` — scripts/eval/_eval_agent_types.py:27 — defined here
- `RecommendationLiteral` — scripts/eval/_eval_agent_types.py:33 — defined here
- `AssertionKind` — scripts/eval/_eval_agent_types.py:41 — defined here
- `SchemaVersionError` — scripts/eval/_eval_agent_types.py:50 — defined here
- `FixtureValidationError` — scripts/eval/_eval_agent_types.py:54 — defined here
- `Assertion` — scripts/eval/_eval_agent_types.py:59 — defined here
- `AssertionResult` — scripts/eval/_eval_agent_types.py:100 — defined here
- `Fixture` — scripts/eval/_eval_agent_types.py:115 — defined here
- `RunRecord` — scripts/eval/_eval_agent_types.py:127 — defined here
- `Report` — scripts/eval/_eval_agent_types.py:161 — defined here
- `ExecutionPlan` — scripts/eval/_eval_agent_types.py:203 — defined here

## Structure
none (Python module; defines schema version constants, type aliases ProvenanceLiteral, VariantLiteral, OutcomeLiteral, RecommendationLiteral, enum AssertionKind, exceptions SchemaVersionError and FixtureValidationError, and dataclasses Assertion, AssertionResult, Fixture, RunRecord, Report, ExecutionPlan)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_eval_agent_types.py`, language: Python 3, lines: 223
- documented invocation: none (internal library module with no CLI entry point; imported by eval runner modules)
- executed: yes
- actual command run, abridged stdout, actual exit code:
  `python3 sources/rjm/scripts/eval/_eval_agent_types.py`, stdout: `""` (empty), actual exit code: `0`
- documented exit codes vs actual exit paths:
  Documented exit codes: none (internal library module). Actual exit paths in code: no `sys.exit()` calls; normal module import returns 0.
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Not a standalone validator CLI. Constructor validation in `Assertion.__post_init__` raises `ValueError` on invalid assertion parameter combinations.
- does the output match what the documentation claims?
  Yes, executes and imports cleanly without side effects.

## Defects — required
none

## Observations
- `Assertion.__post_init__` enforces strict mutual exclusion: `AssertionKind.REGEX` requires `pattern` and forbids `expected_value`; `AssertionKind.VERDICT` requires `expected_value` and forbids `pattern`. This eliminates silent zero-pass scoring bugs caused by mismatched assertion fields.
- Supports three evaluation variants (`agent`, `baseline`, `skill`) via `VariantLiteral` to enable pairwise statistical comparisons across form factors (evaluating whether specialized agent subagent prompts outperform single-turn inline skill prompts or baseline prompts).
- `RecommendationLiteral` formalizes human-in-the-loop and automated verdict categories (`graduate-to-CI`, `keep-as-audit`, `scrap`, `halt-due-to-flakiness`).

## Context cost
7902 bytes for the file itself. Has no external or sibling module dependencies (imports standard library modules `dataclasses`, `enum`, `typing`). Approximate tokens: ~2000 tokens.
