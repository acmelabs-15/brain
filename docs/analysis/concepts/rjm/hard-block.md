---
package: rjm
name: Hard block
slug: hard-block
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md, sha256: ead8316b739c0e6a848e73e870d9f16e13f02da7768edf171c5ac50ac6e90633}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Hard block

## Definition — verbatim
> "| Hard block | reads 4+ with nav_count < nav_required (2) | BLOCK (exit 2) until a nav call occurs | 4th Read, nav_count 0 -> exit 2 |" — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:207

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md | 207 | defined here | Defined as the third tier of the graduated Read gate blocking reads when navigation threshold is unmet. |

## Consumes
Tool call interception state tracking session `read_count` and `nav_count` across agent operations.

## Produces
Exit code 2 blocking tool execution with an instructive message prompting symbol navigation first.

## When applied
When an agent attempts a 4th or subsequent `Read` operation in a session while `nav_count` remains below `nav_required` (2).

## Sub-concepts
none

## Part of
graduated-read-gate, conditional-lsp-first-navigation-enforcement

## Implementation status
defects: missing-path, doc-drift

## Design notes
Hard block is the strict enforcement tier in rjm's graduated LSP-first navigation architecture. It prevents agents from performing brute-force full-file reading or grep searches when symbol navigation tools (LSP/Serena) are available. By exiting with code 2 after initial soft warnings, it forces the agent to use targeted symbol lookups, reducing context consumption and token overhead while steering navigation behavior.
