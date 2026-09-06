---
package: addy
name: secure cookies
slug: secure-cookies
kind: technique
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

# secure cookies

## Definition — verbatim
(used, not defined)
> "for proxy settings, secure cookies, session stores, and secret configuration." — evals/fixtures/source-driven-development/framework-task.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/source-driven-development/framework-task.md | 5 | references | Hardened cookie configuration mandated for production session security |

## Consumes
HTTPS transport layer and web application session configuration options

## Produces
Cryptographically signed, hardened HTTP cookies with Secure and HttpOnly flags preventing exposure

## When applied
Applied when establishing session cookie transmission rules in production web environments

## Sub-concepts
none

## Part of
`server-side-sessions`

## Implementation status
clean

## Design notes
A security technique ensuring session identifiers are transmitted exclusively over encrypted connections and shielded from client-side script access; in Addy's methodology, this is a mandatory production configuration requirement.
