---
package: matt
name: asset
slug: asset
kind: artifact
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/prototype.md, sha256: dba351ad5a0c4763e295b8c01b72bf57e2a757c1b642c18305939f0ad0090871}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# asset

## Definition — verbatim
(used, not defined)

> "A prototype ticket is resolved by the answer, and the prototype is linked from the map as an asset." — docs/engineering/prototype.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/prototype.md | 65 | used here | Refers to linking the built prototype artifact back to the decision ticket map as an asset. |

## Consumes
A completed prototype, research finding, or diagram.

## Produces
A referenced deliverable attached to a tracker ticket or wayfinder map.

## When applied
When resolving prototype or research decision tickets in wayfinder.

## Sub-concepts
none

## Part of
decision-tickets

## Implementation status
clean

## Design notes
In wayfinder's architecture, an asset is a concrete tangible artifact (such as a standalone HTML prototype or cited research document) linked to a decision ticket as proof of resolution, grounding abstract discussions in physical evidence.
