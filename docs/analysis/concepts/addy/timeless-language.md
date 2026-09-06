---
package: addy
name: timeless language
slug: timeless-language
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/documentation-and-adrs.json, sha256: 63369e93c8eccc4bd11dfd3830a28f25b5d50bf09844d3d2c7d5643f9051fd9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# timeless language

## Definition — verbatim
> "The document is written in timeless language describing current state" — evals/cases/documentation-and-adrs.json:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/documentation-and-adrs.json | 40 | used here | Expectation asserting that technical documentation is written in timeless language describing current system state. |

## Consumes
Documentation drafts, specifications, and architecture descriptions.

## Produces
Timeless technical documentation describing current system state without transient temporal phrasing.

## When applied
When writing or editing documentation, specifications, ADRs, and README files.

## Sub-concepts
none

## Part of
documentation-and-adrs

## Implementation status
clean

## Design notes
Timeless language is an authoring standard requiring documentation to describe how the system currently works rather than narrating historical transitions ("recently added", "migrated from old system", "now uses"). By avoiding temporal drift markers, documentation remains accurate and authoritative over time without needing constant rewrites to purge outdated references to the past.
