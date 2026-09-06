---
package: addy
name: webhooks
slug: webhooks
kind: technique
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/spec-driven-development-decomposition/portal-brief.md, sha256: 8c4a441acbd9c1826d2a67f8413e5bff4c57c29c525a0ae6cddf25b596e95de9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# webhooks

## Definition — verbatim
(used, not defined)
> "invitations; enterprise customers can register webhooks for the same events." — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/spec-driven-development-decomposition/portal-brief.md | 11 | references | Outbound event notification integration allowing enterprise users to subscribe to lifecycle events |

## Consumes
Event bus publication triggers, secure payload signing secrets, and registered target endpoint URLs

## Produces
Asynchronous outbound HTTP event delivery notifications dispatched to subscriber endpoints

## When applied
Specified during domain decomposition and implemented within the notifications service boundary

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An event-driven communication pattern allowing external applications to receive automated HTTP callbacks upon internal state changes; in Addy's evaluation fixture, webhooks are modeled as an asynchronous notification feature requiring modular spec definition.
