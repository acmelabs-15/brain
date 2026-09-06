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
verified: 2026-09-06 quote-check+coverage
---

# skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh

## Purpose — required, verbatim
> "echo \"BLOCKED: '$COMMAND' matches dangerous pattern '$pattern'. The user has prevented you from doing this.\" >&2" — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:20
(no explicit purpose statement; hook script to intercept and block destructive git commands)

## Design intent — required
Safety guardrail hook script for Claude Code's PreToolUse event. Intercepts Bash tool commands before execution, extracts the command via jq from JSON input on stdin, and matches against an array of destructive git patterns (such as push, hard reset, clean, force push, and branch deletion). Emits a blocking error message to stderr and exits with status 2 to abort command execution when a match is found.

## Phase — required
cross-phase

## Inputs — required
JSON object via stdin containing tool invocation data with path `.tool_input.command`.

## Outputs — required
Blocked error message on stderr if a dangerous pattern matches; nothing on stdout.

## Invokes — required
none

## Invoked by — required
- skill git-guardrails-claude-code — skills/misc/git-guardrails-claude-code/SKILL.md:28

## Concepts named — required, verbatim
- `INPUT` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:3 — defined here
- `COMMAND` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:4 — defined here
- `tool_input.command` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:4 — used here
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
- path: `skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh`, language: `bash`, lines: 26
- documented invocation: `echo '{"tool_input":{"command":"git push origin main"}}' | <path-to-script>` — skills/misc/git-guardrails-claude-code/SKILL.md:92
- **executed:** yes
- actual command run: `echo '{"tool_input":{"command":"git push origin main"}}' | bash sources/matt/skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh`
- abridged stdout: (empty stdout; stderr printed: `BLOCKED: 'git push origin main' matches dangerous pattern 'git push'. The user has prevented you from doing this.`)
- **actual exit code:** 2
- documented exit codes: "Should exit with code 2 and print a BLOCKED message to stderr." — skills/misc/git-guardrails-claude-code/SKILL.md:95 vs. actual exit paths in code: `exit 2` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:21, `exit 0` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:25
- for validators/gates: safety gate. Exits 2 on dangerous commands (tested with `git push origin main`). Exits 0 on permitted commands (tested with `{"tool_input":{"command":"git status"}}`).
- does the output match what the documentation claims? yes, exits code 2 and prints BLOCKED message to stderr.

## Defects — required
none

## Observations
Relies on jq being installed in the environment to parse `.tool_input.command`. Pattern matching uses `grep -qE`, which checks if any substring in COMMAND matches the regex.

## Context cost
507 bytes, 26 lines, approximately 120 tokens.
