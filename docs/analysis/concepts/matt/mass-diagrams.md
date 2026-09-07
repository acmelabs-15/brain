---
package: matt
name: mass diagrams
slug: mass-diagrams
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/improve-codebase-architecture/HTML-REPORT.md, sha256: 581e8bb5a521e46bbda8ca7e19b15948bed882187108092ebb90c62513b77528}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# mass diagrams

## Definition — verbatim
> "hand-built divs and inline SVG handle the more editorial visuals (mass diagrams, cross-sections)." — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:3

> "Two rectangles per module: one for interface surface area, one for implementation." — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:88

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/improve-codebase-architecture/HTML-REPORT.md | 3 | defined here | Introduced as an editorial diagram style using hand-built markup to visualize module depth and surface area. |

## Consumes
Relative surface area of module interfaces and implementation depths.

## Produces
Proportional rectangle diagrams contrasting interface area against implementation depth.

## When applied
When illustrating modules whose interfaces are nearly as large as their implementations (shallow modules).

## Sub-concepts
none

## Part of
html-report

## Implementation status
clean

## Design notes
An editorial diagramming pattern that contrasts interface surface area against implementation size using proportional rectangles to clearly visualize module depth and expose shallow wrappers.
