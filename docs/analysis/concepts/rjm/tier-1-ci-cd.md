---
package: rjm
name: Tier 1 (CI/CD)
slug: tier-1-ci-cd
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/codeql-integration.md, sha256: 4db4d2e49e3e741bdb61f24d96a927e180249217611b99e31815ce8838560ac8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tier 1 (CI/CD)

## Definition — verbatim
> "- **Tier 1 (CI/CD)**: GitHub's native CodeQL action runs as a blocking PR gate and uploads SARIF to the GitHub Security tab." — docs/codeql-integration.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codeql-integration.md | 13 | defined here | Overview list item defining the CI/CD blocking gate and SARIF upload tier. |

## Consumes
Pull requests or branch pushes containing scannable files (`python`, `actions`).

## Produces
SARIF security findings uploaded to GitHub Security tab and a blocking status check on pull requests.

## When applied
On pull requests to main, pushes to main, weekly scheduled runs, and manual dispatch.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Tier 1 (CI/CD) is the authoritative, automated security verification gate in rjm's CodeQL architecture. Implemented via `.github/workflows/codeql-analysis.yml`, it runs GitHub's native CodeQL action on all pull requests touching scannable files, blocking PR merges whenever security findings are detected and uploading SARIF reports to the GitHub Security tab.
