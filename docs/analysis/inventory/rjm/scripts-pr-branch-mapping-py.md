---
package: rjm
path: scripts/pr_branch_mapping.py
type: script
bytes: 14798
unit: inv-rjm-255
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/pr_branch_mapping.py, sha256: ef68513a8490b248236707bb35a76c73fa2d9f58999d1f43b973d7cf72fe4340}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/pr_branch_mapping.py

## Purpose — required, verbatim
> "Maintain explicit PR-to-branch mapping for cross-session verification." — scripts/pr_branch_mapping.py:2

## Design intent — required
Maintains a persistent JSON mapping in `.serena/memories/pr-branch-mapping.md` pairing pull request numbers to git branch names. It enables automated consistency checking across multi-PR agent sessions to verify that the active git branch matches the expected PR context, preventing accidental cross-PR commits.

## Phase — required
none

## Inputs — required
- Command-line arguments parsed by `_parse_args` — scripts/pr_branch_mapping.py:369
- Serena memory file read and parsed via `_extract_json_block` — scripts/pr_branch_mapping.py:318
- Current git branch detected via `_get_current_branch` — scripts/pr_branch_mapping.py:351

## Outputs — required
- Serialized mapping written to disk via `save_mapping` — scripts/pr_branch_mapping.py:162
- Terminal status and lookup outputs emitted via `print` — scripts/pr_branch_mapping.py:417

## Invokes — required
- script hook_utilities — scripts/pr_branch_mapping.py:131

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `MEMORY_FILENAME` — scripts/pr_branch_mapping.py:32 — defined here
- `MEMORY_RELATIVE_PATH` — scripts/pr_branch_mapping.py:33 — defined here
- `_atomic_write_text` — scripts/pr_branch_mapping.py:36 — defined here
- `PRBranchEntry` — scripts/pr_branch_mapping.py:57 — defined here
- `CurrentSession` — scripts/pr_branch_mapping.py:68 — defined here
- `PRBranchMapping` — scripts/pr_branch_mapping.py:77 — defined here
- `load_mapping` — scripts/pr_branch_mapping.py:91 — defined here
- `_try_lock_helpers` — scripts/pr_branch_mapping.py:119 — defined here
- `_mapping_lock` — scripts/pr_branch_mapping.py:138 — defined here
- `save_mapping` — scripts/pr_branch_mapping.py:162 — defined here
- `add_mapping` — scripts/pr_branch_mapping.py:177 — defined here
- `get_branch_for_pr` — scripts/pr_branch_mapping.py:226 — defined here
- `get_pr_for_branch` — scripts/pr_branch_mapping.py:240 — defined here
- `validate_branch_pr_consistency` — scripts/pr_branch_mapping.py:254 — defined here
- `remove_merged_entries` — scripts/pr_branch_mapping.py:285 — defined here
- `_find_entry` — scripts/pr_branch_mapping.py:304 — defined here
- `_extract_json_block` — scripts/pr_branch_mapping.py:318 — defined here
- `_build_memory_content` — scripts/pr_branch_mapping.py:333 — defined here
- `_get_current_branch` — scripts/pr_branch_mapping.py:351 — defined here
- `_parse_args` — scripts/pr_branch_mapping.py:369 — defined here
- `main` — scripts/pr_branch_mapping.py:400 — defined here

## Structure
- def _atomic_write_text(path: Path, content: str) -> None: — scripts/pr_branch_mapping.py:36
- class PRBranchEntry: — scripts/pr_branch_mapping.py:57
- class CurrentSession: — scripts/pr_branch_mapping.py:68
- class PRBranchMapping: — scripts/pr_branch_mapping.py:77
- def load_mapping(project_root: Path) -> PRBranchMapping: — scripts/pr_branch_mapping.py:91
- def _try_lock_helpers() -> tuple[ — scripts/pr_branch_mapping.py:119
- def _mapping_lock(project_root: Path) -> Iterator[None]: — scripts/pr_branch_mapping.py:138
- def save_mapping(project_root: Path, mapping: PRBranchMapping) -> None: — scripts/pr_branch_mapping.py:162
- def add_mapping( — scripts/pr_branch_mapping.py:177
- def get_branch_for_pr(mapping: PRBranchMapping, pr_number: int) -> str | None: — scripts/pr_branch_mapping.py:226
- def get_pr_for_branch(mapping: PRBranchMapping, branch_name: str) -> int | None: — scripts/pr_branch_mapping.py:240
- def validate_branch_pr_consistency( — scripts/pr_branch_mapping.py:254
- def remove_merged_entries(mapping: PRBranchMapping) -> int: — scripts/pr_branch_mapping.py:285
- def _find_entry( — scripts/pr_branch_mapping.py:304
- def _extract_json_block(content: str) -> str | None: — scripts/pr_branch_mapping.py:318
- def _build_memory_content(json_str: str) -> str: — scripts/pr_branch_mapping.py:333
- def _get_current_branch() -> str | None: — scripts/pr_branch_mapping.py:351
- def _parse_args(argv: list[str] | None = None) -> argparse.Namespace: — scripts/pr_branch_mapping.py:369
- def main(argv: list[str] | None = None) -> int: — scripts/pr_branch_mapping.py:400

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/pr_branch_mapping.py`, language: Python, lines: 472
- documented invocation: `"pr_branch_mapping add" — scripts/pr_branch_mapping.py:141`
- **executed:** yes
- actual command run: `python3 scripts/pr_branch_mapping.py list`, abridged stdout: `No mappings stored.`, **actual exit code**: 0
- documented exit codes: `"0  - Success: Operation completed" — scripts/pr_branch_mapping.py:9`, `"1  - Error: Invalid arguments or validation failure" — scripts/pr_branch_mapping.py:10`, `"2  - Error: Unexpected error" — scripts/pr_branch_mapping.py:11`, `"3  - Error: External dependency failure (file system, git)" — scripts/pr_branch_mapping.py:12` vs. actual exit paths: `return 0` (scripts/pr_branch_mapping.py:418, 425, 431, 438, 443, 446, 453, 467), `return 1` (scripts/pr_branch_mapping.py:427, 433, 438, 460, 462), `return 2` (scripts/pr_branch_mapping.py:465), `return 3` (scripts/pr_branch_mapping.py:457), dispatched via `sys.exit(main())` (scripts/pr_branch_mapping.py:471)
- for validators/gates: `validate` subcommand exits 1 when current branch does not match active session branch or when current git branch cannot be determined; exits 0 when session matches or when no session context is active (`scripts/pr_branch_mapping.py:438`)
- does the output match what the documentation claims? yes, lists mappings, performs lookups, validates branch consistency, and removes closed/merged PR entries

## Defects — required
- `orphan` · scripts/pr_branch_mapping.py:1 · Tool script not called by any workflow command or lifecycle pipeline.

## Observations
- Implements atomic writes via temporary file renaming to prevent corrupting `.serena/memories/pr-branch-mapping.md`.
- Implements multi-process advisory file locking via sidecar `.lock` file to prevent race conditions during concurrent session execution.

## Context cost
14798 bytes, approximately 3700 tokens.
