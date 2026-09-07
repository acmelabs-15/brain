---
package: rjm
name: Status codes
slug: status-codes
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/API.template.md, sha256: 3492d04b69ed7d24618b208ea66caf4b3009d49c3df7a87bd16bcf81d4e3bdc3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Status codes

## Definition — verbatim
> "Standard HTTP semantics. `2xx` success, `4xx` client error, `5xx` server error." — .claude/skills/codebase-documenter/assets/templates/API.template.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/API.template.md | 22 | defined here | Specifies conventional HTTP status code categories for API operation results. |

## Consumes
HTTP handler outcome statuses and operational errors.

## Produces
Semantically accurate HTTP response status codes.

## When applied
Applied across all HTTP response handling and endpoint documentation.

## Sub-concepts
http-status

## Part of
conventions, api-reference

## Implementation status
clean

## Design notes
Status codes binds API response status handling to standard RFC HTTP semantics (2xx success, 4xx client error, 5xx server error). This convention prevents anti-patterns such as returning HTTP 200 with embedded error payloads and allows API clients, proxies, and load balancers to correctly infer outcome categories without inspecting payload internals.
