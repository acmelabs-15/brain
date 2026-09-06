---
package: addy
name: SSO
slug: sso
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

# SSO

## Definition — verbatim
(used, not defined)
> "- Customers sign in with email/password or company SSO and manage their" — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/spec-driven-development-decomposition/portal-brief.md | 6 | references | Authentication requirement enabling enterprise customers to sign in with corporate identity providers |

## Consumes
Identity provider protocol definitions (SAML/OIDC) and enterprise account directory configurations

## Produces
Federated enterprise user authentication flow and mapped account session tokens

## When applied
Specified during initiative definition and implemented as part of account management authentication

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Single Sign-On authentication technique allowing enterprise users to authenticate through corporate identity providers; in Addy's evaluation fixture, it is analyzed as a distinct authentication capability under account domain ownership.
