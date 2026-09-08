---
package: rjm
name: Legacy Modernization Patterns
slug: legacy-modernization-patterns
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Legacy Modernization Patterns

## Definition — verbatim
(used, not defined)

> "## Legacy Modernization Patterns" — templates/agents/architect.shared.md:609

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/architect.shared.md | 609 | defines | Section heading grouping three patterns for modernizing legacy codebases: Strangler Fig, Expand/Contract, and Sacrificial Architecture. |

## Consumes
Legacy system architectures, schema modification requirements, and system migration goals.

## Produces
Migration blueprints and ADRs that avoid atomic breaking changes and enable incremental modernization.

## When applied
Applied during architectural planning for legacy system replacement, schema evolution, or modular decomposition.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Framework of transition patterns ensuring that major architectural updates and schema migrations occur incrementally without downtime or risky big-bang deployments.
