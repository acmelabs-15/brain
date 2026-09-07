---
package: rjm
name: Action SHA Pinning
slug: action-sha-pinning
kind: gate
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

# Action SHA Pinning

## Definition — verbatim
> "#### Action SHA Pinning (BLOCKING)" — .agents/steering/security-practices.md:28

## Also called — verbatim
> "All third-party GitHub Actions MUST be pinned to commit SHA, not version tags." — .agents/steering/security-practices.md:30

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/steering/security-practices.md | 28 | defined here | Section heading and blocking security rule requiring third-party GitHub Actions to pin full commit SHAs. |

## Consumes
github-actions-workflows

## Produces
immutable-action-references

## When applied
> "All third-party GitHub Actions MUST be pinned to commit SHA, not version tags." — .agents/steering/security-practices.md:30

## Sub-concepts
none

## Part of
security-practices

## Implementation status
defects: doc-drift, missing-path

## Design notes
A blocking security policy enforced by pre-commit hooks and CI linters requiring all third-party GitHub Actions in workflow definitions to be pinned to immutable commit SHAs rather than mutable version tags. This practice prevents supply-chain attacks stemming from tag hijacking or upstream repository compromise.
