---
package: rjm
name: Error
slug: error
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-056-skill-output-format-standardization.md, sha256: a71c3a7799d1aa2952609e6dea6236962c0902ec6d5a6b452d303cef3e209c9d}
  - {path: .claude/skills/observability/SKILL.md, sha256: d07aa90e79ffe8c33b566756e2d80f22aabbcbb71daf128c132d2f1047d1d23f}
  - {path: .claude/skills/observability/schema.json, sha256: 1ace8993f809a4b99066c54b6612555cd89aaae0de1af9585a317fdb3b370632}
  - {path: .claude/skills/orphan-ref-validator/scripts/scan.py, sha256: 253e1f54d8dd0d57be65abf503eef2de2c9b18e4d85b24a2f1722ae4b759a99f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Error

## Definition — verbatim
(used, not defined)

> "1. **All skill scripts MUST wrap output in a standard envelope** with `Success`, `Data`, `Error`, and `Metadata` fields" — .agents/architecture/ADR-056-skill-output-format-standardization.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-056-skill-output-format-standardization.md | 48 | defined here | Top-level envelope property holding error information when execution fails. |
| .claude/skills/observability/schema.json | 23 | defined here | Allowed event type value identifying error events in observability telemetry. |
| .claude/skills/observability/SKILL.md | 52 | defined here | Observability event category documenting error occurrence attributes. |
| .claude/skills/orphan-ref-validator/scripts/scan.py | 987 | used here | ADR-056 error block referenced in exception handling logic. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
standard-envelope

## Implementation status
clean

## Design notes
A field identifier and event category representing failure payloads across skill envelopes, telemetry schemas, and validator scripts per D-023.
