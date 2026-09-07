---
package: rjm
name: cloudmcp
slug: cloudmcp
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-018-cache-invalidation-strategy.md, sha256: 22609083ce567ec0d1ec08676d19df35943dc5d29c8a7e86e959436b5954719b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# cloudmcp

## Definition — verbatim
(used, not defined)

> "### Option 3: External Cache (cloudmcp)" — .agents/architecture/ADR-018-cache-invalidation-strategy.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-018-cache-invalidation-strategy.md | 72 | used here | Named as the external memory graph provider considered for persistent caching. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
External memory graph service identifier rather than a development lifecycle concept.
