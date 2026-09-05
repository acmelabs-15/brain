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
verified: 2026-09-05 quote-check+coverage
---

# skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh

## Purpose — required, verbatim
> "BLOCKED: '$COMMAND' matches dangerous pattern '$pattern'. The user has prevented you from doing this." — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:20
(blocking message emitted to stderr; no explicit purpose comment in script header)

## Design intent — required
Bash hook script designed to be run during Claude Code's PreToolUse hook event for Bash tool invocations. Intercepts commands on stdin, parses `.tool_input.command` using jq, and validates the command string against a blacklist of destructive git operations (including push, force push, hard reset, clean, checkout/restore dot, and branch deletion). Exits with status 2 to instruct Claude Code to abort execution when a dangerous pattern is detected.

## Phase — required
none

## Inputs — required
JSON payload passed to stdin by Claude Code containing tool execution parameters (`.tool_input.command`).

## Outputs — required
Informative error message printed to stderr when blocked (`BLOCKED: '$COMMAND' matches dangerous pattern '$pattern'. The user has prevented you from doing this.`). Exits status 0 silently when the command does not match any dangerous pattern.

## Invokes — required
none

## Invoked by — required
- skill git-guardrails-claude-code — skills/misc/git-guardrails-claude-code/SKILL.md:28

## Concepts named — required, verbatim
- `tool_input` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:4 — used here
- `DANGEROUS_PATTERNS` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:6 — defined here
- `git push` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:7 — defined here
- `git reset --hard` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:8 — defined here
- `git clean -fd` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:9 — defined here
- `git clean -f` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:10 — defined here
- `git branch -D` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:11 — defined here
- `git checkout \.` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:12 — defined here
- `git restore \.` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:13 — defined here
- `push --force` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:14 — defined here
- `reset --hard` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:15 — defined here
- `BLOCKED` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:20 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh`, bash, 26 lines
- documented invocation: "echo '{\"tool_input\":{\"command\":\"git push origin main\"}}' | <path-to-script>" — skills/misc/git-guardrails-claude-code/SKILL.md:92
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `echo '{"tool_input":{"command":"git push origin main"}}' | bash sources/matt/skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh`
  Stdout: none; Stderr: `BLOCKED: 'git push origin main' matches dangerous pattern 'git push'. The user has prevented you from doing this.`
  **actual exit code:** 2
- documented exit codes vs. actual exit paths in code:
  Documented exit codes: "Should exit with code 2 and print a BLOCKED message to stderr." — skills/misc/git-guardrails-claude-code/SKILL.md:95
  Actual exit paths: `exit 2` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:21; `exit 0` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:25
- for validators/gates: can exit non-zero (exit 2) when dangerous patterns match; exits 0 on benign commands (`echo '{"tool_input":{"command":"git status"}}' | bash ...` exits 0).
- does the output match what the documentation claims? yes, exits 2 with expected BLOCKED message on stderr.

## Defects — required
none

## Observations
The script relies on `jq` to parse JSON from stdin without verifying whether `jq` is installed. It leverages Claude Code's PreToolUse exit code 2 convention to prevent destructive actions and explain the block to the model.

## Context cost
507 bytes, 26 lines, approximately 120 tokens.
