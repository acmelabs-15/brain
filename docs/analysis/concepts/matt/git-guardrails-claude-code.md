---
package: matt
name: git-guardrails-claude-code
slug: git-guardrails-claude-code
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/README.md, sha256: 95f0b467b7f3a2bb27421c6536f35392b6846f5ad26b44ab7df00380ed02edf0}
  - {path: skills/misc/git-guardrails-claude-code/SKILL.md, sha256: 69b291d655626a01602b998a1836fcb93c058ede68dfafddfd71e87f17074764}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# git-guardrails-claude-code

## Definition — verbatim
> "Sets up a PreToolUse hook that intercepts and blocks dangerous git commands before Claude executes them." — skills/misc/git-guardrails-claude-code/SKILL.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/git-guardrails-claude-code/SKILL.md | 2 | defined here | Frontmatter skill name defining the git guardrails setup procedure. |
| skills/misc/README.md | 5 | used here | Catalog entry describing the skill for setting up Claude Code hooks to block dangerous git commands. |

## Consumes
User selection of installation scope (project vs global) and optional blocked pattern customizations.

## Produces
Hook script at .claude/hooks/block-dangerous-git.sh (or ~/.claude/hooks/) and registered PreToolUse hook in settings.json.

## When applied
"Use when user wants to prevent destructive git operations, add git safety hooks, or block git push/reset in Claude Code." — skills/misc/git-guardrails-claude-code/SKILL.md:3

## Sub-concepts
pretooluse-hook, settings-json, chmod-x, this-project-only, all-projects

## Part of
none

## Implementation status
clean

## Design notes
An interactive setup procedure and skill in the misc bucket that installs an executable PreToolUse hook to intercept dangerous git commands (push, reset --hard, clean, branch -D) before Claude Code executes them. It ensures automated agents cannot inadvertently perform destructive repository mutations or data loss.
