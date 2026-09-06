---
package: rjm
path: scripts/ci/commit_and_push.py
type: script
bytes: 3903
unit: inv-rjm-201
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/commit_and_push.py, sha256: 8a5521fc19a8b4d0e1e8bc522053eb632b16a30d35176a096464c4f1076cb8be}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/commit_and_push.py

## Purpose — required, verbatim
> "Commit and push a fixed set of paths when the working tree is dirty." — scripts/ci/commit_and_push.py:2

## Design intent — required
Provides an isolated, testable utility for bot-authored maintenance workflows to commit and push changes. Extracted under ADR-006 (no logic in YAML) to replace inline shell blocks. Restricts git status checks (`git status --porcelain`) and staging strictly to specified target paths, ensuring that incidental modifications in unrelated files never trigger unintended commits or empty commits. Configures committer identities (`user.name` and `user.email`) locally while leaving authentication to prior steps, and standardizes return codes according to ADR-035.

## Phase — required
rjm:Ship

## Inputs — required
- CLI options: `--path` (repeatable path to stage/watch), `--message` (repeatable commit message paragraph), `--user-name` (git user.name), `--user-email` (git user.email) (`scripts/ci/commit_and_push.py:67-80`)
- Working tree status for requested paths via `git status --porcelain` (`scripts/ci/commit_and_push.py:57`)

## Outputs — required
- Git commit and pushed ref to remote repository if target paths are dirty (`scripts/ci/commit_and_push.py:100-103`)
- Console messages: `"No changes to commit"` or `"Changes committed and pushed"` (`scripts/ci/commit_and_push.py:93, 111`)
- Error messages to stderr on git failure or missing git executable (`scripts/ci/commit_and_push.py:50-51, 105, 108`)
- Exit code: 0 on success or no changes, 1 on git failure, 2 on missing binary or usage error (`scripts/ci/commit_and_push.py:28-30`)

## Invokes — required
- `command git — scripts/ci/commit_and_push.py:36`

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `git status --porcelain` — scripts/ci/commit_and_push.py:5 — used here
- `ADR-006` — scripts/ci/commit_and_push.py:6 — used here
- `gh auth setup-git` — scripts/ci/commit_and_push.py:13 — used here
- `ADR-035` — scripts/ci/commit_and_push.py:16 — used here
- `EXIT_SUCCESS` — scripts/ci/commit_and_push.py:28 — defined here
- `EXIT_GIT_FAILED` — scripts/ci/commit_and_push.py:29 — defined here
- `EXIT_USAGE` — scripts/ci/commit_and_push.py:30 — defined here
- `_git` — scripts/ci/commit_and_push.py:33 — defined here
- `_run` — scripts/ci/commit_and_push.py:46 — defined here
- `dirty` — scripts/ci/commit_and_push.py:55 — defined here
- `build_parser` — scripts/ci/commit_and_push.py:63 — defined here

## Structure
- `EXIT_SUCCESS`, `EXIT_GIT_FAILED`, `EXIT_USAGE`
- `_git(args: list[str]) -> subprocess.CompletedProcess[str]`
- `_run(args: list[str]) -> int`
- `dirty(paths: list[str]) -> bool`
- `build_parser() -> argparse.ArgumentParser`
- `main(argv: list[str] | None = None) -> int`

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/commit_and_push.py`, language: `python`, lines: 117
- documented invocation:
  > "Commit and push a fixed set of paths when the working tree is dirty." — scripts/ci/commit_and_push.py:2
- **executed:** yes
- actual command run: `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/commit_and_push.py --path foo.txt --message "test message" --user-name "test" --user-email "test@example.com"` (executed inside an empty git repository)
- abridged stdout:
```
No changes to commit
```
- **actual exit code:** 0
- documented exit codes:
  > "0  - Success: committed and pushed, or nothing to commit" — scripts/ci/commit_and_push.py:17
  > "1  - Error: a git command failed" — scripts/ci/commit_and_push.py:18
  > "2  - Error: usage/configuration (git binary missing)" — scripts/ci/commit_and_push.py:19
  vs. actual exit paths in code:
  `scripts/ci/commit_and_push.py:90` (`return EXIT_GIT_FAILED` [1])
  `scripts/ci/commit_and_push.py:94` (`return EXIT_SUCCESS` [0])
  `scripts/ci/commit_and_push.py:103` (`return EXIT_GIT_FAILED` [1])
  `scripts/ci/commit_and_push.py:106` (`return EXIT_USAGE` [2])
  `scripts/ci/commit_and_push.py:109` (`return EXIT_GIT_FAILED` [1])
  `scripts/ci/commit_and_push.py:112` (`return EXIT_SUCCESS` [0])
  called via `sys.exit(main())` on line 116.
- for validators/gates: not a gate; automated maintenance commit utility. Can exit 1 on git failure, 2 on missing git command.
- does the output match what the documentation claims: yes, evaluates dirty status only on specified paths, reports clean status, and exits 0.

## Defects — required
- orphan — scripts/ci/commit_and_push.py:1 — not invoked by any in-scope file; invoked only by out-of-scope .github/workflows/update-reviewer-stats.yml:74.

## Observations
Enforces clean path boundaries in automated bot workflows by ensuring only explicitly passed paths are staged and evaluated, preventing accidental inclusion of side-effect files in automated maintenance commits.

## Context cost
3903 bytes (~975 tokens).
