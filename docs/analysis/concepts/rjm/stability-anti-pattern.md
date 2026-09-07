---
package: rjm
name: Stability anti-pattern
slug: stability-anti-pattern
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

# Stability anti-pattern

## Definition — verbatim
> "**Stability anti-pattern**: a shape that turns a localized failure into a systemic one." — .claude/skills/software-engineering-library/references/release-it.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/release-it.md | 15 | defined here | Defined in core vocabulary as an architectural shape that turns a localized failure into a systemic outage. |

## Consumes
Architectural integration points, service dependencies, resource allocation patterns.

## Produces
Architectural review rejections, defect identification, and resilience remediation requirements.

## When applied
Applied during code review and architectural evaluations when assessing dependency boundaries and system failure modes.

## Sub-concepts
- cascading-failure
- chain-reaction
- shared-resource-exhaustion
- unbalanced-capacities
- capacity-by-hope
- blocking-i-o-on-a-hot-path
- self-inflicted-denial-of-service
- cookie-monster-logging

## Part of
release-it

## Implementation status
defects: missing-path

## Design notes
Stability anti-patterns in rjm represent recurring structural flaws identified by Michael Nygard that allow isolated errors or latency to propagate across process or trust boundaries. Rejecting these patterns during review preserves system survivability across multi-agent workflows and remote integration points.
