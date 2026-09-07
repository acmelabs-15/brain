---
package: rjm
name: Boundary translation
slug: boundary-translation
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/silent-failure-hunter.md, sha256: fb277fb23fbb46edf07ff9f0b1de0108a3e159129be867919042453fc98c53e4}
  - {path: templates/agents/silent-failure-hunter.shared.md, sha256: 7edfe3cecb075fed987074b8a012b420750ea9ac1053089aa94d6f1dfb85598e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Boundary translation

## Definition — verbatim
> "Converting an internal exception into a domain error, a status code, or a sanitized message at a service boundary is valid translation." — .claude/agents/silent-failure-hunter.md:151

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/silent-failure-hunter.md | 151 | defined here | Exemption rule permitting exception mapping at boundaries provided diagnostics are preserved. |
| templates/agents/silent-failure-hunter.shared.md | 161 | defined here | Shared template exemption rule for service boundary error translation. |

## Consumes
Internal exceptions, technical stack traces, domain error definitions, and boundary mapping schemas.

## Produces
Sanitized user-facing errors or external status codes while preserving raw internal error telemetry in diagnostic traces.

## When applied
Applied when reviewing API gateways, controller endpoints, or module boundaries that translate raw errors into client-facing types.

## Sub-concepts
none

## Part of
reducing-false-positives

## Implementation status
defects: other

## Design notes
Boundary translation is the sanctioned practice of converting raw internal exceptions into domain errors or status codes at system boundaries, requiring that underlying errors and stack traces be captured in diagnostic logs before transformation.
