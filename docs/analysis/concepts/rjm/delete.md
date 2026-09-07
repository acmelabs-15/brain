---
package: rjm
name: delete
slug: delete
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/avoiding-manufactured-work/SKILL.md, sha256: dabcb96a0c4d6575feac1b833b4402e6d81db7e20422444726beffd8edaeafc5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# delete

## Definition — verbatim
> "5. Report the disposition as one of: keep, shrink, defer, or delete." — .claude/skills/avoiding-manufactured-work/SKILL.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/avoiding-manufactured-work/SKILL.md | 22 | defined here | Disposition verdict discarding work that is speculative, reputational, performative, or lacks a consumer. |

## Consumes
Proposed tasks, backlog items, or artifacts lacking a concrete downstream consumer.

## Produces
Immediate termination and discard of the proposed work without lingering tasks or artifacts.

## When applied
In step 5 of avoiding manufactured work when work is speculative, performative, or unprompted.

## Sub-concepts
none

## Part of
disposition

## Implementation status
defects: missing-path

## Design notes
Delete is the rejection verdict in avoiding manufactured work. It instructs agents to discard proposed follow-up tasks outright when they are speculative, performative, or created solely to make the agent appear thorough. Rather than letting unneeded backlog items linger or burden human review, delete eliminates them immediately.
