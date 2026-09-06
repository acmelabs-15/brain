---
package: rjm
path: scripts/sync/detect_spec_drift.py
type: script
bytes: 15534
unit: inv-rjm-262
in_scope_via: src/copilot-cli/skills/sync/SKILL.md
aliases: []
memo_inputs:
  - {path: scripts/sync/detect_spec_drift.py, sha256: 4dc1517b2ead41c00958be4f3f4986ed5e2fa73971a79bac8c20a143afd635f6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/sync/detect_spec_drift.py

## Purpose — required, verbatim
> "Detect Spec<->Code drift for the /sync command (issue #1997)." — scripts/sync/detect_spec_drift.py:2

## Design intent — required
Scans specification tier markdown documents (`requirements`, `design`, `tasks`) for backticked references to code paths and repository artifacts, checks whether each referenced path exists in the working tree, and outputs an ADR-056 formatted JSON envelope or human-readable report with a terminal verdict (`VERDICT: PASS|DRIFT|ERROR`) to detect specification drift early.

## Phase — required
cross-phase

## Inputs — required
- Specification markdown documents under target directories (default: `.agents/specs/requirements`, `.agents/specs/design`, `.agents/specs/tasks`): `scripts/sync/detect_spec_drift.py:65-69`
- CLI arguments `--repo-root`, `--target`, `--output-format` (`json` or `human`): `scripts/sync/detect_spec_drift.py:394-412`

## Outputs — required
- JSON envelope adhering to ADR-056 or formatted human summary to stdout: `scripts/sync/detect_spec_drift.py:343-360`, `scripts/sync/detect_spec_drift.py:363-373`, `scripts/sync/detect_spec_drift.py:378-386`
- Error descriptions to stderr or error envelopes on configuration failure: `scripts/sync/detect_spec_drift.py:423-427`, `scripts/sync/detect_spec_drift.py:434`, `scripts/sync/detect_spec_drift.py:437-442`

## Invokes — required
none

## Invoked by — required
- skill sync — src/copilot-cli/skills/sync/SKILL.md:5
- script detect_spec_drift — scripts/sync/__init__.py:3

## Concepts named — required, verbatim
- `/sync` — scripts/sync/detect_spec_drift.py:2 — used here
- `issue #1997` — scripts/sync/detect_spec_drift.py:2 — used here
- `/spec` — scripts/sync/detect_spec_drift.py:4 — used here
- `/plan` — scripts/sync/detect_spec_drift.py:4 — used here
- `/build` — scripts/sync/detect_spec_drift.py:4 — used here
- `/review` — scripts/sync/detect_spec_drift.py:6 — used here
- `specification tier` — scripts/sync/detect_spec_drift.py:7 — used here
- `REQ` — scripts/sync/detect_spec_drift.py:7 — used here
- `DESIGN` — scripts/sync/detect_spec_drift.py:7 — used here
- `TASK` — scripts/sync/detect_spec_drift.py:7 — used here
- `spec-generator` — scripts/sync/detect_spec_drift.py:12 — used here
- `ADR-056` — scripts/sync/detect_spec_drift.py:15 — used here
- `orphan-ref-validator` — scripts/sync/detect_spec_drift.py:31 — used here
- `ADR-035` — scripts/sync/detect_spec_drift.py:37 — used here
- `DEFAULT_SPEC_TARGETS` — scripts/sync/detect_spec_drift.py:65 — defined here
- `REFERENCE_RE` — scripts/sync/detect_spec_drift.py:89 — defined here
- `sync-drift-ignore` — scripts/sync/detect_spec_drift.py:101 — defined here
- `DriftFinding` — scripts/sync/detect_spec_drift.py:112 — defined here
- `DriftResult` — scripts/sync/detect_spec_drift.py:130 — defined here
- `detect_drift` — scripts/sync/detect_spec_drift.py:315 — defined here
- `main` — scripts/sync/detect_spec_drift.py:415 — defined here

## Structure
(no headings, flat python script)

## Scripts — required if type is script or the skill ships scripts
For `scripts/sync/detect_spec_drift.py`:
- path, language, lines: `scripts/sync/detect_spec_drift.py`, Python, 450 lines
- documented invocation:
  "python3 scripts/sync/detect_spec_drift.py --output-format human" — src/copilot-cli/skills/sync/SKILL.md:34
- **executed:** yes
- actual command run: `python3 scripts/sync/detect_spec_drift.py --output-format human`
- actual stdout (abridged):
```
detect_spec_drift 1.0.0
  scanned 65 spec file(s), checked 430 reference(s)
  DRIFT .agents/specs/tasks/TASK-007-skill-catalog-prune-m1.md:76 -> `src/copilot-cli/skills/doc-coverage/` absent on disk
...
VERDICT: DRIFT
```
- **actual exit code:** 1
- documented exit codes:
  "0 - PASS (no drift detected)" — scripts/sync/detect_spec_drift.py:38
  "1 - DRIFT (one or more stale spec references)" — scripts/sync/detect_spec_drift.py:39
  "2 - Configuration error (bad CLI args, repo root not found)" — scripts/sync/detect_spec_drift.py:40
  vs. actual exit paths:
  `return 2` at `scripts/sync/detect_spec_drift.py:428` (no .agents directory found)
  `return 2` at `scripts/sync/detect_spec_drift.py:435` (DriftScanError caught)
  `return 2` at `scripts/sync/detect_spec_drift.py:443` (targets matched 0 spec files)
  `return 1 if result.verdict == "DRIFT" else 0` at `scripts/sync/detect_spec_drift.py:445`
  `sys.exit(main())` at `scripts/sync/detect_spec_drift.py:449`
- for validators/gates: yes, can exit non-zero (exits 1 on drift findings, 2 on config errors). Exits 1 on the source repo's default branch due to references to retired skill directories in historical task and design specs.
- does the output match what the documentation claims? yes, scans spec files and emits structured findings with exact ADR-056 envelopes or human output.

## Defects — required
none

## Observations
Provides line-level ignore support using `<!-- sync-drift-ignore -->` comments to permit intentional references to absent or future paths (`scripts/sync/detect_spec_drift.py:101-102`).

## Context cost
15534 bytes, ~3880 tokens.
