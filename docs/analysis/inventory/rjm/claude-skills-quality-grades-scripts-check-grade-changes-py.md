---
package: rjm
path: .claude/skills/quality-grades/scripts/check_grade_changes.py
type: script
bytes: 5257
unit: inv-rjm-145
in_scope_via: .claude/skills/quality-grades/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/quality-grades/scripts/check_grade_changes.py, sha256: 8c2d151761ecfea270060dc7f4e9315bbb47eaf90270d208cbca64e87ac19280}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/quality-grades/scripts/check_grade_changes.py

## Purpose — required, verbatim
> "Check quality grades for degradation and notify via GitHub issue." — .claude/skills/quality-grades/scripts/check_grade_changes.py:2

## Design intent — required
Serves as an automated quality gate and alert mechanism for CI workflows by parsing JSON reports produced by `grade_domains.py`, detecting domains that are degrading or score below a configurable threshold, and opening a GitHub issue via the `gh` CLI. Without this script, quality regressions identified by domain audits would require manual report inspection and would not automatically block CI or notify maintainers.

## Phase — required
rjm:test

## Inputs — required
- CLI options:
  - `--grades-file` — .claude/skills/quality-grades/scripts/check_grade_changes.py:25
  - `--threshold` — .claude/skills/quality-grades/scripts/check_grade_changes.py:31
- JSON grades file content containing `domains` list:
  - `"domains"` — .claude/skills/quality-grades/scripts/check_grade_changes.py:47

## Outputs — required
- GitHub issue created via `gh issue create`:
  - `create_notification_issue` — .claude/skills/quality-grades/scripts/check_grade_changes.py:74
  - `--title` — .claude/skills/quality-grades/scripts/check_grade_changes.py:109
  - `--body` — .claude/skills/quality-grades/scripts/check_grade_changes.py:111
  - `--label` — .claude/skills/quality-grades/scripts/check_grade_changes.py:113
  - `"quality"` — .claude/skills/quality-grades/scripts/check_grade_changes.py:114
- Exit codes:
  - `0` ("No degradation detected" — .claude/skills/quality-grades/scripts/check_grade_changes.py:8)
  - `1` ("Script error or degradation detected" — .claude/skills/quality-grades/scripts/check_grade_changes.py:9)

## Invokes — required
none

## Invoked by — required
- skill quality-grades — .claude/skills/quality-grades/SKILL.md:137

## Concepts named — required, verbatim
- `Check quality grades for degradation` — .claude/skills/quality-grades/scripts/check_grade_changes.py:2 — defined here
- `Quality Grade Alert` — .claude/skills/quality-grades/scripts/check_grade_changes.py:79 — defined here
- `quality-grades` — .claude/skills/quality-grades/scripts/check_grade_changes.py:97 — used here
- `threshold` — .claude/skills/quality-grades/scripts/check_grade_changes.py:31 — defined here

## Structure
- #!/usr/bin/env python3 — .claude/skills/quality-grades/scripts/check_grade_changes.py:1
- def parse_args — .claude/skills/quality-grades/scripts/check_grade_changes.py:21
- def load_grades — .claude/skills/quality-grades/scripts/check_grade_changes.py:39
- def find_degraded_domains — .claude/skills/quality-grades/scripts/check_grade_changes.py:44
- def create_notification_issue — .claude/skills/quality-grades/scripts/check_grade_changes.py:74
- def main — .claude/skills/quality-grades/scripts/check_grade_changes.py:130
- if __name__ == "__main__": — .claude/skills/quality-grades/scripts/check_grade_changes.py:169

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/quality-grades/scripts/check_grade_changes.py`, language: Python, lines: 171
- documented invocation: `scripts/check_grade_changes.py` — .claude/skills/quality-grades/SKILL.md:137
- **executed:** yes
- actual command run: `python3 .claude/skills/quality-grades/scripts/check_grade_changes.py --grades-file /tmp/test-grades.json --threshold 60`, abridged stdout: `All domains within acceptable quality thresholds.`, **actual exit code:** 0
- actual command run: `python3 .claude/skills/quality-grades/scripts/check_grade_changes.py --grades-file /tmp/test-grades.json --threshold 70`, abridged stdout: `Found 1 domain(s) below threshold or degrading:\n quality-grades: C (68/100) [new]\nError: 'gh issue create' failed with exit code 1`, **actual exit code:** 1
- documented exit codes:
  - `0` ("No degradation detected" — .claude/skills/quality-grades/scripts/check_grade_changes.py:8) vs actual exit: line 155
  - `1` ("Script error or degradation detected" — .claude/skills/quality-grades/scripts/check_grade_changes.py:9) vs actual exit: lines 136, 142, 150, 164, 166
- for validators/gates: can exit non-zero (exits 1 when missing args/files, on JSON decode error, when degradation is found, or when `gh issue create` fails). On source repo, when run against generated grades above threshold (60) it exits 0; when threshold is raised above score (70) it detects degradation and exits 1.
- does output match documentation: Yes, exit codes match docstring (0 on no degradation, 1 on error or degradation detected).

## Defects — required
- `doc-drift` · .claude/skills/quality-grades/scripts/check_grade_changes.py:115 · Attempts to attach `--label quality` when creating GitHub issue, but repositories without a pre-existing `quality` label will fail with `could not add label: 'quality' not found`.
- `doc-drift` · .claude/skills/quality-grades/scripts/check_grade_changes.py:28 · Docstring cites `--grades-file` help as "Path to JSON grades file from grade_domains.py", but `grade_domains.py` defaults to markdown output unless `--format json` is explicitly provided.

## Observations
- Returns exit code 1 on both script failure and degradation detection (lines 164, 166), functioning as a CI pipeline break if quality falls below acceptable limits.
- The generated GitHub issue table details domain, grade, score, trend, and critical gap count to expedite remediation.

## Context cost
File size: 5,257 bytes (~1,314 tokens). Pure script with no sub-dependencies. Total context cost: 5,257 bytes (~1,314 tokens).
