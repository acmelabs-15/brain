---
package: rjm
name: conventional commits
slug: conventional-commits
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/agent-metrics.md, sha256: 3bc141b1389eab4fda2a364cf69628c311ac95a03f7b0d64908b24a1afda6986}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# conventional commits

## Definition — verbatim
(used, not defined)

> "| Conventional commits | % of commits following conventions |" — docs/agent-metrics.md:226

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agent-metrics.md | 226 | used here | Policy tracked under Metric 8 for agent policy compliance measuring commit format adherence. |

## Consumes
Individual git commits and staged changes.

## Produces
Standardized commit messages following type and scope conventions.

## When applied
Enforced on all commits to maintain changelog automation and repository traceability.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A standardized git commit syntax requiring structured type and scope prefixes (feat, fix, docs, etc.) tracked by agent policy compliance metrics to ensure automated changelog generation and commit traceability.
