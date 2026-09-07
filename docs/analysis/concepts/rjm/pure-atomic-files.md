---
package: rjm
name: Pure Atomic Files
slug: pure-atomic-files
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

# Pure Atomic Files

## Definition — verbatim
> "### Option 2: Pure Atomic Files" — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-017-tiered-memory-index-architecture.md | 61 | used here | Evaluated as Option 2 keeping each skill isolated, rejected due to high discovery overhead across hundreds of files. |

## Consumes
Single skill or pattern definitions.

## Produces
Isolated single-purpose files without routing index structures.

## When applied
Considered during initial modular skill design before scale requires indexing.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Pure atomic files is an architectural option that preserves perfect granularity but lacks routing structure, causing agents to exhaust context simply scanning file listings as repository memory scales.
