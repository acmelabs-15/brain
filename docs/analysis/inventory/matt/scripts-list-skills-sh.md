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
verified: 2026-09-04 quote-check+coverage
---

# scripts/list-skills.sh

## Purpose — required, verbatim
> "find . -name SKILL.md -not -path '*/node_modules/*' | sed 's|^\./||' | sort" — scripts/list-skills.sh:7 (no explicit purpose statement)

## Design intent — required
Provides a minimal shell utility that discovers, normalizes relative paths for, and alphabetically sorts all `SKILL.md` files across the repository, excluding any installed files under `node_modules`.

## Phase — required
cross-phase

## Inputs — required
- Repository filesystem under `$REPO`

## Outputs — required
- Sorted newline-delimited list of all relative `SKILL.md` paths printed to stdout

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `SKILL.md` — scripts/list-skills.sh:7 — used here

## Structure
- `#!/usr/bin/env bash` — scripts/list-skills.sh:1
- `set -euo pipefail` — scripts/list-skills.sh:2
- `REPO="$(cd "$(dirname "$0")/.." && pwd)"` — scripts/list-skills.sh:4
- `find . -name SKILL.md -not -path '*/node_modules/*' | sed 's|^\./||' | sort` — scripts/list-skills.sh:7

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/list-skills.sh`
- language: Bash
- lines: 8
- documented invocation: `scripts/list-skills.sh` (invoked directly)
- **executed:** yes
- actual command run: `bash sources/matt/scripts/list-skills.sh`
- abridged stdout:
```
skills/engineering/ask-matt/SKILL.md
skills/engineering/code-review/SKILL.md
skills/engineering/codebase-design/SKILL.md
...
skills/productivity/writing-for-agents/SKILL.md
```
- **actual exit code**: 0
- documented exit codes: none documented in prose
- actual exit paths: `set -euo pipefail` — scripts/list-skills.sh:2 (exits non-zero on command pipeline failure; exits 0 on success)
- for validators/gates: not a validator or gate; does not exit non-zero under standard execution
- does the output match what the documentation claims? yes, lists all 37 repository skills sorted alphabetically

## Defects — required
none

## Observations
- Enumerates skills across all buckets (`engineering`, `productivity`, `in-progress`, `misc`) without bucket filtering.
- Minimal one-line shell pipeline using standard POSIX utilities.

## Context cost
168 bytes (~42 tokens). Repository developer utility script; not loaded into agent execution contexts.
