---
package: rjm
path: scripts/ci/smoke_install_tarball.py
type: script
bytes: 2269
unit: inv-rjm-207
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/smoke_install_tarball.py, sha256: 116b5d5c214276190f878c9872f588b52aa778a48ba907af360924ac54782e9f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/smoke_install_tarball.py

## Purpose — required, verbatim
> "Install CLI tarball into a temp directory and run ai-agents init." — scripts/ci/smoke_install_tarball.py:2

## Design intent — required
Automates end-to-end smoke installation testing by unpacking and installing the packaged npm tarball in an isolated temporary working directory, running `ai-agents init demo --yes`, and exporting the initialized demo directory path to `GITHUB_OUTPUT` for downstream validation steps.

## Phase — required
cross-phase

## Inputs — required
- Environment variable `"TARBALL"` — scripts/ci/smoke_install_tarball.py:41: path to packed tarball
- Environment variable `"GITHUB_OUTPUT"` — scripts/ci/smoke_install_tarball.py:31: step output file path

## Outputs — required
- Initialized demo project directory created at demo path (`demo_dir = Path(work_dir) / "demo"` — scripts/ci/smoke_install_tarball.py:68)
- Output variable demo written to GITHUB_OUTPUT (`write_github_output("demo", str(demo_dir))` — scripts/ci/smoke_install_tarball.py:78)

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
`cli-smoke.yml` — scripts/ci/smoke_install_tarball.py:5 — used here
`ADR-006` — scripts/ci/smoke_install_tarball.py:5 — used here
`GITHUB_OUTPUT` — scripts/ci/smoke_install_tarball.py:9 — used here
`ADR-035` — scripts/ci/smoke_install_tarball.py:14 — used here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/smoke_install_tarball.py`, language: Python 3, lines: 90
- documented invocation: `"Install CLI tarball into a temp directory and run ai-agents init." — scripts/ci/smoke_install_tarball.py:2`
- **executed:** yes
- actual command run: `python3 scripts/ci/smoke_install_tarball.py`, stderr: `::error::TARBALL env var is required`, **actual exit code**: 1
- documented exit codes: `"0 - install and init succeeded" — scripts/ci/smoke_install_tarball.py:15`, `"N - subprocess returned N" — scripts/ci/smoke_install_tarball.py:16`; actual exit paths: `scripts/ci/smoke_install_tarball.py:44` (`return 1` if TARBALL unset), `scripts/ci/smoke_install_tarball.py:53` (`return 1` if executable not in PATH), `scripts/ci/smoke_install_tarball.py:61` (`return rc` if npm init fails), `scripts/ci/smoke_install_tarball.py:66` (`return rc` if npm install fails), `scripts/ci/smoke_install_tarball.py:76` (`return rc` if ai-agents init fails), `scripts/ci/smoke_install_tarball.py:80` (`return 0`), `scripts/ci/smoke_install_tarball.py:85` (`return run()`), `scripts/ci/smoke_install_tarball.py:89` (`sys.exit(main())`)
- for validators/gates: installer test execution; stops and forwards non-zero return code at any stage of npm init, install, or package init
- does the output match what the documentation claims? yes, installs tarball into isolated temp dir and runs init

## Defects — required
none

## Observations
Wraps subprocess execution with `shutil.which` PATH verification to ensure helpful error diagnostics if npm or node utilities are absent from the runner environment.

## Context cost
2269 bytes, approximately 567 tokens.
