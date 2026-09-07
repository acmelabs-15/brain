---
package: rjm
name: reworkWarning
slug: reworkwarning
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-060-rework-warning-session-log-persistence.md, sha256: ac709bb1d9ab072581f6f1fcaa31e89f028312a0f28c3123ce47edfb84604826}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# reworkWarning

## Definition — verbatim
(used, not defined)

> "1. Add an optional `reworkWarning` object under" — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-060-rework-warning-session-log-persistence.md | 55 | defined here | Specified as an optional JSON object under protocolCompliance.sessionEnd holding warning evidence |

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
defects: doc-drift, internal-contradiction, missing-path

## Design notes
reworkWarning is an optional JSON property name in session log schemas used to store rework warning evidence strings, classified as name-only per D-023.
