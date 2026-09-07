---
package: rjm
name: FM-CONTRACT
slug: fm-contract
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/SKILL.md, sha256: 6045e2128544421d2a3ee0975b4487b1213f9890c14e4adc023642bbb8355bee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# FM-CONTRACT

## Definition — verbatim
> "FM-CONTRACT was once invented in a retro and had to be corrected to" — .claude/skills/ai-agents-failure-archaeology/SKILL.md:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 78 | defined here | Cited as a cautionary example of an ad-hoc failure mode invented in a retro that was corrected to FM-11. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
failure-mode-catalog

## Implementation status
defects: doc-drift

## Design notes
FM-CONTRACT is an ad-hoc, invalid failure mode identifier mistakenly created in an incident retrospective and subsequently normalized into the canonical failure mode FM-11 (customer-facing generated artifact shipped without runtime verification). It is not an active lifecycle concept, but an illustrative anti-example of taxonomy fragmentation.
