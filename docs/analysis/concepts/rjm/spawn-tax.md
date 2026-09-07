---
package: rjm
name: spawn tax
slug: spawn-tax
kind: reference
package_phase: none
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

# spawn tax

## Definition — verbatim
> "to 1 s Windows spawn tax measured in #3075 on every invocation." — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md | 61 | defined here | Quantifies the process startup latency incurred per tool invocation on Windows. |

## Consumes
none

## Produces
none

## When applied
> "every Read to enforce a preference, not a safety property, and paid the 250 ms" — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:60

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
The process startup latency penalty measured when executing external Python scripts for every intercepted tool call, cited as a primary architectural justification for removing runtime hooks on Windows.
