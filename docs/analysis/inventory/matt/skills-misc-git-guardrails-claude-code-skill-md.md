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
verified: 2026-09-05 quote-check+coverage
---

# skills/misc/git-guardrails-claude-code/SKILL.md

## Purpose — required, verbatim
> "Sets up a PreToolUse hook that intercepts and blocks dangerous git commands before Claude executes them." — skills/misc/git-guardrails-claude-code/SKILL.md:8

## Design intent — required
Setup skill for installing Claude Code PreToolUse guardrails that protect git repositories from destructive commands executed by the autonomous agent. Guides the user through choosing installation scope (project-level `.claude/settings.json` versus global `~/.claude/settings.json`), copies the bundled hook script, configures hook settings, allows pattern customization, and validates hook enforcement.

## Phase — required
none

## Inputs — required
User scope selection (project-level `.claude/settings.json` vs global `~/.claude/settings.json`), bundled hook script `scripts/block-dangerous-git.sh`, and optional pattern customizations.

## Outputs — required
Installed hook script at `.claude/hooks/block-dangerous-git.sh` or `~/.claude/hooks/block-dangerous-git.sh` (`chmod +x`), and updated `hooks.PreToolUse` configuration merged into `.claude/settings.json` or `~/.claude/settings.json`.

## Invokes — required
- script block-dangerous-git.sh — skills/misc/git-guardrails-claude-code/SKILL.md:28

## Invoked by — required
- doc README.md — skills/misc/README.md:5

## Concepts named — required, verbatim
- `git-guardrails-claude-code` — skills/misc/git-guardrails-claude-code/SKILL.md:2 — defined here
- `PreToolUse` — skills/misc/git-guardrails-claude-code/SKILL.md:8 — used here
- `git push` — skills/misc/git-guardrails-claude-code/SKILL.md:12 — used here
- `git reset --hard` — skills/misc/git-guardrails-claude-code/SKILL.md:13 — used here
- `git clean -f` — skills/misc/git-guardrails-claude-code/SKILL.md:14 — used here
- `git clean -fd` — skills/misc/git-guardrails-claude-code/SKILL.md:14 — used here
- `git branch -D` — skills/misc/git-guardrails-claude-code/SKILL.md:15 — used here
- `git checkout .` — skills/misc/git-guardrails-claude-code/SKILL.md:16 — used here
- `git restore .` — skills/misc/git-guardrails-claude-code/SKILL.md:16 — used here
- `settings.json` — skills/misc/git-guardrails-claude-code/SKILL.md:24 — used here
- `block-dangerous-git.sh` — skills/misc/git-guardrails-claude-code/SKILL.md:28 — used here
- `chmod +x` — skills/misc/git-guardrails-claude-code/SKILL.md:35 — used here

## Structure
- Setup Git Guardrails — skills/misc/git-guardrails-claude-code/SKILL.md:6
- What Gets Blocked — skills/misc/git-guardrails-claude-code/SKILL.md:10
- Steps — skills/misc/git-guardrails-claude-code/SKILL.md:20
- 1. Ask scope — skills/misc/git-guardrails-claude-code/SKILL.md:22
- 2. Copy the hook script — skills/misc/git-guardrails-claude-code/SKILL.md:26
- 3. Add hook to settings — skills/misc/git-guardrails-claude-code/SKILL.md:37
- 4. Ask about customization — skills/misc/git-guardrails-claude-code/SKILL.md:83
- 5. Verify — skills/misc/git-guardrails-claude-code/SKILL.md:87

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
- for validators/gates: can exit non-zero (exit 2) when dangerous patterns match; exits 0 on benign commands.
- does the output match what the documentation claims? yes, exits 2 with expected BLOCKED message on stderr.

## Defects — required
none

## Observations
Demonstrates best practice for Claude Code hook integration by merging into existing `hooks.PreToolUse` configurations rather than overwriting existing settings files.

## Context cost
2313 bytes + 507 bytes (script) = 2820 bytes, ~650 tokens.
