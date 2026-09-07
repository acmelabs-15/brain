---
package: rjm
name: Pre-commit Detection Patterns
slug: pre-commit-detection-patterns
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

# Pre-commit Detection Patterns

## Definition — verbatim
> "#### Pre-commit Detection Patterns" — .agents/steering/security-practices.md:103

## Also called — verbatim
> "Use regex patterns to detect hardcoded secrets:" — .agents/steering/security-practices.md:105

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/steering/security-practices.md | 103 | defined here | Table defining regex matching patterns for AWS access keys, GitHub PATs, OAuth tokens, private keys, and JWTs. |

## Consumes
staged-content

## Produces
matched-secret-alerts

## When applied
> "Use regex patterns to detect hardcoded secrets:" — .agents/steering/security-practices.md:105

## Sub-concepts
none

## Part of
secret-scanning

## Implementation status
defects: doc-drift, missing-path

## Design notes
A reference specification of standard regular expression patterns used by pre-commit hooks to identify hardcoded secrets (such as AWS access keys, GitHub personal access tokens, private keys, and connection strings) before commits are finalized.
