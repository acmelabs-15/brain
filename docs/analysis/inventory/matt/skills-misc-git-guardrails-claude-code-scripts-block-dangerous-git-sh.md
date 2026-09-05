---
package: matt
path: skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh
type: script
bytes: 507
unit: inv-matt-44
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh, sha256: 234922b83c0a1737ee7300806c21ac0f389b07aaeb65c2d71ccedafbc5e1ea4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh

## Purpose — required, verbatim
> "INPUT=$(cat)" — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:3 (no explicit purpose statement)

## Design intent — required
Shell script acting as a Claude Code `PreToolUse` hook to prevent the execution of destructive or irreversible git commands (`git push`, `git reset --hard`, `git clean -f`, `git branch -D`, `git checkout .`, `git restore .`). Reads JSON tool input from stdin, extracts `.tool_input.command` using `jq`, evaluates it against an array of regex patterns, and halts execution with exit code 2 if any dangerous pattern is matched.

## Phase — required
cross-phase

## Inputs — required
JSON payload read from stdin (`INPUT=$(cat)`), specifically `.tool_input.command`.

## Outputs — required
Stderr message on match; exit code 2 when blocked, exit code 0 when permitted.

## Invokes — required
none

## Invoked by — required
- script scripts/block-dangerous-git.sh — skills/misc/git-guardrails-claude-code/SKILL.md:28

## Concepts named — required, verbatim
- `INPUT` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:3 — defined here
- `COMMAND` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:4 — defined here
- `DANGEROUS_PATTERNS` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:6 — defined here

## Structure
- `#!/bin/bash` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:1
- `DANGEROUS_PATTERNS=(` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:6
- `for pattern in "${DANGEROUS_PATTERNS[@]}"; do` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:18
- `exit 0` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:25

## Scripts — required if type is script or the skill ships scripts
For each script:
- path, language, lines: `skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh`, Bash, 26 lines
- documented invocation:
  > "echo '{\"tool_input\":{\"command\":\"git push origin main\"}}' | <path-to-script>" — skills/misc/git-guardrails-claude-code/SKILL.md:92
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  `echo '{"tool_input": {"command": "git push origin main"}}' | bash sources/matt/skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh`
  stderr: `BLOCKED: 'git push origin main' matches dangerous pattern 'git push'. The user has prevented you from doing this.`
  exit code: 2
  `echo '{"tool_input": {"command": "git status"}}' | bash sources/matt/skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh`
  stdout: none, exit code: 0
- documented exit codes vs. actual exit paths in code:
  Documented:
  > "Should exit with code 2 and print a BLOCKED message to stderr." — skills/misc/git-guardrails-claude-code/SKILL.md:95
  Actual exit paths:
  `exit 2` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:21
  `exit 0` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:25
- for validators/gates: can it exit non-zero? yes, exits 2 when a dangerous pattern matches. does it fail on the source repo's own default branch? N/A (validates command strings passed via stdin, not repo repository state).
- does the output match what the documentation claims? yes, exits 2 with a BLOCKED message on stderr when a dangerous pattern is detected, and exits 0 when safe.

## Defects — required
none

## Observations
Relies on external binary `jq` being installed in the execution environment (`jq -r '.tool_input.command'`). If `jq` is absent, the command extraction fails. Pattern matching uses `grep -qE "$pattern"`.

## Context cost
507 bytes (~130 tokens). Hook execution script.
