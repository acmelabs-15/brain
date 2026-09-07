---
package: rjm
name: Cynic
slug: cynic
kind: role
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Cynic

## Definition — verbatim
> "| **Cynic** | What the author is quietly assuming will go right | Unstated assumptions, failure modes the prose ignores, optimistic estimates with no basis. |" — .claude/agents/critic.md:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/critic.md | 68 | defines | Persona table row surfacing unstated assumptions, unaddressed failure modes, and optimistic estimates. |
| templates/agents/critic.shared.md | 72 | defines | Shared template persona row challenging unspoken assumptions and missing failure planning. |

## Consumes
Plans, schedules, and technical proposals.

## Produces
Findings exposing optimistic bias, hidden dependencies, and unmitigated failure modes.

## When applied
Applied during persona evaluation of written prose plans.

## Sub-concepts
none

## Part of
persona-evaluation

## Implementation status
defects: missing-path

## Design notes
A skeptical review persona dedicated to surfacing unstated assumptions, unaddressed failure paths, and unwarranted optimism in technical plans.
