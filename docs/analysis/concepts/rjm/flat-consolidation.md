---
package: rjm
name: Flat Consolidation
slug: flat-consolidation
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-017-tiered-memory-index-architecture.md, sha256: 64a961c19917209b4057c9db9a9ed7ae8798a49d842c7455ba077fddfdacfe99}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Flat Consolidation

## Definition — verbatim
> "### Option 1: Flat Consolidation" — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-017-tiered-memory-index-architecture.md | 51 | used here | Evaluated as Option 1 merging all domain memories into single files, rejected for 67% token waste. |

## Consumes
Atomic skill definitions within a domain.

## Produces
Monolithic domain files combining multiple skills.

## When applied
Considered during architectural memory design to minimize list_memories call counts.

## Sub-concepts
none

## Part of
consolidation

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Flat consolidation is an alternative storage pattern that bundles all domain skills into a single file. Although it keeps file counts low, it wastes significant context window tokens whenever an agent requires only one specific skill.
