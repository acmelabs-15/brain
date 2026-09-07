---
package: matt
name: situational on-ramp
slug: situational-on-ramp
kind: pattern
package_phase: matt:Engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/wayfinder.md, sha256: 5e186ef2b90a77ccf7b48ff7c72bbc97fc5c2ba0abe316b91fefa206cb18430e}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# situational on-ramp

## Definition — verbatim
> "`wayfinder` is a **situational on-ramp**, not the default front door." — docs/engineering/wayfinder.md:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/wayfinder.md | 101 | defined here | Defines wayfinder as an on-ramp for efforts exceeding single-session capacity. |
| external/wayfinder.md | 82 | defined here | External guide characterization of wayfinder as a situational entry point. |

## Consumes
A complex initiative whose scale or ambiguity prevents direct execution in a standard single-session workflow.

## Produces
A charted decision map that decomposes the effort until it can merge back into to-spec.

## When applied
Applied when an idea is too large or uncertain to tackle through standard sequential planning.

## Sub-concepts
on-ramp

## Part of
wayfinder

## Implementation status
clean

## Design notes
A `situational on-ramp` is an entry pattern reserved for extraordinary or oversized tasks. In contrast to default front doors (like `grill-me` or standard spec development), wayfinder acts as a situational on-ramp that structures large, multi-session undertakings and eventually merges back into the standard pipeline.
