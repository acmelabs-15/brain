---
package: rjm
name: ADR-021-debate-log
slug: adr-021-debate-log
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_links_baseline.txt, sha256: 4262fd40d4013e80319f8a92abc1890d4320f895e63b5889d48cf8b8d2c0bec4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ADR-021-debate-log

## Definition — verbatim
(used, not defined)

> "# both *ADR-019-debate-log* and *ADR-021-debate-log* returns no commits, and no" — scripts/validation/check_adr_links_baseline.txt:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links_baseline.txt | 36 | used here | Baseline comment noting git log search for pattern ADR-021-debate-log returned no commits. |

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
`ADR-021-debate-log` is an artifact name and search pattern identifier rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
