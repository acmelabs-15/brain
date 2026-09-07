---
package: rjm
name: LF line endings
slug: lf-line-endings
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

# LF line endings

## Definition — verbatim
(used, not defined)

> "This repository enforces LF line endings for all files via `.gitattributes` to prevent cross-platform issues." — CONTRIBUTING.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 79 | used here | Stated as the mandatory repository line ending standard enforced by git attributes. |

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
`LF line endings` is a git repository file formatting convention enforced to prevent cross-platform text corruption, classified as `kind: name-only` per D-023.
