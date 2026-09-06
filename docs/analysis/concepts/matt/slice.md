---
package: matt
name: slice
slug: slice
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# slice

## Definition — verbatim
(used, not defined)
> "A single tracked unit of work inside an **Issue tracker**: a bug, task, spec, or slice produced by `to-tickets`." — CONTEXT.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTEXT.md | 12 | used here | Identifies slice as an issue unit produced by to-tickets. |

## Consumes
An approved feature specification document produced by `to-spec`.

## Produces
An individual, vertically sliced implementation ticket sized for a single agent context window.

## When applied
Created during execution of `to-tickets` when decomposing a specification into buildable steps.

## Sub-concepts
none

## Part of
issue

## Implementation status
defects: missing-path, other (CONTEXT.md defects)

## Design notes
A vertical, end-to-end implementation slice derived from a specification, deliberately sized to be completed and verified within a single agent context window.
