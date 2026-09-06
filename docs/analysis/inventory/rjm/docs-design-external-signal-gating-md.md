---
package: rjm
path: docs/design/external-signal-gating.md
type: doc
bytes: 4324
unit: inv-rjm-191
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: docs/design/external-signal-gating.md, sha256: e2205c9c37e1690af881f70be4867634ecb367f1cbda26948b66209b18e8fa25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/design/external-signal-gating.md

## Purpose — required, verbatim
> "Every quality gate **MUST** produce its block / allow decision from at least one **externally-grounded signal**: a deterministic tool whose verdict does not depend on a language model." — docs/design/external-signal-gating.md:23-25

## Design intent — required
Defines the architectural contract and rationale for eliminating "closed-loop" validation (models judging models without external grounding) in automated quality gates. Mandates that every quality gate produce its block/allow verdict from at least one deterministic, non-LLM tool (such as test runners, static analysis linters, security scanners, or mechanical acceptance criteria extractors) while treating LLM reviews as advisory only. Documents two deterministic helper scripts (`acceptance_criteria.py` and `gate_aggregator.py`) and establishes the rule that any gate where all signals derive exclusively from LLM judgments will be refused a `PASS` verdict. Without this contract, quality gates and README badges would convey false confidence based on circular LLM self-evaluation.

## Phase — required
rjm:test

## Inputs — required
- GitHub Actions workflow outputs from `ai-spec-validation.yml` ("`ai-spec-validation.yml` produces its final verdict from LLM agent output" — docs/design/external-signal-gating.md:8)
- PR/issue Markdown body with checkboxes ("Parses `## Acceptance` / `## Acceptance Criteria` Markdown checkboxes out of" — docs/design/external-signal-gating.md:46)
- Unified git diff ("When a unified diff is supplied, it also exits non-zero if a criterion's keywords are" — docs/design/external-signal-gating.md:47-48)
- External and LLM signal flags passed to `gate_aggregator.py` ("--signal external:pytest=PASS" — docs/design/external-signal-gating.md:66; "--signal llm:security=WARN" — docs/design/external-signal-gating.md:68)

## Outputs — required
- Mechanical acceptance criteria report emitted by `acceptance_criteria.py` ("Parses `## Acceptance` / `## Acceptance Criteria` Markdown checkboxes out of" — docs/design/external-signal-gating.md:46)
- Aggregated gate verdict emitted by `gate_aggregator.py` ("Combines signal verdicts produced by external tools and LLM agents and emits" — docs/design/external-signal-gating.md:60)

## Invokes — required
- script scripts/external_signals/acceptance_criteria.py — docs/design/external-signal-gating.md:52
- script scripts/external_signals/gate_aggregator.py — docs/design/external-signal-gating.md:65

## Invoked by — required
- file scripts/external_signals/__init__.py — scripts/external_signals/__init__.py:10

## Concepts named — required, verbatim
- `External-Signal Gating` — docs/design/external-signal-gating.md:1 — defined here
- `ai-spec-validation.yml` — docs/design/external-signal-gating.md:8 — used here
- `ai-pr-quality-gate.yml` — docs/design/external-signal-gating.md:13 — used here
- `externally-grounded signal` — docs/design/external-signal-gating.md:24 — defined here
- `Code quality` — docs/design/external-signal-gating.md:33 — used here
- `Test coverage` — docs/design/external-signal-gating.md:34 — used here
- `Security` — docs/design/external-signal-gating.md:35 — used here
- `Spec / acceptance` — docs/design/external-signal-gating.md:36 — used here
- `Prose` — docs/design/external-signal-gating.md:37 — used here
- `acceptance_criteria.py` — docs/design/external-signal-gating.md:44 — defined here
- `gate_aggregator.py` — docs/design/external-signal-gating.md:58 — defined here
- `ADR-035` — docs/design/external-signal-gating.md:56 — used here
- `agent-can-edit-workflows` — docs/design/external-signal-gating.md:81 — used here

## Structure
- ## Problem — docs/design/external-signal-gating.md:6
- ## Contract — docs/design/external-signal-gating.md:21
- ## Helpers shipped in this PR — docs/design/external-signal-gating.md:39
- ### `acceptance_criteria.py` — docs/design/external-signal-gating.md:44
- ### `gate_aggregator.py` — docs/design/external-signal-gating.md:58
- ## Why not edit the workflows in this PR? — docs/design/external-signal-gating.md:79
- ## Follow-up — docs/design/external-signal-gating.md:94

## Scripts — required if type is script or the skill ships scripts
For scripts documented in this design:
- `scripts/external_signals/acceptance_criteria.py`:
  - path: `scripts/external_signals/acceptance_criteria.py`, language: Python, lines: 228
  - documented invocation: `python3 scripts/external_signals/acceptance_criteria.py \` — docs/design/external-signal-gating.md:52
  - **executed:** yes
  - actual command run: `python3 scripts/external_signals/acceptance_criteria.py --body docs/design/external-signal-gating.md --allow-empty --json`
  - abridged stdout: `{"passed": true, "criteria_count": 0, "unchecked": [], "diff_misses": [], "criteria": []}`
  - **actual exit code:** 0
  - documented exit codes: `Exit codes (ADR-035): 0 pass, 1 logic failure, 2 config error.` — docs/design/external-signal-gating.md:56 vs actual exit paths: `return 0 if report.passed else 1` (line 223), `return 1` (line 210), `raise SystemExit(2) from exc` (line 177)
  - for validators/gates: exits 0 when passed, 1 on unchecked criteria or diff misses, 2 on missing/unreadable file.
  - does output match documentation: yes

- `scripts/external_signals/gate_aggregator.py`:
  - path: `scripts/external_signals/gate_aggregator.py`, language: Python, lines: 183
  - documented invocation: `python3 scripts/external_signals/gate_aggregator.py \` — docs/design/external-signal-gating.md:65
  - **executed:** yes
  - actual command run: `python3 scripts/external_signals/gate_aggregator.py --signal external:pytest=PASS --signal external:codeql=PASS --signal llm:security=WARN --json`
  - abridged stdout: `{"verdict": "WARN", "reason": "warnings-present", "signals": [{"kind": "external", "name": "pytest", "verdict": "PASS"}, {"kind": "external", "name": "codeql", "verdict": "PASS"}, {"kind": "llm", "name": "security", "verdict": "WARN"}]}`
  - **actual exit code:** 0
  - documented exit codes: `Exit codes (ADR-035): 0 pass, 1 logic failure, 2 config error.` — docs/design/external-signal-gating.md:56 vs actual exit paths: `return 0 if verdict == "PASS" or verdict == "WARN" else 1` (line 178), `return 2` (line 160)
  - for validators/gates: exits 0 on PASS/WARN, 1 on FAIL/NEEDS_REVIEW (closed-loop), 2 on invalid signal argument format.
  - does output match documentation: yes

## Defects — required
- missing-path: "SOUL.md" — docs/design/external-signal-gating.md:17 — referenced at line 17 does not exist in repository root.

## Observations
- Identifies the critical failure mode of pure LLM gates: "a single closed loop: a ghost grading a ghost."
- Enforces ADR-035 exit code conventions across deterministic Python helpers.

## Context cost
4,324 bytes. Approximately 1,080 tokens.
