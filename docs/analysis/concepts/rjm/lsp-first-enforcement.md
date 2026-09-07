---
package: rjm
name: LSP-first enforcement
slug: lsp-first-enforcement
kind: pattern
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-084-vendored-hook-roi-bar.md, sha256: f803b402a803541adf9820344cedaec80e4287c68685834b8cdd175081bdf196}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# LSP-first enforcement

## Definition — verbatim
(used, not defined)

> "The LSP-first enforcement family (retired by the ADR-062 amendment filed under" — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-084-vendored-hook-roi-bar.md | 54 | used here | Retired policy requiring agents to inspect code via LSP before file reads, retired due to latency tax. |

## Consumes
Agent tool invocations on file reading and code inspection.

## Produces
Enforced preference for LSP symbol lookup over raw file reads.

## When applied
Evaluated during tool use interception before being retired under ADR-062.

## Sub-concepts
none

## Part of
hook-governance

## Implementation status
defects: doc-drift

## Design notes
LSP-first enforcement was a policy hook that intercepted tool use to mandate Language Server Protocol lookups before agents read source files directly. It was retired after empirical analysis revealed it produced significant latency overhead on the hottest tool path (Read) while yielding only one true positive against dozens of false positives over 6.5 weeks.
