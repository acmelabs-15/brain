---
package: rjm
name: Hardcoded Secrets
slug: hardcoded-secrets
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

# Hardcoded Secrets

## Definition — verbatim
(used, not defined)

> "### Hardcoded Secrets" — .agents/steering/security-practices.md:221

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/steering/security-practices.md | 221 | defined here | Anti-pattern heading and example illustrating prohibited inline API keys and tokens in scripts and configuration. |

## Consumes
none

## Produces
none

## When applied
> "# NEVER DO THIS" — .agents/steering/security-practices.md:224

## Sub-concepts
none

## Part of
security-practices

## Implementation status
defects: doc-drift, missing-path

## Design notes
An anti-pattern documented in steering practices prohibiting the embedding of sensitive API keys, auth tokens, or passwords directly into source code, test files, or scripts. Hardcoded secrets are caught and blocked by pre-commit regex detection patterns and CI linters.
