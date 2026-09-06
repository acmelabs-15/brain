---
package: rjm
path: .claude/skills/steering-matcher/SKILL.md
type: skill
bytes: 4840
unit: inv-rjm-174
in_scope_via: .claude/skills/context-gather/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/steering-matcher/SKILL.md, sha256: 267193c275adf53f2f2401fd3018a07c37d19c20259acb2c6f40224b68b6dcf0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/steering-matcher/SKILL.md

## Purpose — required, verbatim
> "This skill helps orchestrator determine which steering files to inject into agent context based on the files being modified." — .claude/skills/steering-matcher/SKILL.md:23

## Design intent — required
Defines the `steering-matcher` routing skill for agent orchestrators. It establishes trigger phrases, instructions, and workflows for executing `scripts/get_applicable_steering.py` to match modified file paths against steering document glob patterns. It includes rules for token optimization (filtering irrelevant steering files and respecting priority order) and anti-patterns to prevent token bloat during context injection.

## Phase — required
cross-phase

## Inputs — required
- File paths modified or affected by an orchestrator task — .claude/skills/steering-matcher/SKILL.md:50
- Steering markdown documents in `.agents/steering` — .claude/skills/steering-matcher/SKILL.md:52

## Outputs — required
- JSON array of matched steering files with attributes `name`, `path`, `apply_to`, `priority` sorted descending by priority — .claude/skills/steering-matcher/SKILL.md:54, 75
- Matched steering guidance injected into agent context — .claude/skills/steering-matcher/SKILL.md:63

## Invokes — required
- script .claude/skills/steering-matcher/scripts/get_applicable_steering.py — .claude/skills/steering-matcher/SKILL.md:46
- agent orchestrator — .claude/skills/steering-matcher/SKILL.md:123
- doc .agents/steering/README.md — .claude/skills/steering-matcher/SKILL.md:120
- doc .agents/archive/planning/enhancement-PROJECT-PLAN.md — .claude/skills/steering-matcher/SKILL.md:121

## Invoked by — required
- skill .claude/skills/context-gather/SKILL.md — .claude/skills/context-gather/SKILL.md:136

## Concepts named — required, verbatim
- `steering-matcher` — .claude/skills/steering-matcher/SKILL.md:2 — defined here
- `haiku` — .claude/skills/steering-matcher/SKILL.md:7 — used here
- `ADR-080` — .claude/skills/steering-matcher/SKILL.md:8 — used here
- `Steering File Matcher Skill` — .claude/skills/steering-matcher/SKILL.md:11 — defined here
- `orchestrator` — .claude/skills/steering-matcher/SKILL.md:23 — used here
- `applyTo` — .claude/skills/steering-matcher/SKILL.md:35 — used here
- `Task Analysis` — .claude/skills/steering-matcher/SKILL.md:61 — used here
- `Pattern Matching` — .claude/skills/steering-matcher/SKILL.md:62 — used here
- `Context Injection` — .claude/skills/steering-matcher/SKILL.md:63 — used here
- `Token Optimization` — .claude/skills/steering-matcher/SKILL.md:64 — used here
- `Standard Orchestrator Workflow` — .claude/skills/steering-matcher/SKILL.md:66 — defined here
- `Anti-Patterns` — .claude/skills/steering-matcher/SKILL.md:90 — defined here

## Structure
- `# Steering File Matcher Skill` — .claude/skills/steering-matcher/SKILL.md:11
- `## Triggers` — .claude/skills/steering-matcher/SKILL.md:13
- `## Purpose` — .claude/skills/steering-matcher/SKILL.md:21
- `## When to Use` — .claude/skills/steering-matcher/SKILL.md:29
- `## Quick Usage` — .claude/skills/steering-matcher/SKILL.md:42
- `### Using get_applicable_steering.py Script` — .claude/skills/steering-matcher/SKILL.md:44
- `## Process` — .claude/skills/steering-matcher/SKILL.md:57
- `### Standard Orchestrator Workflow` — .claude/skills/steering-matcher/SKILL.md:66
- `## Implementation` — .claude/skills/steering-matcher/SKILL.md:78
- `## Testing` — .claude/skills/steering-matcher/SKILL.md:82
- `## Anti-Patterns` — .claude/skills/steering-matcher/SKILL.md:90
- `## Verification` — .claude/skills/steering-matcher/SKILL.md:98
- `## Scripts` — .claude/skills/steering-matcher/SKILL.md:106
- `### get_applicable_steering.py` — .claude/skills/steering-matcher/SKILL.md:108
- `## Related` — .claude/skills/steering-matcher/SKILL.md:116

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/steering-matcher/scripts/get_applicable_steering.py`, language: Python 3, lines: 175
- documented invocation:
  - "python3 .claude/skills/steering-matcher/scripts/get_applicable_steering.py --files <file1> [<file2> ...]" — .claude/skills/steering-matcher/SKILL.md:113
- **executed:** yes
- actual command run: `python3 .claude/skills/steering-matcher/scripts/get_applicable_steering.py --files "src/claude/analyst.md" ".agents/security/TM-001-auth-flow.md" --steering-path ".agents/steering"`
- abridged stdout: `[]`
- **actual exit code:** 0
- documented exit codes vs. actual exit paths: none documented in SKILL.md vs. code exit paths: `return 0` at line 170.
- for validators/gates: can it exit non-zero? Exits 2 on invalid arguments via argparse.
- does the output match what the documentation claims? No, returns `[]` due to bug in `_glob_to_regex` regex replacement.

## Defects — required
- `missing-path` · .claude/skills/steering-matcher/SKILL.md:87 — Testing section instructs running `pytest .claude/skills/steering-matcher/tests/`, but `.claude/skills/steering-matcher/tests/` does not exist (test file is located at `tests/skills/steering-matcher/test_get_applicable_steering.py`).
- `doc-drift` · .claude/skills/steering-matcher/SKILL.md:17 — Triggers table references `get_applicable_steering.py` directly without specifying whether root or `scripts/` path is intended.

## Observations
- Sets model alias `haiku` via ADR-080 rule 3 to save cost on routing and mechanical tasks.
- Documents vendor-portability comment on line 125 explaining that linked paths `.agents/steering/README.md` and `.agents/archive/planning/enhancement-PROJECT-PLAN.md` are documentation citations that can be missing in consumer installs.

## Context cost
4840 bytes (SKILL.md) + 5494 bytes (scripts/get_applicable_steering.py) = 10334 bytes, ~2580 tokens.
