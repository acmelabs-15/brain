---
package: rjm
name: manufactured work
slug: manufactured-work
kind: pattern
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

# manufactured work

## Definition — verbatim
> "Detect and stop manufactured work after a deliverable appears done." — .claude/skills/avoiding-manufactured-work/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/avoiding-manufactured-work/SKILL.md | 4 | defined here | Skill description defining manufactured work as unsolicited follow-up tasks produced by reward-seeking activity. |

## Consumes
Proposed follow-up plans, issues, PRs, research memos, or backlog tickets created after task completion.

## Produces
Audit verdict terminating or shrinking unrequested tasks lacking a legitimate consumer.

## When applied
Immediately after a primary deliverable appears done, before opening follow-up tasks.

## Sub-concepts
reward-seeking-activity, reward-bias

## Part of
avoiding-manufactured-work

## Implementation status
defects: missing-path

## Design notes
Manufactured work refers to tasks, plans, or PRs that an agent produces not because a human user or specification requested them, but because model incentives reward continuous generation and perceived helpfulness. In rjm, detecting and stopping manufactured work prevents repo clutter, unnecessary review overhead, and scope creep.
