---
package: addy
name: Install-Script Gate
slug: install-script-gate
kind: gate
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

# Install-Script Gate

## Definition — verbatim
> "Never discover dependency lifecycle scripts by first executing an ordinary install on a client whose defaults have not been verified." — references/security-checklist.md:117

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 115 | defines | Defines four-step verification gate and package manager policy matrix for dependency lifecycle scripts. |

## Consumes
Package manager CLI configurations, package manifests, and pending dependency lifecycle scripts.

## Produces
Committed native allow/deny script policies preventing unreviewed code execution during installs.

## When applied
Enforced when bootstrapping repositories, adding new dependencies, or upgrading packages with lifecycle scripts.

## Sub-concepts
none

## Part of
dependency-security, supply-chain-hygiene

## Implementation status
clean

## Design notes
The Install-Script Gate prevents malicious code execution during dependency installation by enforcing a default-deny policy on package lifecycle scripts (`preinstall`, `install`, `postinstall`). Rather than allowing arbitrary scripts to run during `npm install`, the gate requires bootstrapping with scripts disabled, manually inspecting script source and versions, and committing granular approval policies.
