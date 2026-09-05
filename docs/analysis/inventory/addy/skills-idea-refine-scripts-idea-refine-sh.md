---
package: addy
path: skills/idea-refine/scripts/idea-refine.sh
type: script
bytes: 342
unit: inv-addy-43
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/idea-refine/scripts/idea-refine.sh, sha256: f02a52408a4218047c032d221483abfbb48d11f090bb4915965c7419bf2e0e47}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/idea-refine/scripts/idea-refine.sh

## Purpose — required, verbatim
> "This script helps initialize the ideas directory for the idea-refine skill." — skills/idea-refine/scripts/idea-refine.sh:4

## Design intent — required
Automates directory preparation for the `idea-refine` skill by creating the target folder `docs/ideas` if it does not already exist, emitting status messages to stderr and returning a structured JSON readiness payload to stdout.

## Phase — required
addy:Define

## Inputs — required
- Working directory containing or targeting `docs/ideas` (skills/idea-refine/scripts/idea-refine.sh:6)

## Outputs — required
- Directory created at `docs/ideas` if not already present (skills/idea-refine/scripts/idea-refine.sh:9)
- Human-readable status messages on stderr ("Created directory:" — skills/idea-refine/scripts/idea-refine.sh:10, "Directory already exists:" — skills/idea-refine/scripts/idea-refine.sh:12)
- Structured JSON readiness payload on stdout: `{"status": "ready", "directory": "docs/ideas"}` (skills/idea-refine/scripts/idea-refine.sh:15)

## Invokes — required
none

## Invoked by — required
- skill idea-refine — skills/idea-refine/SKILL.md:22

## Concepts named — required, verbatim
`docs/ideas` — skills/idea-refine/scripts/idea-refine.sh:6 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `skills/idea-refine/scripts/idea-refine.sh`, bash, 16 lines
- documented invocation: "bash skills/idea-refine/scripts/idea-refine.sh" — skills/idea-refine/SKILL.md:22
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `bash skills/idea-refine/scripts/idea-refine.sh` (run in `sources/addy`)
  Stdout: `{"status": "ready", "directory": "docs/ideas"}`
  Stderr: `Directory already exists: docs/ideas`
  Exit code: 0
- documented exit codes vs. actual exit paths in code:
  Documented exit codes: none documented in `SKILL.md` or script comments.
  Actual exit paths: exits 0 on normal completion after line 15; exits non-zero if `mkdir -p` fails under `set -e` (skills/idea-refine/scripts/idea-refine.sh:2).
- for validators/gates: not a validator or gate (directory initialization utility).
- does the output match what the documentation claims? Matches behavior described in `skills/idea-refine/SKILL.md:21` ("Initialize the ideas directory").

## Defects — required
none

## Observations
Simple idempotent directory initialization script that separates structured machine output on stdout from status logging on stderr.

## Context cost
342 bytes, approximately 90 tokens.
