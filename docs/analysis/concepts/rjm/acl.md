---
package: rjm
name: ACL
slug: acl
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ACL

## Definition — verbatim
> "- **Anti-Corruption Layer (ACL)**: a translation layer at the boundary between two bounded contexts that prevents the model of one from leaking into the other." — .claude/skills/software-engineering-library/references/domain-driven-design.md:23

## Also called — verbatim
`Anti-Corruption Layer` — .claude/skills/software-engineering-library/references/domain-driven-design.md:23

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 23 | defined here | Core vocabulary entry defining ACL as the standard abbreviation for Anti-Corruption Layer. |

## Consumes
Foreign data models, third-party schemas, or external integration payloads.

## Produces
Context-native domain objects and isolated domain boundaries.

## When applied
Applied at bounded context integration seams to prevent foreign model bleed.

## Sub-concepts
none

## Part of
context-mapping

## Implementation status
clean

## Design notes
ACL is the standard architectural acronym for Anti-Corruption Layer, providing a concise term for translation boundaries that protect internal domain models from foreign system leakage.
