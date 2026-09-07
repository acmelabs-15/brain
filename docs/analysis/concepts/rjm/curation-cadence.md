---
package: rjm
name: Curation cadence
slug: curation-cadence
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-069-context-corpus-is-the-product.md, sha256: 935bb916a561019efbb60fd594883cc6830259c76dd981fb92788f75c9449432}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Curation cadence

## Definition — verbatim
> "What is the cadence and ownership for pruning stale artifacts, refreshing summaries, and retiring obsolete patterns?" — .agents/architecture/ADR-069-context-corpus-is-the-product.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-069-context-corpus-is-the-product.md | 72 | defined here | Named as an open operational question regarding ownership and frequency of context corpus maintenance. |

## Consumes
The context corpus, decay signals, and usage telemetry.

## Produces
Maintenance schedule and ownership model for pruning, summarizing, and archiving stale context.

## When applied
Regular repository maintenance cycles to maintain high corpus signal-to-noise ratio.

## Sub-concepts
none

## Part of
context-corpus

## Implementation status
not-implemented (ADR-069 operational question deferred to future policy)

## Design notes
A maintenance policy determining who prunes stale files and how frequently, preventing the context corpus from accumulating obsolete patterns that degrade agent accuracy.
