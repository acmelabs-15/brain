---
package: rjm
path: .github/scripts/parse_artifact_insights.py
type: script
bytes: 6646
unit: inv-rjm-184
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: .github/scripts/parse_artifact_insights.py, sha256: ef6e822a93974a31b85cd71aed0138681eb9fa80ceadbbb26162054aa0208fb5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/scripts/parse_artifact_insights.py

## Purpose — required, verbatim
> "Parse AI artifact insight output into structured findings for issue creation." — .github/scripts/parse_artifact_insights.py:2

## Design intent — required
Extracts, validates, filters, and formats actionable findings (such as TODOs, lessons, blockers, improvements, and followups) from raw AI review output generated during workflow artifact scans. It parses pseudo-structured text blocks bounded by `FINDING:` and `---`, validates mandatory fields (`TYPE`, `TITLE`, `BODY`, `PRIORITY`, `LABELS`, `SOURCE`), sanitizes issue titles against shell injection metacharacters, filters entries against a priority threshold (P0-P3), and emits both a JSON payload and count to GitHub Actions step outputs for downstream automated issue creation. Without this script, unstructured findings produced by AI analysis would require error-prone inline shell parsing in YAML workflows or could post unsanitized text into repository trackers.

## Phase — required
none

## Inputs — required
- Environment variable `RAW_OUTPUT`: "AI output containing FINDING blocks" — .github/scripts/parse_artifact_insights.py:5
- Environment variable `PRIORITY_THRESHOLD`: "Minimum priority to include (P0, P1, P2, P3)" — .github/scripts/parse_artifact_insights.py:6
- Environment variable `GITHUB_OUTPUT`: "Path to GitHub Actions output file" — .github/scripts/parse_artifact_insights.py:7
- Environment variable `GITHUB_WORKSPACE`: "Workspace root (for package imports)" — .github/scripts/parse_artifact_insights.py:8
- Priority ordering mapping `PRIORITY_ORDER`: `{"P0": 0, "P1": 1, "P2": 2, "P3": 3}` — .github/scripts/parse_artifact_insights.py:37
- Valid types `VALID_TYPES`: `{"TODO", "LESSON", "BLOCKED", "IMPROVEMENT", "FOLLOWUP"}` — .github/scripts/parse_artifact_insights.py:40
- Allowed repository labels `ALLOWED_LABELS` — .github/scripts/parse_artifact_insights.py:43 — set of permitted repository labels including enhancement, bug, documentation, automation

## Outputs — required
- GitHub Actions output `finding_count`: number of filtered findings — .github/scripts/parse_artifact_insights.py:231
- GitHub Actions output `findings_json`: serialized JSON string of findings — .github/scripts/parse_artifact_insights.py:232
- Terminal summary of parsed findings printed to stdout — .github/scripts/parse_artifact_insights.py:236
- Process exit code: 0 — .github/scripts/parse_artifact_insights.py:240, 244

## Invokes — required
- script scripts.ai_review_common — .github/scripts/parse_artifact_insights.py:31

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-035` — .github/scripts/parse_artifact_insights.py:10 — used here
- `SAFE_NAME_PATTERN` — .github/scripts/parse_artifact_insights.py:32 — used here
- `write_output` — .github/scripts/parse_artifact_insights.py:33 — used here
- `PRIORITY_ORDER` — .github/scripts/parse_artifact_insights.py:37 — defined here
- `VALID_TYPES` — .github/scripts/parse_artifact_insights.py:40 — defined here
- `ALLOWED_LABELS` — .github/scripts/parse_artifact_insights.py:43 — defined here
- `Finding` — .github/scripts/parse_artifact_insights.py:56 — defined here
- `parse_finding_block` — .github/scripts/parse_artifact_insights.py:67 — defined here
- `parse_findings` — .github/scripts/parse_artifact_insights.py:144 — defined here
- `filter_by_priority` — .github/scripts/parse_artifact_insights.py:171 — defined here
- `findings_to_json` — .github/scripts/parse_artifact_insights.py:186 — defined here
- `main` — .github/scripts/parse_artifact_insights.py:210 — defined here

## Structure
- Script docstring and exit codes — .github/scripts/parse_artifact_insights.py:2
- Workspace setup and common imports — .github/scripts/parse_artifact_insights.py:25
- Configuration constants — .github/scripts/parse_artifact_insights.py:36
- Data class Finding — .github/scripts/parse_artifact_insights.py:55
- Finding block parser — .github/scripts/parse_artifact_insights.py:67
- Full output parser — .github/scripts/parse_artifact_insights.py:144
- Priority filter — .github/scripts/parse_artifact_insights.py:171
- JSON serializer — .github/scripts/parse_artifact_insights.py:186
- CLI entry point — .github/scripts/parse_artifact_insights.py:210

## Scripts — required if type is script or the skill ships scripts
- path: `.github/scripts/parse_artifact_insights.py`
- language: Python (python3)
- lines: 245
- documented invocation:
  - none (CLI script reading environment variables; entry point defined in `main` — .github/scripts/parse_artifact_insights.py:210)
- executed: yes
- actual command run: `RAW_OUTPUT='FINDING:\nTYPE: TODO\nTITLE: Fix workflow concurrency\nBODY: Review concurrency settings in workflow YAML\nPRIORITY: P1\nLABELS: automation, area-workflows\nSOURCE: run-123\n---' python3 sources/rjm/.github/scripts/parse_artifact_insights.py`
- abridged stdout:
  ```text
  Parsed 1 findings from AI output
  Filtered to 1 findings at P2 or higher

  Findings summary:
    [P1] TODO: Fix workflow concurrency
  ```
- actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented:
    - "0 - Success" — .github/scripts/parse_artifact_insights.py:11
    - "1 - Invalid parameters / logic error" — .github/scripts/parse_artifact_insights.py:12
    - "2 - Config error" — .github/scripts/parse_artifact_insights.py:13
    - "3 - External error" — .github/scripts/parse_artifact_insights.py:14
  - Actual exit paths:
    - `return 0` — .github/scripts/parse_artifact_insights.py:240 (only return path in `main()`)
    - `sys.exit(main())` — .github/scripts/parse_artifact_insights.py:244
- for validators/gates: not a blocking gate; parsing filter. Cannot exit non-zero; invalid priority falls back to P2 and unparseable blocks are skipped while `main()` returns 0 unconditionally.
- does the output match what the documentation claims: partial (parses finding blocks, filters by priority, and writes findings as claimed, but does not implement the documented non-zero exit codes 1, 2, or 3).

## Defects — required
- `doc-drift`: In `.github/scripts/parse_artifact_insights.py:10-15`, the docstring documents exit codes 0, 1, 2, 3 per ADR-035, but `main()` at line 240 returns 0 unconditionally with no code path for exit codes 1, 2, or 3.
- `orphan`: No in-scope lifecycle file invokes `.github/scripts/parse_artifact_insights.py`; it is invoked only by `.github/workflows/artifact-insight-scanner.yml:95`, which is outside the lifecycle manifest scope.

## Observations
- Title sanitizer at lines 131-132 enforces a strict allowlist (`re.sub(r"[^a-zA-Z0-9\s\-\(\):.,/]", "", title)`) and 200 character cap to prevent prompt injection and shell escape issues when creating issues.
- Labels are validated against a strict `ALLOWED_LABELS` set and regex `SAFE_NAME_PATTERN` imported from `scripts.ai_review_common`.

## Context cost
6,646 bytes (approx. 1,660 tokens).
