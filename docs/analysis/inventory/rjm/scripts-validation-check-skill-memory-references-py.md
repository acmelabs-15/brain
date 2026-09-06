---
package: rjm
path: scripts/validation/check_skill_memory_references.py
type: script
bytes: 13177
unit: inv-rjm-287
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_skill_memory_references.py, sha256: 85b6b9c797c4a756e3141d78be4e36d47e3dc5eabaa3f374c8badc6d741d1bc3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_skill_memory_references.py

## Purpose — required, verbatim
> "Fail when instructions command a Serena memory read that cannot resolve." — scripts/validation/check_skill_memory_references.py:2

## Design intent — required
Prevents runtime execution failures caused by broken Serena memory references embedded in agent and skill instruction Markdown. In issue #4897, the `pr-comment-responder` skill failed during an agent's blocking Phase 0 step because it commanded `mcp__serena__read_memory(memory_file_name="pr-comment-responder-skills")`, but the file was actually tracked as `pr-review/pr-comment-responder-skills.md`. Because instructions inside Markdown are only interpreted when an agent runs them, static documentation checks previously missed these unresolvable references. This script extracts literal `read_memory` and `edit_memory` calls from all instruction Markdown files across eight corpus roots and resolves them against `.serena/memories/` using git-tracked file status (via `tracked_paths.py`), ensuring that missing or misnamed memory references fail deterministically before pull request submission.

## Phase — required
none

## Inputs — required
- `--repo-root`: Path to repository root (defaults to grandparent directory `Path(__file__).resolve().parents[2]`) — scripts/validation/check_skill_memory_references.py:321-326
- Instruction files scanned under `CORPUS_ROOTS`: `.claude/skills`, `src/copilot-cli/skills`, `templates/agents`, `.claude/agents`, `.github/agents`, `src/claude`, `src/copilot-cli/agents`, `src/vs-code-agents` — scripts/validation/check_skill_memory_references.py:102-111
- Memory storage root: `MEMORIES_ROOT` (default `.serena/memories`) — scripts/validation/check_skill_memory_references.py:96
- Git index tracking via `path_exists_in_repo` — scripts/validation/check_skill_memory_references.py:90

## Outputs — required
- Console output: formatted report of examined instruction files, memory read counts, and any unresolved references with suggestions — scripts/validation/check_skill_memory_references.py:270-310, 354
- Exit codes: 0 (all references resolve, or corpus/memories root missing), 1 (one or more unresolved references), 2 (configuration/decode error) — scripts/validation/check_skill_memory_references.py:92-94, 337, 344, 351, 355
- Files produced: none

## Invokes — required
- script tracked_paths — scripts/validation/check_skill_memory_references.py:90

## Invoked by — required
- script checks_spec — scripts/validation/checks_spec.py:237

## Concepts named — required, verbatim
- `Serena memory read` — scripts/validation/check_skill_memory_references.py:2 — used here
- `pr-comment-responder` — scripts/validation/check_skill_memory_references.py:4 — used here
- `Phase 0` — scripts/validation/check_skill_memory_references.py:4 — used here
- `mcp__serena__read_memory` — scripts/validation/check_skill_memory_references.py:5 — used here
- `pre-PR time` — scripts/validation/check_skill_memory_references.py:13 — used here
- `Canonical contract` — scripts/validation/check_skill_memory_references.py:15 — defined here
- `Name-to-path resolution` — scripts/validation/check_skill_memory_references.py:17 — defined here
- `read_memory` — scripts/validation/check_skill_memory_references.py:52 — used here
- `edit_memory` — scripts/validation/check_skill_memory_references.py:53 — used here
- `write_memory` — scripts/validation/check_skill_memory_references.py:53 — used here
- `ADR-035` — scripts/validation/check_skill_memory_references.py:72 — used here
- `EXIT_OK` — scripts/validation/check_skill_memory_references.py:92 — defined here
- `EXIT_UNRESOLVED` — scripts/validation/check_skill_memory_references.py:93 — defined here
- `EXIT_CONFIG` — scripts/validation/check_skill_memory_references.py:94 — defined here
- `MEMORIES_ROOT` — scripts/validation/check_skill_memory_references.py:96 — defined here
- `CORPUS_ROOTS` — scripts/validation/check_skill_memory_references.py:102 — defined here
- `MemoryReference` — scripts/validation/check_skill_memory_references.py:129 — defined here
- `Finding` — scripts/validation/check_skill_memory_references.py:139 — defined here
- `iter_instruction_files` — scripts/validation/check_skill_memory_references.py:146 — defined here
- `extract_references` — scripts/validation/check_skill_memory_references.py:156 — defined here
- `_find_repo_root` — scripts/validation/check_skill_memory_references.py:177 — defined here
- `resolves` — scripts/validation/check_skill_memory_references.py:187 — defined here
- `index_by_basename` — scripts/validation/check_skill_memory_references.py:219 — defined here
- `collect_findings` — scripts/validation/check_skill_memory_references.py:230 — defined here
- `format_report` — scripts/validation/check_skill_memory_references.py:269 — defined here
- `parse_args` — scripts/validation/check_skill_memory_references.py:313 — defined here
- `main` — scripts/validation/check_skill_memory_references.py:330 — defined here

