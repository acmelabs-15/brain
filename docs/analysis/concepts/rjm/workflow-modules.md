---
package: rjm
name: Workflow modules
slug: workflow-modules
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

# Workflow modules

## Definition — verbatim
> "- **Workflow modules**: `AIReviewCommon.psm1`, `PRMaintenanceModule.psm1`" — .agents/architecture/ADR-019-script-organization.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-019-script-organization.md | 65 | defined here | Defined as a GitHub Actions script category for shared reusable PowerShell workflow modules. |

## Consumes
CI environment context, workflow step outputs, and shared utility definitions.

## Produces
Reusable script functions and modular logic imported by GitHub Actions workflow steps.

## When applied
Imported and executed within GitHub Actions workflow runs to maintain thin workflow YAML files.

## Sub-concepts
none

## Part of
intended-audience-and-execution-context

## Implementation status
clean

## Design notes
Reusable shared script modules residing in `.github/scripts/` that extract complex business logic out of GitHub Actions YAML files, keeping workflow definitions declarative and testable.
