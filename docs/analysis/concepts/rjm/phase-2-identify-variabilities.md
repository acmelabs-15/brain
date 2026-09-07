---
package: rjm
name: Phase 2: Identify Variabilities
slug: phase-2-identify-variabilities
kind: phase
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 2: Identify Variabilities

## Definition — verbatim
> "### Phase 2: Identify Variabilities" — .claude/skills/cva-analysis/SKILL.md:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/SKILL.md | 101 | defined here | Heading for Phase 2 of the CVA skill process discovering differences between use cases. |

## Consumes
Established commonalities from Phase 1, use case details, parameter and operational variations.

## Produces
Catalog of variation points, extension parameters, and differing implementations across use cases.

## When applied
Executed as the second phase of CVA analysis following commonality identification.

## Sub-concepts
none

## Part of
cva-analysis

## Implementation status
defects: doc-drift

## Design notes
Phase 2: Identify Variabilities is the second phase of the CVA analysis procedure in SKILL.md. It systematically identifies how each use case diverges from the baseline commonalities, uncovering the true extension points where design patterns like Strategy or Abstract Factory may be required. Without this structured phase, extension points are either missed or anticipated prematurely without concrete evidence from actual requirements.
