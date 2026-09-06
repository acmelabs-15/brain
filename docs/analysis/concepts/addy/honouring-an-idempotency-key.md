---
package: addy
name: Honouring an Idempotency Key
slug: honouring-an-idempotency-key
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: skills/api-and-interface-design/SKILL.md, sha256: 5dafd0c44a3aabf11cae5bcb34f6fcc24dfa5c01ba6e0d3176bce997f4d68bc8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Honouring an Idempotency Key

## Definition — verbatim
> "Accepting an `Idempotency-Key` is the contract. Honouring it is the implementation, and it is where the money is lost — a key the server accepts but handles carelessly is worse than no key at all, because the client now believes retrying is safe." — skills/api-and-interface-design/SKILL.md:158

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/api-and-interface-design/SKILL.md | 156 | defined here | Core principle 6 outlining atomic reservations, payload guarding, duplicate strategies, and retention |

## Consumes
Client-provided `Idempotency-Key` header, request body payloads, unique database constraints.

## Produces
Guaranteed at-most-once execution semantics for mutating API requests, preventing duplicate transactions across retries.

## When applied
On state-changing operations (such as payment processing, order creation, or external mutation calls) where client retries can occur.

## Sub-concepts
none

## Part of
api-and-interface-design

## Implementation status
clean

## Design notes
Honouring an Idempotency Key establishes rigorous engineering rules for idempotent execution: deriving keys from client intent rather than attempt, claiming keys atomically in one operation backed by unique constraints to eliminate TOCTOU race conditions, hashing payloads to prevent key reuse with differing payloads, and extending key retention windows beyond dead-letter queue re-delivery periods.
