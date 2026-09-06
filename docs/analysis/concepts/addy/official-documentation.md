---
package: addy
name: Official documentation
slug: official-documentation
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

# Official documentation

## Definition — verbatim
> "| 1 | Official documentation | react.dev, docs.djangoproject.com, symfony.com/doc |" — skills/source-driven-development/SKILL.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/source-driven-development/SKILL.md | 71 | defined here | Highest priority (Priority 1) documentation source in the source hierarchy. |

## Consumes
The specific framework or library feature being implemented.

## Produces
Authoritative API signatures, usage examples, deprecation warnings, and version guidance.

## When applied
When fetching documentation during Step 2 of Source-Driven Development; always consulted first.

## Sub-concepts
none

## Part of
source-hierarchy

## Implementation status
defects: orphan, missing-path, doc-drift

## Design notes
Priority-one documentation tier maintained by library and framework authors (e.g., react.dev, docs.djangoproject.com), serving as the definitive ground truth for current API patterns and signatures.
