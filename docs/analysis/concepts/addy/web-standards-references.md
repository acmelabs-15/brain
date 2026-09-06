---
package: addy
name: Web standards references
slug: web-standards-references
kind: reference
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/source-driven-development/SKILL.md, sha256: 719d4e54083c90ded62112fb41df3dbc4619309118ee0e6aa4d846f92d8204af}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Web standards references

## Definition — verbatim
> "| 3 | Web standards references | MDN, web.dev, html.spec.whatwg.org |" — skills/source-driven-development/SKILL.md:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/source-driven-development/SKILL.md | 73 | defined here | Priority 3 documentation source in the source hierarchy for platform specifications. |

## Consumes
Platform-level API requirements, browser features, and markup specifications.

## Produces
Vendor-neutral standards specifications and baseline platform documentation.

## When applied
When implementing features that rely on standard web platform APIs and browser capabilities.

## Sub-concepts
none

## Part of
source-hierarchy

## Implementation status
defects: orphan, missing-path, doc-drift

## Design notes
Priority-three documentation tier covering canonical web standards (MDN, web.dev, WHATWG), ensuring web platform features adhere to vendor-neutral specifications rather than proprietary workarounds.
