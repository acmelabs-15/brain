---
package: rjm
name: Claude Skills
slug: claude-skills
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-012-skill-catalog-mcp.md, sha256: c0bc4972bfdc4425b58e321e7105effe6b54dbd374825f9e0817bea2dac6a279}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Claude Skills

## Definition — verbatim
> "1. **Claude Skills** (`.claude/skills/`): Executable PowerShell scripts for GitHub operations, steering matching" — .agents/architecture/ADR-012-skill-catalog-mcp.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-012-skill-catalog-mcp.md | 26 | used here | Defined in context as the repository of executable PowerShell scripts in .claude/skills/ for GitHub operations. |

## Consumes
Task intent, command parameters, GitHub CLI credentials.

## Produces
Deterministic tool executions, PR comments, review submissions, and steering selections.

## When applied
Invoked by Claude Code agents whenever deterministic executable capabilities are needed for GitHub and workflow automation.

## Sub-concepts
none

## Part of
skill-catalog-mcp, skills-pattern

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Claude Skills represent executable skill artifacts located under `.claude/skills/`, packaging PowerShell scripts and `SKILL.md` manifests to execute operational workflows safely. They provide structured, auditable automation alternatives to raw command line execution in the Claude Code environment.
