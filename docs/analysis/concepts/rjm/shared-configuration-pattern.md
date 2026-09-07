---
package: rjm
name: Shared Configuration Pattern
slug: shared-configuration-pattern
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/codeql-architecture.md, sha256: ff63b856aa506fee02c6d7651e4f059622e7a415a714b9e05b49d4fd081c8b93}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Shared Configuration Pattern

## Definition — verbatim
> "### Shared Configuration Pattern" — docs/codeql-architecture.md:439

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codeql-architecture.md | 439 | defined here | Architectural pattern maintaining unified CodeQL configs under `.github/codeql/` for both CI and local scanning. |

## Consumes
CodeQL configuration files (`.github/codeql/codeql-config.yml` and `codeql-config-quick.yml`).

## Produces
Shared, consistent static analysis rule sets across CI/CD workflows and local CLI execution scripts.

## When applied
When configuring, updating, or validating CodeQL scanning parameters across local environments and CI pipelines.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug, doc-drift, missing-path

## Design notes
The Shared Configuration Pattern centralizes CodeQL scanning rules and path filters in `.github/codeql/` rather than duplicating them across GitHub Actions workflows and local execution scripts. By referencing a single source of truth, rjm ensures that local on-demand security scans evaluate the exact same query sets and exclusions as the blocking CI gate, eliminating configuration drift.
