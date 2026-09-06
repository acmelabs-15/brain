---
package: rjm
path: scripts/github_core/formatting.py
type: script
bytes: 869
unit: inv-rjm-241
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/github_core/formatting.py, sha256: ed8945a7dfd0a16b514afb8f3b126bf5456b5c24afe55d6c36433352186b3bef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/github_core/formatting.py

## Purpose — required, verbatim
> "Formatting utilities: emoji mappings for priorities and reactions." — scripts/github_core/formatting.py:1

## Design intent — required
Provides centralized dictionary mappings and lookup functions converting ticket/issue priority levels (P0-P3) and GitHub reaction types into standard Unicode emoji characters for formatted CLI and summary outputs.

## Phase — required
cross-phase

## Inputs — required
Priority level string (e.g. `"P0"`, `"P1"`), reaction name string (e.g. `"+1"`, `"rocket"`).

## Outputs — required
Unicode emoji string.

## Invokes — required
none

## Invoked by — required
- script formatting — scripts/github_core/__init__.py:45

## Concepts named — required, verbatim
- `PRIORITY_EMOJI` — scripts/github_core/formatting.py:5 — defined here
- `REACTION_EMOJI` — scripts/github_core/formatting.py:12 — defined here
- `get_priority_emoji` — scripts/github_core/formatting.py:24 — defined here
- `get_reaction_emoji` — scripts/github_core/formatting.py:29 — defined here

## Structure
- def get_priority_emoji — scripts/github_core/formatting.py:24
- def get_reaction_emoji — scripts/github_core/formatting.py:29

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/github_core/formatting.py`, Python, 32 lines
- **documented invocation:** none
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/github_core/formatting.py`
- **abridged stdout:** (empty)
- **actual exit code:** 0
- **documented exit codes:** none vs. actual exit paths in code: none (library module without process exit calls)
- **validators/gates:** none
- **output match:** yes (clean execution as a library module)

## Defects — required
none

## Observations
Falls back gracefully: `get_priority_emoji` returns question mark emoji for unmapped priorities, and `get_reaction_emoji` returns the raw reaction string if not present in the mapping table.

## Context cost
869 bytes (~220 tokens). Standard library only.
