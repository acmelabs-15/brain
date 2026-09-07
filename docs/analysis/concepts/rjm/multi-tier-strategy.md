---
package: rjm
name: "Multi-Tier Strategy"
slug: multi-tier-strategy
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-041-codeql-integration.md, sha256: 6ccbe8a2a535418e33f8f759b7511e36df157bb78c387180d7c6edb35839810a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Multi-Tier Strategy

## Definition — verbatim
> "# ADR-041: CodeQL Integration Multi-Tier Strategy" — .agents/architecture/ADR-041-codeql-integration.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-041-codeql-integration.md | 12 | defined here | Title and foundational architectural pattern partitioning CodeQL execution across tiers. |

## Consumes
Developer workflow requirements, CI/CD pipeline latency budgets, and security tool runtime characteristics.

## Produces
Tiered execution architecture separating blocking CI/CD gates from local on-demand developer scans.

## When applied
Applied when structuring tooling and checks with differing latency, frequency, and severity tolerances.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
An architectural pattern in ADR-041 that balances thorough security validation against developer ergonomics. By separating heavy semantic analysis into a blocking CI gate and on-demand local skill while retiring intrusive edit-time hooks, it prevents tool latency from degrading developer flow.
