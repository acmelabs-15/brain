---
package: rjm
name: Health Check Integrity
slug: health-check-integrity
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Health Check Integrity

## Definition — verbatim
> "## Health Check Integrity" — .claude/skills/software-engineering-library/references/release-it.md:120

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/release-it.md | 120 | defined here | Core pattern section establishing rules for truthful, dependency-exercising health and status probes. |

## Consumes
Service dependency health statuses, internal thread states, and readiness criteria.

## Produces
Accurate health signal responses reflecting whether the service can genuinely process work.

## When applied
Applied when implementing, configuring, or auditing health endpoints and status probes.

## Sub-concepts
- liveness
- readiness

## Part of
release-it

## Implementation status
defects: missing-path

## Design notes
An engineering principle in rjm requiring health checks to actively exercise critical dependencies rather than returning static green responses. Truthful health checks allow orchestrators and load balancers to route traffic away from failing components and trigger timely restarts.
