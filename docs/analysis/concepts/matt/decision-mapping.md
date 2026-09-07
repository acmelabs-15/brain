---
package: matt
name: decision-mapping
slug: decision-mapping
kind: technique
package_phase: matt:Engineering
implementation_in_scope: true
deprecated: true
memo_inputs:
  - {path: docs/engineering/wayfinder.md, sha256: 5e186ef2b90a77ccf7b48ff7c72bbc97fc5c2ba0abe316b91fefa206cb18430e}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# decision-mapping

## Definition — verbatim
> "Where did `decision-mapping` go?" — docs/engineering/wayfinder.md:86

## Also called — verbatim
> "wayfinder" — docs/engineering/wayfinder.md:87

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/wayfinder.md | 86 | used here | FAQ heading discussing the historical deprecation and renaming of the skill to wayfinder. |
| external/wayfinder.md | 69 | used here | External guide FAQ addressing the retirement of the decision-mapping terminology. |

## Consumes
An ambiguous architectural problem space requiring systematic decomposition.

## Produces
A structured set of decision tickets charting a navigable route toward project completion.

## When applied
Deprecated in v1.1; superseded by /wayfinder.

## Sub-concepts
none

## Part of
wayfinder

## Implementation status
clean

## Design notes
`decision-mapping` was the original name of the skill before being reframed and renamed to `wayfinder` in v1.1. The term was retired because 'decision map' was perceived as jargon and inaccurate, given that only a subset of map tickets were pure decisions; it is marked `deprecated: true`.
