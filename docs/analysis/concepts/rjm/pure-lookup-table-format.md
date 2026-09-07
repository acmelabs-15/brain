---
package: rjm
name: Pure lookup table format
slug: pure-lookup-table-format
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

# Pure lookup table format

## Definition — verbatim
> "| Pure lookup table format | `Validate-MemoryIndex.ps1:Test-IndexFormat` | ✅ Implemented | **P0** | Token efficiency |" — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:232

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-017-tiered-memory-index-architecture.md | 232 | defined here | Established as a P0 validation standard requiring domain index files to contain only markdown tables without headers or prose. |

## Consumes
Domain index markdown files (*-index.md).

## Produces
Strict two-column markdown tables (| Keywords | File |) with all titles, metadata, and prose prohibited.

## When applied
Enforced in CI via Test-IndexFormat in Validate-MemoryIndex.ps1 on all domain index files.

## Sub-concepts
none

## Part of
zero-retrieval-value-content-elimination

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Pure lookup table format is a strict formatting constraint ensuring that domain index files contain exclusively keyword-to-file markdown tables, preventing decorative markdown from inflating context consumption.
