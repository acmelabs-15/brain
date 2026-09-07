---
package: rjm
name: Index entry naming validation
slug: index-entry-naming-validation
kind: gate
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

# Index entry naming validation

## Definition — verbatim
> "### Index Entry Naming Validation" — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:258

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-017-tiered-memory-index-architecture.md | 258 | defined here | Specified as a P0 validation check enforcing {domain}-{description} naming and banning deprecated skill- prefixes. |

## Consumes
File references within index tables and memory filenames in .serena/memories/.

## Produces
Validation pass/fail verdicts blocking CI when non-standard or legacy prefixes are referenced.

## When applied
Enforced during CI execution via Validate-MemoryIndex.ps1 before merging memory updates.

## Sub-concepts
none

## Part of
tiered-index-architecture

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Index entry naming validation is an automated quality gate in rjm ensuring that all indexed skills follow the standardized {domain}-{description} naming convention and preventing regressions to deprecated naming schemes.
