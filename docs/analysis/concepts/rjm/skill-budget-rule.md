---
package: rjm
name: Skill Budget Rule
slug: skill-budget-rule
kind: gate
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
  - {path: .claude/skills/analyze/references/agent-architecture-patterns.md, sha256: 144e4d54f12f0d052ddca63e3d1f72022bbcd0720809e105b87449d1bab95253}
  - {path: .claude/skills/planner/SKILL.md, sha256: 37e67b69f3823d49f1c582e8630b9e55a7e88dc7159edca5c8a0c3c7463fa97e}
  - {path: .claude/skills/planner/references/agent-architecture-patterns.md, sha256: 9b480fa69cb3f4fe279f29126ca7717015e8d68df135b9d13394d7e63401b0bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Skill Budget Rule

## Definition — verbatim
> "## Skill Budget Rule" — .claude/skills/analyze/references/agent-architecture-patterns.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/agent-architecture-patterns.md | 11 | defined here | Defines the architectural rule capping agent skill assignment to 7-10 skills. |
| .claude/skills/analyze/SKILL.md | 71 | used here | References the rule under Agent Architecture Patterns for evaluating agent reliability. |
| .claude/skills/planner/references/agent-architecture-patterns.md | 11 | defined here | Defines the skill budget constraint mapping skills to binary-evaluable goals. |
| .claude/skills/planner/SKILL.md | 293 | used here | Cites the rule in the planner references table for agent system planning. |

## Consumes
Agent role specifications, task definitions, and available tool catalogs.

## Produces
Bounded skill allocation capping tools to 7-10 skills mapped to explicit goals.

## When applied
Applied during agent architecture design and decomposition when defining persona toolsets.

## Sub-concepts
none

## Part of
agent-architecture-patterns

## Implementation status
defects: missing-path, doc-drift

## Design notes
The Skill Budget Rule mandates that individual agent personas should be limited to 7-10 skills directly mapped to binary-evaluable goals. In rjm's multi-agent framework, exceeding this threshold causes cognitive degradation: tool selection becomes nondeterministic, context is diluted, and failure rates increase. Restricting agents to focused skill subsets ensures reliable autonomous execution.
