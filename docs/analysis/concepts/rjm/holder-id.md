---
package: rjm
name: holder id
slug: holder-id
kind: artifact
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

# holder id

## Definition — verbatim
> "A holder is identified by an opaque holder id plus the verified GitHub actor." — .agents/architecture/ADR-090-pr-branch-holder-lease.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 34 | defined here | Defined as the opaque identity string paired with the verified GitHub actor to distinguish individual holders. |

## Consumes
Explicit CLI arguments (`--lease-holder`), agent harness session IDs (`AI_AGENT_SESSION_ID`), or GitHub Actions run identifiers.

## Produces
A stable, non-colliding holder identifier string in lease comment schemas.

## When applied
Resolved before any lease acquisition, renewal, release, override, or push verification.

## Sub-concepts
none

## Part of
holder-lease, pr-branch-holder-lease

## Implementation status
not-implemented (ADR-090 proposed; citing inventory card records defects: none)

## Design notes
An opaque identifier string that uniquely differentiates distinct execution contexts (such as different local agent sessions or CI runner jobs) even when they authenticate using the same GitHub user credentials. This prevents same-user concurrency collisions where one agent could mistakenly renew or mutate another agent's lease.
