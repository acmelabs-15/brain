---
package: rjm
name: THIRD-PARTY-NOTICES.TXT
slug: third-party-notices-txt
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

# THIRD-PARTY-NOTICES.TXT

## Definition — verbatim
(used, not defined)

> "license attribution in `THIRD-PARTY-NOTICES.TXT`." — CONTRIBUTING.md:1089

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 1089 | used here | Target committed license notice file required for third-party components redistributed in shipped plugin paths. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
third-party-license-attribution

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
THIRD-PARTY-NOTICES.TXT is a committed attribution text file name formatted in dotnet/runtime style documenting third-party licenses rather than an SDLC lifecycle concept.
