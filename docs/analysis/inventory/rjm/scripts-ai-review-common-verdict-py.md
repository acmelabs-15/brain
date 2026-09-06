---
package: rjm
path: scripts/ai_review_common/verdict.py
type: script
bytes: 10325
unit: inv-rjm-196
in_scope_via: .claude/skills/review/references/spec-compliance.md
aliases: []
memo_inputs:
  - {path: scripts/ai_review_common/verdict.py, sha256: 6b3475739059a19aef3022a05e7b77ff7f5add074b06310fbdb5d48fa61d60e1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ai_review_common/verdict.py

## Purpose — required, verbatim
> "Verdict parsing, label/milestone extraction, and failure categorization." — scripts/ai_review_common/verdict.py:1

## Design intent — required
Implements the canonical verdict resolution, multi-axis aggregation, structured verdict extraction, and failure categorization engine for AI review and quality gates. It defines the authoritative verdict token sets (`FAIL_VERDICTS`, `_KNOWN_VERDICT_TOKENS`), prioritizes conflicting verdicts (`CRITICAL_FAIL` > `WARN` > `UNKNOWN` > `PASS`), categorizes errors into infrastructure versus code quality failures, and sanitizes AI-generated label and milestone strings against shell metacharacter injection.

## Phase — required
rjm:review

## Inputs — required
- Unstructured or structured AI review output text strings.
- Lists of verdict tokens (`list[str]`) passed to `merge_verdicts`.
- Error messages, stderr strings, and integer exit codes passed to `get_failure_category`.
- Trace and completeness verdict strings passed to `spec_validation_failed`.

## Outputs — required
- Single canonical verdict tokens (`PASS`, `WARN`, `CRITICAL_FAIL`, `UNKNOWN`, `REJECTED`, `FAIL`, `NEEDS_REVIEW`, `NON_COMPLIANT`, `COMPLIANT`, `PARTIAL`, `DID_NOT_RUN`).
- List of sanitized GitHub labels (`get_labels`, `get_labels_from_ai_output`).
- Sanitized milestone string or None (`get_milestone`, `get_milestone_from_ai_output`).
- Failure category classification: `"INFRASTRUCTURE"` or `"CODE_QUALITY"`.
- Boolean flag indicating whether spec validation should block merge (`spec_validation_failed`).

## Invokes — required
none

## Invoked by — required
- reference .claude/skills/review/references/spec-compliance.md — .claude/skills/review/references/spec-compliance.md:136
- script verdict — scripts/ai_review_common/quality_gate.py:6

## Concepts named — required, verbatim
- `_VERDICT_PATTERN` — scripts/ai_review_common/verdict.py:7 — defined here
- `_KEYWORD_RULES` — scripts/ai_review_common/verdict.py:9 — defined here
- `get_verdict` — scripts/ai_review_common/verdict.py:17 — defined here
- `_LABEL_PATTERN` — scripts/ai_review_common/verdict.py:52 — defined here
- `_MILESTONE_PATTERN` — scripts/ai_review_common/verdict.py:53 — defined here
- `get_labels` — scripts/ai_review_common/verdict.py:56 — defined here
- `get_milestone` — scripts/ai_review_common/verdict.py:63 — defined here
- `FAIL_VERDICTS` — scripts/ai_review_common/verdict.py:71 — defined here
- `_KNOWN_VERDICT_TOKENS` — scripts/ai_review_common/verdict.py:82 — defined here
- `merge_verdicts` — scripts/ai_review_common/verdict.py:90 — defined here
- `_EXTRACT_VERDICT_PATTERN` — scripts/ai_review_common/verdict.py:143 — defined here
- `extract_verdict` — scripts/ai_review_common/verdict.py:150 — defined here
- `_INFRA_PATTERNS` — scripts/ai_review_common/verdict.py:172 — defined here
- `get_failure_category` — scripts/ai_review_common/verdict.py:190 — defined here
- `_TRACE_FAILURES` — scripts/ai_review_common/verdict.py:215 — defined here
- `_COMPLETENESS_FAILURES` — scripts/ai_review_common/verdict.py:216 — defined here
- `spec_validation_failed` — scripts/ai_review_common/verdict.py:219 — defined here
- `_JSON_LABELS_PATTERN` — scripts/ai_review_common/verdict.py:232 — defined here
- `_JSON_MILESTONE_PATTERN` — scripts/ai_review_common/verdict.py:233 — defined here
- `SAFE_NAME_PATTERN` — scripts/ai_review_common/verdict.py:235 — defined here
- `get_labels_from_ai_output` — scripts/ai_review_common/verdict.py:240 — defined here
- `get_milestone_from_ai_output` — scripts/ai_review_common/verdict.py:267 — defined here

## Structure
- Verdict parsing — scripts/ai_review_common/verdict.py:1

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ai_review_common/verdict.py`
- language: Python
- lines: 286
- documented invocation:
  "def get_verdict(output: str) -> str:" — scripts/ai_review_common/verdict.py:17
  "def merge_verdicts(verdicts: list[str]) -> str:" — scripts/ai_review_common/verdict.py:90
  "def extract_verdict(text: str) -> str:" — scripts/ai_review_common/verdict.py:150
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/ai_review_common/verdict.py`
- abridged stdout: (empty)
- **actual exit code:** 0
- documented exit codes: none
- actual exit paths in code:
  No `sys.exit()` calls in module. Functions return parsed verdict strings, label/milestone collections, or booleans.
- for validators/gates:
  Library module supporting gates; `merge_verdicts` returns `"CRITICAL_FAIL"` when any input token is in `FAIL_VERDICTS`.
- does the output match what the documentation claims?
  Yes, executes aggregation according to the 5-tier priority contract and matches documented behavior.

## Defects — required
none

## Observations
- Distinguishes three parsing contracts for empty input (scripts/ai_review_common/verdict.py:27-36): `get_verdict` returns `CRITICAL_FAIL` (fail-safe for CI), `extract_verdict` returns `UNKNOWN` (neutral for multi-line skills), and `merge_verdicts` returns `UNKNOWN` (no information).
- Regex hardening: `_EXTRACT_VERDICT_PATTERN` (lines 143-147) includes negative lookahead `(?![|A-Z_])` to reject template echo strings like `VERDICT: [PASS|WARN|CRITICAL_FAIL]` from matching as valid verdicts.
- Shell metacharacter prevention: `SAFE_NAME_PATTERN` (lines 235-237) validates label and milestone tokens against pattern `^[A-Za-z0-9](?:[A-Za-z0-9 _.\-]*[A-Za-z0-9])?$` with length bounds 1-50.

## Context cost
File size: 10,325 bytes (286 lines). Self-contained library with no internal dependencies (~2,600 tokens).
