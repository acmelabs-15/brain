---
package: rjm
name: User corrections
slug: user-corrections
kind: technique
package_phase: rjm:research
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# User corrections

## Definition — verbatim
> "User corrections.** Every \"no\" or \"wrong\" is a candidate pattern; the `reflect` skill captures them with confidence levels." — .claude/skills/ai-agents-research-methodology/SKILL.md:212-213

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-methodology/SKILL.md | 212 | defined here \| used here | Defined as an essential source of empirical ideas where user feedback is converted into candidate patterns. |

## Consumes
User interventions, negative corrections ("no", "wrong"), and behavioral adjustments during interactive sessions.

## Produces
Captured reflection memories, confidence-scored feedback patterns, and candidate rules for skillbook graduation.

## When applied
During agent-user interactions whenever the human user corrects model behavior or rejects an agent proposal.

## Sub-concepts
none

## Part of
ai-agents-research-methodology

## Implementation status
defects: missing-path

## Design notes
User corrections serve as a real-time learning stream for agent adaptation. In rjm, treating user objections not merely as localized conversational repairs but as empirical learning opportunities enables the reflection skill to capture recurring misconceptions, providing the raw inputs that eventually feed auto-proposal and guard generation pipelines.
