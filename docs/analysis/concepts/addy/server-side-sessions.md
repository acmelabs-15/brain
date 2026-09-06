---
package: addy
name: server-side sessions
slug: server-side-sessions
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/source-driven-development/framework-task.md, sha256: c9d00f67065f6e9a35d2edfa3ea7207090a214da02163b8a751f5fc6e179309b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# server-side sessions

## Definition — verbatim
(used, not defined)
> "Implement server-side sessions for an Express 5 application. The project uses" — evals/fixtures/source-driven-development/framework-task.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/source-driven-development/framework-task.md | 3 | references | Architecture pattern to be implemented following current framework documentation |

## Consumes
Web application server runtime, session store backends, and cryptographic cookie signing secrets

## Produces
Stateful server-side user session management subsystem with client session identifier cookies

## When applied
Applied during web application implementation when persisting user authentication and state across requests

## Sub-concepts
`session-stores`, `secure-cookies`

## Part of
none

## Implementation status
clean

## Design notes
An architecture pattern for managing user state on the server across stateless HTTP requests; in Addy's evaluation suite, this pattern is used to test whether agents ground implementation details in authoritative framework documentation rather than legacy assumptions.
