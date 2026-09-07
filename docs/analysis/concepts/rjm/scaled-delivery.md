---
package: rjm
name: Scaled delivery
slug: scaled-delivery
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/when-to-use.md, sha256: b1010165adfde7358c21c0b295d842c982690d7c5a74e28d1e830df2346ba6b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Scaled delivery

## Definition — verbatim
> "Scaled delivery (new feature, multi-file, multi-domain)" — docs/when-to-use.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/when-to-use.md | 27 | defined here | Task shape covering new features spanning multiple files and domains, requiring the full lifecycle chain. |

## Consumes
Major feature requests, multi-file changes, and cross-cutting system enhancements.

## Produces
Execution of all six lifecycle phases (/spec, /plan, /build, /test, /review, /ship).

## When applied
Applied when building new features that touch multiple files, introduce new surfaces, or carry cross-cutting concerns.

## Sub-concepts
none

## Part of
fitness-table

## Implementation status
clean

## Design notes
The baseline task shape for substantial new feature development in rjm, requiring execution of the complete six-phase lifecycle chain without omissions.
