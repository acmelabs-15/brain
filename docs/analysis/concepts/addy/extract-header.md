---
package: addy
name: extract_header
slug: extract-header
kind: name-only
package_phase: none
implementation_in_scope: true
memo_inputs:
  - {path: hooks/sdd-cache-post.sh, sha256: cf60a60fd475cceaf8cefdf0462393b1be0d7a4a5a4ea54508172f36ec0883e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# extract_header

## Definition — verbatim
(used, not defined)
> "extract_header() {" — hooks/sdd-cache-post.sh:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/sdd-cache-post.sh | 92 | defined here | Shell helper function extracting case-insensitive HTTP header values from curl output. |

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
extract_header is an internal bash helper function identifier for parsing HTTP response headers rather than a software development lifecycle concept.
