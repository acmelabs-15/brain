---
package: addy
name: installation boundary
slug: installation-boundary
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

# installation boundary

## Definition — verbatim
> "If the package is matched by a parent `workspaces` declaration, use that workspace root; otherwise use the nearest project root that owns both its manifest and dependency graph." — references/security-checklist.md:104

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 104 | defines | Defined as the workspace root or nearest project root owning both manifest and dependency graph. |

## Consumes
Monorepo directory layout, workspace configurations, package manifests, and lockfiles.

## Produces
Identified authoritative root directory governing dependency resolution and lifecycle script execution.

## When applied
Identified prior to executing any package manager installation, audit, or script-approval commands.

## Sub-concepts
none

## Part of
dependency-security, supply-chain-hygiene

## Implementation status
clean

## Design notes
The installation boundary is the authoritative root directory in a project hierarchy that governs package installation and dependency resolution. In monorepos with workspaces, applying dependency commands in subdirectories can resolve differing lockfiles or trigger unreviewed lifecycle scripts; locating the true installation boundary ensures consistent lockfile enforcement and centralized audit policies.
