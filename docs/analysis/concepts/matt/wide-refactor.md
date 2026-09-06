---
package: matt
name: wide refactor
slug: wide-refactor
kind: pattern
package_phase: matt:to-tickets
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# wide refactor

## Definition — verbatim
> "A **wide refactor** is a single mechanical change (rename a column, retype a shared symbol) whose **blast radius** fans across the whole codebase, so one edit breaks thousands of call sites and no vertical slice can land green." — docs/engineering/to-tickets.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 179 | defined here | Defines the wide-refactor exception to vertical slicing in changelog |
| docs/engineering/to-tickets.md | 46 | defined here | Formal documentation of wide refactors and why vertical slices fail on them |
| external/to-tickets.md | 42 | defined here | Web documentation explaining the mechanics of handling wide refactors |

## Consumes
A codebase-wide mechanical refactoring proposal affecting ubiquitous interfaces or types

## Produces
An expand–contract ticket sequence dividing migration into manageable batches

## When applied
When a proposed refactoring breaks call sites across multiple layers simultaneously

## Sub-concepts
blast-radius, expand-contract

## Part of
to-tickets

## Implementation status
clean

## Design notes
A wide refactor represents a recognized exception to tracer-bullet vertical slicing, where a single pervasive change cannot be isolated into an end-to-end slice and must instead be sequenced via expand-contract to keep CI green.
