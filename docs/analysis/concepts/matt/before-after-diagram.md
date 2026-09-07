---
package: matt
name: Before / After diagram
slug: before-after-diagram
kind: pattern
package_phase: cross-phase
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

# Before / After diagram

## Definition — verbatim
> "- **Before / After diagram**: the centrepiece. Two columns, side by side. See patterns below." — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:49

> "No paragraphs of explanation. If the diagram needs a paragraph to be understood, redraw the diagram." — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:55

## Also called — verbatim
`before/after visualisation` — skills/engineering/improve-codebase-architecture/SKILL.md:41

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/improve-codebase-architecture/HTML-REPORT.md | 49 | defined here | Defined as the two-column side-by-side centerpiece diagram of each candidate card in the HTML report. |

## Consumes
Existing architectural structure and the proposed deepened module design.

## Produces
A side-by-side two-column visual diagram contrasting the current architecture against the proposed refactoring.

## When applied
When authoring candidate cards in the HTML architecture review report to visualize structural changes.

## Sub-concepts
mermaid-graph, cross-sections, mass-diagrams, call-graph-collapse

## Part of
candidate-card

## Implementation status
clean

## Design notes
A side-by-side two-column visual representation comparing current tangled or shallow code structure against proposed deepened module boundaries, carrying the primary analytical weight of an architecture review candidate without relying on explanatory prose.
