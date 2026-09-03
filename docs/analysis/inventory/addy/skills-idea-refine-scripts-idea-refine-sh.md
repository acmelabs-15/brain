---
package: addy
path: skills/idea-refine/scripts/idea-refine.sh
type: script
bytes: 342
unit: inv-addy-12
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
- Directory: `docs/ideas` — skills/idea-refine/scripts/idea-refine.sh:6,9
- Stdout JSON metadata: `{"status": "ready", "directory": "docs/ideas"}` — skills/idea-refine/scripts/idea-refine.sh:15
- Stderr informational messages: `Created directory: docs/ideas` (if newly created) or `Directory already exists: docs/ideas` (if pre-existing) — skills/idea-refine/scripts/idea-refine.sh:10,12

## Invokes — required
none

## Invoked by — required
- skill `skills/idea-refine/SKILL.md` — skills/idea-refine/SKILL.md:22

## Concepts named — required, verbatim
- `status: ready` — skills/idea-refine/scripts/idea-refine.sh:15 — defined here
- `docs/ideas` — skills/idea-refine/scripts/idea-refine.sh:6 — defined here

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
- actual command run: `cd sources/addy && bash skills/idea-refine/scripts/idea-refine.sh`
- abridged stdout: `{"status": "ready", "directory": "docs/ideas"}`
- actual exit code: 0
- documented exit codes: `exit 0` (implicit upon successful completion under `set -e`) — skills/idea-refine/scripts/idea-refine.sh:2,15
- actual exit paths in code: implicit 0 exit on line 16; will only exit non-zero if `mkdir -p` fails under `set -e` on line 9
- for validators/gates: not a failing gate; functions as an idempotent bootstrap script and always exits 0 under normal filesystem operations
- does the output match what the documentation claims? yes; creates the directory if missing and outputs status JSON

## Defects — required
- `unfailable-gate` — skills/idea-refine/scripts/idea-refine.sh:8-16 — purely an idempotent directory bootstrapper with no validation or gating logic, always exiting 0 under normal filesystem permissions.

## Observations
- Emits human-readable status logs (`Created directory:` / `Directory already exists:`) to stderr (`>&2`) so stdout remains clean JSON for programmatic parsing (`skills/idea-refine/scripts/idea-refine.sh:10,12,15`).

## Context cost
342 bytes (~85 tokens).
