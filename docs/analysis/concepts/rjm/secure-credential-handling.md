---
package: rjm
name: Secure Credential Handling
slug: secure-credential-handling
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/steering/security-practices.md, sha256: de8c639a9cd6f34b9f787dc4c2b581ca5a1d314e8956cf87d6c0412e430a0d84}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Secure Credential Handling

## Definition — verbatim
> "### Secure Credential Handling" — .agents/steering/security-practices.md:198

## Also called — verbatim
> "Never store credentials in plain text:" — .agents/steering/security-practices.md:200

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/steering/security-practices.md | 198 | defined here | Section heading and code pattern mandating retrieval of tokens from environment variables rather than plaintext storage. |

## Consumes
environment-variables

## Produces
secure-token-access

## When applied
> "Never store credentials in plain text:" — .agents/steering/security-practices.md:200

## Sub-concepts
none

## Part of
security-practices

## Implementation status
defects: doc-drift, missing-path

## Design notes
A secure coding pattern instructing agents and engineers never to embed credentials, personal access tokens, or private keys directly in script bodies or plaintext configuration files, requiring secrets to be provided dynamically via secure environment variables.
