---
package: rjm
name: CI helpers
slug: ci-helpers
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

# CI helpers

## Definition — verbatim
> "- **CI helpers**: Scripts that set GitHub outputs, parse workflow data" — .agents/architecture/ADR-019-script-organization.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-019-script-organization.md | 66 | defined here | Defined as a GitHub Actions script category for setting environment outputs and parsing workflow data. |

## Consumes
Workflow event payloads, step outputs, and environment variables.

## Produces
Formatted GitHub Actions output parameters written to `$GITHUB_OUTPUT` or `$GITHUB_ENV`.

## When applied
Executed within CI workflow step pipelines to parse data and route intermediate outputs to subsequent steps.

## Sub-concepts
none

## Part of
intended-audience-and-execution-context

## Implementation status
clean

## Design notes
Specialized CI scripts residing in `.github/scripts/` that handle platform-specific orchestration tasks such as setting GitHub Actions step outputs and transforming workflow context data.
