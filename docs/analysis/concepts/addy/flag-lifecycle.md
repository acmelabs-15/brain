---
package: addy
name: Flag lifecycle
slug: flag-lifecycle
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/ci-cd-and-automation/SKILL.md, sha256: a6ed8ed56456b01ff8314c44eefc69897d9905ae4e06bb2b7036286efb79b5f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Flag lifecycle

## Definition — verbatim
> "**Flag lifecycle:** Create → Enable for testing → Canary → Full rollout → Remove the flag and dead code. Flags that live forever become technical debt — set a cleanup date when you create them." — skills/ci-cd-and-automation/SKILL.md:227

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/ci-cd-and-automation/SKILL.md | 227 | defined here | Five-phase feature flag lifecycle governing creation, staged rollout, and removal |

## Consumes
Feature flag configuration, targeting rules, and scheduled expiration or cleanup dates.

## Produces
Controlled rollout progression and eventual removal of flag conditional branches and dead code.

## When applied
Whenever introducing new features or risky architectural changes behind feature flags.

## Sub-concepts
none

## Part of
ci-cd-and-automation

## Implementation status
clean

## Design notes
In addy, the Flag lifecycle prevents feature flags from lingering indefinitely as technical debt. It mandates a five-stage progression (Create → Enable for testing → Canary → Full rollout → Remove flag and dead code) and requires setting an explicit cleanup date upon creation.
