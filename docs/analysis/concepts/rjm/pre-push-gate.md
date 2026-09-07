---
package: rjm
name: pre-push gate
slug: pre-push-gate
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-090-pr-branch-holder-lease.md, sha256: eb606b8f382ec06a8126b2a6d1814d7323a239eb350ba99314361006d776059d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pre-push gate

## Definition — verbatim
(used, not defined)

> "The 30 minute TTL covers the PR maintenance p90 and the lower end of the known 20 to 30 minute pre-push gate." — .agents/architecture/ADR-090-pr-branch-holder-lease.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 79 | used here | Cited regarding the known 20 to 30 minute execution window determining the 30-minute lease TTL. |

## Consumes
Validation suites, test suites, and lease heartbeats.

## Produces
Pass/fail determination gating commit pushes to GitHub.

## When applied
Executed locally before pushing commits, lasting up to 20 to 30 minutes.

## Sub-concepts
none

## Part of
pr-branch-holder-lease

## Implementation status
clean (citing inventory card records defects: none)

## Design notes
The comprehensive pre-push validation gate running local tests, linting, and security audits before branch pushes. ADR-090 benchmarks its execution window at 20 to 30 minutes, directly calibrating the 30-minute lease TTL to ensure leases remain valid without prematurely expiring during legitimate test execution.
