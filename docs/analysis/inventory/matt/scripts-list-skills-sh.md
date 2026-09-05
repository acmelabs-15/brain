---
package: matt
path: scripts/list-skills.sh
type: script
bytes: 168
unit: inv-matt-37
deprecated: false
aliases: []
memo_inputs:
  - {path: scripts/list-skills.sh, sha256: 9968c1b679e2a08a8e3204f6e72afeea3b51df50299faec12a4c8eed6bcf2f6a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/list-skills.sh

## Purpose — required, verbatim
> "find . -name SKILL.md -not -path '*/node_modules/*' | sed 's|^\./||' | sort" — scripts/list-skills.sh:7
(first substantive line; no explicit purpose statement)

## Design intent — required
Provides a rapid shell one-liner to discover and list all active skills across the repository. Locates every `SKILL.md` file while omitting external dependencies under `node_modules/`, normalizes the paths by stripping leading `./`, and sorts them alphabetically. Useful for automated checks and manual inspection of skill coverage.

## Phase — required
cross-phase

## Inputs — required
Repository directory structure traversed via `find`.

## Outputs — required
Sorted list of relative skill markdown paths printed to stdout.

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `SKILL.md` — scripts/list-skills.sh:7 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/list-skills.sh`, language: `bash`, lines: 8
- documented invocation: none
- **executed:** yes
- actual command run: `bash /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/scripts/list-skills.sh`
- abridged stdout: `skills/engineering/ask-matt/SKILL.md ... skills/productivity/writing-for-agents/SKILL.md (37 lines)`
- **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: implicit exit 0 upon completion (or non-zero under set -euo pipefail if pipeline fails)
- for validators/gates: not a validator/gate. Does not fail on default branch.
- does the output match what the documentation claims? yes, outputs sorted list of all active repository skills.

## Defects — required
- orphan — scripts/list-skills.sh:1: Script is not referenced by any documentation, package.json scripts, or workflow files in the repository.

## Observations
Unlike `scripts/link-skills.sh`, it does not filter out `deprecated/` skills (`-not -path '*/deprecated/*'`), so any deprecated skills present would be printed. Employs standard `set -euo pipefail`.

## Context cost
168 bytes, 8 lines, approximately 40 tokens.
