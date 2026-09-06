---
package: addy
name: "production"
slug: production
kind: reference
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/observability-and-instrumentation.md, sha256: d08fe21236731d07913a526da8a55314e6c864816cb945aaf6c14de6ffecc4eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# production

## Definition — verbatim
(used, not defined)

> "Instruments code so production behavior is visible and diagnosable." — external/observability-and-instrumentation.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/observability-and-instrumentation.md | 5 | used here | Referenced as the live operational target environment whose behavior must be visible and stable. |

## Consumes
Tested and reviewed release artifacts, deployment configurations, and infrastructure resources.

## Produces
Live customer experiences, operational metrics, real-world traffic, and system logs.

## When applied
The ultimate target environment for all shipping, hardening, and launch workflows.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Production is the operational environment serving end users. In Addy's lifecycle, the high bar for testing, hardening, staged rollouts, and launch checklists exists to protect production stability from automated regression.
