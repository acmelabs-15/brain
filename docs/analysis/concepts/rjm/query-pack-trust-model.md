---
package: rjm
name: Query Pack Trust Model
slug: query-pack-trust-model
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

# Query Pack Trust Model

## Definition — verbatim
> "### Query Pack Trust Model" — docs/codeql-architecture.md:633

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codeql-architecture.md | 633 | defined here | Security policy and review requirements governing the adoption of third-party or custom CodeQL query packs. |

## Consumes
Proposed CodeQL query pack additions or configuration changes.

## Produces
Trust evaluation verifying source authenticity, explicit suite versioning, and passing local validation.

## When applied
When adding or updating query pack dependencies in `.github/codeql/codeql-config.yml`.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug, doc-drift, missing-path

## Design notes
The Query Pack Trust Model treats static analysis query packs as executable code dependencies with security risk. Because custom or external query packs execute inside CI runners and local developer machines, rjm requires query pack changes to come from trusted sources with explicit versioning and pass local validation before merging into repository configuration.
