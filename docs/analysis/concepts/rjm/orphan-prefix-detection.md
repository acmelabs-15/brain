---
package: rjm
name: Orphan prefix detection
slug: orphan-prefix-detection
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

# Orphan prefix detection

## Definition — verbatim
> "### Orphan Prefix Detection" — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:267

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-017-tiered-memory-index-architecture.md | 267 | defined here | Defined as an automated check flagging unindexed files with deprecated skill- prefixes for renaming. |

## Consumes
Directory listings of .serena/memories/ and current index reference sets.

## Produces
Warning and error reports identifying orphaned files that lack index coverage.

## When applied
Executed in CI pipelines via Validate-MemoryIndex.ps1:Get-OrphanedFiles.

## Sub-concepts
none

## Part of
tiered-index-architecture

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Orphan prefix detection is a verification gate that surfaces unindexed files bearing deprecated prefixes, ensuring complete index coverage and preventing knowledge from becoming undiscoverable.
