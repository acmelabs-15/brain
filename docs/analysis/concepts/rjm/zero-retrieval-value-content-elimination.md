---
package: rjm
name: Zero Retrieval-Value Content Elimination
slug: zero-retrieval-value-content-elimination
kind: technique
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

# Zero Retrieval-Value Content Elimination

## Definition — verbatim
> "#### 2. Zero Retrieval-Value Content Elimination" — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:134

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-017-tiered-memory-index-architecture.md | 134 | defined here | Defined as an index design principle stripping non-functional titles, metadata, and prose from index tables. |

## Consumes
Raw markdown index files containing narrative or structural decoration.

## Produces
Clean, pure markdown tables containing only keywords and target filenames.

## When applied
Applied when authoring or validating domain index files in CI pipelines.

## Sub-concepts
pure-lookup-table-format

## Part of
token-efficiency

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Zero retrieval-value content elimination is an aggressive optimization rule in rjm that bans non-functional text (headers, status tags, explanatory prose) from frequently queried index files to protect context window capacity.
