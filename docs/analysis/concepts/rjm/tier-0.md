---
package: rjm
name: Tier 0
slug: tier-0
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/security-zero-trust.md, sha256: d85765e15d48f30562264cd967c18952978ab3f76ff0c35fe846048d1888dc26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tier 0

## Definition — verbatim
(used, not defined)

> "| Tier 0 | Identity infrastructure | Domain controllers, AD, Azure AD |" — .claude/skills/threat-modeling/references/security-zero-trust.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-zero-trust.md | 60 | used here | Highest-privilege administrative tier containing core identity infrastructure. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
tier-model

## Implementation status
defects: missing-path

## Design notes
`Tier 0` is an administrative isolation taxonomy designation identifying core identity infrastructure rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
