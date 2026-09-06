---
package: addy
name: filter_file
slug: filter-file
kind: name-only
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: hooks/simplify-ignore-test.sh, sha256: 8f93c89e46c5a7478c01fa8531fa45e594fc5105411eaa7bd7c9f3ca8343926e}
  - {path: hooks/simplify-ignore.sh, sha256: 1256c677adbce33f3c361793d7dae2405fb02a7efc07b19cc8f42134def8a5cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# filter_file

## Definition — verbatim
(used, not defined)
> "filter_file() {" — hooks/simplify-ignore.sh:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/simplify-ignore-test.sh | 4 | used here | Shell function extracted by test script for unit verification |
| hooks/simplify-ignore.sh | 59 | defined here | Function definition implementing in-place line parsing and placeholder replacement |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
simplify-ignore-hook

## Implementation status
clean

## Design notes
Internal bash function in `hooks/simplify-ignore.sh` that processes source lines and substitutes ignored blocks with placeholders, rather than an agent lifecycle concept.
