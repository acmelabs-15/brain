---
package: matt
name: depth-as-leverage
slug: depth-as-leverage
kind: technique
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

# depth-as-leverage

## Definition — verbatim
> "That metric rewards padding the implementation. Depth-as-leverage is used instead." — external/codebase-design.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/codebase-design.md | 35 | defined here | Replaces lines-of-code ratios with caller leverage per unit of interface learned. |

## Consumes
Module interface designs and implementation capabilities.

## Produces
High-leverage module boundaries maximizing functionality exposed to callers while minimizing required interface cognitive load.

## When applied
When designing or evaluating module interfaces in codebase-design:
> "That metric rewards padding the implementation. Depth-as-leverage is used instead." — external/codebase-design.md:35

## Sub-concepts
leverage, depth, module, interface

## Part of
codebase-design

## Implementation status
clean

## Design notes
An architectural evaluation technique in Matt Pocock's codebase-design framework. While John Ousterhout originally defined module depth as the ratio of lines of implementation code to lines of interface specification, codebase-design rejects that formula because it incentivizes bloated implementations. Instead, depth-as-leverage defines depth as the amount of capability, safety, and functionality callers or tests can exercise per unit of interface surface they must learn.
