---
package: rjm
name: Token Permission Minimization
slug: token-permission-minimization
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

# Token Permission Minimization

## Definition — verbatim
> "#### Token Permission Minimization" — .agents/steering/security-practices.md:60

## Also called — verbatim
> "Always use minimal required permissions in workflows:" — .agents/steering/security-practices.md:62

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/steering/security-practices.md | 60 | defined here | Section heading and pattern guidance mandating least-privilege token permissions in GitHub Actions workflow definitions. |

## Consumes
workflow-permissions

## Produces
least-privilege-permissions

## When applied
> "Avoid `permissions: write-all` unless absolutely necessary." — .agents/steering/security-practices.md:70

## Sub-concepts
none

## Part of
security-practices

## Implementation status
defects: doc-drift, missing-path

## Design notes
A security hardening pattern requiring CI workflows to declare only the minimal permissions required for their tasks (e.g. `contents: read`) and explicitly prohibiting broad write permissions like `permissions: write-all`. This minimizes the blast radius if an individual workflow or job is compromised.
