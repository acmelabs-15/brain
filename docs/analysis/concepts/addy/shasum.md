---
package: addy
name: shasum
slug: shasum
kind: name-only
package_phase: none
implementation_in_scope: true
memo_inputs:
  - {path: hooks/sdd-cache-post.sh, sha256: cf60a60fd475cceaf8cefdf0462393b1be0d7a4a5a4ea54508172f36ec0883e5}
  - {path: hooks/sdd-cache-pre.sh, sha256: 853ad36f5e17e977060b92313e34b848ec1d321f2ac4aa657e9f3b9281cc0473}
  - {path: hooks/simplify-ignore.sh, sha256: 1256c677adbce33f3c361793d7dae2405fb02a7efc07b19cc8f42134def8a5cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# shasum

## Definition — verbatim
(used, not defined)
> "Dependencies: jq, curl, shasum (or sha256sum)." — hooks/sdd-cache-post.sh:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/sdd-cache-post.sh | 12 | used here | Listed as a shell dependency for computing SHA-256 cache key hashes. |
| hooks/sdd-cache-pre.sh | 16 | used here | Listed as a shell dependency for computing URL cache key hashes. |
| hooks/simplify-ignore.sh | 12 | used here | Listed as a shell dependency for computing file and block identifiers. |

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
shasum is a command-line cryptographic checksum utility rather than a software development lifecycle concept.
