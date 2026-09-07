---
package: rjm
name: Validate GitHub Actions SHA Pinning
slug: validate-github-actions-sha-pinning
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/workflows/validate-generated-agents.yml, sha256: bfec11e4e278d7959a9341743431c53b8f4c68ee7d453a25390ec6e58777e6ca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Validate GitHub Actions SHA Pinning

## Definition — verbatim
> "- name: Validate GitHub Actions SHA Pinning" — .github/workflows/validate-generated-agents.yml:234

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/workflows/validate-generated-agents.yml | 234 | defined here | Workflow step executing `scripts/validation/sha_pinning.py --ci` to enforce full commit SHA pinning. |

## Consumes
Workflow definitions under `.github/workflows/*.yml`.

## Produces
Validation verdict ensuring that all referenced third-party GitHub Actions are pinned to full commit SHAs.

## When applied
Executed in CI during `validate` job when `steps.should-run.outputs.skip != 'true'`.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A security validation gate verifying that continuous integration workflows pin all external action dependencies to immutable 40-character commit hashes, protecting CI runners against supply-chain compromise and mutable tag attacks.
