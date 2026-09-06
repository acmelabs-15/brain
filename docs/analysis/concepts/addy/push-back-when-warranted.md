---
package: addy
name: Push Back When Warranted
slug: push-back-when-warranted
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/using-agent-skills/SKILL.md, sha256: 8bdbecb2f98cff2dbb70b3852c67d8dca179b27d2b1042aac040866d258ad471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Push Back When Warranted

## Definition — verbatim
> "Sycophancy is a failure mode. \"Of course!\" followed by implementing a bad idea helps no one. Honest technical disagreement is more valuable than false agreement." — skills/using-agent-skills/SKILL.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/using-agent-skills/SKILL.md | 75 | defined here | Third core operating behavior instructing agents to reject sycophancy, point out flawed approaches, quantify downsides, and propose alternatives. |

## Consumes
Flawed proposals, suboptimal architectures, performance/security hazards.

## Produces
Concrete pushback articulating specific technical downsides and viable alternatives.

## When applied
When a requested approach has clear technical defects, risks, or performance liabilities.

## Sub-concepts
none

## Part of
core-operating-behaviors, using-agent-skills

## Implementation status
defects: cross-file-contradiction, internal-contradiction, doc-drift

## Design notes
An anti-sycophancy directive instructing agents to voice honest technical objections and provide quantified tradeoffs when a proposed approach is flawed, prioritizing genuine software quality over agreeable compliance.
