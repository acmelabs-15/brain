---
package: rjm
name: Git fallback
slug: git-fallback
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/reflect/references/decision-tree-and-examples.md, sha256: 46f4aed79b61e679bd36e14e541a120c0b562c2ba5c11c7b240c73c5eb51ae33}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Git fallback

## Definition — verbatim
> "└─► Serena unavailable? → Use Git fallback" — .claude/skills/reflect/references/decision-tree-and-examples.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/decision-tree-and-examples.md | 26 | defined here | Decision tree branch selecting Git filesystem writes when Serena MCP server is unavailable. |

## Consumes
Approved observation updates and session memory diffs.

## Produces
Local filesystem commits to `.serena/memories/{skill-name}-observations.md` via Git.

## When applied
When Serena MCP is not running or unreachable during memory persistence in reflection.

## Sub-concepts
none

## Part of
reflect

## Implementation status
clean

## Design notes
A durability resiliency pattern ensuring that agent reflections and skill observations are persisted directly to disk using standard Git version control whenever the primary Serena MCP service is unreachable, preventing loss of learnings across sessions.
