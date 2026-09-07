---
package: rjm
name: context-optimizer
slug: context-optimizer
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/SKILL.md, sha256: eb0f4a89d3aff53674b65870897195b1d75531ae2ab962f97f0b85bf5dbc8042}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# context-optimizer

## Definition — verbatim
> "name: context-optimizer" — .claude/skills/context-optimizer/SKILL.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-gather/SKILL.md | 4 | used here | Contrasted in description as the skill dedicated to compressing and placing skill text rather than gathering facts. |
| .claude/skills/context-optimizer/SKILL.md | 2 | defined here | Frontmatter name defining the context optimization, placement, and compression skill. |

## Consumes
Skill markdown files, token budgets, and placement decision frameworks.

## Produces
Pipe-delimited compressed skills (60-80% token reduction) and Skill vs Passive Context placement recommendations.

## When applied
Applied when designing or refactoring agent skills to minimize prompt token overhead and prevent context window exhaustion.

## Sub-concepts
code-mode-pattern, selective-mcp-exposure, proactive-handover-at-80-context

## Part of
skill-development

## Implementation status
clean

## Design notes
A context engineering technique and skill in rjm that evaluates whether instructions belong in active skills or passive context, and transforms verbose markdown into compact pipe-delimited tables to preserve model context.
