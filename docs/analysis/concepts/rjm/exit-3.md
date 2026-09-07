---
package: rjm
name: Exit 3
slug: exit-3
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/dependency-auditor.md, sha256: bba28af9880dc67233b35d0e739ae8f8702158713d097d177a2034fd605cf51e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Exit 3

## Definition — verbatim
(used, not defined)

> "in one ecosystem does not abort the others; Exit 3 (Step 5) fires only when every" — .claude/agents/dependency-auditor.md:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/dependency-auditor.md | 83 | used here | Documented as the failure exit code triggered when every detected ecosystem fails to scan. |

## Consumes
Scan failure telemetry across all detected language ecosystems.

## Produces
Process exit code 3 signaling external or infrastructure execution failure per ADR-035.

## When applied
When at least one ecosystem is present but all detected ecosystems encounter tool execution or environment errors.

## Sub-concepts
none

## Part of
dependency-auditor

## Implementation status
clean

## Design notes
An infrastructure failure exit code specified by ADR-035 and utilized by the dependency-auditor. By reserving Exit 3 strictly for total scan execution failure (as opposed to Exit 1 for security vulnerabilities or Exit 0 for clean scans), it allows CI orchestrators to distinguish between code policy violations and environmental errors.
