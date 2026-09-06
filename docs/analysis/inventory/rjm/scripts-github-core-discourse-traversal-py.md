---
package: rjm
path: scripts/github_core/discourse_traversal.py
type: script
bytes: 8828
unit: inv-rjm-241
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/github_core/discourse_traversal.py, sha256: 5feb6527764f4d50aa181cb0f50362ff3c4eda2820147b349b5a6ad3ab35ffd3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/github_core/discourse_traversal.py

## Purpose — required, verbatim
> "Checkpointed recursive discourse traversal for GitHub issues and PRs." — scripts/github_core/discourse_traversal.py:1

## Design intent — required
Provides breadth-first search (BFS) recursive exploration of linked GitHub issues and pull requests with persistent, atomic checkpointing to disk. It enforces state invariants (`len(visited) + len(pending) == discovered_count`) upon resuming, detects parser version mismatches to prevent resumption with stale state, and bounds traversal depth with batch checkpointing and configurable item limits.

## Phase — required
cross-phase

## Inputs — required
Seed issue/PR references (e.g. `['owner/repo#1']`), repository string in `'owner/repo'` format, `ItemFetcher` protocol implementation for retrieving body text, optional `ReferenceParser`, checkpoint file path, batch size integer, and max items safety cap integer.

## Outputs — required
`TraversalResult` dataclass containing visited references, edge tuples `(from_ref, to_ref)`, exclusions dict, and discovered item count; atomic checkpoint JSON files on disk.

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `PARSER_VERSION` — scripts/github_core/discourse_traversal.py:30 — defined here
- `ReferenceParser` — scripts/github_core/discourse_traversal.py:33 — defined here
- `DefaultParser` — scripts/github_core/discourse_traversal.py:43 — defined here
- `InvariantError` — scripts/github_core/discourse_traversal.py:70 — defined here
- `ParserVersionMismatchError` — scripts/github_core/discourse_traversal.py:74 — defined here
- `Checkpoint` — scripts/github_core/discourse_traversal.py:79 — defined here
- `save_checkpoint` — scripts/github_core/discourse_traversal.py:127 — defined here
- `load_checkpoint` — scripts/github_core/discourse_traversal.py:142 — defined here
- `ItemFetcher` — scripts/github_core/discourse_traversal.py:162 — defined here
- `TraversalResult` — scripts/github_core/discourse_traversal.py:179 — defined here
- `traverse` — scripts/github_core/discourse_traversal.py:188 — defined here

## Structure
- # Reference parser — scripts/github_core/discourse_traversal.py:18
- class ReferenceParser — scripts/github_core/discourse_traversal.py:33
- class DefaultParser — scripts/github_core/discourse_traversal.py:43
- # Checkpoint state — scripts/github_core/discourse_traversal.py:65
- class InvariantError — scripts/github_core/discourse_traversal.py:70
- class ParserVersionMismatchError — scripts/github_core/discourse_traversal.py:74
- class Checkpoint — scripts/github_core/discourse_traversal.py:79
- def save_checkpoint — scripts/github_core/discourse_traversal.py:127
- def load_checkpoint — scripts/github_core/discourse_traversal.py:142
- # Fetcher protocol — scripts/github_core/discourse_traversal.py:157
- class ItemFetcher — scripts/github_core/discourse_traversal.py:162
- # Traversal engine — scripts/github_core/discourse_traversal.py:173
- class TraversalResult — scripts/github_core/discourse_traversal.py:179
- def traverse — scripts/github_core/discourse_traversal.py:188

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/github_core/discourse_traversal.py`, Python, 282 lines
- **documented invocation:** none
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/github_core/discourse_traversal.py`
- **abridged stdout:** (empty)
- **actual exit code:** 0
- **documented exit codes:** none vs. actual exit paths in code: none (library module without process exit calls)
- **validators/gates:** none
- **output match:** yes (clean execution as a library module)

## Defects — required
- `orphan` · scripts/github_core/discourse_traversal.py:1-282 · Module defines BFS discourse graph traversal and checkpointing, but has no incoming invocations from in-scope workflow scripts or agents (tested only by `tests/test_discourse_traversal.py`).

## Observations
Uses atomic file writing via temporary files to avoid partial checkpoint corruptions during interruption. Excludes cross-repo references by checking repo ownership during reference parsing.

## Context cost
8,828 bytes (~2,300 tokens). Standard library only.
