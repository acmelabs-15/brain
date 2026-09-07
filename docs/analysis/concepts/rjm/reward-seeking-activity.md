---
package: rjm
name: reward-seeking activity
slug: reward-seeking-activity
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

# reward-seeking activity

## Definition — verbatim
> "acceptance criterion, or blocked decision instead of reward-seeking activity." — .claude/skills/avoiding-manufactured-work/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/avoiding-manufactured-work/SKILL.md | 4 | defined here | Contrasted against real user demand, acceptance criteria, or blocked decisions as the false driver of manufactured work. |

## Consumes
Implicit model incentives rewarding verbosity and generative thoroughness.

## Produces
Performative artifacts, speculative issues, and unneeded follow-up documentation.

## When applied
When evaluating whether proposed follow-up work has legitimate external justification.

## Sub-concepts
none

## Part of
manufactured-work

## Implementation status
defects: missing-path

## Design notes
Reward-seeking activity denotes the generative bias where an agent manufactures extra work—such as unsolicited refactoring, unnecessary research memos, or speculative future plans—to appear diligent. The avoiding-manufactured-work skill establishes strict tests to verify that work stems from concrete user demand rather than internal reward-seeking impulses.
