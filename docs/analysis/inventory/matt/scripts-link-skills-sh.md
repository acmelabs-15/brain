---
package: matt
path: scripts/link-skills.sh
type: script
bytes: 1815
unit: inv-matt-37
deprecated: false
aliases: []
memo_inputs:
  - {path: scripts/link-skills.sh, sha256: f1ffdc620769e7703d4d6365b05b981e01175bfabd92e0f8e17b05301805cabe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# scripts/link-skills.sh

## Purpose — required, verbatim
> "Links all skills in the repository into the local skill directories used by" — scripts/link-skills.sh:8

## Design intent — required
Provides an internal developer utility for repository maintainers to symlink all active skills into local agent harness directories (`$HOME/.claude/skills` for Claude Code and `$HOME/.agents/skills` for Codex/Agent Skills harnesses). This enables live testing and instantaneous synchronization with `git pull` across harnesses, while explicitly excluding deprecated skills and preventing accidental recursive repository pollution.

## Phase — required
cross-phase

## Inputs — required
- Repository `skills/` directory tree (discovering all `SKILL.md` paths excluding `node_modules` and `deprecated`)
- Host filesystem home directories (`$HOME/.claude/skills` and `$HOME/.agents/skills`)

## Outputs — required
- Symbolic directory links created at `$HOME/.claude/skills/<skill-name>` and `$HOME/.agents/skills/<skill-name>`
- Status messages logged to stdout: `linked <name> -> <src> (<DEST>)`

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `dev-only script` — scripts/link-skills.sh:4 — defined here
- `Claude Code` — scripts/link-skills.sh:10 — used here
- `Codex` — scripts/link-skills.sh:11 — used here
- `Agent Skills-compatible harnesses` — scripts/link-skills.sh:11 — defined here
- `symlink` — scripts/link-skills.sh:12 — used here

## Structure
- `#!/usr/bin/env bash` — scripts/link-skills.sh:1
- `# NOTE: This is a dev-only script, intended for use by maintainers of this repo.` — scripts/link-skills.sh:4
- `REPO="$(cd "$(dirname "$0")/.." && pwd)"` — scripts/link-skills.sh:15
- `for DEST in "${DESTS[@]}"; do` — scripts/link-skills.sh:27

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/link-skills.sh`
- language: Bash
- lines: 57
- documented invocation: `dev-only script` — scripts/link-skills.sh:4
- **executed:** no (modifies host home directory)
- actual command run: not executed against host
- abridged stdout: none
- **actual exit code**: none (not run against host)
- documented exit codes: none documented in prose
- actual exit paths: `exit 1` — scripts/link-skills.sh:37 (if `$DEST` symlinks into `$REPO`); implicit exit 0 on loop completion
- for validators/gates: not a validator or gate; exits 1 on symlink collision into repository root
- does the output match what the documentation claims? yes, implementation matches maintainer script comments

## Defects — required
none

## Observations
- Explicitly excludes `skills/deprecated/*` from installation via find expression (`-not -path '*/deprecated/*'`), enforcing that deprecated skills are never linked into active harnesses.
- Includes defensive check verifying `$DEST` is not a symlink into `$REPO` to prevent recursive loop contamination.

## Context cost
1815 bytes (~454 tokens). Developer maintenance script; not loaded into agent execution contexts.
