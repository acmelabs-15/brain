---
package: rjm
name: Secret Scanning
slug: secret-scanning
kind: technique
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

# Secret Scanning

## Definition — verbatim
(used, not defined)

> "### Secret Scanning" — .agents/steering/security-practices.md:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/steering/security-practices.md | 101 | defined here | Section heading introducing secret scanning guidelines, detection patterns, and pre-commit hook carrier enforcement. |

## Consumes
staged-git-diffs

## Produces
secret-scan-verdict

## When applied
> "Use regex patterns to detect hardcoded secrets:" — .agents/steering/security-practices.md:105

## Sub-concepts
pre-commit-detection-patterns

## Part of
security-practices

## Implementation status
defects: doc-drift, missing-path

## Design notes
A defensive security scanning practice designed to prevent accidental leakage of sensitive tokens, credentials, and cryptographic keys into git history. In rjm, it operates via staged Git checks orchestrated by lefthook and Python verification policies.
