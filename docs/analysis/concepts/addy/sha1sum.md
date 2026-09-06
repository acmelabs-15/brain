---
package: addy
name: sha1sum
slug: sha1sum
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: hooks/simplify-ignore.sh, sha256: 1256c677adbce33f3c361793d7dae2405fb02a7efc07b19cc8f42134def8a5cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# sha1sum

## Definition — verbatim
(used, not defined)
> "# Dependencies: jq, shasum or sha1sum (auto-detected)" — hooks/simplify-ignore.sh:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/simplify-ignore.sh | 12 | used here | Listed as an auto-detected dependency utility for SHA-1 hashing |

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
External CLI hashing binary auto-detected at runtime by hook scripts to compute cache keys, rather than an engineering lifecycle concept.
