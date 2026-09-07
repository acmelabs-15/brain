---
package: rjm
name: documentation drift
slug: documentation-drift
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/002-project-constraints-consolidation.md, sha256: 74c855ae2dfa5a61bdffa01adf24b6715635da3b50add6f14531082e00a87394}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# documentation drift

## Definition — verbatim
(used, not defined)

> "Surveyed SSOT best practices and documentation drift prevention strategies" — .agents/analysis/002-project-constraints-consolidation.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/002-project-constraints-consolidation.md | 48 | used here | Surveyed as an industry risk and failure mode when evaluating Single Source of Truth architecture and constraint consolidation. |

## Consumes
Dispersed project documentation, architectural decision records, and evolving codebase implementations.

## Produces
none

## When applied
When project rules, constraints, or schemas evolve across multiple unlinked or unverified files without automated synchronization.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Documentation drift represents the progressive divergence between authoritative architectural documentation and actual codebase practice. In the rjm package, documentation drift occurs when constraints and decisions are replicated across multiple files without a single source of truth or automated verification. The package introduces canonical index referencing (such as PROJECT-CONSTRAINTS.md) and mechanical drift gates to ensure documentation remains an accurate reflection of system invariants rather than decaying into obsolete guidance.
