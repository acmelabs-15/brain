---
package: rjm
name: re-accretion ratchet
slug: re-accretion-ratchet
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-097-zero-tool-use-hooks.md, sha256: 44727c50e7577d6c7e139cb121d0118d94b16ace6b70725c20018d565ad98945}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# re-accretion ratchet

## Definition — verbatim
> "redesign, an ADR-071 amendment, a re-accretion ratchet test) that are code" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-097-zero-tool-use-hooks.md | 39 | defined here | Defined as an automated test gate preventing retired tool-use hooks from silently re-accumulating. |

## Consumes
Hook manifests (`hooks.json`, `dispatch_groups.json`).

## Produces
Test assertions validating zero registered tool-use hooks.

## When applied
Executed during test suite runs and CI checks before merging hook modifications.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
defects: doc-drift, missing-path

## Design notes
An automated regression test gate enforcing zero registered tool-use hooks to prevent latency and maintenance overhead from re-accreting without deliberate architectural review.