## Structure
- Shebang and module docstring — scripts/validation/check_skill_memory_references.py:1-79
- Imports and exit code constants — scripts/validation/check_skill_memory_references.py:80-95
- Memory root and corpus roots constants — scripts/validation/check_skill_memory_references.py:96-112
- Regular expressions and placeholder set — scripts/validation/check_skill_memory_references.py:113-126
- MemoryReference and Finding dataclasses — scripts/validation/check_skill_memory_references.py:128-144
- Instruction file discovery and reference extraction — scripts/validation/check_skill_memory_references.py:146-175
- Git repo root resolution and memory path resolution — scripts/validation/check_skill_memory_references.py:177-217
- Basename indexing and findings collector — scripts/validation/check_skill_memory_references.py:219-267
- Report formatting — scripts/validation/check_skill_memory_references.py:269-311
- Argument parsing and main CLI entry point — scripts/validation/check_skill_memory_references.py:313-360

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_skill_memory_references.py`, language: Python 3, lines: 360
- documented invocation:
  - `python3 scripts/validation/check_skill_memory_references.py`
  - "EXIT CODES (ADR-035):" — scripts/validation/check_skill_memory_references.py:72
- executed: yes
- actual command run: `python3 scripts/validation/check_skill_memory_references.py`
- abridged stdout:
```
[PASS] 0 unresolved reference(s) in 57 literal memory read(s) across 917 instruction file(s).
```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - Documented:
    - `0 - every literal reference resolves, OR no corpus root is present, OR the memories root is absent` — scripts/validation/check_skill_memory_references.py:73-75
    - `1 - at least one literal reference does not resolve` — scripts/validation/check_skill_memory_references.py:76
    - `2 - configuration error (the given repo root is not a directory)` — scripts/validation/check_skill_memory_references.py:77
  - Actual exit paths:
    - `EXIT_CONFIG = 2` — scripts/validation/check_skill_memory_references.py:94 (exited at lines 248, 254, 337)
    - `EXIT_OK = 0` — scripts/validation/check_skill_memory_references.py:92 (exited at lines 344, 351, 355)
    - `EXIT_UNRESOLVED = 1` — scripts/validation/check_skill_memory_references.py:93 (exited at line 355)
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  - Can exit non-zero: exits 1 when findings exist (line 355), exits 2 on config/decode error (lines 248, 254, 337).
  - Passes with exit code 0 on default branch.
- does the output match what the documentation claims?
  - Yes, outputs `[PASS]` summary header when all references resolve.

## Defects — required
- doc-drift · scripts/validation/check_skill_memory_references.py:34 claims `memory_index.py line 1422` sets `default=os.environ.get("MEMORY_PATH", ".serena/memories")`, but in current source `sources/rjm/scripts/validation/memory_index.py` that default definition is located at line 1625.
- doc-drift · scripts/validation/check_skill_memory_references.py:18-19 claims `memory_index.py::_resolve_memory_reference` spans lines 230-247, but in current source the function begins at line 237.

## Observations
- Explicitly ignores `write_memory` operations (line 53) because creating a new memory naturally specifies a target that does not yet exist.
- Skips template strings containing placeholder metacharacters (`${}[]<>*`, line 125) to avoid false positives on instructional examples.
- Uses git-tracked path existence via `tracked_paths.py` rather than filesystem existence so that untracked local files cannot cause spurious CI passes.
- Invoked indirectly as pre-PR gate `Skill Memory References` in `scripts/validation/pre_pr_sequence.py:315` via `checks_spec.validate_skill_memory_references`.

## Context cost
13177 bytes (~3294 tokens) for `scripts/validation/check_skill_memory_references.py` plus 6579 bytes (~1645 tokens) for invoked dependency `scripts/validation/tracked_paths.py`. Total context cost: 19756 bytes (~4939 tokens).
