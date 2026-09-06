---
package: rjm
path: .claude/skills/analyze/references/DEVELOPMENT.md
type: reference
bytes: 2439
unit: inv-rjm-88
in_scope_via: .claude/skills/analyze/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/analyze/references/DEVELOPMENT.md, sha256: 5602933212eb69cbc09c0bc6999de9cfa4f8631ca9ee973ad271013c504002bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/analyze/references/DEVELOPMENT.md

## Purpose — required, verbatim
> "Systematic codebase analysis skill. The script (`scripts/analyze.py`) IS the workflow. It outputs REQUIRED ACTIONS at each step. Follow them exactly. Do NOT explore the codebase before invoking the script." — .claude/skills/analyze/references/DEVELOPMENT.md:5

## Design intent — required
Provides contributor guidance and maintenance documentation for the `skills/analyze/` skill. Details the script-driven state machine architecture of `scripts/analyze.py`, maps the six analysis phases to code handlers, defines exit code conventions, describes the procedure for extending the analyzer with new dimensions, and provides standard validation commands for regression testing.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- script scripts/analyze.py — .claude/skills/analyze/references/DEVELOPMENT.md:12
- skill SKILL.md — .claude/skills/analyze/references/DEVELOPMENT.md:11

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Overview` — .claude/skills/analyze/references/DEVELOPMENT.md:3 — defined here
- `File Index` — .claude/skills/analyze/references/DEVELOPMENT.md:7 — defined here
- `Architecture` — .claude/skills/analyze/references/DEVELOPMENT.md:15 — defined here
- `script-driven workflow` — .claude/skills/analyze/references/DEVELOPMENT.md:17 — defined here
- `Phase Map` — .claude/skills/analyze/references/DEVELOPMENT.md:24 — defined here
- `Exploration` — .claude/skills/analyze/references/DEVELOPMENT.md:28 — used here
- `Focus Selection` — .claude/skills/analyze/references/DEVELOPMENT.md:29 — used here
- `Investigation Planning` — .claude/skills/analyze/references/DEVELOPMENT.md:30 — used here
- `Deep Analysis` — .claude/skills/analyze/references/DEVELOPMENT.md:31 — used here
- `Verification` — .claude/skills/analyze/references/DEVELOPMENT.md:32 — used here
- `Synthesis` — .claude/skills/analyze/references/DEVELOPMENT.md:33 — used here
- `Exit Codes` — .claude/skills/analyze/references/DEVELOPMENT.md:35 — defined here
- `Extending` — .claude/skills/analyze/references/DEVELOPMENT.md:42 — defined here
- `Testing` — .claude/skills/analyze/references/DEVELOPMENT.md:50 — defined here

## Structure
# skills/analyze/ Development Guide — .claude/skills/analyze/references/DEVELOPMENT.md:1
## Overview — .claude/skills/analyze/references/DEVELOPMENT.md:3
## File Index — .claude/skills/analyze/references/DEVELOPMENT.md:7
## Architecture — .claude/skills/analyze/references/DEVELOPMENT.md:15
### Phase Map — .claude/skills/analyze/references/DEVELOPMENT.md:24
### Exit Codes — .claude/skills/analyze/references/DEVELOPMENT.md:35
## Extending — .claude/skills/analyze/references/DEVELOPMENT.md:42
## Testing — .claude/skills/analyze/references/DEVELOPMENT.md:50

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `orphan` · .claude/skills/analyze/references/DEVELOPMENT.md:1 · File resides under `references/` but is not linked or referenced by `.claude/skills/analyze/SKILL.md` or any other in-scope file.

## Observations
Explains the state machine pattern in which `scripts/analyze.py` emits `REQUIRED ACTIONS` and accumulates state across multi-turn `--thoughts`. Clarifies that adding new analysis dimensions only requires appending items to the Step 2 `FOCUS SELECTION` checklist.

## Context cost
2439 bytes, approximately 600 tokens.
