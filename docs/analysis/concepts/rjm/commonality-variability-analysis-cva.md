---
package: rjm
name: Commonality/Variability Analysis (CVA)
slug: commonality-variability-analysis-cva
kind: technique
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Commonality/Variability Analysis (CVA)

## Definition — verbatim
(used, not defined)

> "Uses Commonality/Variability Analysis (CVA) for design." — docs/agent-catalog.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agent-catalog.md | 28 | used here | Documented as the primary software design methodology used by the implementer agent to design code structures. |

## Consumes
Architectural plans, technical specifications, and system domain requirements.

## Produces
Software abstractions, interface boundaries, and polymorphic structures that isolate variations behind common interfaces.

## When applied
Applied during implementation by the implementer agent when translating plans into robust object models.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Commonality/Variability Analysis (CVA) is an object-oriented design technique utilized by rjm's implementer agent to discover clean abstractions. By identifying domain behaviors that remain invariant (commonalities) versus those that differ across contexts (variabilities), CVA enables design patterns to emerge organically from concrete code qualities rather than being imposed preemptively.
