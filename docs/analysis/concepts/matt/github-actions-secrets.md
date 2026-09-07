---
package: matt
name: GitHub Actions secrets
slug: github-actions-secrets
kind: artifact
package_phase: matt:Upkeep
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GitHub Actions secrets

## Definition — verbatim
(used, not defined)

> "writes it into <code class=\"ah-code-inline\">.env</code> files and GitHub Actions secrets." — external/wizard.md:25

## Also called — verbatim
`GitHub secret` — external/wizard.md:38

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wizard.md | 25 | used here | Designates repository-level encrypted CI secrets as a primary destination for sensitive values captured by wizards. |

## Consumes
Sensitive credentials required for automated build, test, and deployment workflows in CI.

## Produces
Encrypted repository or organization secrets accessible to GitHub Actions pipelines.

## When applied
When scoping reveals that CI workflows depend on credentials that must remain confidential.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
GitHub Actions secrets represent remote, encrypted credentials stored on GitHub for automated pipeline execution. Wizards configure them via `gh secret set`, cleanly separating sensitive CI secrets from local development `.env` configurations.
