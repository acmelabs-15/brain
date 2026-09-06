---
package: rjm
path: scripts/progress/README.md
type: script
bytes: 3104
unit: inv-rjm-255
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/progress/README.md, sha256: 9802ce17f6deea0b8d4eb844414165356de7c337aa7aac09e8d49484f59d8349}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/progress/README.md

## Purpose — required, verbatim
> "Session and skill-level progress indicators to reduce user interruptions during long-running operations." — scripts/progress/README.md:3

## Design intent — required
Documents the architecture, usage, and configuration of the `scripts.progress` module. Explains the background (Issue #670 finding that 33% of sessions were interrupted mid-execution), provides quick-start examples for skill-level checkpoints and session-level progress, specifies rules for when to emit checkpoints, and mandates routing progress messages to `stderr` to avoid corrupting `stdout` data streams.

## Phase — required
cross-phase

## Inputs — required
- Environment variable: `CLAUDE_PROGRESS_QUIET` — scripts/progress/README.md:84

## Outputs — required
- Standard error formatted checkpoint indicators: `step_name` — scripts/progress/README.md:128

## Invokes — required
- script scripts.progress — scripts/progress/README.md:16

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Progress Reporting Module` — scripts/progress/README.md:1 — defined here
- `emit_checkpoint` — scripts/progress/README.md:16 — used here
- `ProgressReporter` — scripts/progress/README.md:40 — used here
- `CLAUDE_PROGRESS_QUIET` — scripts/progress/README.md:84 — defined here
- `is_quiet_mode` — scripts/progress/README.md:96 — used here

## Structure
- # Progress Reporting Module — scripts/progress/README.md:1
- ## Background — scripts/progress/README.md:5
- ## Quick Start — scripts/progress/README.md:9
- ### Skill-Level Checkpoints — scripts/progress/README.md:11
- ### Session-Level Progress — scripts/progress/README.md:35
- ## Configuration — scripts/progress/README.md:77
- ### Quiet Mode — scripts/progress/README.md:79
- ### Checking Quiet Mode — scripts/progress/README.md:93
- ## When to Use Checkpoints — scripts/progress/README.md:103
- ## Checkpoint Format — scripts/progress/README.md:118
- ## Output Destination — scripts/progress/README.md:132

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/progress/README.md`, language: Markdown documentation, lines: 135
- documented invocation: `"export CLAUDE_PROGRESS_QUIET=1" — scripts/progress/README.md:84`
- **executed:** no (documentation file; code examples within import `scripts.progress`)
- actual command run: none, abridged stdout: none, **actual exit code**: none
- documented exit codes: none vs. actual exit paths: none
- for validators/gates: not a validator or gate
- does the output match what the documentation claims? yes, clearly documents the progress reporting framework

## Defects — required
- `orphan` · scripts/progress/README.md:1 · Module documentation not linked from main repository docs or lifecycle guides.

## Observations
- Establishes a 30-second rule: operations exceeding 30 seconds or looping across multiple files should emit checkpoints.
- Emphasizes that progress indicators must go to `stderr` so scripts piping JSON or stdout data remain undisturbed.

## Context cost
3104 bytes, approximately 800 tokens.
