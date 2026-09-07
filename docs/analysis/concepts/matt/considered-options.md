---
package: matt
name: Considered Options
slug: considered-options
kind: template
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/domain-modeling/ADR-FORMAT.md, sha256: 944c92aa790e8fbdc9199640b170979abb8a34ba8d0fe18c2a01a63bce140ca0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Considered Options

## Definition — verbatim
> "- **Considered Options**: only when the rejected alternatives are worth remembering" — skills/engineering/domain-modeling/ADR-FORMAT.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/domain-modeling/ADR-FORMAT.md | 22 | defined here | Defined as an optional ADR section for recording rejected design alternatives when non-obvious. |

## Consumes
Evaluated architectural alternatives and trade-off rationales.

## Produces
A documented list of rejected alternatives within an ADR to prevent recurring debates.

## When applied
When the rejected alternatives considered during an architectural decision are non-obvious and worth remembering.

## Sub-concepts
none

## Part of
adr-format

## Implementation status
clean

## Design notes
An optional section in matt's ADR template used specifically to record rejected alternatives whose dismissal was non-obvious, preventing future engineers from re-litigating previously evaluated and discarded architectures.
