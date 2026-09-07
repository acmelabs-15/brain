---
package: rjm
name: Two-Tier Strategy
slug: two-tier-strategy
kind: technique
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

# Two-Tier Strategy

## Definition — verbatim
> "### Two-Tier Strategy" — docs/codeql-architecture.md:13
> "The CodeQL integration has two live tiers:" — docs/codeql-architecture.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codeql-architecture.md | 13 | defined here | Architectural strategy partitioning CodeQL security scanning into an authoritative CI/CD gate (Tier 1) and local on-demand scans (Tier 2). |

## Consumes
Repository source code, language configurations, and shared query packs (`.github/codeql/codeql-config.yml`).

## Produces
Blocking CI/CD security gates and SARIF uploads in Tier 1, plus local diagnostic databases and results in Tier 2.

## When applied
Applied continuously in CI workflows on pull requests and pushes to main, and on demand by developers or agents before creating PRs.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug, doc-drift, missing-path

## Design notes
The Two-Tier Strategy structures static security analysis into an authoritative blocking CI/CD gate and a fast on-demand local scanner, retiring disruptive edit-time hooks while maintaining reliable security enforcement prior to merge.
