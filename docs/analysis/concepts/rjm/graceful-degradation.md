---
package: rjm
name: Graceful degradation
slug: graceful-degradation
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
  - {path: .agents/architecture/ADR-066-hook-fail-open-reconciliation.md, sha256: b677a98214b04cc65d69de89ab5b1398d8edd089df1c9eda27c996023800ee29}
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
  - {path: .claude/skills/threat-modeling/references/security-defense-in-depth.md, sha256: a4cb2852432f3f7a68fbe3bd3a5e80fca548f87c0803c6b05665ca98e72f614d}
  - {path: docs/codeql-architecture.md, sha256: ff63b856aa506fee02c6d7651e4f059622e7a415a714b9e05b49d4fd081c8b93}
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Graceful degradation

## Definition — verbatim
> "Graceful degradation**: keep a reduced version of the feature working when the full version cannot." — .claude/skills/software-engineering-library/references/release-it.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 133 | defined here | Explains fallback from Forgetful vector search to Serena lexical search when the database is unavailable. |
| .agents/architecture/ADR-066-hook-fail-open-reconciliation.md | 34 | used here | Analyzes misuse of graceful degradation concepts to justify silent hook failures. |
| .claude/skills/skillforge/references/script-integration-framework.md | 252 | defined here | Formulates design pattern where scripts function reliably with optional dependencies. |
| .claude/skills/software-engineering-library/references/release-it.md | 19 | defined here | Defines system resilience pattern keeping reduced feature versions operating during partial outages. |
| .claude/skills/threat-modeling/references/security-defense-in-depth.md | 33 | defined here | Highlights defense-in-depth principle where higher layers catch threats when lower layers fail. |
| docs/codeql-architecture.md | 518 | defined here | Notes that local CodeQL scan failures degrade gracefully while CI checks remain authoritative. |
| templates/agents/orchestrator.shared.md | 322 | defined here | Directs orchestrators to route to fallback skills when delegated specialist agents fail. |

## Consumes
Optional tools, secondary services, network connectivity, and fallback operating modes.

## Produces
Reduced but functional operational states when primary dependencies or services fail.

## When applied
When an optional dependency (such as vector search, local CodeQL CLI, or a specialist agent) is unavailable or fails during execution.

## Sub-concepts
none

## Part of
reliability-engineering

## Implementation status
clean

## Design notes
A core resilience pattern across the system ensuring that failure of an external or optional capability—such as Forgetful MCP, local CodeQL databases, or specialist agents—does not crash the entire workflow, falling back safely to simpler, deterministic baselines like Serena markdown files or CI-based verification.
