---
package: rjm
name: core.autocrlf
slug: core-autocrlf
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# core.autocrlf

## Definition — verbatim
(used, not defined)

> "git config --global core.autocrlf true" — CONTRIBUTING.md:84

## Also called — verbatim
> "git config --global core.autocrlf input" — CONTRIBUTING.md:96

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 84 | used here | Specified as the recommended global git configuration setting on Windows systems. |

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
`core.autocrlf` is a Git client configuration parameter governing carriage return line feed translation across operating systems, classified as `kind: name-only` per D-023.
