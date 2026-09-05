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
verified: 2026-09-04 quote-check+coverage
---

# skills/idea-refine/scripts/idea-refine.sh

## Purpose — required, verbatim
> "This script helps initialize the ideas directory for the idea-refine skill." — skills/idea-refine/scripts/idea-refine.sh:4

## Design intent — required
Initializes the target directory `docs/ideas` for storing one-pagers produced by the `idea-refine` skill, emitting diagnostic logging to stderr and returning a machine-readable JSON confirmation payload to stdout indicating directory readiness.

## Phase — required
addy:Define

## Inputs — required
- Directory path string `IDEAS_DIR="docs/ideas"` (skills/idea-refine/scripts/idea-refine.sh:6)
- Filesystem state at path `docs/ideas`

## Outputs — required
- Directory `docs/ideas` created on disk if not already existing
- Stderr status message (`Created directory: docs/ideas` or `Directory already exists: docs/ideas`)
- Stdout JSON payload: `{"status": "ready", "directory": "docs/ideas"}`

## Invokes — required
none

## Invoked by — required
- skill skills/idea-refine/SKILL.md — skills/idea-refine/SKILL.md:22

## Concepts named — required, verbatim
- `IDEAS_DIR` — skills/idea-refine/scripts/idea-refine.sh:6 — defined here
- `docs/ideas` — skills/idea-refine/scripts/idea-refine.sh:6 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `skills/idea-refine/scripts/idea-refine.sh`, Bash, 16 lines
- documented invocation: `bash skills/idea-refine/scripts/idea-refine.sh` — skills/idea-refine/SKILL.md:22
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**: `bash skills/idea-refine/scripts/idea-refine.sh`, stdout `{"status": "ready", "directory": "docs/ideas"}`, actual exit code: 0
- documented exit codes vs. actual exit paths in code: none documented; code contains no explicit `exit` statements, using `set -e` (skills/idea-refine/scripts/idea-refine.sh:2) and implicit exit 0 on normal completion.
- for validators/gates: not a validator or gate (filesystem setup utility). Can only exit non-zero if `mkdir -p` or `echo` fails under `set -e`.
- does the output match what the documentation claims? Yes, creates or verifies `docs/ideas` and outputs JSON status.

## Defects — required
none

## Observations
Separates machine-readable JSON status on stdout from diagnostic status messages directed to stderr (`>&2`).

## Context cost
342 bytes (~85 tokens). Lightweight utility script.
