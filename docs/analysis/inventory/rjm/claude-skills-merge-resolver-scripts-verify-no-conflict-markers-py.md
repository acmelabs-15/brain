---
package: rjm
path: .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py
type: script
bytes: 9202
unit: inv-rjm-125
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py, sha256: 3c7090beebcc7e44f3f84db92a676c64296c58383fa3f01fd63def8bee34f335}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py

## Purpose — required, verbatim
> "Verify no leftover merge-conflict markers remain after a merge resolution." — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:2

## Design intent — required
Post-merge verification gate replacing broad text search (`git grep '<<<<<<<'`) which false-fails on intentional documentation examples (e.g. in `references/strategies.md`). It uses git plumbing (`git diff --name-only --diff-filter=U` for unmerged index files and `git diff --check` / `git diff --cached --check MERGE_HEAD` for leftover conflict markers in in-flight changes), distinguishing between in-progress merges and post-merge working trees to avoid false positives on preexisting incoming whitespace or committed examples.

## Phase — required
cross-phase

## Inputs — required
- CLI options: `--cwd` — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:231, `--json` — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:236
- Git repository state: `rev-parse` — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:76, `diff` — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:86, `MERGE_HEAD` — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:103, `HEAD` — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:162

## Outputs — required
- Validation exit code: `return exit_code` — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:255
- Execution reports: `leftover_markers` — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:183, `unmerged_files` — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:183

## Invokes — required
none

## Invoked by — required
- skill merge-resolver — .claude/skills/merge-resolver/SKILL.md:79

## Concepts named — required, verbatim
- `ADR-035` — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:38 — used here
- `MERGE_HEAD` — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:95 — used here
- `list_unmerged_files` — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:80 — defined here
- `find_leftover_markers` — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:129 — defined here
- `verify` — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:166 — defined here

## Structure
- def _run_git — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:57
- def _is_in_git_repo — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:74
- def list_unmerged_files — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:80
- def _merge_head — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:95
- def _collect_markers — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:110
- def find_leftover_markers — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:129
- def verify — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:166
- def _format_human — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:192
- def main — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:221

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `.claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py`, python, 260 lines
- documented invocation (verbatim, path:line):
  > "python3 .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py [--cwd PATH] [--json]" — .claude/skills/merge-resolver/SKILL.md:204
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `python3 sources/rjm/.claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py --json`
  Stdout: `{"leftover_markers": [], "ok": true, "unmerged_files": []}`
  Exit code: `0`
- documented exit codes (verbatim) vs. actual exit paths in code:
  Documented in `.claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:40-43`:
  > "0 -- Clean: no UU files and no leftover conflict markers" — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:40
  > "1 -- Validation failed: markers remain or unmerged files exist" — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:41
  > "2 -- Usage / configuration error (not in a git repo)" — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:42
  > "3 -- External error (git command failed unexpectedly)" — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:43
  Actual exit paths in code:
  - Exit 0: `return 0` — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:183
  - Exit 1: `return 1` — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:185
  - Exit 2: `return 2` — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:174, 248
  - Exit 3: `return 3` — .claude/skills/merge-resolver/scripts/verify_no_conflict_markers.py:180
- for validators/gates: can it exit non-zero? yes, exits 1 on unmerged files or conflict markers, exits 2 on usage error outside git, exits 3 on git failure. Does it fail on the source repo's own default branch? No, returns exit code 0.
- does the output match what the documentation claims: yes, clean working tree returns exit code 0 and reports no unmerged files and no leftover conflict markers

## Defects — required
none

## Observations
- Perfectly implements ADR-035 standardized exit codes across clean (0), validation failure (1), usage error (2), and external failure (3).
- Uses git plumbing (`git diff --check` and `diff-filter=U`) rather than crude text regex searches (`git grep`), eliminating false-positive validation failures on intentional code documentation examples (issues #2424, #4058).

## Context cost
9,202 bytes. Approximately 2,300 tokens.
