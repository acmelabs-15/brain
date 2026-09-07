---
package: matt
name: single-adapter seam
slug: single-adapter-seam
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# single-adapter seam

## Definition — verbatim
> "A single-adapter seam is just indirection." — external/codebase-design.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/codebase-design.md | 41 | defined here | Identifies interfaces backed by only one adapter as gratuitous indirection. |

## Consumes
Interface definitions and concrete adapter implementations.

## Produces
Simplification of module boundaries by collapsing single-adapter interfaces into direct implementations.

## When applied
When assessing whether a proposed or existing seam earns its keep:
> "A single-adapter seam is just indirection." — external/codebase-design.md:41

## Sub-concepts
hypothetical-seam, adapter, seam

## Part of
codebase-design

## Implementation status
clean

## Design notes
An architectural anti-pattern in codebase-design characterized by an interface or port that has exactly one concrete implementation. Without a second distinct adapter (such as an in-memory test stand-in or alternative transport), the seam does not facilitate substitution or isolation; it merely adds a layer of redirection that increases cognitive overhead.
