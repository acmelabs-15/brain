---
package: rjm
name: Observability and Monitoring
slug: observability-and-monitoring
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/test.md, sha256: 74281fbfcba952ff4e88e177f7059484e828b78e5084a3de8463343dd82ef69d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Observability and Monitoring

## Definition — verbatim
> "You are an SRE reviewing production readiness. If this code fails at 3am, can oncall diagnose it without reading the source?" — .claude/commands/test.md:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/test.md | 108 | defined here | Gate 6 in `/test` dispatching the architect subagent to audit logging, metrics, alerting, tracing, and health check readiness. |

## Consumes
Production code diff, telemetry configurations, logging calls, metric definitions, health check probes.

## Produces
Gate verdict (`PASS|WARN|CRITICAL_FAIL`) and structured findings assessing production diagnosticity, telemetry completeness, and operational visibility.

## When applied
Executed as Gate 6 of `/test` for CODE and MIXED pull requests.

## Sub-concepts
none

## Part of
test

## Implementation status
defects: doc-drift

## Design notes
Observability and Monitoring acts as an operational readiness gate ensuring systems can be effectively diagnosed in production without resorting to source code inspection. Dispatched to the architect subagent acting as an SRE, it verifies that structured logging carries correlation IDs, SLI metrics are tracked, alerting rules trigger on critical faults, and health probes accurately signal service degradation.
