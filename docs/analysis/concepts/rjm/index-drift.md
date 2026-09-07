---
package: rjm
name: Index drift
slug: index-drift
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

# Index drift

## Definition — verbatim
> "| **Index drift** | Index points to renamed/deleted file | CI validation script |" — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:202

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-017-tiered-memory-index-architecture.md | 202 | defined here | Defined in the failure modes table as an index pointing to renamed or deleted memory files. |

## Consumes
Renamed, relocated, or deleted memory files and un-updated index tables.

## Produces
Broken memory file links and failed agent retrieval attempts.

## When applied
Monitored in pre-commit hooks and CI pipelines to prevent broken references.

## Sub-concepts
none

## Part of
tiered-index-architecture

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Index drift represents a failure mode where index tables point to outdated, moved, or deleted memory files. It is prevented in rjm through mandatory CI validation scripts like Validate-MemoryIndex.ps1.
