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
verified: 2026-09-04 quote-check+coverage
---

# skills/misc/git-guardrails-claude-code/SKILL.md

## Purpose — required, verbatim
> "Sets up a PreToolUse hook that intercepts and blocks dangerous git commands before Claude executes them." — skills/misc/git-guardrails-claude-code/SKILL.md:8

## Design intent — required
Guides the user through setting up a Claude Code `PreToolUse` hook using the bundled `block-dangerous-git.sh` script. Prompts the user to choose project-level or global scope (`.claude/settings.json` vs `~/.claude/settings.json`), copies the script to `.claude/hooks/`, configures the hook command JSON in settings, allows customization of blocked patterns, and verifies hook operation with a test invocation.

## Phase — required
cross-phase

## Inputs — required
User scope preference (project-level `.claude/settings.json` or global `~/.claude/settings.json`), optional pattern customizations.

## Outputs — required
Copied script at `.claude/hooks/block-dangerous-git.sh` or `~/.claude/hooks/block-dangerous-git.sh`, configuration added or merged into `.claude/settings.json` or `~/.claude/settings.json`.

## Invokes — required
- script scripts/block-dangerous-git.sh — skills/misc/git-guardrails-claude-code/SKILL.md:28

## Invoked by — required
- doc skills/misc/README.md — skills/misc/README.md:5

## Concepts named — required, verbatim
- `PreToolUse` — skills/misc/git-guardrails-claude-code/SKILL.md:8 — used here
- `git push` — skills/misc/git-guardrails-claude-code/SKILL.md:12 — used here
- `git reset --hard` — skills/misc/git-guardrails-claude-code/SKILL.md:13 — used here
- `git clean -f` — skills/misc/git-guardrails-claude-code/SKILL.md:14 — used here
- `git branch -D` — skills/misc/git-guardrails-claude-code/SKILL.md:15 — used here
- `git checkout .` — skills/misc/git-guardrails-claude-code/SKILL.md:16 — used here

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
For each script:
- path, language, lines: `skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh`, Bash, 26 lines
- documented invocation:
  > "echo '{\"tool_input\":{\"command\":\"git push origin main\"}}' | <path-to-script>" — skills/misc/git-guardrails-claude-code/SKILL.md:92
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  `echo '{"tool_input": {"command": "git push origin main"}}' | bash sources/matt/skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh`
  stderr: `BLOCKED: 'git push origin main' matches dangerous pattern 'git push'. The user has prevented you from doing this.`
  exit code: 2
- documented exit codes vs. actual exit paths in code:
  Documented:
  > "Should exit with code 2 and print a BLOCKED message to stderr." — skills/misc/git-guardrails-claude-code/SKILL.md:95
  Actual exit paths:
  `exit 2` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:21
  `exit 0` — skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh:25
- for validators/gates: can it exit non-zero? yes, exits 2 on matching a dangerous pattern. does it fail on the source repo's own default branch? N/A (validates command strings from stdin).
- does the output match what the documentation claims? yes, exits 2 with a BLOCKED message on stderr.

## Defects — required
- `doc-drift` · skills/misc/git-guardrails-claude-code/SKILL.md:18: Claims message tells Claude "it does not have authority to access these commands", whereas `scripts/block-dangerous-git.sh:20` actually outputs "The user has prevented you from doing this."

## Observations
Documents the Claude Code JSON configuration schema for `PreToolUse` hooks matching `Bash` commands, illustrating how Claude Code settings files can enforce safety boundaries.

## Context cost
2313 bytes (~550 tokens); 2820 bytes (~700 tokens) including bundled script.
