---
package: rjm
name: Self-inflicted denial of service
slug: self-inflicted-denial-of-service
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

# Self-inflicted denial of service

## Definition — verbatim
> "**Self-inflicted denial of service**: retry storms, thundering herds, or cron jobs that all start at minute 0." — .claude/skills/software-engineering-library/references/release-it.md:227

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/release-it.md | 227 | defined here | Defined as a stability anti-pattern where internal client behaviors trigger retry storms or synchronized traffic spikes. |

## Consumes
Synchronous retry loops, non-jittered periodic jobs, and aligned cron schedules.

## Produces
Self-generated traffic surges that overwhelm internal services or downstream infrastructure.

## When applied
Identified and corrected during architectural reviews of scheduled jobs, batch tasks, and retry strategies.

## Sub-concepts
none

## Part of
stability-anti-pattern

## Implementation status
defects: missing-path

## Design notes
A stability anti-pattern where an application inadvertently crashes itself or its dependencies through coordinated client spikes, such as un-jittered retries, cache stampedes, or cron tasks firing simultaneously. In rjm, jittered backoffs and staggered task schedules disperse load.
