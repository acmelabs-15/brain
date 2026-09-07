---
package: rjm
name: Stability pattern
slug: stability-pattern
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

# Stability pattern

## Definition — verbatim
> "a structural choice that keeps a system running when something it depends on does not." — .claude/skills/software-engineering-library/references/release-it.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/release-it.md | 14 | defined here | Defined as a structural choice that keeps a system operating when its dependencies fail. |

## Consumes
External integration points, network calls, inter-process communication, or fragile service dependencies.

## Produces
Resilient architecture incorporating timeouts, circuit breakers, bulkheads, and graceful degradation.

## When applied
Applied whenever architecting or reviewing agent orchestration boundaries, remote API integrations, or IPC hooks.

## Sub-concepts
none

## Part of
release-it

## Implementation status
defects: missing-path

## Design notes
Stability pattern is a foundational resilience concept in rjm derived from Michael Nygard's Release It!. It defines architectural mechanisms (such as bounded timeouts, circuit breakers, bulkheads, and idempotent retries) that contain localized failures and prevent them from cascading into systemic outages. In an autonomous agent environment where agents communicate across process boundaries and external APIs, stability patterns protect orchestrators from hung workers and unresponsive endpoints.
