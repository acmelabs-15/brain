---
package: addy
name: curl
slug: curl
kind: name-only
package_phase: none
implementation_in_scope: true
memo_inputs:
  - {path: hooks/sdd-cache-post.sh, sha256: cf60a60fd475cceaf8cefdf0462393b1be0d7a4a5a4ea54508172f36ec0883e5}
  - {path: hooks/sdd-cache-pre.sh, sha256: 853ad36f5e17e977060b92313e34b848ec1d321f2ac4aa657e9f3b9281cc0473}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# curl

## Definition — verbatim
(used, not defined)
> "Dependencies: jq, curl, shasum (or sha256sum)." — hooks/sdd-cache-post.sh:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/sdd-cache-post.sh | 12 | used here | Listed as a shell dependency for issuing HEAD requests to capture origin HTTP headers. |
| hooks/sdd-cache-pre.sh | 16 | used here | Listed as a shell dependency for issuing conditional HEAD requests to origin servers. |

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
curl is a command-line HTTP transfer utility rather than a software development lifecycle concept.
