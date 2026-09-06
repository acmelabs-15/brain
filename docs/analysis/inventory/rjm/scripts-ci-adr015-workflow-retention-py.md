---
package: rjm
path: scripts/ci/adr015_workflow_retention.py
type: script
bytes: 6477
unit: inv-rjm-198
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/adr015_workflow_retention.py, sha256: ea1ff3ec4f548f42dcfd873ced6cc7d190001358013923d863745b84b9256325}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/adr015_workflow_retention.py

## Purpose — required, verbatim
> "ADR-015 artifact retention compliance scanner." — scripts/ci/adr015_workflow_retention.py:2

## Design intent — required
Automated compliance checker enforcing ADR-015 ("Artifact Storage Minimization Strategy") across GitHub Actions workflows. ADR-015 restricts artifact retention periods to exactly two allowed durations: 1 day for operational/temporary artifacts transferred between jobs within a run, and 7 days for persistent deliverables (test results, metrics, and summaries). The scanner inspects all YAML workflow files for `retention-days:` declarations, rejecting non-conforming integers and dynamic expressions (such as `${{ inputs.days }}` or `$RETENTION_DAYS`) that cannot be statically validated. Approved exceptions must be explicitly recorded in the code-level `_EXCEPTIONS` dictionary with an issue or ADR amendment justification, making retention policy deviations auditable in code review rather than hidden in workflow comments.

## Phase — required
rjm:test

## Inputs — required
- Directory containing workflow YAML files via `--workflows-dir` (default: `.github/workflows`) — scripts/ci/adr015_workflow_retention.py:148,151
- Target workflow files discovered via `*.yml` and `*.yaml` globs — scripts/ci/adr015_workflow_retention.py:63,108

## Outputs — required
- Human-readable compliance summary or list of non-conforming workflow declarations printed to stdout — scripts/ci/adr015_workflow_retention.py:173,177
- Exit code reflecting compliance state: 0 when conforming, 1 on retention violations, 2 on configuration error — scripts/ci/adr015_workflow_retention.py:18-20

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-015` — scripts/ci/adr015_workflow_retention.py:2 — used here
- `ALLOWED_DAYS` — scripts/ci/adr015_workflow_retention.py:47 — defined here
- `RetentionEntry` — scripts/ci/adr015_workflow_retention.py:70 — defined here
- `is_conforming` — scripts/ci/adr015_workflow_retention.py:114 — defined here
- `violations` — scripts/ci/adr015_workflow_retention.py:129 — defined here

## Structure
(no section headings in script; top-level constants `EXIT_OK`, `EXIT_LOGIC`, `EXIT_CONFIG`, `ALLOWED_DAYS`, `_EXCEPTIONS`, `_RETENTION_RE`, `_WORKFLOW_GLOBS`, dataclass `RetentionEntry`, scanning functions `scan_text`, `scan_directory`, `is_conforming`, `violations`, formatter `_format_entry`, and CLI entry point `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/adr015_workflow_retention.py`, language: Python, lines: 183
- documented invocation: `python3 scripts/ci/adr015_workflow_retention.py --workflows-dir` (inferred from `--workflows-dir` CLI argument definition) — scripts/ci/adr015_workflow_retention.py:148
- executed: yes
- actual command run: `python3 sources/rjm/scripts/ci/adr015_workflow_retention.py --workflows-dir sources/rjm/.github/workflows`
- abridged stdout: `ADR-015: all 12 retention-days values conform.`
- actual exit code: 0
- documented exit codes:
  - "0 - all ``retention-days`` values conform (no violations)" — scripts/ci/adr015_workflow_retention.py:18
  - "1 - at least one non-conforming value found" — scripts/ci/adr015_workflow_retention.py:19
  - "2 - configuration error (workflows directory missing or unreadable)" — scripts/ci/adr015_workflow_retention.py:20
  vs. actual exit paths:
  - line 160: `return EXIT_CONFIG` (exit code 2)
  - line 169: `return EXIT_CONFIG` (exit code 2)
  - line 176: `return EXIT_LOGIC` (exit code 1)
  - line 178: `return EXIT_OK` (exit code 0)
  - line 182: `raise SystemExit(main())`
- for validators/gates: can it exit non-zero? Yes, exits 1 on policy deviations and 2 on unreadable directories. Does it fail on the source repo's own default branch? No, passes cleanly with exit code 0.
- does the output match what the documentation claims: yes

## Defects — required
- orphan — scripts/ci/adr015_workflow_retention.py:1 — not invoked by any in-scope file (tested by out-of-scope tests/ci/test_adr015_workflow_retention.py:33)

## Observations
Matches `retention-days:` using regular expression rather than full YAML parsing because the directive occurs exclusively as an argument to `actions/upload-artifact`. Uses regex capture of non-whitespace tokens to ensure GitHub Actions expression strings are caught and flagged rather than ignored.

## Context cost
6477 bytes (~1600 tokens).
