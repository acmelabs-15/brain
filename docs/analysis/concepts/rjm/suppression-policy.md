---
package: rjm
name: Suppression Policy
slug: suppression-policy
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-054-local-security-scanning.md, sha256: 5c14b625368f85810129fb4ebdbe8cb56fa59fa8c8c912e8b21e41f6d1016b97}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Suppression Policy

## Definition — verbatim
(used, not defined)

> "Suppression Policy" — .agents/architecture/ADR-054-local-security-scanning.md:181

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-054-local-security-scanning.md | 181 | defined here | Section heading establishing policy rejecting inline Semgrep scan suppressions. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
local-security-scanning

## Implementation status
clean

## Design notes
A section heading in ADR-054 governing security scan suppression rules rather than an autonomous lifecycle stage concept per D-023.
