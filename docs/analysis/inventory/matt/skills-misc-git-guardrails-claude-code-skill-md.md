---
package: matt
path: skills/misc/git-guardrails-claude-code/SKILL.md
type: skill
bytes: 2313
unit: inv-matt-44
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/misc/git-guardrails-claude-code/SKILL.md, sha256: 69b291d655626a01602b998a1836fcb93c058ede68dfafddfd71e87f17074764}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/misc/git-guardrails-claude-code/SKILL.md

## Purpose — required, verbatim
> "Set up Claude Code hooks to block dangerous git commands (push, reset --hard, clean, branch -D, etc.) before they execute. Use when user wants to prevent destructive git operations, add git safety hooks, or block git push/reset in Claude Code." — skills/misc/git-guardrails-claude-code/SKILL.md:3

## Design intent — required
Interactive setup procedure for configuring Claude Code safety guardrails. Walks through prompting the user for scope (project-level vs. global), copying the bundled `block-dangerous-git.sh` script to `.claude/hooks/`, registering a PreToolUse hook in `settings.json`, offering pattern customization, and executing a verification test. Prevents unintended data loss from automated agent git commands.

## Phase — required
cross-phase

## Inputs — required
User selection of installation scope (project vs. global) and optional blocked pattern customizations.

## Outputs — required
Hook script copied to `.claude/hooks/block-dangerous-git.sh` or `~/.claude/hooks/block-dangerous-git.sh` and updated `.claude/settings.json` or `~/.claude/settings.json`.

## Invokes — required
- script scripts/block-dangerous-git.sh — skills/misc/git-guardrails-claude-code/SKILL.md:28

## Invoked by — required
- skill misc — skills/misc/README.md:5

## Concepts named — required, verbatim
- `git-guardrails-claude-code` — skills/misc/git-guardrails-claude-code/SKILL.md:2 — defined here
- `Claude Code hooks` — skills/misc/git-guardrails-claude-code/SKILL.md:3 — used here
- `PreToolUse hook` — skills/misc/git-guardrails-claude-code/SKILL.md:8 — defined here
- `git push` — skills/misc/git-guardrails-claude-code/SKILL.md:12 — used here
- `--force` — skills/misc/git-guardrails-claude-code/SKILL.md:12 — used here
- `git reset --hard` — skills/misc/git-guardrails-claude-code/SKILL.md:13 — used here
- `git clean -f` — skills/misc/git-guardrails-claude-code/SKILL.md:14 — used here
- `git clean -fd` — skills/misc/git-guardrails-claude-code/SKILL.md:14 — used here
- `git branch -D` — skills/misc/git-guardrails-claude-code/SKILL.md:15 — used here
- `git checkout .` — skills/misc/git-guardrails-claude-code/SKILL.md:16 — used here
- `git restore .` — skills/misc/git-guardrails-claude-code/SKILL.md:16 — used here
- `this project only` — skills/misc/git-guardrails-claude-code/SKILL.md:24 — defined here
- `all projects` — skills/misc/git-guardrails-claude-code/SKILL.md:24 — defined here
- `chmod +x` — skills/misc/git-guardrails-claude-code/SKILL.md:35 — used here
- `settings.json` — skills/misc/git-guardrails-claude-code/SKILL.md:24, 41 — used here
- `hooks.PreToolUse` — skills/misc/git-guardrails-claude-code/SKILL.md:81 — used here

## Structure
- `# Setup Git Guardrails` — skills/misc/git-guardrails-claude-code/SKILL.md:6
- `## What Gets Blocked` — skills/misc/git-guardrails-claude-code/SKILL.md:10
- `## Steps` — skills/misc/git-guardrails-claude-code/SKILL.md:20
- `### 1. Ask scope` — skills/misc/git-guardrails-claude-code/SKILL.md:22
- `### 2. Copy the hook script` — skills/misc/git-guardrails-claude-code/SKILL.md:26
- `### 3. Add hook to settings` — skills/misc/git-guardrails-claude-code/SKILL.md:37
- `### 4. Ask about customization` — skills/misc/git-guardrails-claude-code/SKILL.md:83
- `### 5. Verify` — skills/misc/git-guardrails-claude-code/SKILL.md:87

## Scripts — required if type is script or the skill ships scripts
- path: `skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh`, language: `bash`, lines: 26
- documented invocation: `echo '{"tool_input":{"command":"git push origin main"}}' | <path-to-script>` — skills/misc/git-guardrails-claude-code/SKILL.md:92
- **executed:** yes
- actual command run: `echo '{"tool_input":{"command":"git push origin main"}}' | bash sources/matt/skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh`
- abridged stdout: (empty stdout; stderr printed: `BLOCKED: 'git push origin main' matches dangerous pattern 'git push'. The user has prevented you from doing this.`)
- **actual exit code:** 2
- documented exit codes: "Should exit with code 2 and print a BLOCKED message to stderr." — skills/misc/git-guardrails-claude-code/SKILL.md:95 vs. actual exit paths in code: `exit 2` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:21, `exit 0` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:25
- for validators/gates: safety gate; exits 2 when input command contains blocked patterns, exits 0 on harmless commands.
- does the output match what the documentation claims? yes.

## Defects — required
none

## Observations
Explicitly instructs Claude Code on non-destructive JSON merging for settings (`hooks.PreToolUse` array merge), avoiding clobbering existing configuration.

## Context cost
2313 bytes, 96 lines, plus bundled script 507 bytes (2820 bytes total), approximately 650 tokens.
