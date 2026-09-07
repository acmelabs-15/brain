---
package: rjm
name: readiness
slug: readiness
kind: pattern
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

# readiness

## Definition — verbatim
> "readiness is \"the process can serve requests right now\"" — .claude/skills/software-engineering-library/references/release-it.md:132

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/release-it.md | 132 | defined here | Defined as the condition where the process can serve requests right now, requiring removal from routing rotation on failure. |

## Consumes
Dependency connectivity, cache initialization status, and resource pool availability.

## Produces
Decisions to include or remove a component from active request routing and task allocation.

## When applied
Queried by load balancers and orchestrators prior to routing new requests or tasks to a worker.

## Sub-concepts
none

## Part of
health-check-integrity

## Implementation status
defects: missing-path

## Design notes
Readiness reflects whether an agent process or service is currently capable of handling work. If a required database or downstream dependency fails, the component fails its readiness check and is removed from rotation without terminating the process.
