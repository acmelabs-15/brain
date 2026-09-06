---
package: rjm
path: scripts/ci/show_drift_failure.py
type: script
bytes: 3520
unit: inv-rjm-207
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/show_drift_failure.py, sha256: 255fc60a0536f95641dada39873010897c780204b6c9423dad3a4953944e46f8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/show_drift_failure.py

## Purpose — required, verbatim
> "Show drift failure details and regenerate files for inspection." — scripts/ci/show_drift_failure.py:2

## Design intent — required
Diagnoses and presents agent drift detection failures in CI by rerunning file generation scripts, displaying which generated files or plugin mirrors diverged from committed code, printing a full git diff, and providing remediation and intentional divergence instructions.

## Phase — required
cross-phase

## Inputs — required
- Environment variable `"VALIDATE_CONCLUSION"` — scripts/ci/show_drift_failure.py:104
- Environment variable `"LIB_MIRROR_CONCLUSION"` — scripts/ci/show_drift_failure.py:105
- Environment variable `"MANIFEST_PARITY_CONCLUSION"` — scripts/ci/show_drift_failure.py:106

## Outputs — required
- Diagnostic overview and git diff written to standard output (`subprocess.run(["git", "diff"], check=False)` — scripts/ci/show_drift_failure.py:100)

## Invokes — required
- script build/generate_agents.py — scripts/ci/show_drift_failure.py:24
- script scripts/sync_plugin_lib.py — scripts/ci/show_drift_failure.py:25
- script build/scripts/build_all.py — scripts/ci/show_drift_failure.py:26

## Invoked by — required
orphan

## Concepts named — required, verbatim
`agent-drift-detection.yml` — scripts/ci/show_drift_failure.py:8 — used here
`ADR-035` — scripts/ci/show_drift_failure.py:10 — used here
`EXIT_OK` — scripts/ci/show_drift_failure.py:21 — defined here
`EXIT_USAGE` — scripts/ci/show_drift_failure.py:22 — defined here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/show_drift_failure.py`, language: Python 3, lines: 114
- documented invocation: `"Show drift failure details and regenerate files for inspection." — scripts/ci/show_drift_failure.py:2`
- **executed:** yes
- actual command run: `VALIDATE_CONCLUSION=success LIB_MIRROR_CONCLUSION=success MANIFEST_PARITY_CONCLUSION=success python3 scripts/ci/show_drift_failure.py`, stdout: `AGENT DRIFT DETECTED`, **actual exit code**: 0
- documented exit codes: `"0  - Completed (drift diagnosis printed; does not fail on drift itself)" — scripts/ci/show_drift_failure.py:11`, `"2  - Usage error" — scripts/ci/show_drift_failure.py:12`; actual exit paths: `scripts/ci/show_drift_failure.py:109` (`return EXIT_OK` [0]), `scripts/ci/show_drift_failure.py:113` (`sys.exit(main())`)
- for validators/gates: diagnostic reporting utility; intentionally exits 0 after printing drift information so that CI diff visualization steps complete without failing the diagnostic step itself
- does the output match what the documentation claims? yes, prints conclusion summary and conditionally triggers regeneration and diff

## Defects — required
none

## Observations
Includes a built-in remediation guide that explains how to edit source templates (`templates/agents/<agent-name>.shared.md` — scripts/ci/show_drift_failure.py:32), regenerate files, and use the `[skip-drift-check]` bypass tag for intentional divergences.

## Context cost
3520 bytes, approximately 880 tokens.
