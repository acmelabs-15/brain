---
package: matt
name: domain.md
slug: domain-md
kind: artifact
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# domain.md

## Definition — verbatim
> "domain.md" — external/setup-matt-pocock-skills.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/setup-matt-pocock-skills.md | 33 | defined here | Identified as the repository documentation artifact establishing ubiquitous domain terminology. |

## Consumes
Domain knowledge elicited during repo setup or domain modeling.

## Produces
A markdown file (docs/domain.md) containing product entity definitions and naming rules.

## When applied
Created during initial setup by /setup-matt-pocock-skills and referenced across engineering skills.

## Sub-concepts
none

## Part of
setup-matt-pocock-skills

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
domain.md is the primary artifact in Matt's toolkit for establishing a ubiquitous domain vocabulary. Placed at docs/domain.md, it documents precise definitions for core business entities and explicitly prohibited naming synonyms, providing coding agents with an unambiguous vocabulary boundary that prevents terminology drift across sessions.
