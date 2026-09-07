---
package: matt
name: prototyping
slug: prototyping
kind: technique
package_phase: matt:situational on-ramp
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# prototyping

## Definition — verbatim
(used, not defined)

> "Wayfinder is &quot;prototypemaxxing&quot;, not &quot;planmaxxing&quot;." — external/wayfinder.md:60

## Also called — verbatim
`prototype` — external/wayfinder.md:47

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wayfinder.md | 60 | used here | Highlights aggressive prototyping as the mechanism that prevents wayfinding from collapsing into waterfall planning. |

## Consumes
Technical uncertainty or unverified assumptions along the wayfinding frontier.

## Produces
Disposable, concrete spike implementations that flush out reality before architecture is finalized.

## When applied
Chosen when facing a foggy decision ticket where building a small experimental artifact is cheaper than debating in the abstract.

## Sub-concepts
none

## Part of
wayfinder

## Implementation status
clean

## Design notes
Prototyping is the empirical engine of Wayfinder. Rather than building elaborate speculative roadmaps, Wayfinder relies on rapid, disposable prototypes to flush out technical constraints and invalidate bad assumptions early, keeping multi-session planning agile and evidence-driven.
