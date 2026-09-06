---
package: rjm
path: .claude/skills/analyze/references/DEVELOPMENT.md
type: reference
bytes: 2439
unit: inv-rjm-88
in_scope_via: .claude/skills/analyze/SKILL.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/DEVELOPMENT.md, sha256: 5602933212eb69cbc09c0bc6999de9cfa4f8631ca9ee973ad271013c504002bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/skills/analyze/references/DEVELOPMENT.md

## Purpose — required, verbatim
> "Systematic codebase analysis skill. The script (`scripts/analyze.py`) IS the workflow. It outputs REQUIRED ACTIONS at each step. Follow them exactly. Do NOT explore the codebase before invoking the script." — .claude/skills/analyze/references/DEVELOPMENT.md:5

## Design intent — required
Contributor guide and architectural specification for modifying and testing the `analyze` skill. It formalizes the "script-driven workflow" pattern where `scripts/analyze.py` acts as a state machine generating structured guidance at each phase. It maps out each phase to its corresponding Python function in `analyze.py`, defines expected exit codes, provides step-by-step instructions for extending the skill with new investigation dimensions (e.g., accessibility), and provides three canonical bash test commands to validate step 1, step 6, and minimum step validation.

## Phase — required
cross-phase

## Inputs — required
- Skill development specifications and test scenarios for `scripts/analyze.py` (.claude/skills/analyze/references/DEVELOPMENT.md:44-62)

## Outputs — required
none

## Invokes — required
- script analyze.py — .claude/skills/analyze/references/DEVELOPMENT.md:12

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Development Guide` — .claude/skills/analyze/references/DEVELOPMENT.md:1 — defined here | used here
- `script-driven workflow` — .claude/skills/analyze/references/DEVELOPMENT.md:17 — defined here | used here
- `state machine` — .claude/skills/analyze/references/DEVELOPMENT.md:17 — defined here | used here
- `Phase Map` — .claude/skills/analyze/references/DEVELOPMENT.md:24 — defined here | used here
- `Exploration` — .claude/skills/analyze/references/DEVELOPMENT.md:28 — defined here | used here
- `Focus Selection` — .claude/skills/analyze/references/DEVELOPMENT.md:29 — defined here | used here
- `Investigation Planning` — .claude/skills/analyze/references/DEVELOPMENT.md:30 — defined here | used here
- `Deep Analysis` — .claude/skills/analyze/references/DEVELOPMENT.md:31 — defined here | used here
- `Verification` — .claude/skills/analyze/references/DEVELOPMENT.md:32 — defined here | used here
- `Synthesis` — .claude/skills/analyze/references/DEVELOPMENT.md:33 — defined here | used here
- `Exit Codes` — .claude/skills/analyze/references/DEVELOPMENT.md:35 — defined here | used here

## Structure
- `# skills/analyze/ Development Guide` — .claude/skills/analyze/references/DEVELOPMENT.md:1
- `## Overview` — .claude/skills/analyze/references/DEVELOPMENT.md:3
- `## File Index` — .claude/skills/analyze/references/DEVELOPMENT.md:7
- `## Architecture` — .claude/skills/analyze/references/DEVELOPMENT.md:15
- `### Phase Map` — .claude/skills/analyze/references/DEVELOPMENT.md:24
- `### Exit Codes` — .claude/skills/analyze/references/DEVELOPMENT.md:35
- `## Extending` — .claude/skills/analyze/references/DEVELOPMENT.md:42
- `## Testing` — .claude/skills/analyze/references/DEVELOPMENT.md:50

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · .claude/skills/analyze/references/DEVELOPMENT.md:1 · File resides under `references/` but is not referenced or invoked by `.claude/skills/analyze/SKILL.md` or any other in-scope file.
- exit-code-mismatch · .claude/skills/analyze/references/DEVELOPMENT.md:40 · Claims exit code 1 represents invalid arguments including missing required flags, but argparse in analyze.py exits with code 2 on missing required arguments.

## Observations
Unlike other reference files in this skill, `DEVELOPMENT.md` does not have frontmatter with a `source: wiki/...` link; it is a repository-native contributor guide.

## Context cost
2439 bytes + 26407 bytes from invoked `scripts/analyze.py` = 28846 bytes. Approximately 7200 tokens.
