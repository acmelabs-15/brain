---
package: addy
name: Dependency Security
slug: dependency-security
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/security-checklist.md, sha256: a8bbff3b1ac9122985e98fbe9a8fa09cd8ad53b190bac7f8f0f63687900f7d7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Dependency Security

## Definition — verbatim
(used, not defined)
> "First locate the **installation boundary**." — references/security-checklist.md:104

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 15 | defines | Establishes package-manager audit workflows, frozen lockfile installations, and boundary validation. |

## Consumes
Project package manifests (`package.json`), committed lockfiles, and CI configuration.

## Produces
Validated installation boundaries, frozen CI install commands, and triaged advisory audit reports.

## When applied
When installing or updating dependencies, configuring CI pipelines, or triaging vulnerability advisories.

## Sub-concepts
installation-boundary, install-script-gate, supply-chain-hygiene

## Part of
security-checklist, security-and-hardening

## Implementation status
clean

## Design notes
Dependency security safeguards applications against vulnerabilities and supply-chain attacks introduced through external packages. Addy mandates locating the exact installation boundary, verifying consistent package manager tooling, enforcing frozen and immutable lockfile installs in CI, and restricting package lifecycle script execution.
