---
package: matt
name: _Avoid_
slug: avoid
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
  - {path: skills/engineering/domain-modeling/CONTEXT-FORMAT.md, sha256: 17ab16ce783e4d2801ee52fd9acdf550cbf44de65ae76797a93943bbedf22a13}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# _Avoid_

## Definition — verbatim
> "Terms. What a thing **is**, in one or two sentences, with rejected synonyms under `_Avoid_`" — docs/engineering/domain-modeling.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/domain-modeling.md | 37 | defined here | Specified in the CONTEXT.md schema table as the section holding rejected synonyms for canonical terms. |
| external/domain-modeling.md | 30 | defined here | Mentioned in external documentation as the directive for listing non-canonical alternative words. |
| skills/engineering/domain-modeling/CONTEXT-FORMAT.md | 14 | defined here | Exemplified in the CONTEXT.md template format for documenting disallowed synonyms (e.g. Purchase, transaction). |

## Consumes
Synonyms, legacy terms, and conflicting colloquialisms identified during domain modeling.

## Produces
Explicit negative vocabulary constraints preventing agents and engineers from drifting to non-canonical synonyms.

## When applied
Whenever a canonical domain term is established in `CONTEXT.md` and confusing alternative terms must be barred.

## Sub-concepts
none

## Part of
domain-modeling

## Implementation status
clean in CONTEXT-FORMAT.md:14; associated with general domain-modeling documentation defects in docs/engineering/domain-modeling.md:44-45

## Design notes
The explicit negative vocabulary constraint in Matt's domain modeling format. By explicitly recording which synonymous words must NOT be used alongside the canonical definition, it stops agents and humans from drifting across synonyms.
