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
verified: 2026-09-05 quote-check+coverage
---

# scripts/link-skills.sh

## Purpose — required, verbatim
> "Links all skills in the repository into the local skill directories used by" — scripts/link-skills.sh:8

## Design intent — required
Developer-only utility for repository maintainers that symlinks all repository skills into the local harness directories `~/.claude/skills` and `~/.agents/skills`. Excludes `node_modules` and `deprecated` skills. Enables immediate propagation of skill edits and git pulls to local Claude Code and Codex environments without requiring package reinstallation. Safeguards against circular linking if destination directories resolve back into the repository tree.

## Phase — required
cross-phase

## Inputs — required
Filesystem structure under `skills/` (finding `SKILL.md` files) and user environment variable `$HOME`.

## Outputs — required
Symlinks created in `$HOME/.claude/skills/` and `$HOME/.agents/skills/` pointing to skill directories in the repository.

## Invokes — required
none

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:23

## Concepts named — required, verbatim
- `dev-only script` — scripts/link-skills.sh:4 — defined here
- `supported installer` — scripts/link-skills.sh:5 — used here
- `Claude Code` — scripts/link-skills.sh:10 — used here
- `Codex` — scripts/link-skills.sh:11 — used here
- `SKILL.md` — scripts/link-skills.sh:25 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/link-skills.sh`, language: `bash`, lines: 57
- documented invocation: "run `scripts/link-skills.sh`" — CLAUDE.md:23
- **executed:** yes
- actual command run: `TMP_HOME=$(mktemp -d); HOME="$TMP_HOME" bash /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/scripts/link-skills.sh`
- abridged stdout: `linked ask-matt -> .../.claude/skills ... linked grilling -> .../.agents/skills (74 lines)`
- **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: `exit 1` — scripts/link-skills.sh:37 (when `$DEST` symlinks into repo), implicit exit 0 upon script completion
- for validators/gates: not a validator/gate. Exits non-zero (exit 1) if destination resolves to the repository directory. Does not fail on clean runs.
- does the output match what the documentation claims? yes, successfully populates destination harness directories with symlinks to active skills.

## Defects — required
none

## Observations
Explicitly marked as maintainer-only with a strict policy: "It is not a supported installer. Modifications to it, or requests for modifications, will not be approved." Employs `set -euo pipefail` and safely removes non-symlink collision targets before creating fresh symlinks.

## Context cost
1815 bytes, 57 lines, approximately 400 tokens.
