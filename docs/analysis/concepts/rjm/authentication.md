---
package: rjm
name: Authentication
slug: authentication
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/API.template.md, sha256: 3492d04b69ed7d24618b208ea66caf4b3009d49c3df7a87bd16bcf81d4e3bdc3}
  - {path: .claude/skills/programming-advisor/references/integration-patterns.md, sha256: d72997e89254016a87b70f528048433e30c877de4c478453118bb91f5743a667}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Authentication

## Definition — verbatim
(used, not defined)

> "## Authentication" — .claude/skills/codebase-documenter/assets/templates/API.template.md:9

## Also called — verbatim
> "### Authentication (NextAuth.js)" — .claude/skills/programming-advisor/references/integration-patterns.md:173

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/API.template.md | 9 | defined here | Section template documenting supported API authentication methods, header formats, and credential rotation. |
| .claude/skills/programming-advisor/references/integration-patterns.md | 173 | defined here | Reference pattern showcasing standard NextAuth.js authentication configuration with OAuth providers. |

## Consumes
Identity providers, OAuth credentials, API key management schemes, or session stores.

## Produces
Documented authentication schemes for API clients and concrete identity integration handlers in application code.

## When applied
Applied when designing or documenting secure access mechanisms for API endpoints and web applications.

## Sub-concepts
api-key, bearer-token, oauth

## Part of
api-reference, integration-patterns

## Implementation status
clean

## Design notes
Authentication defines the architectural pattern and documentation requirements for identity verification across services and user sessions. In rjm, it encompasses both runtime integration recipes (such as NextAuth route handlers with OAuth providers) and developer documentation contracts (mandating Bearer token headers and explicit credential rotation procedures while strictly prohibiting raw secrets in docs).
