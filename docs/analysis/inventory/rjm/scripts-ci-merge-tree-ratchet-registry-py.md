---
package: rjm
path: scripts/ci/merge_tree_ratchet_registry.py
type: script
bytes: 1569
unit: inv-rjm-205
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/merge_tree_ratchet_registry.py, sha256: eaa4167914b5f6f546a258a8dec7ed8ed0de02369eabec21885d10bf20dc9f2e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/merge_tree_ratchet_registry.py

## Purpose — required, verbatim
> "Single ownership registry for ratchets evaluated on a synthetic merge tree." — scripts/ci/merge_tree_ratchet_registry.py:1

## Design intent — required
Provides a centralized, single-source-of-truth registry defining which count ratchets participate in synthetic merge-tree verification. Declares the `MergeTreeRatchet` dataclass binding each ratchet label, baseline text file path, and counter module interface (`current_count`), registering five active ratchets: ruff, taste, type-ignore, memory-index, and cli-exit-contract.

## Phase — required
cross-phase

## Inputs — required
- Registered ratchet modules imported from `scripts.ci`:
  - `cli_exit_contract_ratchet` — scripts/ci/merge_tree_ratchet_registry.py:12
  - `memory_index_count_ratchet` — scripts/ci/merge_tree_ratchet_registry.py:13
  - `ruff_count_ratchet` — scripts/ci/merge_tree_ratchet_registry.py:14
  - `taste_count_ratchet` — scripts/ci/merge_tree_ratchet_registry.py:15
  - `type_ignore_count_ratchet` — scripts/ci/merge_tree_ratchet_registry.py:16
- Registered baseline file paths:
  - "scripts/ci/ruff_count_baseline.txt" — scripts/ci/merge_tree_ratchet_registry.py:37
  - "scripts/ci/taste_count_baseline.txt" — scripts/ci/merge_tree_ratchet_registry.py:42
  - "scripts/ci/type_ignore_count_baseline.txt" — scripts/ci/merge_tree_ratchet_registry.py:47
  - "scripts/ci/memory_index_count_baseline.txt" — scripts/ci/merge_tree_ratchet_registry.py:52
  - "scripts/ci/cli_exit_contract_baseline.txt" — scripts/ci/merge_tree_ratchet_registry.py:57

## Outputs — required
- `RATCHETS`: Immutable tuple of `MergeTreeRatchet` registry entries — scripts/ci/merge_tree_ratchet_registry.py:34

## Invokes — required
none

## Invoked by — required
- script scripts/ci/count_ratchet.py — scripts/ci/count_ratchet.py:787
- doc src/copilot-cli/instructions/ci-scripts.instructions.md — src/copilot-cli/instructions/ci-scripts.instructions.md:39
- script scripts/ci/cli_exit_contract_ratchet.py — scripts/ci/cli_exit_contract_ratchet.py:79

## Concepts named — required, verbatim
- `synthetic merge tree` — scripts/ci/merge_tree_ratchet_registry.py:1 — used here
- `MergeTreeRatchet` — scripts/ci/merge_tree_ratchet_registry.py:21 — defined here
- `current_count` — scripts/ci/merge_tree_ratchet_registry.py:26 — defined here
- `RATCHETS` — scripts/ci/merge_tree_ratchet_registry.py:34 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/merge_tree_ratchet_registry.py`, language: Python, lines: 61
- documented invocation: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/ci/merge_tree_ratchet_registry.py` (imported via "from scripts.ci.merge_tree_ratchet_registry import RATCHETS" — scripts/ci/merge_tree_ratchet_check.py:68)
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/ci/merge_tree_ratchet_registry.py`
    stdout: `` (empty stdout on clean load)
    actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented: none (pure declaration module with no CLI entry point)
  - Actual exit paths in code: exits 0 upon successful module loading; no `sys.exit` calls
- for validators/gates: can it exit non-zero?
  No, purely declarative registry module; can only fail if imported modules raise ImportError or SyntaxError.
- does the output match what the documentation claims?
  Yes, declares `RATCHETS` tuple containing exactly 5 `MergeTreeRatchet` instances.

## Defects — required
none

## Observations
`subprocess_encoding_count_ratchet.py` is intentionally omitted from this registry, as documented in `src/copilot-cli/instructions/ci-scripts.instructions.md:40` and `scripts/ci/subprocess_encoding_count_ratchet.py:53`.

## Context cost
1569 bytes, 61 lines. Approximate tokens: ~400.
