---
package: rjm
name: CLAUDE.md Pattern
slug: claude-md-pattern
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompting-anti-patterns.md, sha256: bb3bb55f446fe40863d1d4460e2885e4f1115d196236896d4107656891eb1bc2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CLAUDE.md Pattern

## Definition — verbatim
> "### Engineering Restraint (CLAUDE.md Pattern)" — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:51
> "Priority order with explicit conflict resolution:" — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompting-anti-patterns.md | 51 | defined here | Contextualized as the standard architectural implementation of engineering restraint within project-level instruction files. |

## Consumes
Project engineering standards, architectural boundaries, and tooling guidelines.

## Produces
Structured root instruction files that guide autonomous agent interactions with explicit negative constraints.

## When applied
When configuring repository-level instructions for coding agents and developer workflows.

## Sub-concepts
engineering-restraint

## Part of
none

## Implementation status
clean

## Design notes
The CLAUDE.md Pattern embodies engineering restraint in repository-level agent instruction files. It defines strict priority hierarchies, explicit non-goals, and negative behavioral constraints, ensuring that autonomous coding agents do not drift into speculative refactoring or unnecessary architecture.
