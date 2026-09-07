---
package: rjm
name: Utility scripts
slug: utility-scripts
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

# Utility scripts

## Definition — verbatim
> "- **Utility scripts**: `New-*.ps1`, `Invoke-*.ps1` - PR creation, batch operations" — .agents/architecture/ADR-019-script-organization.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-019-script-organization.md | 48 | defined here | Defined as a developer-facing script category for PR creation, batch actions, and operational helpers. |

## Consumes
CLI arguments, Git repository state, PR metadata, and target branch configurations.

## Produces
Automated execution of repetitive developer tasks such as validated PR creation or batch operations.

## When applied
Invoked on-demand by human developers or autonomous agents requiring operational assistance.

## Sub-concepts
none

## Part of
intended-audience-and-execution-context

## Implementation status
clean

## Design notes
Operational and productivity scripts providing convenient developer-facing wrappers around complex multi-step workflows like validated pull request generation and batch review invocations.
