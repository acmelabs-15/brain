---
package: rjm
path: scripts/validation/check_skill_resolver_anchoring.py
type: script
bytes: 8591
unit: inv-rjm-287
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_skill_resolver_anchoring.py, sha256: 8013b916e0028b1191d0d6f89083dfc8030d317c22fc705a4fb159522f950e46}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_skill_resolver_anchoring.py

## Purpose — required, verbatim
> "Fail when a SKILL.md script-path resolver can select a stale out-of-repo copy." — scripts/validation/check_skill_resolver_anchoring.py:2

## Design intent — required
Ensures that shell resolver functions declared inside `SKILL.md` files safely anchor candidate paths to the repository worktree and do not prefer out-of-repo installed plugins over local code. Skills that invoke helper scripts often embed shell functions that iterate through candidate directories until finding one containing scripts. If a resolver tests an unanchored repo-relative directory like `".claude"` or `"./.claude"`, it only resolves when the process working directory happens to be the repository root; if executed from any subdirectory, the check fails and the loop falls through to external caches (e.g. `~/.copilot/installed-plugins` or `~/.claude/plugins/cache`), silently executing stale versions of safety gates. Furthermore, placing an out-of-repo path ahead of an in-repo candidate causes installed plugins to shadow current repo code. This validator scans all `SKILL.md` files under `src/copilot-cli/skills` and `.claude/skills`, parses shell functions with brace-depth tracking, and verifies that repo-relative candidate roots are anchored on `git rev-parse --show-toplevel` and precede any out-of-repo paths.

## Phase — required
none

## Inputs — required
- `--repo-root`: Repository root path (default: `.` / current working directory) — scripts/validation/check_skill_resolver_anchoring.py:194
- `paths`: Optional positional arguments specifying explicit `SKILL.md` paths to validate — scripts/validation/check_skill_resolver_anchoring.py:195, 201
- Target directories scanned for `SKILL.md`: `src/copilot-cli/skills` and `.claude/skills` — scripts/validation/check_skill_resolver_anchoring.py:43

## Outputs — required
- Console output: formatted violation listings (path, line, function name, kind, and detail) or OK confirmation with scanned file count — scripts/validation/check_skill_resolver_anchoring.py:74-79, 221-229
- Exit codes: 0 (no unanchored resolvers), 1 (at least one violation detected), 2 (usage/IO error or empty scan) — scripts/validation/check_skill_resolver_anchoring.py:29-33, 113, 214, 226, 229
- Files produced: none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `script-path resolver` — scripts/validation/check_skill_resolver_anchoring.py:2 — defined here
- `candidate roots` — scripts/validation/check_skill_resolver_anchoring.py:4-5 — defined here
- `git rev-parse --show-toplevel` — scripts/validation/check_skill_resolver_anchoring.py:15-16 — used here
- `check_skill_md_exec_portability.py` — scripts/validation/check_skill_resolver_anchoring.py:25 — used here
- `SCAN_ROOTS` — scripts/validation/check_skill_resolver_anchoring.py:43 — defined here
- `resolve_pr_review_config` — scripts/validation/check_skill_resolver_anchoring.py:48 — used here
- `RESOLVER_HEADER` — scripts/validation/check_skill_resolver_anchoring.py:49 — defined here
- `BARE_RELATIVE_ROOT` — scripts/validation/check_skill_resolver_anchoring.py:53 — defined here
- `BARE_RELATIVE_INLINE` — scripts/validation/check_skill_resolver_anchoring.py:54 — defined here
- `IN_REPO_ROOT` — scripts/validation/check_skill_resolver_anchoring.py:57 — defined here
- `ANCHORED` — scripts/validation/check_skill_resolver_anchoring.py:60 — defined here
- `OUT_OF_REPO` — scripts/validation/check_skill_resolver_anchoring.py:63 — defined here
- `Violation` — scripts/validation/check_skill_resolver_anchoring.py:67 — defined here
- `_function_blocks` — scripts/validation/check_skill_resolver_anchoring.py:81 — defined here
- `check_file` — scripts/validation/check_skill_resolver_anchoring.py:108 — defined here
- `iter_skill_files` — scripts/validation/check_skill_resolver_anchoring.py:182 — defined here
- `main` — scripts/validation/check_skill_resolver_anchoring.py:192 — defined here

## Structure
- Shebang and module docstring — scripts/validation/check_skill_resolver_anchoring.py:1-34
- Imports and scan root constants — scripts/validation/check_skill_resolver_anchoring.py:35-43
- Shell resolver header and pattern regular expressions — scripts/validation/check_skill_resolver_anchoring.py:45-64
- Violation dataclass and formatting method — scripts/validation/check_skill_resolver_anchoring.py:66-79
- Function block parser with brace depth tracking — scripts/validation/check_skill_resolver_anchoring.py:81-106
- Single-file validator for ordering and anchoring violations — scripts/validation/check_skill_resolver_anchoring.py:108-180
- Skill file iterator across scan roots — scripts/validation/check_skill_resolver_anchoring.py:182-190
- CLI argument parser and main execution runner — scripts/validation/check_skill_resolver_anchoring.py:192-234

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_skill_resolver_anchoring.py`, language: Python 3, lines: 234
- documented invocation:
  - `python3 scripts/validation/check_skill_resolver_anchoring.py`
  - "Exit codes:" — scripts/validation/check_skill_resolver_anchoring.py:29
- executed: yes
- actual command run: `python3 scripts/validation/check_skill_resolver_anchoring.py`
- abridged stdout:
```
Resolver anchoring OK. 203 SKILL.md file(s) scanned.
```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - Documented:
    - `0 - no unanchored resolvers` — scripts/validation/check_skill_resolver_anchoring.py:30
    - `1 - at least one violation` — scripts/validation/check_skill_resolver_anchoring.py:31
    - `2 - usage or I/O error` — scripts/validation/check_skill_resolver_anchoring.py:32
  - Actual exit paths:
    - Exit 2: `scripts/validation/check_skill_resolver_anchoring.py:113` (cannot read path), `scripts/validation/check_skill_resolver_anchoring.py:214` (no SKILL.md files found; refusing to report success on an empty scan)
    - Exit 1: `scripts/validation/check_skill_resolver_anchoring.py:226` (violations detected)
    - Exit 0: `scripts/validation/check_skill_resolver_anchoring.py:229` (no violations)
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  - Can exit non-zero: exits 1 on unanchored or out-of-order resolver rungs, exits 2 on I/O error or empty scan.
  - Passes with exit code 0 on default branch.
- does the output match what the documentation claims?
  - Yes, reports `Resolver anchoring OK` with total scanned count.

## Defects — required
- orphan · scripts/validation/check_skill_resolver_anchoring.py:1 is not called by any in-scope manifest file; it is executed by CI workflow `.github/workflows/validate-vendor-portability.yml:52` and documented in `src/copilot-cli/instructions/ci-scripts.instructions.md:26, 138`.

## Observations
- Refuses to exit 0 on an empty scan (line 206-214), preventing false-green passes when arguments or directories are misconfigured.
- Tracks shell brace depth during function body parsing (`_function_blocks`) to avoid truncating functions containing nested compound blocks or subshells.
- Checks both function ordering (in-repo before out-of-repo) and anchoring syntax (`git rev-parse --show-toplevel` or `$repo_root/.claude`).

## Context cost
8591 bytes (~2148 tokens) for `scripts/validation/check_skill_resolver_anchoring.py`. Isolated script with no external or internal project imports. Total context cost: 8591 bytes (~2148 tokens).
