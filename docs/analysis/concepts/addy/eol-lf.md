---
package: addy
name: eol=lf
slug: eol-lf
kind: name-only
package_phase: none
implementation_in_scope: true
memo_inputs:
  - {path: .gitattributes, sha256: d60f352d0db1404c70afb4bb8b2ca3fd1c610572aa40720e8a0b7baa7885418c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# eol=lf

## Definition — verbatim
(used, not defined)
> "* text=auto eol=lf" — .gitattributes:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gitattributes | 1 | defines | Git attribute rule setting Unix-style line feed (LF) endings for repository files. |

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
This name is a Git configuration attribute enforcing Unix line feed endings across checkouts rather than a lifecycle concept.
