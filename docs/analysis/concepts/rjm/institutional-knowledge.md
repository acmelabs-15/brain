---
package: rjm
name: institutional_knowledge
slug: institutional-knowledge
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/work-operating-model/SKILL.md, sha256: 5aca273423b51a4e91ac1deeba1ccee172dbde1cee2ece7742b4ad383e298273}
  - {path: .claude/skills/work-operating-model/references/entry-contract.md, sha256: 9bfe97c38efab32e56ef728c65d413db8603c60d9e0042d1e4cd6e29871fbab7}
  - {path: .claude/skills/work-operating-model/references/layer-questions.md, sha256: 48d8a3493d9e393d38398fe9b637b3fc84d7ccd2139c88f9a51453ea97a67f48}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# institutional_knowledge

## Definition — verbatim
> "What lives in someone's head and not in a doc?" — .claude/skills/work-operating-model/SKILL.md:54

## Also called — verbatim
> "## Layer 4: Institutional Knowledge" — .claude/skills/work-operating-model/references/layer-questions.md:58

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/work-operating-model/references/entry-contract.md | 14 | defined here | Required top-level key in work-operating-model schema capturing tacit knowledge items. |
| .claude/skills/work-operating-model/references/layer-questions.md | 58 | defined here | Layer 4 interview protocol uncovering critical undocumented knowledge and single-point-of-failure owners. |
| .claude/skills/work-operating-model/SKILL.md | 54 | defined here | Layer 4 of the 5-layer operating model mapping undocumented tribal knowledge and key person dependencies. |

## Consumes
Interview disclosures regarding onboarding friction, repeated questions, undocumented decisions, and single-point-of-failure domain owners.

## Produces
Structured `institutional_knowledge.tacit` list mapping topics, owners, and documentation status (`none` or `partial`).

## When applied
Applied during Layer 4 of the 5-layer work-operating-model interview to identify tribal knowledge risks.

## Sub-concepts
none

## Part of
5-layer-interview, work-operating-model

## Implementation status
clean

## Design notes
`institutional_knowledge` is Layer 4 of the work-operating-model elicitation protocol, specifically designed to surface tribal knowledge and single-point-of-failure domain ownership. By explicitly constraining the artifact to items with `none` or `partial` documentation status, it avoids duplicating existing docs and focuses downstream planning on vulnerable organizational blind spots.
