---
package: rjm
name: protocolCompliance.sessionEnd
slug: protocolcompliance-sessionend
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

# protocolCompliance.sessionEnd

## Definition — verbatim
(used, not defined)

> "`protocolCompliance.sessionEnd`." — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-060-rework-warning-session-log-persistence.md | 41 | used here | Cited as the session log JSON path under which session-end checklist and warning items are placed |

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
protocolCompliance.sessionEnd is a JSON schema property path in session log files representing end-of-session compliance records, classified as name-only per D-023.
