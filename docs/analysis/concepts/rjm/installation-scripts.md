---
package: rjm
name: Installation scripts
slug: installation-scripts
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-019-script-organization.md, sha256: 2ab5f297286e665054fbf02d023135e98f2ffd172494a4c2ff32fc3e5e224292}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Installation scripts

## Definition — verbatim
> "- **Installation scripts**: `install*.ps1`, `Sync-*.ps1` - Environment setup" — .agents/architecture/ADR-019-script-organization.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-019-script-organization.md | 49 | defined here | Defined as a developer-facing script category for environment setup and configuration synchronization. |

## Consumes
Platform environment configurations, marketplace references, and plugin dependencies.

## Produces
Configured development environments, installed plugins, and synchronized MCP settings.

## When applied
Executed during initial developer onboarding, agent environment setup, or platform configuration updates.

## Sub-concepts
none

## Part of
intended-audience-and-execution-context

## Implementation status
clean

## Design notes
Setup and installation scripts that automate tooling dependency installation, MCP configuration synchronization, and editor plugin integration across target developer environments.
