---
package: addy
path: skills/idea-refine/scripts/idea-refine.sh
type: script
bytes: 342
unit: inv-addy-38
memo_inputs:
  - {path: skills/idea-refine/scripts/idea-refine.sh, sha256: f02a52408a4218047c032d221483abfbb48d11f090bb4915965c7419bf2e0e47}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/idea-refine/scripts/idea-refine.sh

## Purpose — required, verbatim
> "# This script helps initialize the ideas directory for the idea-refine skill." — skills/idea-refine/scripts/idea-refine.sh:4

## Design intent — required
Provides a lightweight initialization utility to bootstrap the target output directory `docs/ideas/` for the `idea-refine` skill prior to writing ideation artifacts. Ensures the directory structure exists on disk idempotently and outputs status metadata as JSON to standard output. Without it, agents or users would need to manually inspect the filesystem and invoke directory creation commands before persisting markdown one-pagers generated in Phase 3.

## Phase — required
addy:Define

## Inputs — required
none

## Outputs — required
- Directory created on disk at path configured by `IDEAS_DIR="docs/ideas"` — skills/idea-refine/scripts/idea-refine.sh:6
- JSON status output to stdout containing `status` — skills/idea-refine/scripts/idea-refine.sh:15
- Stderr message if newly created: `Created directory:` — skills/idea-refine/scripts/idea-refine.sh:10
- Stderr message if pre-existing: `Directory already exists:` — skills/idea-refine/scripts/idea-refine.sh:12

## Invokes — required
none

## Invoked by — required
- skill skills/idea-refine/SKILL.md — skills/idea-refine/SKILL.md:22

## Concepts named — required, verbatim
- `docs/ideas` — skills/idea-refine/scripts/idea-refine.sh:6 — defined here
- `status` — skills/idea-refine/scripts/idea-refine.sh:15 — defined here
- `ready` — skills/idea-refine/scripts/idea-refine.sh:15 — defined here

## Structure
- `#!/bin/bash` (line 1)
- `set -e` (line 2)
- `# This script helps initialize the ideas directory for the idea-refine skill.` (line 4)
- `IDEAS_DIR="docs/ideas"` (line 6)
- `if [ ! -d "$IDEAS_DIR" ]; then ... fi` (lines 8-13)
- `echo "{\"status\": \"ready\", \"directory\": \"$IDEAS_DIR\"}"` (line 15)

## Scripts — required if type is script or the skill ships scripts
- path: `skills/idea-refine/scripts/idea-refine.sh`, language: bash, lines: 16
- documented invocation: `bash skills/idea-refine/scripts/idea-refine.sh` — skills/idea-refine/SKILL.md:22
- executed: yes
- actual command run: `bash sources/addy/skills/idea-refine/scripts/idea-refine.sh`
- abridged stdout: `{"status": "ready", "directory": "docs/ideas"}`
- actual exit code: 0
- documented exit codes: implicit exit 0 upon completion under `set -e` — skills/idea-refine/scripts/idea-refine.sh:2
- actual exit paths in code: implicit exit 0 on line 16; exits non-zero only if `mkdir -p` fails on line 9 under `set -e`
- for validators/gates: not a validation gate; idempotent directory bootstrapper that always exits 0 under standard filesystem permissions
- does the output match what the documentation claims? yes; creates the directory if missing and outputs status JSON

## Defects — required
- other · skills/idea-refine/scripts/idea-refine.sh:6: hardcodes relative directory path IDEAS_DIR="docs/ideas" without anchoring to git repository root or script directory, so executing from subdirectories creates docs/ideas relative to current working directory rather than project root.

## Observations
- Separates diagnostic/informational messages to stderr (`>&2` on lines 10, 12) from machine-readable JSON status on stdout (line 15).

## Context cost
342 bytes (~85 tokens).
