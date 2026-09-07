---
package: rjm
name: memory-validation
slug: memory-validation
kind: gate
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/metrics/workflow-coalescing.md, sha256: 652beeb96b38bcfc8b9103ece1e6a599327303a9ee9778a60dda87ace3b3048d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# memory-validation

## Definition — verbatim
(used, not defined)
> "- `memory-validation`" — .agents/metrics/workflow-coalescing.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/workflow-coalescing.md | 47 | used here | Monitored AI workflow tracked for concurrency coalescing during PR validation. |

## Consumes
PR changes touching memory episode records and session knowledge stores.

## Produces
Gate validation verdicts verifying consistency and schema validity of memory modifications.

## When applied
Triggered on pull requests modifying memory files or episode archives.

## Sub-concepts
none

## Part of
none

## Implementation status
out-of-scope

## Design notes
memory-validation represents the automated gate that validates agent memory graph and episode updates on pull requests; its underlying memory implementation is excluded from lifecycle scope per METHOD §1.2.
