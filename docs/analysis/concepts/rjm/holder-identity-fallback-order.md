---
package: rjm
name: Holder identity fallback order
slug: holder-identity-fallback-order
kind: pattern
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

# Holder identity fallback order

## Definition — verbatim
> "The implementation must resolve one stable holder id before acquire, renew, release, override, or push verification. It must use this order:" — .agents/architecture/ADR-090-pr-branch-holder-lease.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 45 | defined here | Defined as the resolution sequence for obtaining stable holder IDs before performing lease actions. |

## Consumes
CLI parameters, environment variables, and CI execution context.

## Produces
A single deterministic holder ID string, or exit code 2 if unresolved.

## When applied
Invoked during initialization by any tooling implementing the PR branch lease contract.

## Sub-concepts
none

## Part of
pr-branch-holder-lease

## Implementation status
not-implemented (ADR-090 proposed; citing inventory card records defects: none)

## Design notes
The deterministic precedence order used to resolve holder identity: (1) explicit `--lease-holder` CLI arguments, (2) harness session environment variables (`AI_AGENT_SESSION_ID`), and (3) GitHub Actions workflow identities (`GITHUB_RUN_ID` + attempt + job). If no stable ID can be resolved, randomly generated IDs are strictly forbidden to prevent creating orphaned leases.
