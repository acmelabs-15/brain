---
package: rjm
name: Idempotency
slug: idempotency
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/API.template.md, sha256: 3492d04b69ed7d24618b208ea66caf4b3009d49c3df7a87bd16bcf81d4e3bdc3}
  - {path: .claude/skills/software-engineering-library/references/data-intensive-applications.md, sha256: 849c17929d9fcbfb67cd80bfaf45d998ed1def423b7783192cf7e3dbe997cb51}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Idempotency

## Definition — verbatim
> "Every write handler should be safe to call twice. Build for replay, not for hope that retries will not happen." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:47

## Also called — verbatim
> "Send `Idempotency-Key` header to make retries safe." — .claude/skills/codebase-documenter/assets/templates/API.template.md:71

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/API.template.md | 71 | defined here | Endpoint documentation specification requiring Idempotency-Key headers on POST operations. |
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 45 | defined here | Software engineering principle mandating replay-safe write handlers across distributed systems. |

## Consumes
In-flight write requests, network retries, client-provided idempotency keys, and transaction logs.

## Produces
Deterministic write execution guaranteeing identical state and response on repeated invocations.

## When applied
Mandatory for all non-safe HTTP mutations (POST/PATCH), message consumer handlers, and external payment or side-effect integrations.

## Sub-concepts
idempotency-key, retry-safety

## Part of
api-reference, data-intensive-applications

## Implementation status
clean (API.template.md), defects: doc-drift (data-intensive-applications.md)

## Design notes
Idempotency guarantees that executing a write operation multiple times yields the exact same side effects and response as executing it once. In rjm, it is enforced at both the API boundary (via Idempotency-Key headers on POST requests) and backend handlers (designing write pipelines for safe replay), ensuring distributed systems recover gracefully from network timeouts and automated client retries without duplicating state mutations.
