---
package: rjm
name: Validate-SessionJson.ps1
slug: validate-sessionjson-ps1
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-011-session-state-mcp.md, sha256: 1f587e02f76255cdbfcfe6270ec3765a1e843830f3408b5ae5847068f08e02f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Validate-SessionJson.ps1

## Definition — verbatim
(used, not defined)

> "Validate-SessionJson.ps1` catches violations but only at session end" — .agents/architecture/ADR-011-session-state-mcp.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-011-session-state-mcp.md | 28 | used here | Cited as a manual post-hoc validation script that catches session violations only at session conclusion. |

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
defects: missing-path

## Design notes
A legacy PowerShell script file name referenced in ADR-011 for post-hoc session JSON validation rather than an operational lifecycle concept.
