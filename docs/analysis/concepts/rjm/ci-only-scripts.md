---
package: rjm
name: CI-only scripts
slug: ci-only-scripts
kind: pattern
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

# CI-only scripts

## Definition — verbatim
> "**CI-only scripts** (`.github/scripts/`):" — .agents/architecture/ADR-019-script-organization.md:166

> "- No direct developer invocation expected" — .agents/architecture/ADR-019-script-organization.md:168

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-019-script-organization.md | 166 | defined here | Defined in implementation notes as scripts restricted to GitHub Actions automated environments. |

## Consumes
GitHub Actions runtime environment variables, workflow token secrets, and runner file systems.

## Produces
Workflow step automation, output parameters, and automated PR reactions.

## When applied
Executed exclusively within GitHub Actions workflow jobs; not intended for manual developer execution.

## Sub-concepts
none

## Part of
intended-audience-and-execution-context

## Implementation status
clean

## Design notes
Architectural pattern isolating CI-specific automation scripts in `.github/scripts/` and explicitly documenting that they assume runner environment variables and should not be invoked directly by human developers.
