---
package: rjm
name: Consumer
slug: consumer
kind: role
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

# Consumer

## Definition — verbatim
> "Consumer: <named consumer or none>" — .claude/skills/avoiding-manufactured-work/SKILL.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/avoiding-manufactured-work/SKILL.md | 37 | defined here | Required output field identifying the concrete external entity demanding follow-up work. |

## Consumes
Proposed task or follow-up deliverable under audit.

## Produces
Identification of the user, issue, acceptance criterion, failing check, or blocked decision justifying work.

## When applied
In step 2 of the avoiding-manufactured-work workflow when auditing any proposed task.

## Sub-concepts
none

## Part of
avoiding-manufactured-work

## Implementation status
defects: missing-path

## Design notes
Consumer represents the required external justification entity for any follow-up task. Under rjm's anti-manufactured-work rules, work cannot exist in a vacuum; it must trace directly to a named consumer—such as a user, issue, acceptance criterion, failing check, review thread, or blocked downstream decision. If no consumer can be named, the work must not be created.
