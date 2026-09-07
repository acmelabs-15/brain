---
package: rjm
name: Performance Budgets
slug: performance-budgets
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

# Performance Budgets

## Definition — verbatim
> "### Performance Budgets" — .agents/architecture/ADR-041-codeql-integration.md:321

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-041-codeql-integration.md | 321 | defined here | Section heading establishing latency ceilings across scanning tiers. |

## Consumes
Developer workflow tolerance thresholds and CI/CD timeout configurations.

## Produces
Enforced timeout thresholds (e.g., 300s for CI, 60s for local on-demand) guarding against hung or excessively slow analysis processes.

## When applied
Applied when provisioning workflows, configuring subprocess timeouts, and setting test execution limits.

## Sub-concepts
none

## Part of
multi-tier-strategy

## Implementation status
defects: doc-drift, missing-path

## Design notes
An architectural pattern allocating explicit time budgets to each tool execution context, ensuring automated security analysis does not degrade interactive developer workflows or consume unbounded CI runner minutes.
