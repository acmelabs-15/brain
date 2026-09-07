---
package: rjm
name: "Query Pack Selection"
slug: query-pack-selection
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

# Query Pack Selection

## Definition — verbatim
> "### Query Pack Selection" — .agents/architecture/ADR-041-codeql-integration.md:302

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-041-codeql-integration.md | 302 | defined here | Section heading detailing selection of full security-extended vs fast query packs. |

## Consumes
Scanning scope, performance budgets, and security requirements.

## Produces
Configured CodeQL suite selections tailored for CI/CD depth or developer speed.

## When applied
Configured in codeql-config.yml and CLI parameters when initiating CodeQL scans.

## Sub-concepts
none

## Part of
multi-tier-strategy

## Implementation status
defects: doc-drift, missing-path

## Design notes
An architectural pattern for tuning CodeQL query suites based on execution context: deploying comprehensive security-extended packs in asynchronous CI pipelines and restricted, low-latency packs for interactive local use.
